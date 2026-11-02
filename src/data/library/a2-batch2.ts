import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const a2UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "a2-grammar-future-plans-predictions",
    level: "A2",
    category: "Grammar",
    topic: "Talking about the future",
    title: "The future: going to, will and the present continuous",
    summary: "Choose the right form for plans, arrangements, quick decisions and predictions.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Three ways to talk about the future",
        intro: "English uses different forms for different ideas about the future. Think about why you are speaking.",
        points: [
          {
            title: "Going to: plans and intentions",
            text: "Use am/is/are going to + verb for something you have already decided to do.",
            examples: [
              "I'm going to study medicine at university.",
              "We're not going to travel this summer.",
              "Are you going to watch the match?",
            ],
          },
          {
            title: "Present continuous: fixed arrangements",
            text: "Use the present continuous when you have arranged a time or a place with other people.",
            examples: [
              "I'm meeting Laura at six o'clock.",
              "We're flying to Dublin on Friday.",
              "What are you doing on Saturday evening?",
            ],
          },
          {
            title: "Will: quick decisions, offers and predictions",
            text: "Use will + verb when you decide at the moment of speaking, when you offer to help, or when you say what you think will happen.",
            examples: [
              "It's cold. I'll close the window.",
              "I'll carry that bag for you.",
              "I think it will rain tomorrow.",
            ],
          },
        ],
        watchOut: [
          "Do not use will for a plan you made before speaking. Say 'I'm going to buy a bike', not 'I will buy a bike', if you decided last week.",
          "After will we use the base verb without to: 'I will help', not 'I will to help'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Decide which form fits. Then reveal the answer.",
        items: [
          {
            prompt: "You see that the phone is ringing. You say: 'I ___ it!' (answer)",
            answer: "I'll answer it!",
            why: "This is a quick decision made at the moment of speaking, so we use will.",
          },
          {
            prompt: "You bought tickets for a concert on Friday. What do you say about Friday evening?",
            answer: "I'm going to a concert on Friday. / I'm going to go to a concert on Friday.",
            why: "It is an arrangement, so the present continuous is natural. Going to is also possible for a plan.",
          },
          {
            prompt: "Look at the black clouds! What will happen?",
            answer: "It's going to rain.",
            why: "We can see evidence now, so we use going to for the prediction.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: choose the best future form",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "'I haven't got any money.' — 'Don't worry. I ___ you some.'",
            ["lend", "'m lending", "'ll lend"],
            2,
            "This is an offer made at the moment of speaking, so we use will: I'll lend you some.",
          ),
          choice(
            "Tom ___ his grandparents this weekend. He bought the train tickets yesterday.",
            ["is visiting", "will visit", "visits"],
            0,
            "Tickets are bought, so it is an arrangement: the present continuous is visiting.",
          ),
          choice(
            "I've decided. I ___ learn the guitar next year.",
            ["will", "'m going to", "am"],
            1,
            "It is a plan already decided: I'm going to learn.",
          ),
          gap(
            "What time ___ tomorrow? (you / meet, present continuous)",
            ["are you meeting"],
            "An arrangement with another person, so the present continuous: What time are you meeting …?",
          ),
          choice(
            "Be careful! You ___ that glass!",
            ["will drop", "are going to drop", "are dropping"],
            1,
            "We can see the danger now, so we use going to for a prediction based on evidence.",
          ),
          gap(
            "I think Spain ___ the match tonight. (win, will) Write the full form.",
            ["will win"],
            "'I think' + a prediction without evidence: will win.",
          ),
          choice(
            "Choose the correct sentence about a future action.",
            ["I will to call you later.", "I will calling you later.", "I will call you later."],
            2,
            "After will we use the base form of the verb: will call.",
          ),
          gap(
            "We ___ to the party because we are tired. (not / go, going to)",
            ["are not going to go", "aren't going to go", "are not going to"],
            "A negative plan: We are not going to go to the party.",
            "Use going to.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "a2-reading-library-cafe",
    level: "A2",
    category: "Reading",
    topic: "Reading a short article",
    title: "Reading: a new café at the library",
    summary: "Read a short local news article and answer questions about details and opinions.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Books and coffee",
        before: [
          "Do you go to a library? What do you do there?",
          "Look at the title. What do you think the article is about?",
        ],
        paragraphs: [
          "Last Monday, a new café opened inside the town library. It is called The Reading Room, and it is already very popular with students.",
          "The café is open from eight in the morning until eight in the evening. It sells coffee, tea, sandwiches and cakes. The prices are low: a coffee costs one euro fifty, and a sandwich costs three euros. Students with a library card get a ten per cent discount.",
          "The manager, Elena Ruiz, says the idea was simple. 'Young people often study for hours and need a place to relax,' she explains. 'Now they can have a drink and take a break without leaving the building.'",
          "There are some rules. People can eat and drink only at the café tables, not near the books. The café is also quiet, so there is no loud music.",
          "Many students like the idea. 'It's much better than the old machine in the corridor,' says Pablo, who is sixteen.",
        ],
        glossary: [
          { term: "discount", meaning: "a lower price" },
          { term: "manager", meaning: "the person who is in charge of a place" },
          { term: "corridor", meaning: "a long narrow space inside a building" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Go back to the text to check each answer.",
        questions: [
          choice(
            "When did the café open?",
            ["Last Monday", "Last Sunday", "Last month"],
            0,
            "The first sentence says: 'Last Monday, a new café opened'.",
          ),
          choice(
            "What time does the café close?",
            ["At six in the evening", "At eight in the morning", "At eight in the evening"],
            2,
            "It is open 'from eight in the morning until eight in the evening'.",
          ),
          gap(
            "How much is a sandwich? Write the price in euros (a number is fine).",
            ["3", "three", "3 euros", "three euros", "€3"],
            "The text says: 'a sandwich costs three euros'.",
          ),
          choice(
            "Who gets a ten per cent discount?",
            ["Everyone", "Students with a library card", "People who buy cake"],
            1,
            "The second paragraph says: 'Students with a library card get a ten per cent discount.'",
          ),
          choice(
            "Why did Elena Ruiz want a café?",
            ["Students need a place to take a break.", "The library was too empty.", "She wanted to sell more books."],
            0,
            "She says young people study for hours and need a place to relax.",
          ),
          choice(
            "Where can people eat and drink?",
            ["Anywhere in the library", "Only near the books", "Only at the café tables"],
            2,
            "The text says: 'People can eat and drink only at the café tables, not near the books.'",
          ),
          gap(
            "How old is Pablo? Write the number.",
            ["16", "sixteen"],
            "The last paragraph says Pablo is sixteen.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "a2-writing-message-postcard",
    level: "A2",
    category: "Writing",
    topic: "Short messages and postcards",
    title: "Writing: a short message and a postcard",
    summary: "Write two very short texts that give all the information the reader needs.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Task 1: You are going to be late for your English class. Write a short message to your teacher, Mr Walker. Say why you are late, when you will arrive, and ask what homework to do. (About 25 to 35 words.) Task 2: You are on holiday. Write a postcard to a friend. Say where you are, what the weather is like, and what you did yesterday. (About 40 to 50 words.)",
        wordGuide: "A class guide: 25 to 35 words for the message, 40 to 50 words for the postcard. This is not an exam rule.",
        planning: [
          "Read each task and underline the three things you must say.",
          "Message: start with Dear Mr Walker, and finish with your name.",
          "Postcard: start with Hi + friend's name, and finish with a friendly ending.",
          "Use short sentences. Check that every point is covered.",
        ],
        usefulLanguage: [
          "I'm sorry, but I'm going to be late.",
          "My bus is late. / I missed the bus.",
          "I'll arrive at about …",
          "Could you tell me what the homework is?",
          "Greetings from … / I'm in …",
          "The weather is sunny/hot/rainy.",
          "Yesterday we went to … and I …",
          "Wish you were here! / See you soon!",
        ],
        checklist: [
          "I covered all three points in each text.",
          "I used a greeting and an ending in each text.",
          "I used the past simple for yesterday.",
          "I stayed close to the number of words.",
          "I checked spelling, capital letters and full stops.",
        ],
        model: [
          "Message:",
          "Dear Mr Walker,",
          "I'm sorry, but I'm going to be late for class because my bus is late. I'll arrive at about ten past five. Could you tell me what the homework is?",
          "Thank you,",
          "Marta",
          "Postcard:",
          "Hi Ana,",
          "Greetings from Lisbon! The weather is hot and sunny, so we go to the beach every day. Yesterday we visited an old castle and then we had fish for dinner. It was delicious!",
          "See you soon,",
          "Carlos",
        ],
        modelNotes: [
          "Each text covers every point in the task, in the same order as the question.",
          "The message is polite: 'I'm sorry', 'Could you …?', 'Thank you'.",
          "The postcard uses the present for the weather and the past simple for yesterday: visited, had.",
          "Both texts are short and clear, with simple linking: because, so, and, then.",
        ],
        assessment: [
          "Does each text include all the information asked for?",
          "Is the tone right for the reader: polite for a teacher, friendly for a friend?",
          "Are the tenses correct, especially the past simple for yesterday?",
          "Is the message easy to understand on first reading?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "a2-speaking-describe-home-town",
    level: "A2",
    category: "Speaking",
    topic: "Describing places",
    title: "Speaking: your home and your town",
    summary: "Describe where you live using there is/are, prepositions and simple opinions.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Describe where you live",
        setup: "Practise with a partner or on your own. Give two or three sentences for each prompt. Try to use a reason or an example.",
        prompts: [
          { label: "Your home", text: "Describe your home. How many rooms are there? What is your favourite room? Why?" },
          { label: "Your street", text: "What is there near your home? Think about shops, parks and bus stops." },
          { label: "Your town", text: "What do you like about your town? Is there anything you don't like?" },
          { label: "Directions", text: "Tell your partner how to get from your school to the nearest supermarket." },
          { label: "Ask your partner", text: "Ask two questions about their town. For example: Is there a cinema in your town? What can I do there?" },
        ],
        usefulLanguage: [
          "There is a … / There are two …",
          "It's next to / opposite / between / behind …",
          "My favourite room is … because …",
          "I like my town because it's … (quiet, busy, friendly)",
          "Turn left/right. Go straight on. It's on the corner.",
          "What about your town?",
        ],
        steps: [
          "Look at the prompt and think for ten seconds.",
          "Speak for about 30 seconds. Use there is/are at least twice.",
          "Say it again and add one more detail or a reason.",
          "If you can, record yourself and listen to your pronunciation.",
        ],
        checklist: [
          "I used there is and there are correctly.",
          "I used at least three place prepositions (next to, opposite, between …).",
          "I gave a reason with because.",
          "I spoke clearly and not too fast.",
          "I asked my partner a question.",
        ],
        model: {
          title: "Model answers (transcript)",
          lines: [
            "Q: Describe your home. — A: I live in a flat on the third floor. There are four rooms: a living room, a kitchen and two bedrooms. My favourite room is my bedroom because it's quiet and there is a big window.",
            "Q: What is there near your home? — A: There is a small park opposite my building. There are two supermarkets and a bakery, and the bus stop is next to the bakery.",
            "Q: What do you like about your town? — A: I like my town because it's friendly and not too big. But there isn't a cinema, so we go to the next town at the weekend.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "a2-revision-mixed-2",
    level: "A2",
    category: "Revision",
    topic: "Mixed A2 revision",
    title: "A2 mixed revision 2",
    summary: "Twelve mixed questions on future forms, past tenses, comparing, prepositions and everyday English.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the A2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "'There's no milk.' — 'I ___ to the shop and buy some.'",
            ["go", "'m going", "'ll go"],
            2,
            "A quick decision at the moment of speaking uses will: I'll go.",
          ),
          gap(
            "She ___ her keys yesterday, so she couldn't open the door. (lose, past simple)",
            ["lost"],
            "A finished action in the past: lost.",
          ),
          choice(
            "This is ___ film I have ever seen!",
            ["the most boring", "more boring", "the boringest"],
            0,
            "Boring is a long adjective: the most boring. The superlative needs the.",
          ),
          choice(
            "There ___ any eggs in the fridge.",
            ["isn't", "aren't", "don't"],
            1,
            "Eggs is plural, so aren't. We use any in negative sentences.",
          ),
          gap(
            "The bank is ___ the supermarket and the pharmacy. (between)",
            ["between"],
            "Between is used when something is in the middle of two things.",
          ),
          choice(
            "Which is the polite way to ask for help?",
            ["Give me your pen.", "Could you lend me your pen, please?", "You lend me your pen."],
            1,
            "Could you …, please? is a polite request.",
          ),
          gap(
            "I have never ___ to Scotland. (be, past participle)",
            ["been"],
            "Present perfect with never: have never been.",
          ),
          choice(
            "We ___ at the cinema at seven. I already bought the tickets.",
            ["meet", "will meeting", "are meeting"],
            2,
            "An arrangement: the present continuous, are meeting.",
          ),
          choice(
            "I have a headache. You should ___.",
            ["take a tablet", "to take a tablet", "taking a tablet"],
            0,
            "After should we use the base verb: should take.",
          ),
          gap(
            "My brother is taller ___ me. (one word)",
            ["than"],
            "Comparatives use than.",
          ),
          choice(
            "'How much is the ticket?' — 'It ___ six euros.'",
            ["pays", "spends", "costs"],
            2,
            "The verb cost is used for prices: It costs six euros.",
          ),
          choice(
            "'Would you like some more coffee?' — ' ___ '",
            ["Yes, I like.", "Yes, I would, thank you.", "No, I don't would."],
            1,
            "A natural answer is 'Yes, I would, thank you.' or 'No, thank you.'",
          ),
        ],
      },
    ],
  },
];
