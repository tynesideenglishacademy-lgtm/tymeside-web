import type { ContentStatus, StudentLevel } from '../studentResources';

/** The learning areas a study unit can belong to. */
export type UnitCategory =
  | 'Grammar'
  | 'Vocabulary'
  | 'Reading'
  | 'Writing'
  | 'Speaking'
  | 'Everyday English'
  | 'Revision';

/** Multiple choice. `answer` is the index of the correct option. */
export type ChoiceQuestion = {
  type?: 'choice';
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

/**
 * Typed answer. Every acceptable full answer must be listed in `accepted`
 * (case, extra spaces, curly apostrophes and a final full stop are ignored
 * when marking, nothing else is). Only use it where the answer is genuinely
 * closed.
 */
export type GapQuestion = {
  type: 'gap';
  prompt: string;
  accepted: string[];
  hint?: string;
  explanation: string;
};

export type PracticeQuestion = ChoiceQuestion | GapQuestion;

/** Short reference teaching: rules in plain English with examples. */
export type ExplainBlock = {
  type: 'explain';
  heading: string;
  intro?: string;
  points: { title: string; text: string; examples?: string[] }[];
  table?: { caption?: string; head: string[]; rows: string[][] };
  watchOut?: string[];
};

/** Worked examples: the student thinks, then reveals the answer and reason. */
export type GuidedBlock = {
  type: 'guided';
  heading: string;
  intro?: string;
  items: { prompt: string; answer: string; why: string }[];
};

/** Self-marking practice (choice and typed answers). Scored, retryable. */
export type PracticeBlock = {
  type: 'practice';
  heading: string;
  intro?: string;
  questions: PracticeQuestion[];
};

/** Original reading text. Comprehension follows as a practice block. */
export type ReadingBlock = {
  type: 'reading';
  title: string;
  before?: string[];
  paragraphs: string[];
  glossary?: { term: string; meaning: string }[];
};

/** Open writing task. Not marked automatically. */
export type WritingBlock = {
  type: 'writing';
  task: string;
  wordGuide: string;
  planning: string[];
  usefulLanguage: string[];
  checklist: string[];
  model: string[];
  modelNotes: string[];
  assessment: string[];
};

/** Open speaking task. No audio, no automatic assessment. */
export type SpeakingBlock = {
  type: 'speaking';
  heading: string;
  setup: string;
  prompts: { label?: string; text: string }[];
  usefulLanguage: string[];
  steps: string[];
  checklist: string[];
  model?: { title: string; lines: string[] };
};

export type UnitBlock =
  | ExplainBlock
  | GuidedBlock
  | PracticeBlock
  | ReadingBlock
  | WritingBlock
  | SpeakingBlock;

export type StudyUnit = {
  key: string;
  level: StudentLevel;
  category: UnitCategory;
  /** Plain-language topic, e.g. "Present perfect". */
  topic: string;
  title: string;
  summary: string;
  minutes: number;
  status: ContentStatus;
  blocks: UnitBlock[];
};
