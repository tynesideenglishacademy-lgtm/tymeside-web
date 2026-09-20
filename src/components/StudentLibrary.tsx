import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStudentResourceDownload } from '../lib/studentResourceDownloads';
import {
  studentResources,
  studentWorksheets,
  type StudentResource,
  type StudentWorksheet,
} from '../data/studentResources';

type ActivityEvent = {
  eventType: string;
  resourceKey?: string;
  resourceTitle?: string;
  resourceLevel?: string;
  metadata?: Record<string, unknown>;
};

type Props = {
  trackActivity: (event: ActivityEvent) => void | Promise<void>;
  previewDownloads?: boolean;
};

const levels = ['All', 'B1', 'B2', 'C1'] as const;
type LevelFilter = (typeof levels)[number];

function Worksheet({ worksheet, trackActivity, english }: { worksheet: StudentWorksheet; trackActivity: Props['trackActivity']; english: boolean }) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = worksheet.questions.reduce(
    (total, question, index) => total + (answers[index] === question.answer ? 1 : 0),
    0,
  );

  const start = () => {
    setStarted(true);
    void trackActivity({
      eventType: 'worksheet_started',
      resourceKey: worksheet.key,
      resourceTitle: worksheet.title,
      resourceLevel: worksheet.level,
      metadata: { questionCount: worksheet.questions.length },
    });
  };

  const submit = () => {
    setSubmitted(true);
    void trackActivity({
      eventType: 'worksheet_completed',
      resourceKey: worksheet.key,
      resourceTitle: worksheet.title,
      resourceLevel: worksheet.level,
      metadata: { score, total: worksheet.questions.length },
    });
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <article className={`student-worksheet${started ? ' is-started' : ''}`}>
      <header>
        <div className="student-resource-meta"><span>{worksheet.level}</span><span>{english ? 'Online practice' : 'Práctica online'}</span></div>
        <h3>{worksheet.title}</h3>
        <p>{worksheet.focus}</p>
        <small>{worksheet.duration} · {worksheet.questions.length} {english ? 'questions · instant feedback' : 'preguntas · corrección inmediata'}</small>
      </header>

      {!started ? (
        <button type="button" className="btn-editorial-secondary" onClick={start}>{english ? 'Start worksheet' : 'Empezar actividad'}</button>
      ) : (
        <div className="student-worksheet-body">
          {worksheet.questions.map((question, questionIndex) => (
            <fieldset key={question.prompt}>
              <legend><span>{String(questionIndex + 1).padStart(2, '0')}</span>{question.prompt}</legend>
              <div className="student-answer-options">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[questionIndex] === optionIndex;
                  const isCorrect = submitted && optionIndex === question.answer;
                  const isWrong = submitted && selected && optionIndex !== question.answer;
                  return (
                    <label className={`${selected ? 'is-selected' : ''}${isCorrect ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}`} key={option}>
                      <input
                        type="radio"
                        name={`${worksheet.key}-${questionIndex}`}
                        checked={selected}
                        disabled={submitted}
                        onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
              {submitted && <p className="student-answer-explanation">{question.explanation}</p>}
            </fieldset>
          ))}
          {submitted ? (
            <div className="student-score" aria-live="polite">
              <strong>{score}/{worksheet.questions.length}</strong>
              <div><span>{score === worksheet.questions.length ? (english ? 'Excellent control.' : 'Excelente dominio.') : score >= 3 ? (english ? 'Good work - review the notes above.' : 'Buen trabajo: revisa las explicaciones.') : (english ? 'Review the toolkit, then try again.' : 'Repasa la guía y vuelve a intentarlo.')}</span><button type="button" onClick={reset}>{english ? 'Try again' : 'Repetir'}</button></div>
            </div>
          ) : (
            <button
              type="button"
              className="btn-editorial-primary"
              disabled={Object.keys(answers).length !== worksheet.questions.length}
              onClick={submit}
            >{english ? 'Check my answers' : 'Corregir respuestas'}</button>
          )}
        </div>
      )}
    </article>
  );
}

