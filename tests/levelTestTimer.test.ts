import test from 'node:test';
import assert from 'node:assert/strict';
import { startQuestionCountdown, type QuestionCountdownClock } from '../src/lib/levelTestTimer.ts';

function fakeClock() {
  let now = 0;
  let nextId = 1;
  const callbacks = new Map<number, () => void>();
  const clock: QuestionCountdownClock = {
    now: () => now,
    setInterval: (callback) => {
      const id = nextId++;
      callbacks.set(id, callback);
      return id;
    },
    clearInterval: (id) => { callbacks.delete(id); },
  };
  return {
    clock,
    advanceTo(ms: number) {
      now = ms;
      for (const callback of [...callbacks.values()]) callback();
    },
    get activeCount() { return callbacks.size; },
  };
}

test('45-second timeout invokes the latest handler once, never a stale initial handler', () => {
  const timer = fakeClock();
  const ticks: number[] = [];
  let timedOut = 0;
  let currentHandler = () => { throw new Error('stale handler accessed null question'); };

  startQuestionCountdown(45, (remaining) => ticks.push(remaining), () => currentHandler(), timer.clock);

  // Mirrors the React ref receiving the first question after registration.
  currentHandler = () => { timedOut += 1; };
  timer.advanceTo(44_200);
  assert.equal(ticks.at(-1), 1);
  assert.equal(timedOut, 0);

  timer.advanceTo(45_000);
  assert.equal(ticks.at(-1), 0);
  assert.equal(timedOut, 1);
  assert.equal(timer.activeCount, 0);
  timer.advanceTo(60_000);
  assert.equal(timedOut, 1);
});

test('answering before timeout cancels expiry, including after background delay', () => {
  const timer = fakeClock();
  let timedOut = 0;
  const cancel = startQuestionCountdown(45, () => {}, () => { timedOut += 1; }, timer.clock);

  timer.advanceTo(15_000);
  cancel();
  timer.advanceTo(90_000);
  assert.equal(timedOut, 0);
  assert.equal(timer.activeCount, 0);
});

test('countdown uses elapsed wall time even when an interval tick is delayed', () => {
  const timer = fakeClock();
  let secondsLeft = 45;
  let timedOut = 0;
  startQuestionCountdown(45, value => { secondsLeft = value; }, () => { timedOut += 1; }, timer.clock);
  timer.advanceTo(50_000);
  assert.equal(secondsLeft, 0);
  assert.equal(timedOut, 1);
});
