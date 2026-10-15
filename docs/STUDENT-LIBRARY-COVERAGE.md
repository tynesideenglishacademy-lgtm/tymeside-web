# Student library coverage tracker

Status: **local review build. Nothing here has been deployed.**
Last updated: 13 October 2026.

This file is the plan for extending the `/alumnos` library. Add a row for every new unit, change its status when a teacher has reviewed it, and use the gaps list to choose the next batch.

## How the library is organised

| Layer | Where | Notes |
| --- | --- | --- |
| Topic worksheets (batch 1, 5 questions each) | `src/data/worksheets/{a2,b1,b2,c1,c2}.ts` | 20 sets, review corrections applied. Marked `draft`. |
| Three older worksheets with named sprints | `src/data/studentResources.ts` | Left untouched. They have no `status`, so they stay visible. |
| Study units (new) | `src/data/library/{a2,pre-b1,b1,b2,c1,c2}.ts` | 54 units. Each one is `draft`. |
| Renderer | `src/components/StudyUnits.tsx` | Explanation, guided practice, independent practice, writing, speaking, checklists. |
| Draft gate | `src/data/library/publication.ts` | Drafts show in `npm run dev` and when `VITE_SHOW_DRAFT_RESOURCES=true`. They are removed from the production bundle otherwise. |

Practice scores are only for the student. They are not sent to the CRM as a result, and they are not part of placement or any formal assessment. The only events recorded are `unit_opened` and `unit_practice_completed`.

## Publishing a unit

1. A teacher works through the unit, including the answer keys and model answers.
2. Change `status: "draft"` to `status: "reviewed"` for that unit only.
3. Run `npm run validate:library`, `npm run lint` and `npm run build`.
4. Deploy only with Ben's explicit approval.

Level labels are the academy class pathway (A2, Pre-B1, B1, B2, C1, C2). They are **provisional** until a teacher confirms them. They are not official CEFR results.

## Coverage so far

Every level has the same nine-unit pattern: two grammar, two vocabulary, one reading, one writing, one speaking, one everyday English (with a role play), one mixed revision quiz.

| Level | Grammar | Vocabulary | Reading | Writing | Speaking | Everyday | Revision | Units | Closed questions | Typed-answer questions | Guided items |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 41 | 18 | 15 |
| Pre-B1 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 37 | 20 | 13 |
| B1 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 38 | 19 | 12 |
| B2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 36 | 21 | 12 |
| C1 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 37 | 20 | 12 |
| C2 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 9 | 41 | 16 | 12 |
| **Total** | 12 | 12 | 6 | 6 | 6 | 6 | 6 | **54** | **230** | **114** | **76** |

### Unit index

