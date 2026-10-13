// Rebalances the position of the correct option in choice() calls of a study-unit file.
// Usage: node scripts/rebalance-answers.mjs src/data/library/pre-b1.ts
// Authors write the correct option first (answer 0); this moves it so that
// answers are spread across positions. Deterministic, so re-running is safe.
import { readFileSync, writeFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) { console.error('Give a file path.'); process.exit(1); }
let source = readFileSync(file, 'utf8');
const cycle = [2, 0, 1, 1, 2, 0, 3, 1, 0, 2];
let n = 0;
const pattern = /(choice\(\s*"(?:[^"\\]|\\.)*",\s*\[)([\s\S]*?)(\],\s*)(\d)(,)/g;
source = source.replace(pattern, (_m, head, body, mid, answer, tail) => {
  const options = body.match(/"(?:[^"\\]|\\.)*"/g);
  const correct = Number(answer);
  const target = Math.min(cycle[n % cycle.length], options.length - 1);
  n += 1;
  const right = options[correct];
  const others = options.filter((_, i) => i !== correct);
  const next = [...others.slice(0, target), right, ...others.slice(target)];
  const indent = body.match(/\n(\s*)"/);
  const text = indent ? `\n${next.map((o) => `${indent[1]}${o},`).join('\n')}\n${indent[1].slice(0, -2)}` : next.join(', ');
  return `${head}${text}${mid}${target}${tail}`;
});
writeFileSync(file, source);
console.log(`Rebalanced ${n} choice questions in ${file}`);
