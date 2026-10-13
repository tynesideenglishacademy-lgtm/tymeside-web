import { useId, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { matchesAccepted } from '../lib/practice';
import type {
  ExplainBlock,
  GuidedBlock,
  PracticeBlock,
  PracticeQuestion,
  ReadingBlock,
  SpeakingBlock,
  StudyUnit,
  UnitBlock,
  UnitCategory,
  WritingBlock,
} from '../data/library/types';

type ActivityEvent = {
  eventType: string;
  resourceKey?: string;
  resourceTitle?: string;
  resourceLevel?: string;
  metadata?: Record<string, unknown>;
};

type Track = (event: ActivityEvent) => void | Promise<void>;

type Props = {
  units: StudyUnit[];
  trackActivity: Track;
  english: boolean;
};

const tx = (english: boolean, en: string, es: string) => (english ? en : es);

const categoryLabels: Record<UnitCategory, [string, string]> = {
  Grammar: ['Grammar', 'Gramática'],
  Vocabulary: ['Vocabulary', 'Vocabulario'],
  Reading: ['Reading', 'Lectura'],
  Writing: ['Writing', 'Escritura'],
  Speaking: ['Speaking', 'Expresión oral'],
  'Everyday English': ['Everyday English', 'Inglés cotidiano'],
  Revision: ['Revision', 'Repaso'],
};

const categoryOrder: UnitCategory[] = [
  'Grammar',
  'Vocabulary',
  'Reading',
  'Writing',
  'Speaking',
  'Everyday English',
  'Revision',
];

const categoryLabel = (category: UnitCategory, english: boolean) =>
  categoryLabels[category][english ? 0 : 1];

const stageLabel = (block: UnitBlock, english: boolean): string => {
  switch (block.type) {
    case 'explain':
      return tx(english, 'Learn', 'Aprende');
    case 'guided':
      return tx(english, 'Try it with support', 'Prueba con apoyo');
    case 'practice':
      return tx(english, 'Practise', 'Practica');
    case 'reading':
      return tx(english, 'Read', 'Lee');
    case 'writing':
      return tx(english, 'Write', 'Escribe');
    case 'speaking':
      return tx(english, 'Speak', 'Habla');
  }
};

const unitStages = (unit: StudyUnit, english: boolean): string => {
  const seen: string[] = [];
  unit.blocks.forEach((block) => {
    const label = stageLabel(block, english);
    if (!seen.includes(label)) seen.push(label);
  });
  return seen.join(' · ');
};

function Checklist({ items, label }: { items: string[]; label: string }) {
  const [done, setDone] = useState<Record<number, boolean>>({});
  return (
    <fieldset className="student-checklist">
      <legend>{label}</legend>
      {items.map((item, index) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={Boolean(done[index])}
            onChange={() => setDone((current) => ({ ...current, [index]: !current[index] }))}
          />
          <span>{item}</span>
        </label>
      ))}
    </fieldset>
  );
}

