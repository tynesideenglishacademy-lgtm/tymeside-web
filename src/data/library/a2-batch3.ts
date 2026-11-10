import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const a2UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "a2-vocabulary-clothes-shopping",
    level: "A2",
    category: "Vocabulary",
    topic: "Clothes and shopping",
    title: "Clothes and shopping",
    summary: "Learn words for clothes, sizes, prices and what people say in a shop.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Words for clothes and shopping",
        intro: "Learn the words in small groups. Say each word aloud and make a sentence about yourself.",
        points: [
          {
            title: "Clothes",
            text: "Some clothes are plural words in English: we say a pair of trousers, a pair of jeans, a pair of shoes.",
            examples: [
              "I'm wearing a blue jumper and black trousers.",
              "She bought a pair of white trainers.",
              "He put on his coat because it was cold.",
            ],
          },
          {
            title: "Describing clothes",
            text: "Use adjectives before the noun: colour, material and style.",
            examples: [
              "a long red dress",
              "a cotton T-shirt",
              "tight jeans / loose jeans",
              "a smart jacket",
            ],
          },
          {
            title: "In the shop",
            text: "These words and phrases are very useful in shops.",
            examples: [
              "What size are you? — I'm a medium.",
              "Can I try it on?",
              "Does it fit? / It's too big/small.",
              "It's on sale. / It's half price.",
              "Where is the changing room?",
            ],
          },
        ],
        table: {
          caption: "Small, medium and large",
          head: ["Word", "Meaning"],
          rows: [
            ["size", "how big or small clothes are (S, M, L)"],
            ["fit", "to be the right size and shape for you"],
            ["suit", "to look good on you"],
            ["receipt", "the paper that shows what you bought and how much you paid"],
          ],
        },
        watchOut: [
          "Fit and suit are different. 'This coat fits me' means the size is right. 'This coat suits me' means it looks good on me.",
          "We say wear for clothes you have on now, and put on for the action of dressing.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the word you need. Then reveal the answer.",
        items: [
          {
            prompt: "The jacket is too small. You say: 'It doesn't ___ me.'",
            answer: "fit",
            why: "Fit is about size and shape. The jacket is the wrong size.",
          },
          {
            prompt: "You want to check clothes before you buy them. You ask: 'Can I ___ it on?'",
            answer: "try",
            why: "Try on means put clothes on to see if you like them.",
          },
          {
            prompt: "The shop is selling shoes for a lower price. The sign says: 'Shoes ___ sale'.",
            answer: "on",
            why: "On sale means at a lower price than usual.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: clothes and shopping",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "It's winter and it's very cold. Which clothes do you need?",
            ["shorts and sandals", "a swimming costume", "a coat and a scarf"],
            2,
            "A coat and a scarf keep you warm in winter.",
          ),
          choice(
            "The trousers are too big. You need a smaller ___.",
            ["size", "receipt", "sale"],
            0,
            "Size is how big or small clothes are.",
          ),
          gap(
            "A pair of ___ has two legs. (trousers / hats)",
            ["trousers"],
            "A pair of trousers has two legs.",
          ),
          choice(
            "'This dress looks lovely on you!' — The dress ___ you.",
            ["fits", "suits", "wears"],
            1,
            "Suit means it looks good on you.",
          ),
          gap(
            "I want to return these shoes. Where is my ___? (the paper from the shop)",
            ["receipt"],
            "You usually need the receipt to return something to a shop.",
          ),
          choice(
            "Where do you try on clothes in a shop?",
            ["At the till", "In the changing room", "On the shelf"],
            1,
            "The changing room is where you try on clothes.",
          ),
          gap(
            "Everything in the shop is half ___ today! (price)",
            ["price"],
            "Half price means 50% of the normal price.",
          ),
          choice(
            "Which word does NOT describe a type of clothing?",
            ["jumper", "skirt", "receipt"],
            2,
            "A receipt is a piece of paper, not clothing.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "a2-reading-sports-centre-leaflet",
    level: "A2",
    category: "Reading",
    topic: "Reading a leaflet",
    title: "Reading: a leaflet for a new sports centre",
    summary: "Read a short leaflet and find times, prices and rules.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Welcome to Riverside Sports Centre",
        before: [
          "Do you play sports? Where do you do them?",
          "What information do you need before joining a sports centre?",
        ],
        paragraphs: [
          "Riverside Sports Centre opens on Monday 3 March! We have a swimming pool, a gym, two tennis courts and a café.",
          "Opening hours: Monday to Friday, 7 am to 10 pm. Saturday and Sunday, 9 am to 6 pm.",
          "Prices: A one-day ticket costs six euros. A monthly ticket costs thirty-five euros. Students under eighteen pay half price. Children under five can swim for free with an adult.",
          "Classes: We offer yoga on Tuesdays at 6.30 pm, and a swimming class for beginners on Saturdays at 10 am. You must book classes online or at the front desk.",
          "Rules: Please wear sports shoes in the gym. Swimmers must wear a swimming hat. Bring your own towel, because we do not provide towels.",
          "Free trial: Come before 15 March and try the centre for one day, free!",
        ],
        glossary: [
          { term: "front desk", meaning: "the place where staff help visitors when they arrive" },
          { term: "book", meaning: "to arrange to do something at a certain time" },
          { term: "free trial", meaning: "a chance to use something for no money, before you decide" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the leaflet",
        intro: "Go back to the text to check each answer.",
        questions: [
          choice(
            "When does the centre close on Saturdays?",
            ["At 6 pm", "At 10 pm", "At 9 am"],
            0,
            "Saturday and Sunday: 9 am to 6 pm.",
          ),
          gap(
            "A monthly ticket costs ___ euros. (a number)",
            ["35", "thirty-five", "thirty five"],
            "The text says a monthly ticket costs thirty-five euros.",
          ),
          choice(
            "Who pays half price?",
            ["Children under five", "Adults", "Students under eighteen"],
            2,
            "Students under eighteen pay half price. Children under five swim free with an adult.",
          ),
          choice(
            "What day is the beginners' swimming class?",
            ["Tuesday", "Saturday", "Sunday"],
            1,
            "The swimming class for beginners is on Saturdays at 10 am.",
          ),
          choice(
            "What must swimmers bring or wear?",
            ["A swimming hat", "A tennis racket", "Their own food"],
            0,
            "Swimmers must wear a swimming hat.",
          ),
          choice(
            "Does the centre give you a towel?",
            ["Yes, always", "Only on Saturdays", "No, you bring your own"],
            2,
            "The text says: 'Bring your own towel, because we do not provide towels.'",
          ),
          gap(
            "You can try the centre for free before ___ March. (a number)",
            ["15", "fifteen"],
            "The free trial is available before 15 March.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "a2-writing-describe-a-person",
    level: "A2",
    category: "Writing",
    topic: "Describing a person",
    title: "Writing: describing a friend or family member",
    summary: "Write a short description of a person: appearance, personality and what you do together.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your English class is making a magazine called 'People we love'. Write about a friend or a person in your family. Say what the person looks like, what he or she is like, and what you do together.",
        wordGuide: "A class guide: about 70 to 90 words. This is not an exam rule.",
        planning: [
          "Choose one person and write their name and how you know them.",
          "Paragraph 1: appearance (age, hair, eyes, clothes).",
          "Paragraph 2: personality (kind, funny, shy, clever) with one example.",
          "Paragraph 3: what you do together and why you like this person.",
        ],
        usefulLanguage: [
          "My best friend is called … He/She is … years old.",
          "He/She has got short/long dark/fair hair and brown/blue eyes.",
          "He/She is quite tall / of medium height.",
          "He/She is very kind/funny/shy because …",
          "We usually … at the weekend.",
          "I like him/her because …",
        ],
        checklist: [
          "I described appearance, personality and activities.",
          "I used has got / is for describing, and the present simple for habits.",
          "I gave a reason with because.",
          "I used and, but or because to join ideas.",
          "I checked spelling and capital letters.",
        ],
        model: [
          "My best friend is called Daniel. He is fifteen years old and he lives near my house.",
          "Daniel is quite tall and he has got short dark hair and brown eyes. He usually wears jeans and a black jacket.",
          "He is very funny and he is also kind, because he always helps me with my homework. He is sometimes a bit shy with new people.",
          "At the weekend we play basketball in the park or we watch films at my house. I like Daniel because he is a loyal friend.",
        ],
        modelNotes: [
          "It describes appearance, personality and activities in three clear paragraphs.",
          "It uses has got and is for description, and the present simple for habits.",
          "It gives reasons with because and uses adverbs: usually, sometimes, always.",
          "The sentences are short and easy to understand.",
        ],
        assessment: [
          "Does the text cover appearance, personality and activities?",
          "Is the grammar of description correct (is, has got, present simple)?",
          "Are ideas linked with and, but, because?",
          "Is the vocabulary suitable and varied for A2?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "a2-everyday-directions-help",
    level: "A2",
    category: "Everyday English",
    topic: "Asking for and giving directions",
    title: "Everyday English: asking for and giving directions",
    summary: "Ask the way politely and follow simple directions.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for finding your way",
        points: [
          {
            title: "Asking the way",
            text: "Start with Excuse me. Use Could you tell me the way to …? or Where is the …?",
            examples: [
              "Excuse me, where is the post office?",
              "Could you tell me the way to the station, please?",
              "Is there a bank near here?",
            ],
          },
          {
            title: "Giving directions",
            text: "Use the imperative: Go straight on, Turn left, Take the second road on the right.",
            examples: [
              "Go straight on for two hundred metres.",
              "Turn right at the traffic lights.",
              "Take the first road on the left.",
              "It's opposite the library, next to the bakery.",
            ],
          },
          {
            title: "Checking and thanking",
            text: "Check that you understand, then thank the person.",
            examples: [
              "Sorry, could you say that again, please?",
              "So I go straight on and turn left?",
              "Thank you very much. You've been very helpful.",
            ],
          },
        ],
        watchOut: [
          "Say 'turn left', not 'turn to the left side'. Keep directions short.",
          "On the left / on the right describes where something is. Turn left / turn right tells someone to move.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: directions",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which sentence is the most polite way to start?",
            ["Where is the station?", "Station. Where?", "Excuse me, could you tell me the way to the station?"],
            2,
            "Excuse me and Could you tell me … are polite.",
          ),
          choice(
            "'Go straight on, then turn left at the bank.' You go ___.",
            ["forward and then to the left", "back and then right", "left and then straight"],
            0,
            "Go straight on = continue forward. Then turn left.",
          ),
          gap(
            "The cinema is ___ the bank. It is on the other side of the road. (opposite)",
            ["opposite"],
            "Opposite means on the other side of the road, facing it.",
          ),
          choice(
            "You didn't understand the directions. What do you say?",
            ["I don't care.", "Sorry, could you say that again, please?", "Thank you, goodbye."],
            1,
            "Ask politely for repetition.",
          ),
          gap(
            "Take the second road on the ___. (right)",
            ["right"],
            "Directions: take the second road on the right.",
          ),
          choice(
            "'The museum is between the park and the bakery.' Where is it?",
            ["Behind the park", "In the middle of them", "Far from the bakery"],
            1,
            "Between means in the middle of two places.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: asking the way",
        setup: "Work with a partner. Student A is a tourist. Student B lives in the town. Use a simple map you draw together. Then swap roles.",
        prompts: [
          { label: "Student A (tourist)", text: "You want to go to the post office. Ask the way. Check that you understand and thank your partner." },
          { label: "Student B (local)", text: "Give clear directions from the station. Use at least three direction phrases and one place word like opposite or next to." },
        ],
        usefulLanguage: [
          "Excuse me, where is …?",
          "Go straight on.",
          "Turn left/right at …",
          "It's opposite / next to / between …",
          "Could you say that again, please?",
          "Thank you very much.",
        ],
        steps: [
          "Draw a map with five places.",
          "Act the conversation without reading.",
          "Swap roles and choose a different place.",
        ],
        checklist: [
          "I started with Excuse me.",
          "I used turn left/right, go straight on.",
          "I used a place word (opposite, next to, between).",
          "I checked and thanked.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "A: Excuse me, could you tell me the way to the post office, please?",
            "B: Yes, of course. Go straight on and turn left at the traffic lights. The post office is on the right, opposite the bakery.",
            "A: Sorry, could you say that again, please?",
            "B: Go straight on, turn left at the lights. It's on the right.",
            "A: So I go straight on and turn left? Thank you very much!",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "a2-revision-mixed-3",
    level: "A2",
    category: "Revision",
    topic: "Mixed A2 revision",
    title: "A2 mixed revision 3",
    summary: "Twelve mixed questions on shopping words, tenses, prepositions, requests and directions.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the A2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "This jumper is too small. Have you got a bigger ___?",
            ["price", "receipt", "size"],
            2,
            "We ask for a different size.",
          ),
          gap(
            "I ___ my keys. I can't find them anywhere. (lose, present perfect)",
            ["have lost", "'ve lost"],
            "Present perfect for a past action with a result now.",
          ),
          choice(
            "'Can I try this on?' — 'Yes, the changing room is ___ the left.'",
            ["on", "in", "at"],
            0,
            "We say on the left.",
          ),
          choice(
            "She is the ___ student in our class. Everyone likes her.",
            ["kinder", "most kind", "kindest"],
            2,
            "Kind is a short adjective: the kindest.",
          ),
          gap(
            "What are you ___ at the weekend? (do, present continuous)",
            ["doing"],
            "Present continuous for an arrangement: What are you doing?",
          ),
          choice(
            "'The phone is ringing!' — 'I ___ it!'",
            ["answer", "'ll answer", "'m answering"],
            1,
            "A quick decision at the moment of speaking uses will: I'll answer it!",
          ),
          choice(
            "The supermarket is ___ the bank and the library.",
            ["between", "opposite", "behind"],
            0,
            "Between means in the middle of two places.",
          ),
          gap(
            "There ___ some milk in the fridge. (is / are)",
            ["is"],
            "Milk is uncountable, so there is.",
          ),
          choice(
            "'Would you like some tea?' — ' ___ '",
            ["Yes, I want.", "I like.", "Yes, please."],
            2,
            "A polite answer is Yes, please.",
          ),
          choice(
            "He is ___ than his brother.",
            ["more tall", "tallest", "taller"],
            2,
            "Comparative of a short adjective: taller.",
          ),
          gap(
            "They ___ in Spain for ten years. (live, present perfect, use 'have')",
            ["have lived", "'ve lived"],
            "Present perfect with for + a period of time.",
          ),
          choice(
            "'Excuse me, how much ___ these shoes?'",
            ["are", "is", "does"],
            0,
            "Shoes is plural, so how much are these shoes?",
          ),
        ],
      },
    ],
  },
];
