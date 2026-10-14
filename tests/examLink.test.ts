import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTokenRequest, isExamLevel, paperKeysFor } from '../api/_lib/examLink.ts';

test('only the four authored levels are accepted', () => {
  assert.ok(isExamLevel('b2_first'));
  assert.ok(!isExamLevel('c2_proficiency'));
  assert.ok(!isExamLevel(undefined));
});

test('paper keys are limited to the chosen exam', () => {
  const catalog = [
    { key: 'b2_listening_full', paper: { examId: 'b2_first' } },
    { key: 'b1_reading_full', paper: { examId: 'b1_preliminary' } },
  ];
  assert.deepEqual(paperKeysFor(catalog, 'b2_first'), ['b2_listening_full']);
});

test('token request ties the link to the CRM student and marks it as practice', () => {
  const body = buildTokenRequest('stu-1', 'a2_key', ['a2_reading_full'], 'n1');
  assert.equal(body.candidateRef, 'stu-1');
  assert.equal(body.kind, 'practice');
  assert.ok(body.expiresInSeconds <= 2 * 60 * 60);
  assert.ok(body.assignmentId.includes('stu-1'));
});
