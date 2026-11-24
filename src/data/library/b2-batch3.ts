import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const b2UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "b2-vocabulary-environment-climate",
    level: "B2",
    category: "Vocabulary",
    topic: "The environment and climate change",
    title: "The environment and climate change",
    summary: "Learn precise vocabulary for environmental problems, causes and solutions.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Talking about the environment",
        intro: "At B2 you need vocabulary to describe problems, causes, effects and solutions in a precise way.",
        points: [
          {
            title: "Problems and causes",
            text: "These nouns and collocations describe what is happening to the planet.",
            examples: [
              "global warming / climate change / rising sea levels",
              "greenhouse gases / carbon emissions / fossil fuels",
              "deforestation / habitat loss / endangered species",
              "air pollution / plastic waste / overfishing",
            ],
          },
          {
            title: "Verbs for taking action",
            text: "Learn which verbs go with which nouns.",
            examples: [
              "reduce waste / cut emissions",
              "protect wildlife / preserve natural habitats",
              "recycle materials / reuse containers",
              "switch to renewable energy / invest in solar power",
            ],
          },
          {
            title: "Describing effects and results",
            text: "Use cause-and-effect language.",
            examples: [
              "Burning fossil fuels contributes to global warming.",
              "Rising temperatures have led to more extreme weather.",
              "Pollution threatens the survival of many species.",
              "As a result of deforestation, many animals have lost their homes.",
            ],
          },
          {
            title: "Describing solutions",
            text: "Useful adjectives and noun phrases.",
            examples: [
              "sustainable development / eco-friendly products",
              "renewable energy sources / carbon-neutral",
              "biodegradable packaging / organic farming",
            ],
          },
        ],
        table: {
          caption: "Word families",
          head: ["Noun", "Related word"],
          rows: [
            ["pollution", "pollute (verb), polluted (adjective)"],
            ["sustainability", "sustainable (adjective)"],
            ["conservation", "conserve (verb), conservationist (person)"],
            ["extinction", "extinct (adjective)"],
          ],
        },
        watchOut: [
          "Weather is what happens day to day. Climate is the typical weather over a long period.",
          "Do not confuse global warming (the rise in temperature) with the greenhouse effect (the process that causes it).",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the word you need. Then reveal the answer.",
        items: [
          {
            prompt: "Coal, oil and gas are examples of ___ fuels.",
            answer: "fossil",
            why: "Fossil fuels come from ancient plants and animals.",
          },
          {
            prompt: "Energy from the sun, wind and water is called ___ energy.",
            answer: "renewable",
            why: "Renewable energy does not run out.",
          },
          {
            prompt: "Animals such as the tiger are at risk of disappearing. They are ___ species.",
            answer: "endangered",
            why: "An endangered species is in danger of becoming extinct.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: environment vocabulary",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Cutting down large areas of forest is called ___.",
            ["conservation", "recycling", "deforestation"],
            2,
            "Deforestation is the destruction of forests.",
          ),
          choice(
            "Many companies are trying to ___ their carbon emissions.",
            ["cut", "preserve", "extinct"],
            0,
            "Cut/reduce emissions is the correct collocation.",
          ),
          choice(
            "Packaging that breaks down naturally is described as ___.",
            ["endangered", "biodegradable", "carbon-neutral"],
            1,
            "Biodegradable materials decompose naturally.",
          ),
          choice(
            "Burning fossil fuels ___ to global warming.",
            ["protects", "contributes", "provides"],
            1,
            "Contribute to is the correct phrase.",
          ),
          gap(
            "Coal, oil and natural gas are all ___ fuels. (one word)",
            ["fossil"],
            "Fossil fuels come from ancient plants and animals and release greenhouse gases when burned.",
          ),
          choice(
            "Which is a renewable source of energy?",
            ["coal", "natural gas", "wind power"],
            2,
            "Wind power is renewable.",
          ),
          choice(
            "We should ___ natural habitats so that wildlife can survive.",
            ["preserve", "pollute", "waste"],
            0,
            "Preserve means protect something so that it stays in good condition.",
          ),
          choice(
            "Overfishing ___ the survival of some fish species.",
            ["recycles", "invests", "threatens"],
            2,
            "Threatens means puts in danger.",
          ),
          choice(
            "Rising temperatures have ___ more extreme weather events.",
            ["led", "led to", "resulted"],
            1,
            "Lead to + noun is the right pattern.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b2-reading-four-day-week",
    level: "B2",
    category: "Reading",
    topic: "Reading a news feature",
    title: "Reading: should we work a four-day week?",
    summary: "Read a balanced news feature and identify arguments, examples and the writer's stance.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Four days, same pay?",
        before: [
          "How many hours do people in your country work in a week?",
          "Would you prefer a shorter working week with the same salary? What could be the drawbacks?",
        ],
        paragraphs: [
          "For more than a century, the five-day working week has been the standard in most industrialised countries. Now, a growing number of companies are asking whether it is still necessary. Over the past few years, several trials in Europe have allowed employees to work four days a week without losing any pay, and the early results have been striking.",
          "In one of the largest experiments, around sixty firms reduced the working week to thirty-two hours. At the end of the trial, most of them decided to keep the new system. Managers reported that employees were happier and less likely to leave, while productivity remained stable. Absences due to illness fell by almost a third, and some firms even noticed an increase in revenue.",
          "Critics, however, are not convinced. They argue that the trials took place mainly in office-based companies, where tasks can be organised more flexibly. For workers in hospitals, shops or factories, a shorter week might simply mean more pressure, because the same amount of work has to be completed in less time. Others point out that firms which volunteer for such trials are likely to be more open to change than the average employer.",
          "Supporters respond that the point is not to impose a single model but to encourage employers to focus on results rather than hours. If a task can be done well in four days, they say, there is little reason to insist on five. Whether the idea spreads widely may depend on whether governments are willing to support it. For the moment, the debate shows no sign of ending.",
        ],
        glossary: [
          { term: "striking", meaning: "surprising and very noticeable" },
          { term: "productivity", meaning: "how much work is done in a certain time" },
          { term: "revenue", meaning: "the money a company receives" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the feature",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What has happened in several trials in Europe?",
            [
              "Workers have worked fewer days without losing pay.",
              "Companies have introduced a six-day week.",
              "Salaries have been reduced.",
            ],
            0,
            "The first paragraph says employees worked four days without losing pay.",
          ),
          gap(
            "In the large trial, firms reduced the working week to ___ hours. (a number)",
            ["32", "thirty-two", "thirty two"],
            "The text says the week was reduced to thirty-two hours.",
          ),
          choice(
            "What did most firms decide at the end of the trial?",
            ["To return to five days", "To reduce salaries", "To keep the new system"],
            2,
            "Most of them decided to keep the new system.",
          ),
          choice(
            "What was the effect on illness absence?",
            ["It increased.", "It stayed the same.", "It fell by almost a third."],
            2,
            "The text says absences through illness fell by almost a third.",
          ),
          choice(
            "What is one criticism of the trials?",
            [
              "They mostly involved office-based firms, so results may not apply everywhere.",
              "They were too short.",
              "They were paid for by the government.",
            ],
            0,
            "Critics say the trials took place mainly in office-based companies.",
          ),
          choice(
            "What do supporters say about the aim of a shorter week?",
            [
              "To make everyone work less",
              "To focus on results instead of hours",
              "To force employers to change",
            ],
            1,
            "Supporters want employers to focus on results rather than hours.",
          ),
          choice(
            "What is the writer's overall approach?",
            [
              "Strongly in favour of the four-day week",
              "Presenting both sides of the argument",
              "Strongly against it",
            ],
            1,
            "The writer reports benefits, criticisms and the supporters' reply.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b2-writing-application-letter",
    level: "B2",
    category: "Writing",
    topic: "Writing a formal letter of application",
    title: "Writing: a letter of application",
    summary: "Write a formal letter that presents your skills and experience persuasively.",
    minutes: 28,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "You have seen this advertisement. 'Summer volunteers wanted: The Westbrook Language Camp is looking for volunteers aged 17 to 25 to help with activities for children aged 8 to 12 during July. Good English required. Experience with children is an advantage.' Write a letter of application to the camp director, Ms Hart. Explain why you are suitable, describe your relevant experience and say what you hope to gain.",
        wordGuide: "A class guide: about 140 to 190 words. This is not an exam rule.",
        planning: [
          "Begin with Dear Ms Hart, and say which position you are applying for and where you saw the advertisement.",
          "Paragraph 2: explain your qualifications and experience (language level, work with children).",
          "Paragraph 3: say why you want to take part and what you hope to gain.",
          "Close formally: say you are available for interview, and use Yours sincerely.",
        ],
        usefulLanguage: [
          "I am writing to apply for the position of … advertised in …",
          "I believe that I am well qualified for this post because …",
          "I have extensive experience of … / I have worked as …",
          "I am a patient, responsible and enthusiastic person.",
          "I would welcome the opportunity to …",
          "I would be available for an interview at any time.",
          "I look forward to hearing from you.",
        ],
        checklist: [
          "I used a formal style (no contractions or slang).",
          "I explained why I am suitable, with examples.",
          "I explained what I hope to gain.",
          "I used formal linking words (moreover, in addition, as a result).",
          "I opened and closed the letter correctly.",
          "I checked grammar, spelling and punctuation.",
        ],
        model: [
          "Dear Ms Hart,",
          "I am writing to apply for the position of summer volunteer at the Westbrook Language Camp, which was advertised on the school noticeboard.",
          "I believe that I am well qualified for the post. I am seventeen, and my English is at upper-intermediate level. Moreover, I have helped to organise games for children at my local sports club for two years, and last summer I worked as an assistant at a holiday camp, where I was responsible for a group of ten children. As a result, I am patient and confident when working with young people.",
          "I would welcome the opportunity to take part because I hope to become a teacher in the future. I would like to improve my communication skills and learn how to plan activities in English.",
          "I would be available for an interview at any time, and I look forward to hearing from you.",
          "Yours sincerely,",
          "Nuria Campos",
        ],
        modelNotes: [
          "It states the purpose of the letter in the first sentence.",
          "It links qualifications to the requirements of the advertisement: English and experience with children.",
          "It uses formal language and linkers: Moreover, as a result.",
          "It ends with a polite closing and the correct sign-off for Dear Ms Hart.",
        ],
        assessment: [
          "Does the letter cover qualifications, experience and what the writer hopes to gain?",
          "Is the register formal and appropriate?",
          "Is the text well organised with clear paragraphs?",
          "Is there a range of structures and vocabulary?",
          "Is the language accurate, with few errors?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "b2-everyday-course-enquiry",
    level: "B2",
    category: "Everyday English",
    topic: "Making an enquiry",
    title: "Everyday English: enquiring about a course by phone",
    summary: "Ask for information politely, check details and respond to unexpected answers.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Polite enquiries",
        points: [
          {
            title: "Opening the call",
            text: "State who you are and what you want.",
            examples: [
              "Good morning. I'm calling to enquire about your evening courses.",
              "I'd like some information about …, if possible.",
              "Could you put me through to the admissions office, please?",
            ],
          },
          {
            title: "Asking indirect questions",
            text: "Indirect questions sound more polite than direct ones. Use statement word order after the introductory phrase.",
            examples: [
              "Could you tell me how much the course costs? (not: how much does it cost)",
              "I was wondering whether there are any places left.",
              "Do you happen to know when the next course starts?",
            ],
          },
          {
            title: "Checking and clarifying",
            text: "Repeat or ask for details to make sure you understand.",
            examples: [
              "Let me just check that I've got that right. The course starts on 12 January and costs 300 euros?",
              "Sorry, could you repeat the second part?",
              "Would it be possible to receive the details by email?",
            ],
          },
          {
            title: "Closing",
            text: "Thank the person and say what you will do next.",
            examples: [
              "Thank you very much for your help. I'll think about it and get back to you.",
              "That's very helpful. I'll send the form by Friday.",
            ],
          },
        ],
        watchOut: [
          "In indirect questions the verb is not inverted: 'Could you tell me where the school is?' not 'where is the school'.",
          "Avoid too many questions in a row. Ask one, listen, and then ask the next.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: enquiries",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which question is the most polite and correct?",
            [
              "How much does the course cost?",
              "Could you tell me how much does the course cost?",
              "Could you tell me how much the course costs?",
            ],
            2,
            "In an indirect question the subject comes before the verb: how much the course costs.",
          ),
          choice(
            "'I was wondering whether there are any places left.' This sentence is ___.",
            ["formal and indirect", "angry", "informal slang"],
            0,
            "I was wondering whether … is a polite indirect question.",
          ),
          gap(
            "Let me just ___ that I've got the details right.",
            ["check", "confirm", "make sure"],
            "Check or confirm that you understood.",
          ),
          choice(
            "What is the best way to ask someone to repeat?",
            ["What?", "Say again.", "Sorry, could you repeat that, please?"],
            2,
            "Polite and clear.",
          ),
          gap(
            "I'll think about it and get ___ to you. (one word)",
            ["back"],
            "Get back to someone means respond later.",
          ),
          choice(
            "Choose the correctly formed indirect question.",
            [
              "Do you know when does the course start?",
              "Do you know when the course starts?",
              "Do you know when the course does start?",
            ],
            1,
            "Indirect questions use statement word order: when the course starts.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: a telephone enquiry",
        setup: "Work with a partner. Student A phones a language school. Student B works at the school's reception. Then swap roles.",
        prompts: [
          { label: "Student A (caller)", text: "You want to join an evening Spanish course. Ask about the start date, the price, how many students are in a class, and whether there is a free trial lesson. Check the details." },
          { label: "Student B (receptionist)", text: "Answer the questions. Invent details (dates, price, class size). Offer to send an email with more information." },
        ],
        usefulLanguage: [
          "I'm calling to enquire about …",
          "Could you tell me whether/when/how much …?",
          "I was wondering if …",
          "Let me just check that I've got that right.",
          "Would it be possible to …?",
          "Thank you for your help. I'll get back to you.",
        ],
        steps: [
          "Make a list of four questions.",
          "Act the call without reading, in a polite and formal tone.",
          "Swap roles and invent different details.",
        ],
        checklist: [
          "I opened and closed the call politely.",
          "I used at least three indirect questions.",
          "I checked the details.",
          "I used a formal register.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "Receptionist: Good morning, Greenfield Language School. How can I help you?",
            "Caller: Good morning. I'm calling to enquire about your evening Spanish courses.",
            "Receptionist: Of course. What would you like to know?",
            "Caller: Could you tell me when the next course starts, and how much it costs?",
            "Receptionist: It starts on 12 January and the price is 300 euros for twelve weeks.",
            "Caller: Let me just check that I've got that right. 12 January, 300 euros. And do you happen to know how many students are in each class?",
            "Receptionist: There are never more than twelve. I can send you an email with all the details, if you like.",
            "Caller: That would be great, thank you. I'll get back to you next week.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b2-revision-mixed-3",
    level: "B2",
    category: "Revision",
    topic: "Mixed B2 revision",
    title: "B2 mixed revision 3",
    summary: "Twelve mixed questions on environment vocabulary, reporting, future forms, modals and formal language.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the B2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "Energy from the sun, wind and water is ___ energy.",
            ["renewable", "fossil", "nuclear"],
            0,
            "Renewable energy does not run out.",
          ),
          gap(
            "She admitted ___ the vase. (break)",
            ["breaking"],
            "Admit is followed by -ing.",
          ),
          choice(
            "By the end of the year, I ___ here for a decade.",
            ["will work", "am working", "will have worked"],
            2,
            "Future perfect: will have worked.",
          ),
          choice(
            "Could you tell me ___?",
            ["where is the station", "where the station does", "where the station is"],
            2,
            "Indirect question: statement word order.",
          ),
          gap(
            "He suggested ___ a taxi. (take)",
            ["taking"],
            "Suggest is followed by -ing.",
          ),
          choice(
            "I wish I ___ more time to travel.",
            ["had", "have", "would have"],
            0,
            "Wish + past simple for a present situation.",
          ),
          choice(
            "The company ___ a profit this year, so they gave everyone a bonus.",
            ["did", "made", "took"],
            1,
            "Make a profit is the correct collocation.",
          ),
          gap(
            "Hardly ___ I sat down when the phone rang. (had)",
            ["had"],
            "Hardly + had + subject + past participle + when.",
          ),
          choice(
            "Despite ___ tired, she finished the race.",
            ["she was", "being", "to be"],
            1,
            "Despite is followed by -ing or a noun.",
          ),
          choice(
            "The report ___ by the committee next week.",
            ["will discuss", "is discussing", "will be discussed"],
            2,
            "Future passive: will be discussed.",
          ),
          gap(
            "Rising temperatures threaten the survival of many ___ species. (endanger)",
            ["endangered"],
            "Endangered species are at risk of extinction.",
          ),
          choice(
            "A formal letter begins 'Dear Ms Hart,'. How should it end?",
            ["Yours sincerely", "Yours faithfully", "Love"],
            0,
            "When you know the name (Dear Ms Hart) you end with Yours sincerely. Yours faithfully is for Dear Sir or Madam.",
          ),
        ],
      },
    ],
  },
];
