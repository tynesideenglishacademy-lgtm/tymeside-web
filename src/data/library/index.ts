import { levelOrder } from '../studentResources';
import type { StudyUnit } from './types';
import { a2Units } from './a2';
import { a2UnitsBatch2 } from './a2-batch2';
import { preB1Units } from './pre-b1';
import { preB1UnitsBatch2 } from './pre-b1-batch2';
import { b1Units } from './b1';
import { b1UnitsBatch2 } from './b1-batch2';
import { b2Units } from './b2';
import { b2UnitsBatch2 } from './b2-batch2';
import { c1Units } from './c1';
import { c1UnitsBatch2 } from './c1-batch2';
import { c2Units } from './c2';
import { c2UnitsBatch2 } from './c2-batch2';

export type { StudyUnit, UnitCategory } from './types';

/** Sort is stable, so the authoring order within a level is preserved. */
export const studyUnits: StudyUnit[] = [...a2Units, ...a2UnitsBatch2, ...preB1Units, ...preB1UnitsBatch2, ...b1Units, ...b1UnitsBatch2, ...b2Units, ...b2UnitsBatch2, ...c1Units, ...c1UnitsBatch2, ...c2Units, ...c2UnitsBatch2].sort(
  (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level),
);
