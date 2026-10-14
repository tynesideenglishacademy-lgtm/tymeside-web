# Exam practice results on the CRM profile — drafts

Status: **drafts for Ben's review. Nothing has been applied to Supabase or the CRM.**

## How it fits together
1. Student taps an exam level in the student area (or the phone app) → `/api/exam-bank-link` issues a signed 2-hour link tied to their `students.id`.
2. Student sits the paper in the Exam Bank.
3. Exam Bank POSTs the signed result to `CRM_ASSESSMENT_WEBHOOK_URL`.
4. The CRM handler sees `assessmentId` starting `self-practice:` and stores a row in `exam_practice_attempts` (new table) — not in `assessment_grades`, so practice never mixes with placement or formal grades.
5. Attempt numbers: the database numbers each student's attempts per paper (1, 2, 3…). The CRM screen can show "B2 First Reading — Practice Test 1 · attempt 2".

## Files
- `001_exam_practice_attempts.sql` — table, numbering trigger, RLS (students read own; Admin reads all).
- `002_webhook_handler_sketch.ts` — new branch for the existing webhook; idempotent on `submission_id`.

## Before applying (your side)
- Teacher visibility: Admin-only by default; add a course-based policy if teachers should see it.
- Reuse your existing signature verifier in the handler.
- Writing/speaking rows are `needs_review` until marked — no invented score.
- Settings still needed: `ASSIGNMENT_ISSUER_KEY` (Vercel + Exam Bank), token secret and webhook URL/secret on the Exam Bank server.
- Then a CRM screen ("Exam practice" on the student profile) reading this table.