| Level | Unit key | Title |
| --- | --- | --- |
| A2 | `a2-grammar-present-perfect` | Present perfect: experience and news |
| A2 | `a2-grammar-comparatives-superlatives` | Comparing things: bigger, the best, as tall as |
| A2 | `a2-vocabulary-travel-transport` | Travel and transport |
| A2 | `a2-vocabulary-health-body` | Health and the body |
| A2 | `a2-reading-email-from-hannah` | Reading: an email about weekend plans |
| A2 | `a2-writing-invitation-email` | Writing: an email inviting a friend |
| A2 | `a2-speaking-about-you-free-time` | Speaking: about you and your free time |
| A2 | `a2-everyday-cafe-and-tickets` | Everyday English: ordering food and buying tickets |
| A2 | `a2-revision-mixed-1` | A2 mixed revision 1 |
| Pre-B1 | `preb1-grammar-past-simple-continuous` | Past simple and past continuous |
| Pre-B1 | `preb1-grammar-first-conditional` | First conditional and time clauses |
| Pre-B1 | `preb1-vocabulary-phrasal-verbs-daily-life` | Phrasal verbs for everyday life |
| Pre-B1 | `preb1-vocabulary-word-formation-nouns` | Word formation: nouns and adjectives |
| Pre-B1 | `preb1-reading-phone-free-weekend` | Reading: a weekend without phones |
| Pre-B1 | `preb1-writing-short-story` | Writing: a short story |
| Pre-B1 | `preb1-speaking-describe-photo-opinion` | Speaking: describe a photo and give your opinion |
| Pre-B1 | `preb1-everyday-hotel-and-complaints` | Everyday English: at a hotel |
| Pre-B1 | `preb1-revision-mixed-1` | Mixed revision quiz 1 |
| B1 | `b1-grammar-second-conditional` | Second conditional and wish |
| B1 | `b1-grammar-reported-speech` | Reported speech |
| B1 | `b1-vocabulary-collocations-make-do-take-have` | Collocations: make, do, take, have |
| B1 | `b1-vocabulary-phrasal-verbs-work-study` | Phrasal verbs for work and study |
| B1 | `b1-reading-city-farm` | Reading: a farm in the middle of the city |
| B1 | `b1-writing-review` | Writing: a review |
| B1 | `b1-speaking-discussion-agree-disagree` | Speaking: discuss, agree and disagree |
| B1 | `b1-everyday-phone-appointments` | Everyday English: appointments by phone |
| B1 | `b1-revision-mixed-1` | Mixed revision quiz 1 |
| B2 | `b2-grammar-passive-causative` | The passive and have something done |
| B2 | `b2-grammar-modals-deduction` | Modals of deduction and past modals |
| B2 | `b2-vocabulary-word-formation` | Word formation: Use of English Part 3 skills |
| B2 | `b2-vocabulary-phrasal-verbs-feelings-relationships` | Phrasal verbs for feelings and relationships |
| B2 | `b2-reading-teenage-sleep` | Reading: should school start later? |
| B2 | `b2-writing-opinion-essay` | Writing: an opinion essay |
| B2 | `b2-speaking-compare-photos` | Speaking: compare two photos |
| B2 | `b2-everyday-formal-complaint` | Everyday English: a formal complaint |
| B2 | `b2-revision-mixed-1` | Mixed revision quiz 1 |
| C1 | `c1-grammar-mixed-conditionals-wishes` | Mixed conditionals, wish and if only |
| C1 | `c1-grammar-cleft-sentences` | Cleft sentences |
| C1 | `c1-vocabulary-collocations-work-society` | Collocations for work, business and society |
| C1 | `c1-vocabulary-word-formation-advanced` | Word formation: advanced |
| C1 | `c1-reading-attention-economy` | Reading: the battle for our attention |
| C1 | `c1-writing-proposal` | Writing: a proposal |
| C1 | `c1-speaking-discuss-evaluate` | Speaking: evaluate options and decide |
| C1 | `c1-everyday-meetings-interrupting-summarising` | Everyday English: meetings |
| C1 | `c1-revision-mixed-1` | Mixed revision quiz 1 |
| C2 | `c2-grammar-inversion-emphasis` | Inversion for emphasis |
| C2 | `c2-grammar-subjunctive-hypothetical` | The subjunctive and hypothetical structures |
| C2 | `c2-vocabulary-idioms-figurative` | Idioms and figurative language |
| C2 | `c2-vocabulary-register-formal-neutral` | Register: choosing the right word |
| C2 | `c2-reading-translation` | Reading: what is lost in translation? |
| C2 | `c2-writing-discursive-essay` | Writing: a discursive essay |
| C2 | `c2-speaking-present-defend-view` | Speaking: present and defend a viewpoint |
| C2 | `c2-everyday-diplomacy-feedback-declining` | Everyday English: tact and diplomacy |
| C2 | `c2-revision-mixed-1` | Mixed revision quiz 1 |

## Review notes for the teacher

- **Repeated target:** *uncomfortable* is the answer in three batch-1 questions (A2 word formation Q5, B1 word formation Q2, B2 word formation Q1). The review flagged repetition. Replace one if you want more variety.
- **Open tasks:** writing and speaking units are not marked automatically. Student text stays in the browser and is not saved or sent. Model answers are labelled as one possible answer.
- **Typed answers:** the app compares text after lower-casing, trimming and removing final punctuation. Each typed question lists every accepted form. If a student writes a valid answer that is not listed, add it to `accepted`.
- **Answer position:** each level's correct options are spread across a, b and c (and d where there are four options). `scripts/rebalance-answers.mjs` rebalances a new file.
- **Spelling:** the validator warns about common American spellings. All other British English checks are by eye.
- **Accepted regional alternatives:** examples include *have / take a break*, *were / was* after *as if*, and *refund / money back*.

## Validation each batch must pass

1. `npx tsc -b`
2. `npm run lint`
3. `npm run validate:library` (unique keys and prompts, answer ranges, duplicate options, typed answers that match themselves, block completeness, answer position spread)
4. `npm run validate:library -- --blind`, then answer the answer-free list separately and compare with the keys
5. `npm run build` and confirm the draft keys do not appear in `dist/`
6. Open `/alumnos-preview` in development and check the interaction on desktop and mobile

## Known gaps and next batches

