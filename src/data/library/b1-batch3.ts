import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const b1UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "b1-vocabulary-work-careers",
    level: "B1",
    category: "Vocabulary",
    topic: "Work and careers",
    title: "Work and careers",
    summary: "Learn words for jobs, applying for work and life in the workplace.",
    minutes: 13,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for the world of work",
        intro: "Many work words look similar but are used differently. Learn the common pairs.",
        points: [
          {
            title: "Getting a job",
            text: "These are the steps most people follow.",
            examples: [
              "apply for a job / send your CV and a covering letter",
              "be invited to an interview",
              "get an offer / accept or turn down an offer",
              "start a new job / get promoted",
            ],
          },
          {
            title: "Types of work",
            text: "People work in different ways.",
            examples: [
              "a full-time job / a part-time job",
              "a permanent contract / a temporary contract",
              "be self-employed / work freelance",
              "work shifts / work from home",
            ],
          },
          {
            title: "Money and conditions",
            text: "Be careful with salary, wage, income and pay.",
            examples: [
              "a monthly salary (fixed, paid every month)",
              "an hourly wage (paid per hour)",
              "overtime (extra hours of work)",
              "paid holiday / sick leave",
            ],
          },
          {
            title: "Colleagues and tasks",
            text: "People who work with you and what they do.",
            examples: [
              "a colleague / a manager / an employer / an employee",
              "meet a deadline",
              "attend a meeting / give a presentation",
              "be responsible for the team",
            ],
          },
        ],
        table: {
          caption: "Easily confused pairs",
          head: ["Word", "Meaning"],
          rows: [
            ["employer", "the person or company that gives you a job"],
            ["employee", "a person who works for an employer"],
            ["career", "the series of jobs a person has in their working life"],
            ["profession", "a type of job that needs special training, such as doctor"],
          ],
        },
        watchOut: [
          "Work is uncountable (some work). Job is countable (a job). Say 'I have a lot of work' and 'I found a new job'.",
          "We have an interview or go to an interview. We do not 'do' an interview.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the word you need. Then reveal the answer.",
        items: [
          {
            prompt: "Sara works from nine to five, five days a week. She has a ___ job.",
            answer: "full-time",
            why: "Full-time means the normal number of hours in a week.",
          },
          {
            prompt: "Tom is paid a fixed amount every month. This is his ___.",
            answer: "salary",
            why: "A salary is a fixed amount paid regularly, usually monthly.",
          },
          {
            prompt: "The company offered Anna a job, but she did not accept it. She ___ the offer.",
            answer: "turned down / refused",
            why: "Turn down means refuse.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: work and careers",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "I'm looking for a ___ job because I study in the mornings.",
            ["full-time", "permanent", "part-time"],
            2,
            "Part-time means fewer hours than a normal working week.",
          ),
          choice(
            "To apply for the job, you must send your CV and a ___.",
            ["covering letter", "salary", "shift"],
            0,
            "A covering letter goes with a CV.",
          ),
          gap(
            "She works as a ___ designer, so she chooses her own clients. (self-employed)",
            ["freelance"],
            "A freelance worker is self-employed and works for different clients.",
          ),
          choice(
            "The company has 200 ___, including office staff and drivers.",
            ["employers", "employees", "contracts"],
            1,
            "Employees are the people who work for a company.",
          ),
          gap(
            "He worked extra hours last month, so he got paid ___. (hours beyond normal)",
            ["overtime"],
            "Overtime is work done beyond your normal hours.",
          ),
          choice(
            "'I have a temporary ___ for six months.'",
            ["colleague", "contract", "salary"],
            1,
            "A contract is the legal agreement for a job.",
          ),
          choice(
            "Which phrase is correct?",
            ["to make a deadline", "to do a deadline", "to meet a deadline"],
            2,
            "The usual collocation is meet a deadline.",
          ),
          gap(
            "I was ___ last year, so now I have a better job. (promote)",
            ["promoted"],
            "Promote means give someone a higher position at work: I was promoted.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b1-reading-job-interview-tips",
    level: "B1",
    category: "Reading",
    topic: "Reading advice",
    title: "Reading: how to do well in a job interview",
    summary: "Read an advice article and find main ideas, details and the writer's opinion.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Your best interview",
        before: [
          "Have you ever had an interview? How did you feel?",
          "What advice would you give to someone before an interview?",
        ],
        paragraphs: [
          "An interview is only about thirty minutes long, but it can change your life. Many people feel nervous, but careful preparation makes a big difference. Here are four simple tips.",
          "First, find out about the company. Visit its website, read recent news and think about why you would like to work there. Interviewers are impressed by candidates who know something about the organisation, and the question 'Why do you want this job?' is almost certain to come up.",
          "Second, practise your answers. Ask a friend to act as the interviewer and try to answer questions such as 'What are your strengths?' Do not memorise a speech, though. If you sound like a robot, the interviewer will not remember you.",
          "Third, arrive on time. Plan your journey carefully and try to be ten minutes early. Wear clothes that are smart but comfortable, and remember to smile when you meet the interviewer.",
          "Finally, prepare some questions of your own. Asking about the team or the training shows that you are serious about the job. And don't worry if you make a mistake. Interviewers know that everyone feels nervous, and they care more about your attitude than about perfect answers.",
        ],
        glossary: [
          { term: "candidate", meaning: "a person who applies for a job" },
          { term: "organisation", meaning: "a company or group of people working together" },
          { term: "attitude", meaning: "the way you think and behave towards something" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer or type a short answer. Go back to the text to check.",
        questions: [
          choice(
            "What is the writer's main purpose?",
            ["To give advice about interviews", "To describe a company", "To explain how to write a CV"],
            0,
            "The article gives four tips to prepare for a job interview.",
          ),
          choice(
            "Why should you research the company?",
            [
              "Because you must tell them its history.",
              "Because they will test you on it.",
              "Because interviewers are impressed by candidates who know about it.",
            ],
            2,
            "The text says interviewers are impressed and the question 'Why do you want this job?' is likely.",
          ),
          choice(
            "What does the writer say about memorising answers?",
            ["It is the best method.", "You shouldn't do it because you will sound like a robot.", "It is only useful for short answers."],
            1,
            "The writer says: 'Do not memorise a speech … If you sound like a robot, the interviewer will not remember you.'",
          ),
          gap(
            "You should try to arrive ___ minutes early. (a number)",
            ["10", "ten"],
            "The text says to try to be ten minutes early.",
          ),
          choice(
            "What should you wear?",
            ["Smart but comfortable clothes", "Casual clothes", "A uniform"],
            0,
            "The text says to wear clothes that are smart but comfortable.",
          ),
          choice(
            "Why should you prepare your own questions?",
            ["It makes the interview shorter.", "Interviewers will pay you more.", "It shows that you are serious about the job."],
            2,
            "Asking about the team or training shows you are serious.",
          ),
          choice(
            "What do interviewers care about most, according to the final paragraph?",
            ["Perfect answers", "How quickly you answer", "Your attitude"],
            2,
            "They care more about your attitude than perfect answers.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b1-writing-story",
    level: "B1",
    category: "Writing",
    topic: "Writing a story",
    title: "Writing: a story",
    summary: "Write a short story with a clear beginning, middle and end, using past tenses and linking words.",
    minutes: 25,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your English teacher has asked you to write a story for the school magazine. Your story must begin with this sentence: 'When I opened the door, I could not believe what I saw.' Write your story.",
        wordGuide: "A class guide: about 120 to 150 words. This is not an exam rule.",
        planning: [
          "Use the sentence you are given to start your story.",
          "Plan three parts: the situation, the problem or surprise, and how it ends.",
          "Use past simple for main events, past continuous for background, and past perfect for earlier events.",
          "Use linking words to show the order of events: first, then, after that, suddenly, finally.",
        ],
        usefulLanguage: [
          "When I opened the door, I could not believe what I saw.",
          "It was a dark and rainy evening and I was walking home.",
          "Suddenly, … / At that moment, … / A few minutes later, …",
          "I had never seen anything like it.",
          "To my surprise, … / Luckily, … / Unfortunately, …",
          "In the end, … / From that day on, …",
        ],
        checklist: [
          "I began with the sentence given.",
          "I used past simple, past continuous and past perfect.",
          "I used time linkers to show the order of events.",
          "I described feelings and the scene, not only actions.",
          "My story has a clear ending.",
          "I checked spelling and punctuation.",
        ],
        model: [
          "When I opened the door, I could not believe what I saw. My living room was full of balloons, and all my friends were standing in the middle, shouting 'Surprise!'",
          "I had spent the whole day at the dentist, feeling terrible, and I had completely forgotten that it was my birthday. While I was at the clinic, my sister had secretly invited everyone from school.",
          "At first I was speechless. Then I started to laugh, and I hugged my sister, who was smiling from ear to ear. There was a huge cake on the table with fifteen candles.",
          "In the end, it turned out to be the best birthday ever. I had never felt so happy, and I will never forget that evening.",
        ],
        modelNotes: [
          "It uses the opening sentence exactly as given.",
          "It uses three past tenses: past simple (opened, started), past continuous (was standing/while I was at) and past perfect (had spent, had forgotten).",
          "It uses time linkers: at first, then, in the end.",
          "It has a clear beginning, middle and end, and describes feelings.",
        ],
        assessment: [
          "Does the story begin with the given sentence and follow it logically?",
          "Is there a clear structure with a beginning, a development and an ending?",
          "Are past tenses and linking words used accurately?",
          "Is the vocabulary varied and interesting?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "b1-everyday-doctor-pharmacy",
    level: "B1",
    category: "Everyday English",
    topic: "Health appointments and the pharmacy",
    title: "Everyday English: at the doctor's and the pharmacy",
    summary: "Describe symptoms, understand advice and ask about medicine.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for health situations",
        points: [
          {
            title: "Describing symptoms",
            text: "Say what is wrong, how long, and how bad it is.",
            examples: [
              "I've got a sore throat and a temperature.",
              "I've had a headache since yesterday.",
              "My back hurts when I bend over.",
              "I feel dizzy and sick.",
            ],
          },
          {
            title: "What the doctor may say",
            text: "Understand the questions and the advice.",
            examples: [
              "How long have you felt like this?",
              "Do you have any allergies?",
              "You should rest and drink plenty of water.",
              "I'll prescribe some antibiotics. Take one tablet twice a day after meals.",
            ],
          },
          {
            title: "At the pharmacy",
            text: "Ask for medicine and check instructions.",
            examples: [
              "Do you have anything for a cough?",
              "How often should I take it?",
              "Are there any side effects?",
              "Can I take it with other medicine?",
            ],
          },
        ],
        watchOut: [
          "We say 'I have a headache' or 'My head hurts', not 'I have pain in the head' in everyday speech.",
          "Prescription = a paper from the doctor that lets you get the medicine. Medicine = what you take to feel better.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: health language",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which sentence is the best way to say what is wrong?",
            ["I've had a sore throat for three days.", "I have problems.", "I'm bad."],
            0,
            "Be specific: what is wrong and how long.",
          ),
          choice(
            "'You should rest and drink plenty of water.' The doctor is giving you ___.",
            ["an allergy", "advice", "a prescription"],
            1,
            "Should is used to give advice.",
          ),
          gap(
            "Take one tablet twice a day ___ meals. (one word)",
            ["after", "before", "with"],
            "Medicine instructions use before, after or with meals.",
          ),
          choice(
            "'Do you have any ___ to penicillin?' means: does it make you ill?",
            ["prescriptions", "allergies", "symptoms"],
            1,
            "An allergy is a bad reaction to something.",
          ),
          choice(
            "You want to know how many times to take the medicine. You ask:",
            ["How long is it?", "What time is it?", "How often should I take it?"],
            2,
            "How often asks about frequency.",
          ),
          gap(
            "I've got a ___ throat, so it hurts when I swallow. (adjective)",
            ["sore"],
            "A sore throat is the usual collocation.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: at the doctor's",
        setup: "Work with a partner. Student A is the patient. Student B is the doctor. Then swap roles.",
        prompts: [
          { label: "Student A (patient)", text: "You have had a cough and a temperature for three days. Describe your symptoms and ask for advice. Ask how often to take the medicine." },
          { label: "Student B (doctor)", text: "Ask how long the patient has felt ill, whether they have allergies, and give advice. Explain how to take the medicine." },
        ],
        usefulLanguage: [
          "I've had … for … days.",
          "I feel dizzy / sick / very tired.",
          "I'm allergic to …",
          "You should rest and drink plenty of water.",
          "Take one tablet twice a day.",
          "How often should I take it?",
        ],
        steps: [
          "Plan three sentences to describe your symptoms.",
          "Act the conversation without reading.",
          "Swap roles and use a different problem.",
        ],
        checklist: [
          "I used the present perfect with for and since.",
          "I gave advice with should.",
          "I asked about the medicine.",
          "I used polite language.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "Doctor: Good morning. What seems to be the problem?",
            "Patient: I've had a cough and a temperature for three days, and I feel very tired.",
            "Doctor: Do you have any allergies?",
            "Patient: No, I don't.",
            "Doctor: You should rest and drink plenty of water. I'll prescribe some medicine. Take one tablet twice a day after meals.",
            "Patient: Thank you. How long should I take it for?",
            "Doctor: For five days. If you don't feel better, come back.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b1-revision-mixed-3",
    level: "B1",
    category: "Revision",
    topic: "Mixed B1 revision",
    title: "B1 mixed revision 3",
    summary: "Twelve mixed questions on work vocabulary, past tenses, conditionals, passives and everyday English.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the B1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "She was ___ to manager last year.",
            ["promoted", "applied", "offered"],
            0,
            "Be promoted to means be given a higher job.",
          ),
          gap(
            "When I got home, my sister had already ___ dinner. (cook)",
            ["cooked"],
            "Past perfect: had cooked. The gap takes the past participle.",
          ),
          choice(
            "If I ___ you, I would take the job.",
            ["am", "was", "were"],
            2,
            "In the second conditional we often say if I were you.",
          ),
          choice(
            "The window ___ by a ball yesterday.",
            ["broke", "was broken", "has broken"],
            1,
            "Past simple passive: was broken.",
          ),
          gap(
            "He told me that he ___ tired. (be, reported speech)",
            ["was"],
            "Reported speech: the present moves back to the past.",
          ),
          choice(
            "My brother, ___ lives in Canada, is a doctor.",
            ["who", "that", "which"],
            0,
            "A non-defining clause for a person uses who.",
          ),
          choice(
            "I suggest ___ the doctor.",
            ["to see", "see", "seeing"],
            2,
            "Suggest is followed by -ing.",
          ),
          gap(
            "You ___ take an umbrella. It might rain. (should)",
            ["should"],
            "Should is used to give advice.",
          ),
          choice(
            "'How often should I take this medicine?' — 'Twice a day, ___ meals.'",
            ["behind", "to", "after"],
            2,
            "Medicine instructions use after meals.",
          ),
          choice(
            "I have worked here ___ three years.",
            ["for", "since", "during"],
            0,
            "A period of time takes for.",
          ),
          gap(
            "We'll go for a walk unless it ___. (rain)",
            ["rains"],
            "After unless we use the present simple: unless it rains.",
          ),
          choice(
            "The film was so ___ that I fell asleep.",
            ["bored", "boring", "bore"],
            1,
            "-ing adjectives describe the thing.",
          ),
        ],
      },
    ],
  },
];
