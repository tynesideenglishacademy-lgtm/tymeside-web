-- DRAFT — NOT APPLIED. Review, then run in the Supabase SQL editor (or as a migration).
-- Stores self-directed Exam Bank results on the student's CRM profile, with attempt numbering.
-- Kept separate from assessment_grades / course_assessments: practice scores must not mix with
-- placement or formal assessments.

create table if not exists public.exam_practice_attempts (
  id               uuid primary key default gen_random_uuid(),
  student_id       text not null references public.students(id) on delete cascade,
  exam_id          text not null,            -- a2_key | b1_preliminary | b2_first | c1_advanced (later c2_proficiency)
  paper_key        text not null,            -- e.g. 'b2_first:reading:test1'
  paper_label      text,                     -- display name, e.g. 'B2 First Reading — Practice Test 1'
  attempt_number   int  not null,            -- 1, 2, 3 ... per student + paper (set by trigger)
  submission_id    text not null unique,     -- from the Exam Bank; makes webhook retries idempotent
  assignment_id    text,
  raw_score        numeric,
  max_score        numeric,
  scale_score      numeric,
  cefr             text,                     -- provisional label from the scoring engine
  calibration_source text,
  result_status    text not null default 'scored'
                   check (result_status in ('scored','needs_review')),
                   -- writing/speaking: 'needs_review' until marked; never an invented score
  result_data      jsonb not null,           -- full AttemptResult as delivered
  started_at       timestamptz,
  completed_at     timestamptz,
  created_at       timestamptz not null default now(),
  unique (student_id, paper_key, attempt_number)
);

create index if not exists exam_practice_attempts_student_idx
  on public.exam_practice_attempts (student_id, completed_at desc);

-- Attempt number = earlier attempts at the same paper by the same student + 1.
create or replace function public.exam_practice_attempts_set_number()
returns trigger language plpgsql as $$
begin
  perform pg_advisory_xact_lock(hashtext(new.student_id || '|' || new.paper_key));
  select coalesce(max(attempt_number), 0) + 1
    into new.attempt_number
    from public.exam_practice_attempts
   where student_id = new.student_id and paper_key = new.paper_key;
  return new;
end $$;

drop trigger if exists exam_practice_attempts_number on public.exam_practice_attempts;
create trigger exam_practice_attempts_number
  before insert on public.exam_practice_attempts
  for each row execute function public.exam_practice_attempts_set_number();

alter table public.exam_practice_attempts enable row level security;

-- Students: read their own rows only. No insert/update/delete policy: only the server-side
-- webhook (service role, bypasses RLS) writes.
create policy "Students read own practice attempts"
  on public.exam_practice_attempts for select
  using (get_my_role() = 'Student' and student_id in (select my_own_student_ids()));

-- Staff: Admin sees all.
create policy "Admin reads all practice attempts"
  on public.exam_practice_attempts for select
  using (get_my_role() = 'Admin');

-- Teachers: see practice attempts of students enrolled in courses they teach
-- (same pattern as the existing helpers: my_taught_course_ids() -> courses.teacher_id; enrollments links students to courses).
create policy "Teachers read practice attempts of their students"
  on public.exam_practice_attempts for select
  using (
    get_my_role() = 'Teacher'
    and student_id in (
      select e.student_id from public.enrollments e
      where e.course_id in (select my_taught_course_ids())
    )
  );

-- Parents: not included. get_my_role() also returns 'Parent' (payers). If parents should see their
-- children's results in the parent app, add a policy using the same helper the parent views use.