| Gap | Why | Next step |
| --- | --- | --- |
| **Listening in the library** | The study-unit library has no listening unit. Real recorded audio does exist, but only inside the Evaluation Suite exam papers (A2, B1, B2, C1 listening, one recording each). Reading texts are never labelled as listening. | Either link students to those listening papers, or host short recordings with transcripts and add a `listening` block. |
| Infants and Primary (YLE) | Out of scope for now. Current focus is A2 and above (A2 is a single year). Infants and Primary start once the A2+ resources are finished, and are tied to the Tyneside Explorers programme, which is not yet developed. These pupils need picture-based tasks. | Plan a young-learner design with images alongside Tyneside Explorers. |
| Second reading, writing and speaking unit at each level | One of each per level only. | Reading with matching headings or gapped sentences. Writing: email, report, letter, review variations. |
| B1 and Pre-B1 depth | Pre-B1 and B1 each have two grammar units only. | Add present perfect continuous, relative clauses, used to and would, gerunds and infinitives. |
| Pronunciation | Not covered. | Word stress, sentence stress and intonation with audio. |
| Reported speech beyond statements and questions | Orders, requests and reporting verbs are missing. | Add a B1/B2 unit on reporting verbs. |
| Mixed revision | One quiz per level. | Add quiz 2 and 3 for each level that draw on all units. |
| Exam task types | Key word transformation, multiple-choice cloze and open cloze are not yet in the format. | Add a gap-fill block type with multiple blanks in one text. |
| Teacher review | All 54 units and 20 worksheets are still drafts. Ben is part-way through his review (15 Oct 2026): A2, B1 and C2 looked correct so far, B2, C1 and Pre-B1 not yet checked, and one student is testing. Nothing is marked reviewed. | Finish review, then mark reviewed level by level, only on Ben's say-so. |
| CRM display | `unit_opened` and `unit_practice_completed` are new event types in `student_resource_activity`. | Check the CRM `/student-activity` page for how it shows unknown event types. |

## Provisional level labels

All levels on new units are provisional. Pre-B1 is a new filter in the student area, based on the real class pathway. Confirm that the Pre-B1 units fit the actual Pre-B1 course before marking any as reviewed.

## Brand note

The brand rules list a six-colour palette that differs from the website's editorial tokens in `src/index.css`. The new units use the website's tokens so that they match the rest of the student area. Decide which palette is canonical before a visual redesign.

## Exam material (Tyneside Evaluation Suite) — corrected 13 October 2026

An earlier version of this tracker said there was no exam material at some levels and no real audio. That was wrong: it was written before the Evaluation Suite repo was inspected. The exam papers live in the separate Evaluation Suite (`exam.tynesideacademy.com`, linked from `/alumnos` as the practice exam and the Exam Bank). They are not part of this library.

Per level, Practice Test 1 (full length, original content to spec, practice-only pending IP counsel sign-off):

| Level | Reading / Use of English | Listening (recorded) | Writing (AI-marked) | Speaking sittings in the item bank |
| --- | --- | --- | --- | --- |
| A2 Key | Parts 1-5, 30 marks, auto-marked | 5 parts, 25 marks, auto-marked | Parts 6-7 | 3 |
| B1 Preliminary | 6 parts, 32 marks, auto-marked | 4 parts, 25 marks, auto-marked | Part 1 email (+ article or story in the bank) | 4 |
| B2 First | 7 parts, 70 marks, auto-marked | 4 parts, 30 marks, auto-marked | Part 1 essay | 4 |
| C1 Advanced | 8 parts, 78 marks, auto-marked | 4 parts, 30 marks, auto-marked | Part 1 essay | 4 |
| Pre-B1 | No exam: Pre-B1 is a class pathway only (study units exist, no Cambridge-style paper is needed) | none | none | none |
| C2 Proficiency | **Gap: exam still to be built** | none | none | none |

Notes: the public catalogue offers only Practice Test 1 per level and offers only compulsory single-task writing parts. Speaking sittings 2-4 exist in the item bank but the catalogue serves sitting 1 only. Writing and speaking are not auto-marked by the objective marker. Picture tasks (A2/B1 listening Part 1, A2 Part 7, speaking photos) are authored as descriptions, not images. Student identity: personalised links are built and deployed but inactive until `ASSIGNMENT_ISSUER_KEY` is set on the website project. Saving results to the student's CRM profile (with attempt numbers per paper) is drafted in `docs/crm-exam-practice-attempts/` and not yet applied. See `STUDENT-AREA-AUTH-PLAN.md`.
