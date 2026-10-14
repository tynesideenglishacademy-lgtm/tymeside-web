/**
 * Pure helpers for building an Exam Bank sign-in link. Kept free of network
 * and framework code so they can be tested with `node --test`.
 */

export const EXAM_LEVELS = ['a2_key', 'b1_preliminary', 'b2_first', 'c1_advanced'] as const;
export type ExamLevel = (typeof EXAM_LEVELS)[number];

export interface CatalogEntry {
  key: string;
  paper: { examId: string };
}

export function isExamLevel(value: unknown): value is ExamLevel {
  return typeof value === 'string' && (EXAM_LEVELS as readonly string[]).includes(value);
}

/** Every authored paper key the Exam Bank offers for one exam. */
export function paperKeysFor(catalog: readonly CatalogEntry[], examId: ExamLevel): string[] {
  return catalog.filter((entry) => entry.paper.examId === examId).map((entry) => entry.key);
}

const LEVEL_TITLES: Record<ExamLevel, string> = {
  a2_key: 'A2 Key practice',
  b1_preliminary: 'B1 Preliminary practice',
  b2_first: 'B2 First practice',
  c1_advanced: 'C1 Advanced practice',
};

export interface TokenRequestBody {
  assignmentId: string;
  assessmentId: string;
  candidateRef: string;
  title: string;
  kind: 'practice';
  examId: ExamLevel;
  paperKeys: string[];
  expiresInSeconds: number;
}

/** Self-directed practice, not a teacher-set assessment. Lifetime is short: the link carries the token. */
export const LINK_LIFETIME_SECONDS = 2 * 60 * 60;

export function buildTokenRequest(
  studentId: string,
  examId: ExamLevel,
  paperKeys: string[],
  nonce: string,
): TokenRequestBody {
  return {
    assignmentId: `self-practice:${studentId}:${examId}:${nonce}`,
    assessmentId: `self-practice:${examId}`,
    candidateRef: studentId,
    title: LEVEL_TITLES[examId],
    kind: 'practice',
    examId,
    paperKeys,
    expiresInSeconds: LINK_LIFETIME_SECONDS,
  };
}