export default function StudentLibrary({ trackActivity, previewDownloads = false }: Props) {
  const { i18n } = useTranslation();
  const english = i18n.resolvedLanguage?.startsWith('en') ?? false;
  const [level, setLevel] = useState<LevelFilter>('All');
  const [openResource, setOpenResource] = useState<string | null>(null);
  const [downloadState, setDownloadState] = useState<Record<string, 'loading' | 'error'>>({});

  const filteredResources = useMemo(
    () => level === 'All' ? studentResources : studentResources.filter((resource) => resource.level === level),
    [level],
  );
  const filteredWorksheets = useMemo(
    () => level === 'All' ? studentWorksheets : studentWorksheets.filter((worksheet) => worksheet.level === level),
    [level],
  );

  const toggleResource = (resource: StudentResource) => {
    const willOpen = openResource !== resource.key;
    setOpenResource(willOpen ? resource.key : null);
    if (willOpen) void trackActivity({
      eventType: 'resource_opened',
      resourceKey: resource.key,
      resourceTitle: resource.title,
      resourceLevel: resource.level,
      metadata: { type: resource.type, pages: resource.pages },
    });
  };

  const download = async (resource: StudentResource) => {
    if (previewDownloads) {
      window.alert(english ? 'Local preview: private downloads are disabled.' : 'Vista local: las descargas privadas están desactivadas.');
      return;
    }
    setDownloadState((current) => ({ ...current, [resource.key]: 'loading' }));
    try {
      const signedUrl = await getStudentResourceDownload(resource.storagePath, resource.downloadName);
      void trackActivity({
        eventType: 'resource_downloaded',
        resourceKey: resource.key,
        resourceTitle: resource.title,
        resourceLevel: resource.level,
        metadata: { storagePath: resource.storagePath },
      });
      setDownloadState((current) => {
        const next = { ...current };
        delete next[resource.key];
        return next;
      });
      window.location.assign(signedUrl);
    } catch {
      setDownloadState((current) => ({ ...current, [resource.key]: 'error' }));
    }
  };

  return (
    <section id="student-library" className="student-resource-library" aria-labelledby="resource-library-title">
      <div className="container">
        <div className="student-library-heading">
          <div>
            <p className="student-access-kicker">{english ? 'Cambridge exam library' : 'Biblioteca de exámenes Cambridge'}</p>
            <h2 id="resource-library-title">{english ? 'Study with a clear purpose.' : 'Estudia con un objetivo claro.'}</h2>
            <p>{english ? 'Focused preparation for B1 Preliminary, B2 First and C1 Advanced. Download a level toolkit or complete a short self-marking practice session.' : 'Preparación enfocada para B1 Preliminary, B2 First y C1 Advanced. Descarga una guía de tu nivel o completa una actividad breve con corrección inmediata.'}</p>
          </div>
          <div className="student-level-filter" aria-label="Filter resources by exam level">
            {levels.map((item) => (
              <button
                type="button"
                key={item}
                className={level === item ? 'is-active' : ''}
                aria-pressed={level === item}
                onClick={() => {
                  setLevel(item);
                  void trackActivity({ eventType: 'level_filter_used', resourceLevel: item });
                }}
              >{item === 'All' ? (english ? 'All levels' : 'Todos') : item}</button>
            ))}
          </div>
        </div>

        <div className="student-library-chapter">
          <div className="student-chapter-title"><span>01</span><div><p>{english ? 'Downloadable guides' : 'Guías descargables'}</p><h3>{english ? 'Your exam toolkit' : 'Tu kit de preparación'}</h3></div></div>
          <div className="student-resource-grid">
            {filteredResources.map((resource) => {
              const isOpen = openResource === resource.key;
              const state = downloadState[resource.key];
              return (
                <article key={resource.key} className={`student-resource-card${isOpen ? ' is-open' : ''}`}>
                  <div className="student-resource-meta"><span>{resource.level}</span><span>{resource.pages} pages</span></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.summary}</p>
                  <div className="student-card-actions">
                    <button type="button" aria-expanded={isOpen} onClick={() => toggleResource(resource)}>{isOpen ? (english ? 'Hide contents' : 'Ocultar contenido') : (english ? 'See contents' : 'Ver contenido')}</button>
                    <button type="button" disabled={state === 'loading'} onClick={() => void download(resource)}>{state === 'loading' ? (english ? 'Preparing…' : 'Preparando…') : (english ? 'Download PDF' : 'Descargar PDF')}</button>
                  </div>
                  {state === 'error' && <p className="student-download-error" role="alert">{english ? 'The download could not be prepared. Please try again or contact reception.' : 'No se ha podido preparar la descarga. Inténtalo de nuevo o contacta con secretaría.'}</p>}
                  {isOpen && <ul>{resource.contents.map((item) => <li key={item}>{item}</li>)}</ul>}
                </article>
              );
            })}
          </div>
        </div>

        <div className="student-library-chapter student-worksheet-chapter">
          <div className="student-chapter-title"><span>02</span><div><p>{english ? 'Practice online' : 'Práctica online'}</p><h3>{english ? 'Short, useful, self-marking' : 'Breve, útil y con autocorrección'}</h3></div></div>
          <div className="student-worksheet-list">
            {filteredWorksheets.map((worksheet) => <Worksheet key={worksheet.key} worksheet={worksheet} trackActivity={trackActivity} english={english} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
