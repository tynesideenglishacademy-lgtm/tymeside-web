# Student area access plan

## Implemented architecture

- A visible student-area link in the desktop and mobile navigation.
- A homepage access band for the Exam Bank and Cambridge Library.
- A dedicated `/alumnos` sign-in and protected B1-C1 resource dashboard.
- A clear boundary: homework, messages, timetables and personal progress remain in the CRM.
- Shared Supabase authentication with the CRM and mobile app.
- Server-controlled `app_metadata.role` validation: only `Student` accounts enter.
- Per-student activity recording for sessions, resource opens, level filters and Exam Bank launches.
- An admin-only CRM page at `/student-activity` for reviewing that activity.

## Security model

The website and CRM use the same Supabase project, so the website can authenticate the existing student email/password directly without copying credentials. Authorisation is based on server-controlled app metadata and the CRM's `students.auth_id` relationship. Activity rows are protected by row-level security: students can insert and read only their own rows; administrators can read the reporting view.

Files placed in the website's `public` directory remain public and must not be used for restricted student PDFs.

## Resource library content

- B1 Preliminary, B2 First and C1 Advanced exam toolkits, each with writing structures, a model answer, speaking language, collocations, phrasal verbs, common corrections, mini practice and an answer key.
- One self-marking online worksheet per priority level with answer explanations, scoring and retry.
- Activity events for resource opens, downloads, worksheet starts and worksheet completions (including score and total).
- A private `student-resources` Supabase Storage bucket with a Student-role and CRM-profile read policy.
- Ninety-second signed download URLs so the files never need to be placed in the website's public directory.

The private storage migration is live and the three approved toolkits are uploaded. The release verifier confirms that anonymous visitors cannot obtain a signed download URL. Homework and class administration remain exclusively in the CRM.

## Later phases

1. Add A2 Key and C2 Proficiency private packs after the B1-C1 core has been reviewed by a teacher.
2. ~~Pass the authenticated student identity into the Exam Bank~~ Built locally, not deployed: see "Exam Bank sign-in link" below.
3. Add staff-facing content publishing if the resource collection becomes too large for release-managed files.

## Exam Bank sign-in link (built locally, not deployed)

Flow: the student picks a level in `/alumnos` (A2 Key, B1, B2, C1) and the page calls `POST /api/exam-bank-link` with their Supabase access token. `api/exam-bank-link.ts` checks the session and the `Student` role, reads the student's own `students` row under row-level security, fetches the public paper catalogue, and asks the Exam Bank (`/api/assignments/token`) for a signed link. The link lasts two hours, is marked `practice`, and carries the CRM student id as `candidateRef`. The page opens it in the same tab, so it also works on a phone. If the endpoint fails, the student sees a clear error and an "open without saving results" link.

Needed before it can work (nothing here has been set up):
1. Vercel env on this site: `ASSIGNMENT_ISSUER_KEY` (same value as on the Exam Bank server). `VITE_SUPABASE_*` are reused; optionally `EXAM_BASE_URL`.
2. Exam Bank server: `ASSIGNMENT_ISSUER_KEY`, `ASSIGNMENT_TOKEN_SECRET`, `CRM_ASSESSMENT_WEBHOOK_URL`, `CRM_ASSESSMENT_WEBHOOK_SECRET`.
3. **CRM webhook change (not done):** self-directed attempts arrive with `assessmentId` like `self-practice:b2_first` and no teacher-set assessment behind them. The CRM must store them as practice attempts for that student, kept apart from formal grades. Writing and speaking arrive as needing review, with no score.
4. **Parent/student phone app (not done):** the app needs a button that calls the same endpoint (with the student's session) and opens the returned URL. Parent accounts are not handled: the endpoint accepts `Student` accounts only.
5. Tests: `node --test tests/examLink.test.ts`.