function Explain({ block, english }: { block: ExplainBlock; english: boolean }) {
  return (
    <div className="student-explain">
      {block.intro && <p className="student-stage-intro">{block.intro}</p>}
      <div className="student-rule-list">
        {block.points.map((point) => (
          <div className="student-rule" key={point.title}>
            <h5>{point.title}</h5>
            <p>{point.text}</p>
            {point.examples && (
              <ul className="student-examples">
                {point.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      {block.table && (
        <div className="student-table-wrap" role="region" aria-label={block.table.caption ?? block.heading} tabIndex={0}>
          <table>
            {block.table.caption && <caption>{block.table.caption}</caption>}
            <thead>
              <tr>{block.table.head.map((cell) => <th scope="col" key={cell}>{cell}</th>)}</tr>
            </thead>
            <tbody>
              {block.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, index) => (index === 0
                    ? <th scope="row" key={`${cell}-${index}`}>{cell}</th>
                    : <td key={`${cell}-${index}`}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {block.watchOut && block.watchOut.length > 0 && (
        <aside className="student-watchout">
          <strong>{tx(english, 'Watch out', 'Ojo')}</strong>
          <ul>{block.watchOut.map((note) => <li key={note}>{note}</li>)}</ul>
        </aside>
      )}
    </div>
  );
}

function Guided({ block, english }: { block: GuidedBlock; english: boolean }) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const baseId = useId();
  return (
    <div className="student-guided">
      {block.intro && <p className="student-stage-intro">{block.intro}</p>}
      <ol className="student-guided-list">
        {block.items.map((item, index) => {
          const open = Boolean(revealed[index]);
          const panelId = `${baseId}-${index}`;
          return (
            <li key={item.prompt}>
              <p className="student-guided-prompt">{item.prompt}</p>
              <button
                type="button"
                className="student-text-button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setRevealed((current) => ({ ...current, [index]: !current[index] }))}
              >
                {open ? tx(english, 'Hide the answer', 'Ocultar la respuesta') : tx(english, 'Think, then show the answer', 'Piensa y muestra la respuesta')}
              </button>
              <div id={panelId} hidden={!open} className="student-guided-answer">
                <p><strong>{item.answer}</strong></p>
                <p>{item.why}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const correctText = (question: PracticeQuestion): string =>
  question.type === 'gap' ? question.accepted.join(' / ') : question.options[question.answer];

function Practice({
  block,
  unit,
  trackActivity,
  english,
}: {
  block: PracticeBlock;
  unit: StudyUnit;
  trackActivity: Track;
  english: boolean;
}) {
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [submitted, setSubmitted] = useState(false);
  const baseId = useId();
  const total = block.questions.length;

  const isCorrect = (question: PracticeQuestion, answer: number | string | undefined): boolean => {
    if (answer === undefined) return false;
    if (question.type === 'gap') return typeof answer === 'string' && matchesAccepted(answer, question.accepted);
    return answer === question.answer;
  };

  const score = block.questions.reduce((sum, question, index) => sum + (isCorrect(question, answers[index]) ? 1 : 0), 0);
  const complete = block.questions.every((question, index) => {
    const answer = answers[index];
    return question.type === 'gap' ? typeof answer === 'string' && answer.trim().length > 0 : answer !== undefined;
  });

  const submit = () => {
    setSubmitted(true);
    void trackActivity({
      eventType: 'unit_practice_completed',
      resourceKey: unit.key,
      resourceTitle: unit.title,
      resourceLevel: unit.level,
      metadata: {
        score,
        total,
        section: block.heading,
        category: unit.category,
        topic: unit.topic,
        contentStatus: unit.status,
      },
    });
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const verdict = score === total
    ? tx(english, 'Excellent control.', 'Excelente dominio.')
    : score >= Math.ceil(total * 0.6)
      ? tx(english, 'Good work. Read the feedback above before you try again.', 'Buen trabajo. Lee las explicaciones antes de repetir.')
      : tx(english, 'Read the lesson above again, then try again.', 'Vuelve a leer la lección y repite el ejercicio.');

  return (
    <div className="student-practice">
      {block.intro && <p className="student-stage-intro">{block.intro}</p>}
      {block.questions.map((question, index) => {
        const answer = answers[index];
        const correct = submitted && isCorrect(question, answer);
        const wrong = submitted && !correct;
        const inputId = `${baseId}-q${index}`;
        return (
          <fieldset key={question.prompt}>
            <legend><span>{String(index + 1).padStart(2, '0')}</span>{question.prompt}</legend>
            {question.type === 'gap' ? (
              <div className={`student-gap${correct ? ' is-correct' : ''}${wrong ? ' is-wrong' : ''}`}>
                <label htmlFor={inputId}>{tx(english, 'Your answer', 'Tu respuesta')}</label>
                <input
                  id={inputId}
                  type="text"
                  value={typeof answer === 'string' ? answer : ''}
                  disabled={submitted}
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  maxLength={80}
                  onChange={(event) => setAnswers((current) => ({ ...current, [index]: event.target.value }))}
                />
                {question.hint && <small>{question.hint}</small>}
              </div>
            ) : (
              <div className="student-answer-options">
                {question.options.map((option, optionIndex) => {
                  const selected = answer === optionIndex;
                  const isRight = submitted && optionIndex === question.answer;
                  const isWrong = submitted && selected && optionIndex !== question.answer;
                  return (
                    <label className={`${selected ? 'is-selected' : ''}${isRight ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}`} key={option}>
                      <input
                        type="radio"
                        name={`${baseId}-q${index}`}
                        checked={selected}
                        disabled={submitted}
                        onChange={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
            {submitted && (
              <div className={`student-feedback ${correct ? 'is-correct' : 'is-wrong'}`}>
                <p>
                  <strong>{correct ? tx(english, 'Correct.', 'Correcto.') : tx(english, 'Not quite.', 'No exactamente.')}</strong>
                  {wrong && <> {tx(english, 'Correct answer:', 'Respuesta correcta:')} <strong>{correctText(question)}</strong>.</>}
                </p>
                <p>{question.explanation}</p>
              </div>
            )}
          </fieldset>
        );
      })}
      {submitted ? (
        <div className="student-score" aria-live="polite">
          <strong>{score}/{total}</strong>
          <div>
            <span>{verdict}</span>
            <button type="button" onClick={reset}>{tx(english, 'Try again', 'Repetir')}</button>
          </div>
        </div>
      ) : (
        <button type="button" className="btn-editorial-primary" disabled={!complete} onClick={submit}>
          {tx(english, 'Check my answers', 'Corregir respuestas')}
        </button>
      )}
      {submitted && (
        <p className="student-score-note">
          {tx(english, 'This score is for your own practice. It is not part of your class assessment or level.', 'Esta puntuación es solo para tu práctica. No forma parte de tu evaluación de clase ni de tu nivel.')}
        </p>
      )}
    </div>
  );
}

function Reading({ block, english }: { block: ReadingBlock; english: boolean }) {
  return (
    <div className="student-reading">
      {block.before && block.before.length > 0 && (
        <div className="student-before-reading">
          <strong>{tx(english, 'Before you read', 'Antes de leer')}</strong>
          <ul>{block.before.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      )}
      <article className="student-reading-text" aria-label={block.title}>
        <h5>{block.title}</h5>
        {block.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
      </article>
      {block.glossary && block.glossary.length > 0 && (
        <details className="student-glossary">
          <summary>{tx(english, 'Useful words from the text', 'Palabras útiles del texto')}</summary>
          <dl>
            {block.glossary.map((entry) => (
              <div key={entry.term}>
                <dt>{entry.term}</dt>
                <dd>{entry.meaning}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
    </div>
  );
}

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

function Writing({ block, english }: { block: WritingBlock; english: boolean }) {
  const [text, setText] = useState('');
  const [showModel, setShowModel] = useState(false);
  const baseId = useId();
  const words = wordCount(text);
  return (
    <div className="student-writing">
      <div className="student-task-card">
        <strong>{tx(english, 'Your task', 'Tu tarea')}</strong>
        <p>{block.task}</p>
        <small>{block.wordGuide}</small>
      </div>
      <div className="student-two-lists">
        <div>
          <strong>{tx(english, 'Plan first', 'Planifica primero')}</strong>
          <ol>{block.planning.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div>
          <strong>{tx(english, 'Useful language', 'Lenguaje útil')}</strong>
          <ul>{block.usefulLanguage.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <div className="student-textarea-wrap">
        <label htmlFor={`${baseId}-text`}>{tx(english, 'Write your answer here', 'Escribe tu respuesta aquí')}</label>
        <textarea
          id={`${baseId}-text`}
          rows={10}
          value={text}
          spellCheck
          onChange={(event) => setText(event.target.value)}
          aria-describedby={`${baseId}-note`}
        />
        <small id={`${baseId}-note`}>
          {words} {tx(english, 'words', 'palabras')}. {tx(english, 'Your writing is not saved or sent anywhere and it is not marked automatically. Copy it before you leave this page and show it to your teacher.', 'Tu texto no se guarda ni se envía y no se corrige automáticamente. Cópialo antes de salir de esta página y enséñaselo a tu profesor o profesora.')}
        </small>
      </div>
      <Checklist items={block.checklist} label={tx(english, 'Check your own writing', 'Revisa tu propio texto')} />
      <button
        type="button"
        className="student-text-button"
        aria-expanded={showModel}
        aria-controls={`${baseId}-model`}
        onClick={() => setShowModel((current) => !current)}
      >
        {showModel ? tx(english, 'Hide the model answer', 'Ocultar el modelo') : tx(english, 'Show a model answer', 'Mostrar un modelo')}
      </button>
      <div id={`${baseId}-model`} hidden={!showModel} className="student-model">
        <strong>{tx(english, 'Model answer', 'Modelo de respuesta')}</strong>
        <p className="student-model-caveat">{tx(english, 'One possible answer, not the only correct one.', 'Es una respuesta posible, no la única correcta.')}</p>
        {block.model.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
        <strong>{tx(english, 'Why it works', 'Por qué funciona')}</strong>
        <ul>{block.modelNotes.map((note) => <li key={note}>{note}</li>)}</ul>
        <strong>{tx(english, 'What your teacher will look for', 'En qué se fijará tu profesor o profesora')}</strong>
        <ul>{block.assessment.map((note) => <li key={note}>{note}</li>)}</ul>
      </div>
    </div>
  );
}

function Speaking({ block, english }: { block: SpeakingBlock; english: boolean }) {
  const [showModel, setShowModel] = useState(false);
  const baseId = useId();
  return (
    <div className="student-speaking">
      <p className="student-stage-intro">{block.setup}</p>
      <ol className="student-prompt-list">
        {block.prompts.map((prompt) => (
          <li key={prompt.text}>
            {prompt.label && <strong>{prompt.label}</strong>}
            <span>{prompt.text}</span>
          </li>
        ))}
      </ol>
      <div className="student-two-lists">
        <div>
          <strong>{tx(english, 'How to practise', 'Cómo practicar')}</strong>
          <ol>{block.steps.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div>
          <strong>{tx(english, 'Useful language', 'Lenguaje útil')}</strong>
          <ul>{block.usefulLanguage.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <Checklist items={block.checklist} label={tx(english, 'Check yourself after speaking', 'Revisa tu intervención')} />
      <p className="student-score-note">
        {tx(english, 'Speaking tasks are not marked automatically. Practise aloud, record yourself on your phone if you can, and share the recording or your notes with your teacher.', 'Las tareas orales no se corrigen automáticamente. Practica en voz alta, grábate con el móvil si puedes y comparte la grabación o tus notas con tu profesor o profesora.')}
      </p>
      {block.model && (
        <>
          <button
            type="button"
            className="student-text-button"
            aria-expanded={showModel}
            aria-controls={`${baseId}-model`}
            onClick={() => setShowModel((current) => !current)}
          >
            {showModel ? tx(english, 'Hide the model response', 'Ocultar el modelo') : tx(english, 'Show a model response (text)', 'Mostrar un modelo (texto)')}
          </button>
          <div id={`${baseId}-model`} hidden={!showModel} className="student-model">
            <strong>{block.model.title}</strong>
            <p className="student-model-caveat">{tx(english, 'Written as a transcript. There is no audio. One possible response, not the only correct one.', 'Está escrito como transcripción; no hay audio. Es una respuesta posible, no la única correcta.')}</p>
            {block.model.lines.map((line) => <p key={line.slice(0, 48)}>{line}</p>)}
          </div>
        </>
      )}
    </div>
  );
}

function renderBlock(block: UnitBlock, unit: StudyUnit, trackActivity: Track, english: boolean): ReactNode {
  switch (block.type) {
    case 'explain':
      return <Explain block={block} english={english} />;
    case 'guided':
      return <Guided block={block} english={english} />;
    case 'practice':
      return <Practice block={block} unit={unit} trackActivity={trackActivity} english={english} />;
    case 'reading':
      return <Reading block={block} english={english} />;
    case 'writing':
      return <Writing block={block} english={english} />;
    case 'speaking':
      return <Speaking block={block} english={english} />;
  }
}

const blockHeading = (block: UnitBlock, english: boolean): string => {
  switch (block.type) {
    case 'explain':
    case 'guided':
    case 'practice':
    case 'speaking':
      return block.heading;
    case 'reading':
      return block.title;
    case 'writing':
      return tx(english, 'Writing task', 'Tarea de escritura');
  }
};

function UnitCard({
  unit,
  open,
  onToggle,
  trackActivity,
  english,
}: {
  unit: StudyUnit;
  open: boolean;
  onToggle: () => void;
  trackActivity: Track;
  english: boolean;
}) {
  const bodyId = useId();
  return (
    <article className={`student-unit${open ? ' is-open' : ''}`}>
      <header>
        <div className="student-resource-meta">
          <span>{unit.level}</span>
          <span>{categoryLabel(unit.category, english)}</span>
          {unit.status === 'draft' && <span className="student-draft-tag">{tx(english, 'Draft', 'Borrador')}</span>}
        </div>
        <h3>{unit.title}</h3>
        <p>{unit.summary}</p>
        <small>{unit.minutes} min · {unitStages(unit, english)}</small>
        <button
          type="button"
          className="btn-editorial-secondary"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={onToggle}
        >
          {open ? tx(english, 'Close unit', 'Cerrar unidad') : tx(english, 'Open unit', 'Abrir unidad')}
        </button>
      </header>
      {open && (
        <div id={bodyId} className="student-unit-body">
          {unit.status === 'draft' && (
            <p className="student-draft-note" role="note">
              {tx(english, 'Draft material: not yet checked by a teacher. The level shown is provisional.', 'Material en borrador: aún no lo ha revisado un profesor. El nivel indicado es provisional.')}
            </p>
          )}
          {unit.blocks.map((block, index) => (
            <section className="student-stage" key={`${unit.key}-${index}`} aria-label={`${stageLabel(block, english)}: ${blockHeading(block, english)}`}>
              <p className="student-stage-label"><span>{index + 1}</span>{stageLabel(block, english)}</p>
              <h4>{blockHeading(block, english)}</h4>
              {renderBlock(block, unit, trackActivity, english)}
            </section>
          ))}
        </div>
      )}
    </article>
  );
}

const INITIAL_VISIBLE = 8;

export default function StudyUnits({ units, trackActivity, english }: Props) {
  const [category, setCategory] = useState<UnitCategory | 'All'>('All');
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(
    () => categoryOrder.filter((item) => units.some((unit) => unit.category === item)),
    [units],
  );
  const activeCategory = category !== 'All' && !categories.includes(category) ? 'All' : category;
  const filtered = useMemo(
    () => (activeCategory === 'All' ? units : units.filter((unit) => unit.category === activeCategory)),
    [units, activeCategory],
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  const toggle = (unit: StudyUnit) => {
    const willOpen = openKey !== unit.key;
    setOpenKey(willOpen ? unit.key : null);
    if (willOpen) {
      void trackActivity({
        eventType: 'unit_opened',
        resourceKey: unit.key,
        resourceTitle: unit.title,
        resourceLevel: unit.level,
        metadata: { category: unit.category, topic: unit.topic, contentStatus: unit.status },
      });
    }
  };

  if (units.length === 0) {
    return (
      <p className="student-empty-note">
        {tx(english, 'New study units for this level are on their way.', 'Pronto habrá nuevas unidades de estudio para este nivel.')}
      </p>
    );
  }

  return (
    <div className="student-units">
      <div className="student-unit-filter" role="group" aria-label={tx(english, 'Filter study units by type', 'Filtrar unidades por tipo')}>
        {(['All', ...categories] as const).map((item) => (
          <button
            type="button"
            key={item}
            className={activeCategory === item ? 'is-active' : ''}
            aria-pressed={activeCategory === item}
            onClick={() => {
              setCategory(item);
              setShowAll(false);
            }}
          >{item === 'All' ? tx(english, 'All types', 'Todos') : categoryLabel(item, english)}</button>
        ))}
      </div>
      <div className="student-unit-list">
        {visible.map((unit) => (
          <UnitCard
            key={unit.key}
            unit={unit}
            open={openKey === unit.key}
            onToggle={() => toggle(unit)}
            trackActivity={trackActivity}
            english={english}
          />
        ))}
      </div>
      {!showAll && filtered.length > INITIAL_VISIBLE && (
        <button type="button" className="btn-editorial-secondary student-show-all" onClick={() => setShowAll(true)}>
          {tx(english, `Show all ${filtered.length} units`, `Mostrar las ${filtered.length} unidades`)}
        </button>
      )}
    </div>
  );
}
