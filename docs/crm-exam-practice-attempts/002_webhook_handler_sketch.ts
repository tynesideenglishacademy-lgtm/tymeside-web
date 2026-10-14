// DRAFT — NOT APPLIED. A sketch for the CRM's existing assessment-result webhook
// (the URL set as CRM_ASSESSMENT_WEBHOOK_URL on the Exam Bank server).
// Adapt names/imports to the CRM codebase; I could not see it.
//
// Exam Bank sends: POST, JSON body AssessmentAttemptDelivery
//   { assignmentId, assessmentId, candidateRef, result: AttemptResult }
// Headers: x-eval-timestamp, x-eval-signature (HMAC; secret CRM_ASSESSMENT_WEBHOOK_SECRET).
// !! Verify the signing string against the Exam Bank's deliverAttempt() — your existing handler
// !! already does this; reuse its verifier rather than this placeholder.

import { createClient } from '@supabase/supabase-js';

declare function verifyEvalSignature(rawBody: string, ts: string | null, sig: string | null): boolean; // existing CRM verifier

const admin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function handleDelivery(req: Request): Promise<Response> {
  const raw = await req.text();
  if (!verifyEvalSignature(raw, req.headers.get('x-eval-timestamp'), req.headers.get('x-eval-signature'))) {
    return new Response('bad signature', { status: 401 });
  }
  const d = JSON.parse(raw);

  // New branch: self-practice from the student area. Everything else continues to the existing path.
  if (typeof d.assessmentId === 'string' && d.assessmentId.startsWith('self-practice:')) {
    const r = d.result;
    const paper = r.papers?.[0]; // one paper per sitting from the student-area link; extend if you offer sets
    const writingOrSpeaking = /writing|speaking/i.test(paper?.paperKey ?? '');
    const row = {
      student_id: d.candidateRef,           // = students.id (set by api/exam-bank-link.ts)
      exam_id: r.examId,
      paper_key: paper?.paperKey,
      paper_label: paper?.title ?? null,
      submission_id: r.submissionId,
      assignment_id: d.assignmentId,
      raw_score: paper?.rawScore ?? null,
      max_score: paper?.maxScore ?? null,
      scale_score: r.overall?.scaleScore ?? null,
      cefr: r.overall?.cefr ?? null,
      calibration_source: r.overall?.calibrationSource ?? null,
      result_status: writingOrSpeaking && r.status !== 'final' ? 'needs_review' : 'scored',
      result_data: r,
      started_at: r.startedAt,
      completed_at: r.completedAt,
    };
    // Idempotent: a retried delivery has the same submission_id and is ignored.
    // attempt_number is assigned by the DB trigger.
    const { error } = await admin
      .from('exam_practice_attempts')
      .upsert(row, { onConflict: 'submission_id', ignoreDuplicates: true });
    if (error) return new Response(error.message, { status: 500 }); // 5xx so the Exam Bank retries
    return new Response('ok');
  }

  return existingAssessmentHandler(d); // unchanged CRM path (course_assessments / assessment_grades)
}
declare function existingAssessmentHandler(d: unknown): Promise<Response>;
