import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const preB1UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "preb1-vocabulary-technology-internet",
    level: "Pre-B1",
    category: "Vocabulary",
    topic: "Technology and the internet",
    title: "Technology and the internet",
    summary: "Learn everyday words and phrases for phones, computers and the internet.",
    minutes: 13,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Talking about technology",
        intro: "Many technology words are verbs and nouns together. Learn the whole phrase, not just the word.",
        points: [
          {
            title: "Devices and things we do with them",
            text: "These verbs go with devices.",
            examples: [
              "charge your phone / the battery is flat",
              "turn on / turn off the computer",
              "connect to the Wi-Fi",
              "download an app / upload a photo",
            ],
          },
          {
            title: "The internet",
            text: "Use these verbs and nouns for online activities.",
            examples: [
              "search for information / do an online search",
              "log in / log out (your account)",
              "post a comment / share a video",
              "send an email with an attachment",
              "stream a film / video-call a friend",
            ],
          },
          {
            title: "Problems and safety",
            text: "Learn words for things that can go wrong, and for staying safe.",
            examples: [
              "The screen froze / the app crashed.",
              "I forgot my password, so I reset it.",
              "Don't click on suspicious links.",
              "Keep your personal information private.",
            ],
          },
        ],
        table: {
          caption: "Word pairs",
          head: ["Word", "Meaning"],
          rows: [
            ["password", "a secret word that lets you into an account"],
            ["screen", "the flat part of a phone or computer that you look at"],
            ["download", "to copy a file from the internet to your device"],
            ["online", "connected to the internet"],
          ],
        },
        watchOut: [
          "Say 'turn on the computer', not 'open the computer'.",
          "Say 'on the internet' or 'online'. Do not say 'in the internet'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the word you need. Then reveal the answer.",
        items: [
          {
            prompt: "Your phone has no battery left. You must ___ it.",
            answer: "charge",
            why: "We charge a phone or a battery when it needs power.",
          },
          {
            prompt: "You can't remember your secret word for your email. You have to ___ your password.",
            answer: "reset",
            why: "Reset means choose a new password after forgetting the old one.",
          },
          {
            prompt: "You put a photo on a social media site so friends can see it. You ___ the photo.",
            answer: "post / upload",
            why: "Post or upload means put something online.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: technology vocabulary",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "My laptop is very slow and the screen ___ every few minutes.",
            ["melts", "breaks the Wi-Fi", "freezes"],
            2,
            "When a screen freezes, it stops responding.",
          ),
          choice(
            "I want to listen to a song without saving it on my phone. I will ___ it.",
            ["stream", "delete", "unplug"],
            0,
            "Stream means play online without keeping a copy.",
          ),
          gap(
            "Before you can use the app, you need to ___ in with your name and password.",
            ["log", "sign"],
            "Log in or sign in is the action of entering your details to use an account.",
          ),
          choice(
            "Which of these is a good rule for staying safe online?",
            [
              "Click on every link you receive.",
              "Never share your password with anyone.",
              "Use the same password for everything.",
            ],
            1,
            "Never share your password is basic online safety.",
          ),
          gap(
            "To copy a file from the internet to your phone, you ___ it. (one word)",
            ["download"],
            "Download means copy a file from the internet to your device.",
          ),
          choice(
            "'The Wi-Fi isn't working.' — 'Is your phone ___ to the network?'",
            ["charged", "connected", "uploaded"],
            1,
            "Connected to the network is the correct collocation.",
          ),
          choice(
            "What do you call a file you send with an email?",
            ["an account", "a screen", "an attachment"],
            2,
            "An attachment is a file added to an email.",
          ),
          gap(
            "She spent two hours chatting with her cousin on a video ___. (call)",
            ["call"],
            "A video call is a call with pictures.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "preb1-reading-blog-exchange-student",
    level: "Pre-B1",
    category: "Reading",
    topic: "Reading a personal blog",
    title: "Reading: a blog about studying abroad",
    summary: "Read a personal blog post and understand feelings, details and opinions.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "My first month in Dublin",
        before: [
          "Would you like to study in another country? Why or why not?",
          "What would be difficult at first?",
        ],
        paragraphs: [
          "Hi everyone! It's been a month since I arrived in Dublin, so I think it's time for an update. I'm staying with a host family, the Murphys, and studying English at a language school near the city centre.",
          "The first week was difficult. People spoke very fast, and I didn't understand much. I was also homesick, so I called my parents every evening. But my host mother, Sara, was very kind. She told me, 'Don't worry. Everyone feels like this at the beginning.' She was right!",
          "Now things are much better. I have made some good friends in my class, and we meet every Saturday to explore the city. Last weekend we visited a castle and had lunch at a market. I have also joined a football club, and I am learning a lot of new words from my teammates.",
          "Of course, there are some problems. The weather is rainy almost every day, and the buses are always late! However, I wouldn't change this experience for anything. If you ever get the chance to study abroad, my advice is simple: go for it!",
        ],
        glossary: [
          { term: "host family", meaning: "a family that lets a foreign student live in their home" },
          { term: "homesick", meaning: "sad because you miss your home and family" },
          { term: "explore", meaning: "to travel around a place to learn about it" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the blog",
        intro: "Choose the best answer or type a short answer. Go back to the text to check.",
        questions: [
          choice(
            "Who does the writer live with in Dublin?",
            ["A host family", "Her cousins", "A friend from school"],
            0,
            "She says she is staying with a host family, the Murphys.",
          ),
          choice(
            "Why was the first week difficult?",
            ["The school was too far away.", "She didn't like the food.", "People spoke fast and she didn't understand much."],
            2,
            "The text says people spoke very fast and she did not understand much. She was also homesick.",
          ),
          gap(
            "She called her ___ every evening in the first week. (one word)",
            ["parents"],
            "The text says: 'I called my parents every evening.'",
          ),
          choice(
            "What did Sara say to her?",
            ["You must go home.", "Everyone feels like this at the beginning.", "Speak slowly."],
            1,
            "Sara said: 'Everyone feels like this at the beginning.'",
          ),
          choice(
            "What do the writer and her friends do on Saturdays?",
            ["Explore the city", "Study English", "Play football"],
            0,
            "They meet every Saturday to explore the city.",
          ),
          choice(
            "What are the two problems she mentions?",
            ["Noise and bad food", "Homework and exams", "Rain and late buses"],
            2,
            "She says the weather is rainy almost every day and the buses are always late.",
          ),
          choice(
            "What is her advice at the end?",
            ["Stay at home.", "Learn another language first.", "Take the chance to study abroad."],
            2,
            "Her advice is: 'go for it!'",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "preb1-writing-film-book-review",
    level: "Pre-B1",
    category: "Writing",
    topic: "Writing a short review",
    title: "Writing: a review of a film or book",
    summary: "Write a short review that says what the story is about and gives your opinion.",
    minutes: 22,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your school website has a page for student reviews. Write a review of a film or a book that you enjoyed. Say what it is about, who the main characters are, what you liked, and whether you recommend it.",
        wordGuide: "A class guide: about 90 to 110 words. This is not an exam rule.",
        planning: [
          "Choose a title for the review. Say what film or book you are reviewing.",
          "Paragraph 1: say what the story is about (use the present simple).",
          "Paragraph 2: say what you liked and, if you want, one thing you did not like.",
          "Paragraph 3: recommend it (or not) and say who will enjoy it.",
        ],
        usefulLanguage: [
          "The film is called … / The book is about …",
          "It is set in … / The main character is …",
          "I really liked … because …",
          "The best part was …",
          "It is exciting/funny/moving.",
          "I would recommend it to people who like …",
        ],
        checklist: [
          "I wrote the name of the film or book and said what it is about.",
          "I used the present simple to tell the story.",
          "I gave my opinion with at least two reasons.",
          "I made a clear recommendation.",
          "I used adjectives like exciting, funny, boring, moving.",
          "I checked spelling and punctuation.",
        ],
        model: [
          "A brilliant adventure",
          "I want to tell you about the film 'The Lost Island'. It is about a group of teenagers who are lost on an island and have to work together to find their way home.",
          "I really liked the story because it is exciting and the characters are funny. The best part is when they find an old ship in a cave. The only thing I didn't like was the ending, which was a little short.",
          "I would recommend this film to anyone who likes adventures. It is a great choice for a weekend with friends.",
        ],
        modelNotes: [
          "It gives the name, then tells the story in the present simple.",
          "It gives an opinion with reasons: exciting, funny characters.",
          "It includes one weak point (the ending), which makes the review honest.",
          "It ends with a clear recommendation for a type of viewer.",
        ],
        assessment: [
          "Does the review include the story, the writer's opinion and a recommendation?",
          "Is the present simple used to tell the story?",
          "Are opinions supported by reasons?",
          "Is the vocabulary suitable (adjectives of opinion)?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "preb1-everyday-returning-faulty-item",
    level: "Pre-B1",
    category: "Everyday English",
    topic: "Returning an item and complaining politely",
    title: "Everyday English: returning something to a shop",
    summary: "Explain a problem, ask for a refund or exchange, and stay polite.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for returning things",
        points: [
          {
            title: "Explaining the problem",
            text: "Say what you bought, when, and what is wrong.",
            examples: [
              "I bought this jacket here last week, but the zip is broken.",
              "I'm afraid it doesn't work. It won't turn on.",
              "There's a hole in it / It's the wrong size / The colour isn't the same as in the picture.",
            ],
          },
          {
            title: "Asking for a solution",
            text: "Use polite phrases to ask for what you want.",
            examples: [
              "Could I exchange it for a different one?",
              "Would it be possible to get a refund?",
              "Could you repair it, please?",
            ],
          },
          {
            title: "Shop assistants often say",
            text: "Listen for these phrases.",
            examples: [
              "Have you got the receipt?",
              "I'm sorry about that. Let me have a look.",
              "I can give you a refund, or you can choose something else.",
              "It's within 14 days, so that's fine.",
            ],
          },
        ],
        watchOut: [
          "Stay polite even if you are annoyed. Say 'I'm afraid there's a problem' instead of 'This is rubbish'.",
          "Refund means you get your money back. Exchange means you get another item.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: returning an item",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which sentence is the best way to begin a complaint?",
            ["I'm afraid there's a problem with this phone.", "This is terrible!", "Give me my money now."],
            0,
            "Polite and clear: I'm afraid there's a problem with …",
          ),
          choice(
            "'I'd like my money back.' — This means you want a ___.",
            ["receipt", "refund", "discount"],
            1,
            "A refund is money you get back.",
          ),
          choice(
            "The jumper is too small. Could I ___ it for a bigger size?",
            ["repair", "exchange", "stream"],
            1,
            "Exchange means swap an item for another one.",
          ),
          choice(
            "The shop assistant asks: 'Have you got the receipt?' What is a receipt?",
            [
              "A special card for discounts",
              "A bag for your shopping",
              "A paper that shows you bought the item",
            ],
            2,
            "A receipt is proof of purchase.",
          ),
          gap(
            "I'm afraid the zip is ___. It doesn't close. (break, adjective)",
            ["broken"],
            "Broken describes something that is damaged and does not work.",
          ),
          choice(
            "'It's within 14 days, so you can return it.' What does within mean here?",
            ["not longer than", "after", "during the night"],
            0,
            "Within 14 days means up to 14 days.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: at the customer service desk",
        setup: "Work with a partner. Student A is the customer. Student B is the shop assistant. Then swap roles.",
        prompts: [
          { label: "Student A (customer)", text: "You bought headphones last week. One side does not work. Explain the problem and ask for a refund or an exchange. You have a receipt." },
          { label: "Student B (assistant)", text: "Ask what the problem is. Ask for the receipt. Offer a refund or an exchange. Be polite." },
        ],
        usefulLanguage: [
          "I bought … last week.",
          "I'm afraid there's a problem.",
          "Could I get a refund / exchange it?",
          "Here's the receipt.",
          "I'm sorry about that.",
          "Would you prefer a refund or …?",
        ],
        steps: [
          "Plan three sentences about the problem.",
          "Act the conversation without reading.",
          "Swap roles and choose a different product and problem.",
        ],
        checklist: [
          "I explained what I bought and what is wrong.",
          "I asked politely for a solution.",
          "I used 'I'm afraid' or 'Could I …'.",
          "I listened and answered the assistant's questions.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "Assistant: Hello. Can I help you?",
            "Customer: Yes, please. I bought these headphones here last week, but I'm afraid the left side doesn't work.",
            "Assistant: I'm sorry about that. Have you got the receipt?",
            "Customer: Yes, here it is.",
            "Assistant: Thank you. Would you prefer a refund, or would you like to exchange them?",
            "Customer: Could I exchange them for the same model, please?",
            "Assistant: Of course. One moment.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "preb1-revision-mixed-3",
    level: "Pre-B1",
    category: "Revision",
    topic: "Mixed Pre-B1 revision",
    title: "Pre-B1 mixed revision 3",
    summary: "Twelve mixed questions on technology vocabulary, tenses, conditionals and everyday English.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the Pre-B1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "I forgot my password, so I had to ___ it.",
            ["download", "stream", "reset"],
            2,
            "Reset a password means create a new one.",
          ),
          gap(
            "If you ___ hard, you will pass the exam. (study)",
            ["study"],
            "First conditional: if + present simple, will + base verb.",
          ),
          choice(
            "I ___ to school by bus when I was younger.",
            ["use to go", "used to go", "was used to go"],
            1,
            "Used to + base verb for a past habit.",
          ),
          choice(
            "This phone is ___ than my old one.",
            ["more expensive", "expensiver", "most expensive"],
            0,
            "Expensive is a long adjective, so the comparative is more expensive.",
          ),
          gap(
            "She has lived here ___ 2019. (for or since)",
            ["since"],
            "A starting point in time takes since.",
          ),
          choice(
            "'I'd like to return this shirt.' — 'Have you got the ___?'",
            ["attachment", "password", "receipt"],
            2,
            "Shops usually ask for a receipt.",
          ),
          choice(
            "Which sentence is polite?",
            ["Give me a refund.", "Refund now.", "Could I have a refund, please?"],
            2,
            "Could I … please? is polite.",
          ),
          gap(
            "The phone was lying ___ the table. (on / in)",
            ["on"],
            "On the table: on a surface.",
          ),
          choice(
            "I'm very interested ___ photography.",
            ["in", "on", "at"],
            0,
            "Interested in is the correct preposition.",
          ),
          choice(
            "They ___ dinner when the lights went out.",
            ["had", "were having", "have"],
            1,
            "Past continuous for an action in progress interrupted by a shorter one.",
          ),
          gap(
            "The book was so ___ that I couldn't stop reading. (excite)",
            ["exciting"],
            "-ing adjectives describe the thing that causes the feeling.",
          ),
          choice(
            "You ___ park here. It's forbidden.",
            ["needn't", "mustn't", "don't have to"],
            1,
            "Mustn't means it is not allowed.",
          ),
        ],
      },
    ],
  },
];
