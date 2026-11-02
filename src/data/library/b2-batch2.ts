import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const b2UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "b2-grammar-reporting-verbs",
    level: "B2",
    category: "Grammar",
    topic: "Reporting verbs",
    title: "Reporting verbs: suggest, admit, deny, refuse and more",
    summary: "Report what people said, asked and promised with the right verb pattern.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Choosing the reporting verb and its pattern",
        intro: "Instead of always using said or told, a reporting verb tells us the purpose of the words. Each verb has its own pattern.",
        points: [
          {
            title: "Verb + to-infinitive",
            text: "Agree, refuse, promise, offer, threaten and demand are followed by to + verb.",
            examples: [
              "She promised to call me.",
              "He refused to apologise.",
              "They offered to help us move.",
            ],
          },
          {
            title: "Verb + object + to-infinitive",
            text: "Advise, ask, invite, order, remind, tell and warn need a person before to + verb.",
            examples: [
              "The doctor advised him to rest.",
              "She reminded us to lock the door.",
              "The police warned drivers not to park there.",
            ],
          },
          {
            title: "Verb + -ing",
            text: "Admit, deny, suggest, recommend and regret are followed by the -ing form. Apologise and insist need a preposition (for, on).",
            examples: [
              "He admitted taking the money.",
              "She denied breaking the window.",
              "I suggested going to the museum.",
              "They apologised for being late.",
            ],
          },
          {
            title: "Verb + that clause",
            text: "Many reporting verbs can be followed by a that-clause: explain, complain, claim, announce, suggest. The tense usually moves back.",
            examples: [
              "She complained that the food was cold.",
              "He claimed that he had never met her.",
              "The captain announced that the flight would be delayed.",
            ],
          },
        ],
        watchOut: [
          "Do not say 'He suggested me to go'. Say 'He suggested that I go / He suggested going'.",
          "Say, tell and ask differ: say something, tell someone something, ask someone to do something.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Report each sentence with a verb. Then reveal a model answer.",
        items: [
          {
            prompt: "'I didn't take your phone,' said Ben.",
            answer: "Ben denied taking my phone.",
            why: "Deny + -ing. The action is rejected, so deny is the best reporting verb.",
          },
          {
            prompt: "'Don't touch the wires!' the electrician told us.",
            answer: "The electrician warned us not to touch the wires.",
            why: "Warn + object + not to + verb.",
          },
          {
            prompt: "'Why don't we have a picnic?' said Eva.",
            answer: "Eva suggested having a picnic. / Eva suggested that we have a picnic.",
            why: "Suggest + -ing or suggest + that clause. It cannot be followed by an object + infinitive.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: reporting verbs",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "She ___ to lend me her car.",
            ["admitted", "denied", "offered"],
            2,
            "Offer + to-infinitive fits the meaning: she offered to lend me her car.",
          ),
          choice(
            "The teacher ___ the students not to talk during the test.",
            ["warned", "suggested", "refused"],
            0,
            "Warn + object + not to + verb.",
          ),
          gap(
            "He denied ___ the answer to his friend. (give)",
            ["giving"],
            "Deny is followed by -ing.",
          ),
          choice(
            "'You should see a dentist,' said my mother. → My mother ___ a dentist.",
            ["told that I see", "advised me to see", "suggested me to see"],
            1,
            "Advise + object + to + verb.",
          ),
          gap(
            "They apologised ___ losing my suitcase. (one word)",
            ["for"],
            "Apologise for + -ing.",
          ),
          choice(
            "'I'll never do it again!' said Tom. → Tom ___ never to do it again.",
            ["suggested", "promised", "complained"],
            1,
            "Promise + to-infinitive.",
          ),
          choice(
            "Find the sentence with a mistake in the reporting verb pattern.",
            ["He suggested taking a taxi.", "He suggested that we took a taxi.", "He suggested us to take a taxi."],
            2,
            "Suggest cannot be followed by an object + to-infinitive.",
          ),
          gap(
            "'Remember to buy milk,' she said. → She ___ me to buy milk. (one word)",
            ["reminded"],
            "Remind + object + to-infinitive.",
          ),
        ],
      },
    ],
  },
  {
    key: "b2-grammar-future-continuous-perfect",
    level: "B2",
    category: "Grammar",
    topic: "Advanced future forms",
    title: "Future continuous and future perfect",
    summary: "Talk about actions in progress in the future and actions finished by a future time.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Two forms for talking about a future time",
        intro: "These forms look at a point in the future and say what will be happening or what will already be finished.",
        points: [
          {
            title: "Future continuous: will be + -ing",
            text: "Use it for an action that will be in progress at a certain time in the future. It also sounds polite when asking about plans.",
            examples: [
              "This time tomorrow I'll be flying to Mexico.",
              "Don't call at eight. We'll be having dinner.",
              "Will you be using the car tonight?",
            ],
          },
          {
            title: "Future perfect: will have + past participle",
            text: "Use it for an action that will be finished before a certain time in the future. It often goes with by, by the time and before.",
            examples: [
              "By next June I'll have finished my exams.",
              "She'll have left by the time you arrive.",
              "They won't have repaired the road before winter.",
            ],
          },
          {
            title: "Time clauses",
            text: "After by the time, when, before and until we use a present tense, not will.",
            examples: [
              "By the time we get there, the film will have started.",
              "I'll be waiting when you arrive.",
            ],
          },
        ],
        watchOut: [
          "Do not use will after by the time: 'By the time you will arrive …' is wrong.",
          "Choose by (a deadline) for the future perfect and until for something continuing up to a time: 'I'll be here until six'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the form that fits. Then reveal the answer.",
        items: [
          {
            prompt: "It is 8 pm now. Your flight is at 6 am tomorrow. What will you be doing at 6 am?",
            answer: "I'll be flying. / I'll be taking off.",
            why: "The flight will be in progress at that time, so the future continuous.",
          },
          {
            prompt: "You started a book last week. You will finish it by Friday. Say it.",
            answer: "I'll have finished the book by Friday.",
            why: "An action completed before a deadline: future perfect.",
          },
          {
            prompt: "Which is correct: 'By the time you will come' or 'By the time you come'?",
            answer: "By the time you come",
            why: "We use the present simple after by the time, even for the future.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: future continuous and future perfect",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "By 2030 scientists ___ a cure for the disease.",
            ["will have found", "will find", "will be finding"],
            0,
            "By 2030 shows a deadline, so the future perfect: will have found.",
          ),
          choice(
            "Don't phone me at nine. I ___ a film with my friends.",
            ["'ll have watched", "watch", "'ll be watching"],
            2,
            "An action in progress at that time: the future continuous.",
          ),
          gap(
            "I'm sorry, I can't meet you at three. I ___ in a meeting. (be, future continuous)",
            ["will be", "'ll be"],
            "A planned action in progress at a future time: I'll be in a meeting.",
          ),
          choice(
            "By the time she ___ , we'll have eaten everything.",
            ["will arrive", "arrives", "has arrived"],
            1,
            "After by the time we use the present simple, not will.",
          ),
          gap(
            "Next year I ___ in this school for ten years. (work, future perfect, use 'will have')",
            ["will have worked", "'ll have worked"],
            "Future perfect: will have + past participle.",
          ),
          choice(
            "'Will you ___ the printer this afternoon?' — a polite question about plans.",
            ["be using", "have used", "use to"],
            0,
            "Will you be using … is a polite way to ask about someone's plans.",
          ),
          choice(
            "Choose the correct sentence about the future.",
            ["By the time you will arrive, we'll have left.", "By the time you arrived, we'll have left.", "By the time you arrive, we'll have left."],
            2,
            "After by the time we use the present simple for the future, and the main clause uses will have + past participle.",
          ),
          gap(
            "In ten years' time, many people ___ from home. (work, future continuous, use 'will be')",
            ["will be working", "'ll be working"],
            "Future continuous for an action in progress at that future time.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b2-reading-silent-cities",
    level: "B2",
    category: "Reading",
    topic: "Reading a science feature",
    title: "Reading: what happens to a city when it falls silent?",
    summary: "Read a feature article, follow the argument and answer questions about detail and attitude.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "The sound of a quiet city",
        before: [
          "How noisy is the place where you live? Which sounds do you notice most?",
          "Can noise affect your health or concentration? How?",
        ],
        paragraphs: [
          "In spring 2020, millions of people noticed something they had never heard before: the sound of their own city at rest. Traffic, building sites and aeroplanes went almost silent for several weeks. Birdsong was suddenly audible in busy streets, and many residents described feeling calmer than they had for years.",
          "Researchers who were monitoring noise levels in several European cities recorded drops of up to fifty per cent. What surprised them was not simply the quiet but the changes in wildlife. In some places, birds sang at lower pitches because they no longer needed to compete with engines. Scientists suggest that this could help birds attract mates more easily.",
          "The effect on people was harder to measure. Some individuals reported better sleep, while others said the silence made them anxious. One acoustic expert, Dr Ines Carrasco, points out that our reaction depends on what we are used to. 'A person who has lived next to a motorway all their life may find a peaceful street oddly uncomfortable,' she says.",
          "Nevertheless, the long-term health evidence is clear. Studies have linked constant noise with high blood pressure and difficulties in concentrating, especially in children. As a result, several councils are now testing 'quiet zones' where traffic is restricted at certain hours. Whether these experiments will become permanent remains uncertain, but one thing seems clear: many people have realised that silence, like clean air, is something worth protecting.",
        ],
        glossary: [
          { term: "pitch", meaning: "how high or low a sound is" },
          { term: "acoustic", meaning: "connected with sound" },
          { term: "anxious", meaning: "worried and nervous" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What did many people notice in spring 2020?",
            ["Cities were louder than usual.", "Birds had left the cities.", "They could hear sounds that were normally covered by traffic."],
            2,
            "Traffic and other noise nearly stopped, so birdsong became audible.",
          ),
          choice(
            "What surprised the researchers?",
            ["Changes in the behaviour of animals.", "The noise levels did not change.", "People did not enjoy the quiet."],
            0,
            "The text says they were surprised by the changes in wildlife, such as birds singing at lower pitches.",
          ),
          gap(
            "By what percentage did noise fall in some cities? Write the number.",
            ["50", "fifty", "50%", "fifty per cent", "50 per cent"],
            "The text says drops of up to fifty per cent.",
          ),
          choice(
            "Why might some people feel uncomfortable in a quiet street?",
            [
              "They dislike birdsong.",
              "They are used to a much noisier environment.",
              "They have difficulty sleeping.",
            ],
            1,
            "Dr Carrasco says our reaction depends on what we are used to.",
          ),
          choice(
            "What does the writer say about the long-term evidence on noise?",
            ["It is unclear.", "It shows a link with health problems.", "It only affects adults."],
            1,
            "The text links constant noise with high blood pressure and concentration problems.",
          ),
          choice(
            "What are some councils trying?",
            ["Banning all cars", "Building higher walls along the motorway", "Creating quiet zones with restricted traffic"],
            2,
            "They are testing 'quiet zones' where traffic is restricted at certain hours.",
          ),
          choice(
            "What is the writer's attitude in the last paragraph?",
            [
              "Cautiously hopeful that quiet may be valued more",
              "Convinced that noise will disappear completely",
              "Critical of the experiments",
            ],
            0,
            "The writer says it is uncertain whether the experiments will last, but many people now value silence.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b2-writing-report",
    level: "B2",
    category: "Writing",
    topic: "Writing a report",
    title: "Writing: a report with recommendations",
    summary: "Write a clear, semi-formal report with headings, comparisons and suggestions.",
    minutes: 28,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your school is planning to improve its facilities and has asked students to write a report on the school library. Write a report for the headteacher. Describe the present situation, explain which problems students have, and recommend two improvements.",
        wordGuide: "A class guide: about 140 to 190 words. This is not an exam rule.",
        planning: [
          "Give the report a title and use short headings: Introduction, Present situation, Problems, Recommendations.",
          "Use a neutral, semi-formal style. Avoid contractions and slang.",
          "Support each point with a reason or an example.",
          "Finish with two clear, realistic recommendations.",
        ],
        usefulLanguage: [
          "The aim of this report is to …",
          "At present, the library is …",
          "One major drawback is that …",
          "Several students have complained about …",
          "It would be a good idea to … / I would recommend + -ing",
          "If the school were to …, students would be able to …",
          "In conclusion, …",
        ],
        checklist: [
          "I used a title and headings.",
          "I described the present situation and the problems.",
          "I made two clear recommendations with reasons.",
          "I used a formal or semi-formal style (no slang, few contractions).",
          "I used a range of linking words and passive forms.",
          "I checked spelling, grammar and punctuation.",
        ],
        model: [
          "Report on the school library",
          "Introduction",
          "The aim of this report is to describe the current state of the school library and to suggest improvements.",
          "Present situation",
          "The library is open from 8.30 to 3.30 and contains about three thousand books. It is used mostly at break time by students who want a quiet place to read or study.",
          "Problems",
          "Students have complained that the library is too small and often crowded. In addition, many of the books are old, and there are only four computers. Another drawback is that the library closes before afternoon classes end.",
          "Recommendations",
          "I would recommend extending the opening hours until 5.00 pm so that students can work after lessons. It would also be useful to buy more recent books and add several computers.",
          "These changes would make the library more attractive and encourage more students to use it.",
        ],
        modelNotes: [
          "The headings guide the reader through the report.",
          "The style is semi-formal: no slang, and it avoids contractions.",
          "It uses reporting language (students have complained) and recommending language (I would recommend + -ing).",
          "It uses linking words: in addition, another drawback, so that.",
        ],
        assessment: [
          "Does the report include all content points: present situation, problems and two recommendations?",
          "Is the layout clear, with headings and a logical order?",
          "Is the register appropriate for a headteacher?",
          "Is there a range of structures: passives, conditionals, reporting verbs?",
          "Is the language accurate, with few errors?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "b2-speaking-collaborative-decision",
    level: "B2",
    category: "Speaking",
    topic: "Discussing and deciding together",
    title: "Speaking: discuss options and reach a decision",
    summary: "Work with a partner to compare ideas, respond to each other and agree a decision.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Discuss and decide",
        setup: "Work with a partner. Read the situation, talk about it for two minutes, and then decide together for one minute. Do not talk only to the teacher or to yourself: respond to your partner's ideas.",
        prompts: [
          { label: "Situation", text: "Your school wants to organise an event to raise money for charity. Here are some ideas: a sponsored run, a talent show, a second-hand book sale, a bake sale, a quiz night." },
          { label: "Talk about", text: "How successful would each idea be? Which would be easiest to organise? Which would raise the most money?" },
          { label: "Decide", text: "Agree on the best idea and explain why." },
          { label: "Follow-up", text: "Do you think students should be involved in charity events at school? Why or why not?" },
        ],
        usefulLanguage: [
          "What do you think about … ? / How about … ?",
          "I see what you mean, but …",
          "That's a good point. However, …",
          "Personally, I'd go for … because …",
          "It would be easier/more fun/more profitable to …",
          "Shall we agree on …? / Let's go for …",
        ],
        steps: [
          "Read the prompts and take 15 seconds to think.",
          "Start by asking your partner an open question.",
          "Compare at least three ideas, giving reasons.",
          "React to what your partner says: agree, disagree politely, add an idea.",
          "Reach a decision together, even if you disagree a little.",
        ],
        checklist: [
          "I asked my partner questions and listened.",
          "I compared ideas using comparatives and conditionals.",
          "I gave reasons for my opinions.",
          "I disagreed politely.",
          "We reached a decision.",
        ],
        model: {
          title: "Model dialogue (transcript)",
          lines: [
            "A: Shall we start with the sponsored run? I think a lot of people would take part, because it's active and fun.",
            "B: I see what you mean, but it would need a lot of organisation. We'd need permission from the council, and it might rain.",
            "A: That's true. What about the book sale? It would be easier to organise, and everyone has old books at home.",
            "B: Good point. But we probably wouldn't raise much money. A talent show could attract more people if parents bought tickets.",
            "A: I'd go for the talent show, then. Shall we agree on that?",
            "B: Yes, let's go for it. We can sell snacks at the show too.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b2-revision-mixed-2",
    level: "B2",
    category: "Revision",
    topic: "Mixed B2 revision",
    title: "B2 mixed revision 2",
    summary: "Twelve mixed questions on reporting verbs, future forms, passives, modals and vocabulary.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the B2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "He ___ stealing the money, but nobody believed him.",
            ["agreed", "suggested", "denied"],
            2,
            "Deny + -ing fits the meaning.",
          ),
          gap(
            "By the time we arrive, the match ___ started. (will have)",
            ["will have", "'ll have"],
            "Future perfect: will have + past participle.",
          ),
          choice(
            "I had my car ___ last week.",
            ["repair", "repaired", "repairing"],
            1,
            "Have something done: have + object + past participle.",
          ),
          choice(
            "She ___ be at home. Her lights are on.",
            ["must", "can't", "needn't"],
            0,
            "Must is used for strong deduction.",
          ),
          gap(
            "This bridge ___ in 1890. (build, passive)",
            ["was built"],
            "A past passive: was built.",
          ),
          choice(
            "The manager ___ us not to be late again.",
            ["said", "suggested", "told"],
            2,
            "Tell + object + not to + verb.",
          ),
          choice(
            "She is the woman ___ car was stolen.",
            ["who", "which", "whose"],
            2,
            "Whose shows possession.",
          ),
          gap(
            "The rich ___ not always happy. (is/are)",
            ["are"],
            "The rich is a plural noun phrase, so are.",
          ),
          choice(
            "Despite ___ hard, he failed the exam.",
            ["studying", "he studied", "to study"],
            0,
            "Despite is followed by a noun or an -ing form.",
          ),
          choice(
            "Word formation: The company has a strong ___ in Europe. (REPUTE)",
            ["reputable", "reputation", "reputed"],
            1,
            "A noun is needed after strong: reputation.",
          ),
          gap(
            "I wish I ___ more time to study. (have)",
            ["had"],
            "Wish + past simple for a present wish.",
          ),
          choice(
            "Never ___ such a beautiful sunset.",
            ["I have seen", "have I seen", "I saw"],
            1,
            "After a negative adverb at the start, we invert the auxiliary and subject: have I seen.",
          ),
        ],
      },
    ],
  },
];
