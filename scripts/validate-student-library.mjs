// Structural and editorial checks for the student exercise bank and study units.
//
//   npm run validate:library            # checks, prints a coverage table
//   npm run validate:library -- --blind # also writes an answer-free copy for blind re-solving
//
// It loads the TypeScript data through Vite's SSR loader, so no extra
// dependency is needed. It cannot judge whether the English is right: a
// teacher still reviews every item (see docs/STUDENT-LIBRARY-COVERAGE.md).
import { createServer } from 'vite';
import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const blind = process.argv.includes('--blind');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });

const errors = [];
const warnings = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

try {
  const resources = await server.ssrLoadModule('/src/data/studentResources.ts');
  const library = await server.ssrLoadModule('/src/data/library/index.ts');
  const practice = await server.ssrLoadModule('/src/lib/practice.ts');
  const { studentWorksheets, levelOrder } = resources;
  const { studyUnits } = library;
  const { matchesAccepted, normaliseAnswer } = practice;

  const levels = new Set(levelOrder);
  const categories = new Set(['Grammar', 'Vocabulary', 'Reading', 'Writing', 'Speaking', 'Everyday English', 'Revision']);
  const statuses = new Set(['draft', 'reviewed']);
  const keys = new Set();
  const prompts = new Map();
  const questionCount = {};
  const answerPositions = {};
  const blindLines = [];

  const flagged = [
    /✔/, /✓/, /\bTODO\b/i, /\bTBD\b/i, /\blorem\b/i, /\[correct\]/i, /\(correct\)/i, /answer key/i,
  ];
  const usOnly = /\b(color|colors|favorite|organize|organized|organizing|center|behavior|neighbor|realize|apologize|analyze|theater|gray|traveler|traveling|canceled|honor|humor|flavor|mom|vacation|sidewalk|apartment|elevator)\b/gi;

  const scanText = (where, text) => {
    if (typeof text !== 'string') return;
    flagged.forEach((pattern) => { if (pattern.test(text)) fail(where, `contains review-only marker ${pattern}`); });
    const hits = text.match(usOnly);
    if (hits) warn(where, `possible American spelling: ${[...new Set(hits.map((h) => h.toLowerCase()))].join(', ')}`);
    if (/‘|’|“|”/.test(text) === false && /  +/.test(text)) fail(where, 'double spaces');
    if (/\s$/.test(text) || /^\s/.test(text)) fail(where, 'leading or trailing whitespace');
  };

  const scanDeep = (where, value) => {
    if (typeof value === 'string') scanText(where, value);
    else if (Array.isArray(value)) value.forEach((item, i) => scanDeep(`${where}[${i}]`, item));
    else if (value && typeof value === 'object') Object.entries(value).forEach(([k, v]) => scanDeep(`${where}.${k}`, v));
  };

  const checkQuestion = (where, question, level) => {
    questionCount[level] = (questionCount[level] ?? 0) + 1;
    if (!question.prompt?.trim()) fail(where, 'empty prompt');
    if (!question.explanation?.trim()) fail(where, 'empty explanation');
    const normalisedPrompt = normaliseAnswer(question.prompt ?? '');
    if (prompts.has(normalisedPrompt)) fail(where, `duplicate prompt (also ${prompts.get(normalisedPrompt)})`);
    prompts.set(normalisedPrompt, where);

    if (question.type === 'gap') {
      if (!Array.isArray(question.accepted) || question.accepted.length === 0) fail(where, 'gap question has no accepted answers');
      else {
        const seen = new Set();
        question.accepted.forEach((answer) => {
          const n = normaliseAnswer(answer);
          if (!n) fail(where, 'empty accepted answer');
          if (seen.has(n)) fail(where, `duplicate accepted answer "${answer}"`);
          seen.add(n);
          if (!matchesAccepted(answer, question.accepted)) fail(where, `accepted answer "${answer}" does not match itself`);
        });
      }
      if (!question.prompt.includes('___')) warn(where, 'gap prompt has no ___ blank');
      blindLines.push(`${where}\n  ${question.prompt}\n  (type the answer)${question.hint ? `  [hint: ${question.hint}]` : ''}\n`);
    } else {
      const options = question.options;
      if (!Array.isArray(options) || options.length < 3 || options.length > 4) fail(where, 'choice questions need 3 or 4 options');
      else {
        if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= options.length) fail(where, 'answer index out of range');
        const lowered = options.map((o) => normaliseAnswer(o));
        if (new Set(lowered).size !== lowered.length) fail(where, 'duplicate options');
        if (options.some((o) => !o?.trim())) fail(where, 'empty option');
        const bucket = (answerPositions[level] ??= [0, 0, 0, 0]);
        bucket[question.answer] += 1;
        const letters = 'abcd';
        blindLines.push(`${where}\n  ${question.prompt}\n${options.map((o, i) => `   ${letters[i]}) ${o}`).join('\n')}\n`);
      }
    }
  };

  // ---- worksheets (batch 1) ----
  studentWorksheets.forEach((worksheet) => {
    const where = `worksheet ${worksheet.key}`;
    if (keys.has(worksheet.key)) fail(where, 'duplicate key');
    keys.add(worksheet.key);
    if (!levels.has(worksheet.level)) fail(where, `unknown level ${worksheet.level}`);
    if (worksheet.topic && worksheet.questions.length !== 5) fail(where, 'topic sets must have exactly 5 questions');
    worksheet.questions.forEach((question, i) => {
      checkQuestion(`${where} q${i + 1}`, question, worksheet.level);
      scanDeep(`${where} q${i + 1}`, question);
    });
    scanDeep(where, [worksheet.title, worksheet.focus]);
  });

  // ---- study units ----
  const perLevelCategory = {};
  studyUnits.forEach((unit) => {
    const where = `unit ${unit.key}`;
    if (keys.has(unit.key)) fail(where, 'duplicate key');
    keys.add(unit.key);
    if (!levels.has(unit.level)) fail(where, `unknown level ${unit.level}`);
    if (!categories.has(unit.category)) fail(where, `unknown category ${unit.category}`);
    if (!statuses.has(unit.status)) fail(where, `unknown status ${unit.status}`);
    if (unit.key.length > 120 || unit.title.length > 180) fail(where, 'key or title too long for the activity table');
    if (!unit.summary?.trim() || !unit.topic?.trim()) fail(where, 'missing summary or topic');
    if (!(unit.minutes > 0 && unit.minutes <= 40)) fail(where, 'minutes out of range');
    scanDeep(where, unit);

    const types = unit.blocks.map((b) => b.type);
    const has = (t) => types.includes(t);
    switch (unit.category) {
      case 'Grammar':
      case 'Vocabulary':
        if (!(has('explain') && has('guided') && has('practice'))) fail(where, 'needs explain + guided + practice');
        break;
      case 'Reading':
        if (!(has('reading') && has('practice'))) fail(where, 'needs reading + practice');
        break;
      case 'Writing':
        if (!(has('writing'))) fail(where, 'needs a writing block');
        break;
      case 'Speaking':
        if (!has('speaking')) fail(where, 'needs a speaking block');
        break;
      case 'Everyday English':
        if (!(has('explain') && has('practice') && has('speaking'))) fail(where, 'needs explain + practice + speaking role play');
        break;
      case 'Revision':
        if (!has('practice')) fail(where, 'needs practice');
        break;
    }

    const slot = `${unit.level} / ${unit.category}`;
    perLevelCategory[slot] = (perLevelCategory[slot] ?? 0) + 1;

    unit.blocks.forEach((block, bi) => {
      const bwhere = `${where} block${bi + 1}(${block.type})`;
      if (block.type === 'practice') {
        if (block.questions.length < 4) warn(bwhere, `only ${block.questions.length} questions`);
        const gaps = block.questions.filter((q) => q.type === 'gap').length;
        if (gaps === 0 && block.questions.length >= 6 && unit.category !== 'Revision' && unit.category !== 'Reading') warn(bwhere, 'no typed-answer questions');
        block.questions.forEach((question, qi) => checkQuestion(`${bwhere} q${qi + 1}`, question, unit.level));
      }
      if (block.type === 'guided') {
        if (block.items.length < 3) warn(bwhere, 'fewer than 3 guided items');
        block.items.forEach((item, i) => {
          if (!item.prompt?.trim() || !item.answer?.trim() || !item.why?.trim()) fail(bwhere, `guided item ${i + 1} incomplete`);
        });
      }
      if (block.type === 'explain') {
        if (block.points.length < 2) warn(bwhere, 'fewer than 2 explanation points');
        block.points.forEach((p, i) => {
          if (!p.title?.trim() || !p.text?.trim()) fail(bwhere, `point ${i + 1} incomplete`);
          if (!p.examples || p.examples.length === 0) warn(bwhere, `point "${p.title}" has no examples`);
        });
        if (block.table) {
          block.table.rows.forEach((row, ri) => {
            if (row.length !== block.table.head.length) fail(bwhere, `table row ${ri + 1} has ${row.length} cells, expected ${block.table.head.length}`);
          });
        }
      }
      if (block.type === 'reading') {
        const words = block.paragraphs.join(' ').split(/\s+/).length;
        if (words < 80) warn(bwhere, `short text (${words} words)`);
      }
      if (block.type === 'writing') {
        const modelWords = block.model.join(' ').split(/\s+/).length;
        if (!block.model.length || !block.modelNotes.length || !block.assessment.length || !block.checklist.length || !block.planning.length) fail(bwhere, 'writing block incomplete');
        console.log(`  model answer length ${unit.key}: ${modelWords} words (guide: ${block.wordGuide})`);
      }
      if (block.type === 'speaking') {
        if (block.prompts.length < 2 || !block.steps.length || !block.checklist.length || !block.usefulLanguage.length) fail(bwhere, 'speaking block incomplete');
      }
    });
  });

  // ---- report ----
  const levelsInUse = levelOrder.filter((l) => studyUnits.some((u) => u.level === l) || studentWorksheets.some((w) => w.level === l));
  console.log('\nUnits per level and category');
  const categoryList = [...categories];
  console.log(['Level'.padEnd(8), ...categoryList.map((c) => c.slice(0, 9).padEnd(10)), 'Units'].join(' '));
  levelsInUse.forEach((level) => {
    const cells = categoryList.map((c) => String(perLevelCategory[`${level} / ${c}`] ?? 0).padEnd(10));
    const total = studyUnits.filter((u) => u.level === level).length;
    console.log([level.padEnd(8), ...cells, total].join(' '));
  });
  console.log(`\nStudy units: ${studyUnits.length}. Topic worksheets: ${studentWorksheets.filter((w) => w.topic).length}. Questions checked: ${Object.values(questionCount).reduce((a, b) => a + b, 0)}.`);
  console.log('Choice answer positions by level (a/b/c/d):');
  Object.entries(answerPositions).forEach(([level, positions]) => console.log(`  ${level}: ${positions.join(' / ')}`));
  Object.entries(answerPositions).forEach(([level, positions]) => {
    const total = positions.reduce((a, b) => a + b, 0);
    const max = Math.max(...positions);
    if (total >= 20 && max / total > 0.4) warn(`level ${level}`, `answer position skew: ${positions.join('/')}`);
  });

  if (blind) {
    const out = join(tmpdir(), 'tyneside-blind-questions.txt');
    writeFileSync(out, blindLines.join('\n'));
    console.log(`Wrote ${out} (answer-free).`);
  }

  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    warnings.forEach((w) => console.log(`  - ${w}`));
  }
  if (errors.length) {
    console.log(`\n${errors.length} ERROR(S):`);
    errors.forEach((e) => console.log(`  x ${e}`));
    process.exitCode = 1;
  } else {
    console.log('\nNo structural errors.');
  }
} finally {
  await server.close();
}
