# Student area access plan

## Implemented architecture

- A visible student-area link in the desktop and mobile navigation.
- A homepage access band for the Exam Bank and Cambridge Library.
- A dedicated `/alumnos` sign-in and protected A2-C2 resource dashboard.
- A clear boundary: homework, messages, timetables and personal progress remain in the CRM.
- Shared Supabase authentication with the CRM and mobile app.
- Server-controlled `app_metadata.role` validation: only `Student` accounts enter.
- Per-student activity recording for sessions, resource opens, level filters and Exam Bank launches.
- An admin-only CRM page at `/student-activity` for reviewing that activity.

## Security model

The website and CRM use the same Supabase project, so the website can authenticate the existing student email/password directly without copying credentials. Authorisation is based on server-controlled app metadata and the CRM's `students.auth_id` relationship. Activity rows are protected by row-level security: students can insert and read only their own rows; administrators can read the reporting view.

Files placed in the website's `public` directory remain public and must not be used for restricted student PDFs.

## Next content phase

1. Store downloadable PDFs in a private Supabase bucket.
2. Issue short-lived signed URLs only after the active student session is authorised.
3. Pass the authenticated student identity into the Exam Bank so completed attempts can be attached to the same CRM student record, not just record the launch.
4. Keep homework and class administration in the CRM; the website student area remains a preparation and reference library.
