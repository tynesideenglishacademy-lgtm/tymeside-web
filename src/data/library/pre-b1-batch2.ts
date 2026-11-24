import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const preB1UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "preb1-grammar-used-to-for-since",
    level: "Pre-B1",
    category: "Grammar",
    topic: "Habits in the past and time up to now",
    title: "Used to, for and since",
    summary: "Talk about past habits and say how long something has lasted.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Used to, for and since",
        intro: "Both ideas connect the past with the present, but they work in different ways.",
        points: [
          {
            title: "Used to: past habits and states",
            text: "Use used to + base verb for something that happened regularly in the past but does not happen now. In questions and negatives we say use to.",
            examples: [
              "I used to play football every Saturday.",
              "We didn't use to have a car.",
              "Did you use to live in a village?",
            ],
          },
          {
            title: "Present perfect with for",
            text: "Use for + a period of time to say how long something has lasted.",
            examples: [
              "I've lived here for six years.",
              "She has worked at the bank for a month.",
              "They haven't spoken for two weeks.",
            ],
          },
          {
            title: "Present perfect with since",
            text: "Use since + a starting point (a date, a day, an event) to say when something began.",
            examples: [
              "I've lived here since 2020.",
              "He has been ill since Monday.",
              "We've known each other since we were children.",
            ],
          },
        ],
        table: {
          caption: "For or since?",
          head: ["Use for with …", "Use since with …"],
          rows: [
            ["three days", "Tuesday"],
            ["a long time", "2019"],
            ["ten minutes", "nine o'clock"],
            ["ages", "last summer"],
          ],
        },
        watchOut: [
          "Used to is only for the past. For a habit now, use usually or always: 'I usually walk to school', not 'I use to walk'.",
          "In questions and negatives with did, we write use to (no -d): 'Did you use to …?'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Decide which form fits. Then reveal the answer.",
        items: [
          {
            prompt: "You played the piano as a child but you stopped. Say it with used to.",
            answer: "I used to play the piano.",
            why: "It was a regular activity in the past that has finished, so we use used to + base verb.",
          },
          {
            prompt: "You moved to this town in March 2021. Say how long you have lived here, using since.",
            answer: "I've lived here since March 2021.",
            why: "Since is followed by the point in time when it started.",
          },
          {
            prompt: "You started learning English two years ago. Say it using for.",
            answer: "I've been learning English for two years. / I've learnt English for two years.",
            why: "For is followed by a period of time: two years.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: used to, for and since",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "We have lived in this flat ___ 2022.",
            ["for", "during", "since"],
            2,
            "2022 is a point in time, so we use since.",
          ),
          choice(
            "My grandfather has had the same car ___ twenty years.",
            ["for", "since", "from"],
            0,
            "Twenty years is a period of time, so we use for.",
          ),
          gap(
            "When I was a child, I ___ to be afraid of dogs. (one word)",
            ["used"],
            "Used to + base verb describes a past state that is no longer true.",
          ),
          choice(
            "Choose the correct question about a past habit.",
            ["Did you used to play chess?", "Did you use to play chess?", "Do you used to play chess?"],
            1,
            "After did we use use to without -d.",
          ),
          gap(
            "She hasn't called me ___ Friday. (for or since)",
            ["since"],
            "Friday is a starting point, so since.",
          ),
          choice(
            "I ___ eat vegetables when I was small, but now I love them.",
            ["don't use to", "didn't use to", "wasn't used to"],
            1,
            "A past habit that is different now: didn't use to eat.",
          ),
          gap(
            "They have been married ___ ten years. (for or since)",
            ["for"],
            "Ten years is a period of time, so for.",
          ),
          choice(
            "Which sentence is NOT correct?",
            ["I've known her since I was seven.", "I've known her for five years.", "I've known her since five years."],
            2,
            "Since needs a point in time. 'Five years' is a period, so we need for.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "preb1-reading-bike-to-school",
    level: "Pre-B1",
    category: "Reading",
    topic: "Reading a magazine article",
    title: "Reading: cycling to school",
    summary: "Read an article about a school project and find details, reasons and opinions.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "A school on two wheels",
        before: [
          "How do you get to school or work? Is it easy?",
          "What are the good and bad points of cycling to school?",
        ],
        paragraphs: [
          "Two years ago, a secondary school in a small town started a project called 'Pedal Power'. At that time only five students cycled to school. Most people went by car because the roads near the school were busy and there was nowhere safe to leave a bike.",
          "The head teacher, Mrs Lane, decided to change this. First, the school built a covered bicycle park for sixty bikes. Then the town council painted a new bike lane on the main road. Finally, a local shop agreed to repair students' bikes for free every Friday.",
          "The results have surprised everyone. Today, more than two hundred students cycle to school, and the number of cars outside the gates has fallen a lot. Many students say they feel more awake in their first lesson, and some teachers have noticed that fewer students arrive late.",
          "Not everyone is happy, however. Some parents worry about safety when it rains, so the school now gives free lights and reflective jackets to new cyclists. 'It's not perfect yet,' says Mrs Lane, 'but we have learned that small changes can make a big difference.'",
        ],
        glossary: [
          { term: "covered", meaning: "with a roof" },
          { term: "council", meaning: "the group of people who manage a town" },
          { term: "reflective jacket", meaning: "a jacket that shines in the light so drivers can see you" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer or type a short answer. Go back to the text to check.",
        questions: [
          choice(
            "Why did most students go to school by car at first?",
            ["The roads were busy and there was no safe place for bikes.", "They did not own bikes.", "The school was too far away."],
            0,
            "The first paragraph says the roads were busy and there was nowhere safe to leave a bike.",
          ),
          choice(
            "What did the town council do?",
            ["Built a bicycle park", "Repaired bikes for free", "Painted a bike lane"],
            2,
            "The second paragraph says the council painted a new bike lane.",
          ),
          gap(
            "How many bikes can the new bicycle park hold? Write the number.",
            ["60", "sixty"],
            "The text says the school built a bicycle park 'for sixty bikes'.",
          ),
          choice(
            "What happens on Fridays?",
            ["Students get a free jacket.", "A shop repairs students' bikes for free.", "Cars are not allowed at school."],
            1,
            "A local shop repairs bikes for free every Friday.",
          ),
          choice(
            "What have some teachers noticed?",
            ["Fewer students are late.", "Students are more tired.", "Students do more homework."],
            0,
            "The third paragraph says some teachers noticed that fewer students arrive late.",
          ),
          choice(
            "Why do some parents worry?",
            ["Cycling is too slow.", "The bike lane is too short.", "Safety when it rains."],
            2,
            "The last paragraph says some parents worry about safety when it rains.",
          ),
          choice(
            "What does Mrs Lane mean by 'small changes can make a big difference'?",
            [
              "The project was a small success.",
              "Big changes are always better.",
              "Simple actions can lead to important results.",
            ],
            2,
            "She means that modest steps, like a bike park and a lane, produced a large effect.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "preb1-writing-informal-email-reply",
    level: "Pre-B1",
    category: "Writing",
    topic: "Replying to an informal email",
    title: "Writing: replying to a friend's email",
    summary: "Answer questions in a friend's email and add your own news and a question.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "You received an email from your English-speaking friend, Sam. He asks: 'What did you do last weekend? Have you ever been to a music festival? Would you like to come to a festival with me in the summer?' Write an email to Sam. Answer his three questions and ask him one question about the festival.",
        wordGuide: "A class guide: about 90 to 110 words. This is not an exam rule.",
        planning: [
          "Start with Hi Sam, and thank him for his email.",
          "Paragraph 1: answer the first two questions (last weekend, music festivals).",
          "Paragraph 2: answer the invitation. Say yes or no and give a reason.",
          "Ask Sam one question about the festival and finish with a friendly ending.",
        ],
        usefulLanguage: [
          "Thanks for your email. It was great to hear from you.",
          "Last weekend I … (past simple)",
          "I've never been to a festival, but I'd love to.",
          "I've been to one festival. It was …",
          "I'd love to come! / Unfortunately, I can't because …",
          "How much are the tickets? / Which bands are playing?",
          "Write soon! / Best wishes,",
        ],
        checklist: [
          "I answered all three questions and asked one question.",
          "I used the past simple for last weekend.",
          "I used the present perfect for 'have you ever'.",
          "I used would like / I'd love for the invitation.",
          "I used at least two linking words (and, but, because, so).",
          "I checked spelling and punctuation.",
        ],
        model: [
          "Hi Sam,",
          "Thanks for your email. It was great to hear from you! Last weekend I stayed at home with my cousins and we watched films all Saturday. On Sunday we cooked a big lunch for the family.",
          "I've never been to a music festival, but I've always wanted to go. I'd love to come with you in the summer because I really like live music. Unfortunately I have an exam in July, so I hope it isn't too early.",
          "Which bands are playing at the festival? And how much are the tickets?",
          "Write soon!",
          "Lucía",
        ],
        modelNotes: [
          "It answers all three questions and asks two questions about the festival.",
          "It uses the past simple (stayed, watched, cooked) and the present perfect (I've never been, I've always wanted).",
          "It uses linking words: and, but, because, so.",
          "The style is friendly, but the sentences are correct and clear.",
        ],
        assessment: [
          "Does the email answer all the questions and include one of its own?",
          "Are past and present perfect used correctly?",
          "Is the layout clear: greeting, paragraphs, ending?",
          "Is the language friendly and natural for an informal email?",
          "Is spelling accurate? Is the length close to the guide?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "preb1-speaking-past-experience-plans",
    level: "Pre-B1",
    category: "Speaking",
    topic: "Experiences and plans",
    title: "Speaking: experiences and plans",
    summary: "Talk about things you have done and things you want to do, with reasons.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Experiences and plans",
        setup: "Practise with a partner or on your own. For each prompt, speak for about 40 seconds. Give a reason or an example.",
        prompts: [
          { label: "Experience", text: "Tell me about an interesting place you have visited. What did you do there?" },
          { label: "Habits then and now", text: "What did you use to do when you were younger that you don't do now?" },
          { label: "Have you ever …?", text: "Have you ever tried a sport or activity that was difficult? What happened?" },
          { label: "Plans", text: "What are you going to do after the end of this school year? Why?" },
          { label: "Opinion", text: "Is it better to spend free time with friends or alone? Give reasons." },
        ],
        usefulLanguage: [
          "I've been to … It was … because …",
          "When I was younger, I used to …",
          "I've never … but I'd like to …",
          "I'm going to … because …",
          "In my opinion … / I think … because …",
          "For example, … / For instance, …",
        ],
        steps: [
          "Read the prompt and think for fifteen seconds.",
          "Answer with a main idea, a reason and an example.",
          "Say it again and add one more detail.",
          "If you can, record yourself, then listen for tense mistakes.",
        ],
        checklist: [
          "I used the past simple for finished experiences.",
          "I used the present perfect with ever, never, for or since.",
          "I used used to once.",
          "I gave a reason with because.",
          "I did not stop for a long time between ideas.",
        ],
        model: {
          title: "Model answers (transcript)",
          lines: [
            "Q: Tell me about a place you have visited. — A: I've been to Granada, in the south of Spain. I went with my family last spring and we visited the Alhambra. It was beautiful because of the gardens and the views of the city.",
            "Q: What did you use to do when you were younger? — A: I used to play with toy cars every afternoon. Now I don't have time because I have homework and I prefer going out with friends.",
            "Q: Is it better to spend free time with friends or alone? — A: In my opinion it's better with friends because it's more fun and you can share ideas. But sometimes I like being alone to read or listen to music.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "preb1-revision-mixed-2",
    level: "Pre-B1",
    category: "Revision",
    topic: "Mixed Pre-B1 revision",
    title: "Pre-B1 mixed revision 2",
    summary: "Twelve mixed questions on used to, for and since, past tenses, conditionals and phrasal verbs.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the Pre-B1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "I haven't seen Julia ___ last month.",
            ["since", "for", "ago"],
            0,
            "Last month is a point in time, so since.",
          ),
          gap(
            "If it rains tomorrow, we ___ at home. (stay, will)",
            ["will stay", "'ll stay"],
            "First conditional: if + present simple, will + base verb.",
          ),
          choice(
            "While I ___ to school, I saw an accident.",
            ["walked", "was walking", "walk"],
            1,
            "A longer action in progress interrupted by a shorter one: past continuous.",
          ),
          choice(
            "We didn't ___ have a dog when I was small.",
            ["used to", "use to", "using to"],
            1,
            "After didn't we use use to.",
          ),
          gap(
            "Please ___ your shoes off before you come in. (take, phrasal verb with off)",
            ["take"],
            "Take off means remove.",
          ),
          choice(
            "'I'm tired.' — 'You ___ go to bed early tonight.'",
            ["would", "can't", "should"],
            2,
            "Should is used to give advice.",
          ),
          choice(
            "Which word forms a noun from 'happy'?",
            ["happiness", "happily", "happier"],
            0,
            "The suffix -ness changes the adjective happy into the noun happiness.",
          ),
          gap(
            "She has worked here ___ three years. (for or since)",
            ["for"],
            "A period of time takes for.",
          ),
          choice(
            "'Could I have a table for two?' — This sentence is probably said ___.",
            ["at a hotel reception", "in a bank", "in a restaurant"],
            2,
            "A table for two is requested in a restaurant or café.",
          ),
          choice(
            "I'm looking forward ___ you next week.",
            ["to see", "to seeing", "seeing"],
            1,
            "Look forward to is followed by -ing.",
          ),
          gap(
            "The film was so ___ that I fell asleep. (boring / bored)",
            ["boring"],
            "-ing adjectives describe the thing: the film was boring.",
          ),
          choice(
            "I will text you as soon as I ___ home.",
            ["get", "will get", "am getting"],
            0,
            "After as soon as, when and before we use the present simple for the future: as soon as I get home.",
          ),
        ],
      },
    ],
  },
];
