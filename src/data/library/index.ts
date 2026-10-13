import { levelOrder } from '../studentResources';
import type { StudyUnit } from './types';
import { a2Units } from './a2';
import { preB1Units } from './pre-b1';
import { b1Units } from './b1';
import { b2Units } from './b2';

export type { StudyUnit, UnitCategory } from './types';

/** Sort is stable, so the authoring order within a level is preserved. */
export const studyUnits: StudyUnit[] = [...a2Units, ...preB1Units, ...b1Units, ...b2Units].sort(
  (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level),
);
