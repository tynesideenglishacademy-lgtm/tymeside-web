// Writes a teacher review sheet (Markdown) with every study unit, answer keys and model answers.
//   npm run export:review            -> writes tyneside-review-sheet.md to the OS temp folder
//   npm run export:review -- out.md  -> writes to a path you choose
// The sheet contains answers. Never publish it or show it to students.
import { createServer } from 'vite';
import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const out = process.argv[2] ?? join(tmpdir(), 'tyneside-review-sheet.md');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
try {
  const { studyUnits } = await server.ssrLoadModule('/src/data/library/index.ts');
  const lines = ['# Tyneside student library: teacher review sheet', '', 'Contains answers. Teacher use only. Level labels are provisional.', ''];
  const letters = 'abcd';
  let total = 0;
  for (const unit of studyUnits) {
    lines.push(`## ${unit.level} · ${unit.category} · ${unit.title}`, '', `Key: \`${unit.key}\` · Status: ${unit.status} · ${unit.minutes} min`, '', '- [ ] Content accurate  - [ ] Answers correct  - [ ] Level right  - [ ] Approve', '');
    for (const block of unit.blocks) {
      if (block.type === 'explain') {
        lines.push(`**Explanation: ${block.heading}**`, '', ...block.points.map((p) => `- ${p.title}: ${p.text}`), '');
      } else if (block.type === 'guided') {
        lines.push(`**Guided practice: ${block.heading}**`, '', ...block.items.map((i) => `- ${i.prompt} → **${i.answer}**. ${i.why}`), '');
      } else if (block.type === 'practice') {
        lines.push(`**Practice: ${block.heading}**`, '');
        block.questions.forEach((q, i) => {
          total += 1;
          if (q.type === 'gap') lines.push(`${i + 1}. ${q.prompt}  \n   Accepted: ${q.accepted.map((a) => `\`${a}\``).join(', ')}  \n   Why: ${q.explanation}`);
          else lines.push(`${i + 1}. ${q.prompt}  \n   ${q.options.map((o, k) => `${k === q.answer ? '**' : ''}${letters[k]}) ${o}${k === q.answer ? '** ✔' : ''}`).join('  ·  ')}  \n   Why: ${q.explanation}`);
        });
        lines.push('');
      } else if (block.type === 'reading') {
        lines.push(`**Reading text: ${block.title}**`, '', ...block.paragraphs.map((p) => `> ${p}`), '');
      } else if (block.type === 'writing') {
        lines.push('**Writing task**', '', block.task, '', `*${block.wordGuide}*`, '', 'Model answer:', '', ...block.model.map((p) => `> ${p}`), '', 'Assessment guidance:', ...block.assessment.map((a) => `- ${a}`), '');
      } else if (block.type === 'speaking') {
        lines.push(`**Speaking: ${block.heading}**`, '', block.setup, '', ...block.prompts.map((p) => `- ${p.label ? `${p.label}: ` : ''}${p.text}`), '');
        if (block.model) lines.push(`Model: ${block.model.title}`, '', ...block.model.lines.map((l) => `> ${l}`), '');
      }
    }
  }
  lines.splice(3, 0, `Closed and typed questions in units: ${total}.`, '');
  writeFileSync(out, lines.join('\n'));
  console.log(`Wrote ${out}`);
} finally {
  await server.close();
}
