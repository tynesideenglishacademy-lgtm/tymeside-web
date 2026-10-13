import type { ChoiceQuestion, GapQuestion } from './types';

/** Multiple choice. `answer` is the index of the correct option. */
export const choice = (
  prompt: string,
  options: string[],
  answer: number,
  explanation: string,
): ChoiceQuestion => ({ prompt, options, answer, explanation });

/** Typed answer. List every acceptable full answer in `accepted`. */
export const gap = (
  prompt: string,
  accepted: string[],
  explanation: string,
  hint?: string,
): GapQuestion => ({ type: 'gap', prompt, accepted, explanation, ...(hint ? { hint } : {}) });
