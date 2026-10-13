/** Normalise a typed answer for comparison with the accepted list. */
export const normaliseAnswer = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[‘’′`]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim();

export const matchesAccepted = (value: string, accepted: string[]): boolean => {
  const attempt = normaliseAnswer(value);
  return attempt.length > 0 && accepted.some((answer) => normaliseAnswer(answer) === attempt);
};
