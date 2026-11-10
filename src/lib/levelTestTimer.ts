/**
 * One question's wall-clock countdown. Keeping expiry outside React state
 * setters avoids stale closures and repeated side effects in Strict Mode.
 */
export interface QuestionCountdownClock {
  now: () => number;
  setInterval: (callback: () => void, ms: number) => ReturnType<typeof setInterval>;
  clearInterval: (id: ReturnType<typeof setInterval>) => void;
}

const systemClock: QuestionCountdownClock = {
  now: () => Date.now(),
  setInterval: (callback, ms) => setInterval(callback, ms),
  clearInterval: (id) => clearInterval(id),
};

export function startQuestionCountdown(
  seconds: number,
  onTick: (secondsLeft: number) => void,
  onExpire: () => void,
  clock: QuestionCountdownClock = systemClock,
): () => void {
  const deadline = clock.now() + seconds * 1000;
  let active = true;

  const intervalId = clock.setInterval(() => {
    if (!active) return;

    const remaining = Math.max(0, Math.ceil((deadline - clock.now()) / 1000));
    onTick(remaining);

    if (remaining === 0) {
      active = false;
      clock.clearInterval(intervalId);
      onExpire();
    }
  }, 250);

  return () => {
    if (!active) return;
    active = false;
    clock.clearInterval(intervalId);
  };
}
