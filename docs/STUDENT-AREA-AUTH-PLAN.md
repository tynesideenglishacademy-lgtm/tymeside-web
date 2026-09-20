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
2. Pass the authenticated student identity into the Exam Bank so completed attempts can be attached to the same CRM student record, not just record the launch.
3. Add staff-facing content publishing if the resource collection becomes too large for release-managed files.
