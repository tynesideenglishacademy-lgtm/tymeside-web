import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

// Pre-B1 study units. Draft until a teacher has reviewed them.
// Choice answers are written with the correct option first and then
// rebalanced by scripts/rebalance-answers.mjs, so do not rely on position here.

export const preB1Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "preb1-grammar-past-simple-continuous",
    level: "Pre-B1",
    category: "Grammar",
    topic: "Past simple and past continuous",
    title: "Past simple and past continuous: telling a story",
    summary: "Show the difference between a background action in progress and a short event that interrupted it.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Two past tenses, two jobs",
        intro: "When we tell a story, we use the past simple for the main events and the past continuous for the situation around them.",
        points: [
          {
            title: "Past simple: finished events, one after another",
            text: "Use the past simple for actions that happened in order or at a definite time.",
            examples: [
              "I opened the door and walked in.",
              "She called me at six o'clock.",
              "We didn't win the match.",
            ],
          },
          {
            title: "Past continuous: an action in progress",
            text: "Form: was or were + verb-ing. It shows that something was already happening at a moment in the past. It describes the background.",
            examples: [
              "At eight o'clock I was cooking dinner.",
              "It was raining and the streets were empty.",
              "They weren't listening to the teacher.",
            ],
          },
          {
            title: "Together: when and while",
            text: "A short event can interrupt a longer action. We often use when with the short event and while with the longer action.",
            examples: [
              "I was walking home when it started to rain.",
              "While we were waiting, the bus arrived.",
              "When the phone rang, she was having a shower.",
            ],
          },
          {
            title: "Two actions at the same time",
            text: "Use the past continuous for both actions when they were in progress together.",
            examples: [
              "While I was studying, my brother was playing the guitar.",
            ],
          },
        ],
        table: {
          caption: "Which tense?",
          head: ["Idea", "Tense", "Example"],
          rows: [
            ["Finished event", "Past simple", "He broke his arm."],
            ["Action in progress at a past moment", "Past continuous", "He was skiing at the time."],
            ["Short event interrupts a longer action", "Past simple + past continuous", "He broke his arm while he was skiing."],
          ],
        },
        watchOut: ["Some verbs describe states, not actions in progress, for example know, like and want. We usually use the past simple with them: I knew the answer, not I was knowing the answer."],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        intro: "Decide which tense you need before you reveal the answer.",
        items: [
          {
            prompt: "I ___ (walk) to school when I saw an accident.",
            answer: "was walking",
            why: "Walking was in progress when something else happened, so we use the past continuous.",
          },
          {
            prompt: "We ___ (hear) a loud noise and ran outside.",
            answer: "heard",
            why: "These are two events in order, so we use the past simple for both: heard and ran.",
          },
          {
            prompt: "While Dad ___ (drive), Mum looked at the map.",
            answer: "was driving",
            why: "While introduces the longer action in progress. Looked at the map is the other action.",
          },
          {
            prompt: "It ___ (be) very cold, so we stayed inside.",
            answer: "was",
            why: "Be is a state verb here and the sentence describes a fact in the past, not a moving action, so we use the past simple.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        intro: "Choose the best answer or type the missing word or words.",
        questions: [
          choice(
            "I was cycling in the park when I ___ my phone.",
            ["was dropping", "have dropped", "dropped"],
            2,
            "Dropping the phone was a short event that interrupted the cycling, so it is in the past simple.",
          ),
          choice(
            "What ___ when the storm started?",
            ["were you doing", "have you done", "do you do"],
            0,
            "The question asks about an action in progress when another event happened, so we use the past continuous.",
          ),
          gap(
            "The students ___ when the fire alarm rang. (not / listen)",
            ["weren't listening", "were not listening"],
            "Use was or were not + verb-ing for an action that was not in progress. The subject is plural, so were.",
          ),
          choice(
            "While my sister was making lunch, I ___ the table.",
            ["set", "was setting", "have set"],
            1,
            "Both actions were in progress at the same time, so both use the past continuous.",
          ),
          gap(
            "We ___ dinner when the lights went out. (have)",
            ["were having"],
            "Having dinner was in progress, and the lights going out interrupted it.",
          ),
          choice(
            "Which sentence describes two events one after the other?",
            [
              "She was opening the letter and starting to cry.",
              "She opened the letter and started to cry.",
              "She opens the letter and was starting to cry.",
            ],
            1,
            "Events one after the other are in the past simple. The second option shows two actions in progress together, and the third mixes present and past.",
          ),
          gap(
            "I ___ the answer, so I didn't ask for help. (know)",
            ["knew"],
            "Know is a state verb, so we use the past simple, not the continuous.",
          ),
          choice(
            "The sun ___ and the birds were singing when we left the house.",
            ["shone", "has shone", "was shining"],
            2,
            "The sentence sets the scene, so it uses the past continuous, like were singing.",
          ),
        ],
      },
    ],
  },
  {
    key: "preb1-grammar-first-conditional",
    level: "Pre-B1",
    category: "Grammar",
    topic: "First conditional and time clauses",
    title: "If and when: real possibilities in the future",
    summary: "Talk about what will happen if something else happens, and use time clauses correctly.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "The first conditional",
        intro: "We use the first conditional for things that are possible in the future and their results.",
        points: [
          {
            title: "Form: if + present simple, will + base verb",
            text: "The if clause uses the present simple even though we are talking about the future. The result clause uses will or won't.",
            examples: [
              "If it rains tomorrow, we will stay at home.",
              "If you don't hurry, you'll miss the bus.",
              "What will you do if you fail the exam?",
            ],
          },
          {
            title: "The order can change",
            text: "We can put the result first. Then we do not need a comma.",
            examples: [
              "We will stay at home if it rains.",
              "I'll call you if I have any news.",
            ],
          },
          {
            title: "Time clauses with when, as soon as, before, until",
            text: "After these words we also use the present simple for the future, not will.",
            examples: [
              "I'll text you when I arrive.",
              "As soon as the film finishes, we'll go home.",
              "Wait here until I come back.",
            ],
          },
          {
            title: "Other modals in the result clause",
            text: "We can use can, may or an imperative instead of will.",
            examples: [
              "If you finish early, you can leave.",
              "If you see Ana, tell her to call me.",
            ],
          },
        ],
        watchOut: ["Do not use will in the if clause: If it will rain is wrong. We say If it rains."],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "If I ___ (see) him, I'll give him the message.",
            answer: "see",
            why: "The if clause uses the present simple, even though the meaning is future.",
          },
          {
            prompt: "We'll start the lesson when everyone ___ (arrive).",
            answer: "arrives",
            why: "When begins a time clause about the future, so we use the present simple: arrives.",
          },
          {
            prompt: "If you drink too much coffee, you ___ (not / sleep) well.",
            answer: "won't sleep",
            why: "The result of the possibility uses will or won't plus the base verb.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "If you study hard, you ___ the exam.",
            ["will pass", "would pass", "passed"],
            0,
            "The result clause of a first conditional uses will plus the base verb.",
          ),
          gap(
            "If the weather ___ nice on Saturday, we'll have a picnic. (be)",
            ["is", "'s"],
            "The if clause uses the present simple. Is is correct. Will be is not used after if.",
          ),
          choice(
            "I'll phone you as soon as I ___ home.",
            ["will get", "am getting", "get"],
            2,
            "After as soon as we use the present simple for a future time, so get is correct.",
          ),
          gap(
            "If she ___ on time, we'll go without her. (not / arrive)",
            ["doesn't arrive", "does not arrive"],
            "The if clause is negative present simple: doesn't arrive, because she is third person singular.",
          ),
          choice(
            "Which sentence about waiting is correct?",
            [
              "I'll wait here until you will finish.",
              "I'll wait here until you finish.",
              "I wait here until you will finish.",
            ],
            1,
            "After until we use the present simple for the future. We do not use will in the time clause.",
          ),
          gap(
            "What ___ you do if you lose your keys?",
            ["will"],
            "A first conditional question uses will + subject + base verb in the result clause: What will you do …?",
            "First conditional: if + present simple, will + base verb.",
          ),
          choice(
            "If you ___ a problem, tell the teacher.",
            ["have", "will have", "had had"],
            0,
            "The if clause uses the present simple and the result is an imperative: tell the teacher.",
          ),
          choice(
            "Why is this sentence wrong? 'When I will see her, I'll tell her.'",
            [
              "We must use if, not when.",
              "The result clause needs the past simple.",
              "We use the present simple after when for the future.",
            ],
            2,
            "Time clauses with when use the present simple for the future: When I see her, I'll tell her.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "preb1-vocabulary-phrasal-verbs-daily-life",
    level: "Pre-B1",
    category: "Vocabulary",
    topic: "Phrasal verbs for daily life",
    title: "Phrasal verbs for everyday life",
    summary: "Learn common phrasal verbs, where the object goes and how to use them in real sentences.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Phrasal verbs you will use every day",
        intro: "A phrasal verb is a verb plus a small word such as up, out or off. The meaning is often different from the meaning of the verb alone.",
        points: [
          {
            title: "Routine and home",
            text: "These verbs describe things we do every day.",
            examples: [
              "wake up: I wake up at seven.",
              "get up: leave your bed. We get up at half past seven.",
              "turn off / turn on: Please turn off the light.",
              "clean up: We cleaned up the kitchen after dinner.",
            ],
          },
          {
            title: "Plans and people",
            text: "These verbs are useful when you talk about friends and plans.",
            examples: [
              "get on with: I get on well with my cousin.",
              "look forward to: I'm looking forward to the holidays.",
              "find out: Can you find out what time the film starts?",
              "give up: He gave up smoking last year.",
            ],
          },
          {
            title: "Where does the object go?",
            text: "With many phrasal verbs you can put a noun object before or after the particle. With a pronoun (it, them, me) the pronoun must go in the middle.",
            examples: [
              "Turn off the TV. / Turn the TV off.",
              "Turn it off. (not Turn off it.)",
            ],
          },
          {
            title: "Verbs that stay together",
            text: "Some phrasal verbs cannot be separated. The object always comes after the particle.",
            examples: [
              "I'm looking forward to the party.",
              "She gets on with her classmates.",
            ],
          },
        ],
        table: {
          caption: "Quick reference",
          head: ["Phrasal verb", "Meaning", "Example"],
          rows: [
            ["wake up", "stop sleeping", "I woke up late today."],
            ["find out", "discover information", "Let's find out the answer."],
            ["give up", "stop trying or stop a habit", "Don't give up!"],
            ["look after", "take care of", "She looks after her little brother."],
            ["put on", "start wearing", "Put on your coat, it's cold."],
            ["take off", "remove clothes (or: leave the ground)", "Take off your shoes, please."],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which phrasal verb means to take care of a child or pet?",
            answer: "look after",
            why: "Look after means to take care of someone or something.",
          },
          {
            prompt: "Replace the noun with a pronoun: 'Turn off the light.'",
            answer: "Turn it off.",
            why: "With a pronoun the object goes between the verb and the particle.",
          },
          {
            prompt: "Complete: I'm really looking ___ to the weekend.",
            answer: "forward",
            why: "Look forward to means to be happy about something that will happen. The verb does not separate.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "It's cold outside, so ___ your coat.",
            ["take off", "give up", "put on"],
            2,
            "Put on means to start wearing something.",
          ),
          gap(
            "I don't know the time of the train. I'll ___ out and tell you.",
            ["find"],
            "Find out means to discover information.",
          ),
          choice(
            "My grandmother ___ my little cousins while their parents are at work.",
            ["looks after", "gives up", "turns on"],
            0,
            "Looks after means takes care of.",
          ),
          choice(
            "He tried to learn the piano, but it was too difficult, so he ___.",
            ["got up", "gave up", "woke up"],
            1,
            "Gave up means stopped trying.",
          ),
          gap(
            "This music is too loud. Can you turn it ___?",
            ["down", "off"],
            "Both turn it down (lower the volume) and turn it off make sense here. The pronoun it goes between turn and the particle.",
          ),
          choice(
            "Which sentence about switching something off is correct?",
            [
              "Please switch off it before you leave.",
              "Please switch it off before you leave.",
              "Please off switch it before you leave.",
            ],
            1,
            "When the object is a pronoun it must come before the particle: switch it off.",
          ),
          gap(
            "I ___ well with my new classmates. We have a lot in common. (get)",
            ["get on", "am getting on"],
            "Get on with means to have a good relationship with someone. Write the verb and the particle.",
            "Write two words, for example: get on.",
          ),
          choice(
            "Which phrasal verb means 'be excited about something in the future'?",
            ["look up to", "look out for", "look forward to"],
            2,
            "Look forward to means to feel happy and excited about a future event.",
          ),
        ],
      },
    ],
  },
  {
    key: "preb1-vocabulary-word-formation-nouns",
    level: "Pre-B1",
    category: "Vocabulary",
    topic: "Word formation: nouns and adjectives",
    title: "Word formation: making nouns and adjectives",
    summary: "Use common suffixes to change verbs into nouns and nouns into adjectives.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Changing the word class",
        intro: "English often changes the end of a word to change its job in the sentence. Knowing the patterns helps you read and write more accurately.",
        points: [
          {
            title: "Verb to noun: -ion, -ment, -ance",
            text: "Many nouns end in these suffixes. Sometimes the spelling of the base word changes.",
            examples: [
              "organise → organisation",
              "improve → improvement",
              "perform → performance",
              "decide → decision",
            ],
          },
          {
            title: "Noun to adjective: -ful, -less, -y, -al",
            text: "-ful means full of something. -less means without something. -y often describes something with a lot of it.",
            examples: [
              "help → helpful / helpless",
              "care → careful / careless",
              "rain → rainy",
              "culture → cultural",
            ],
          },
          {
            title: "Person nouns: -er, -or, -ist",
            text: "These endings describe the person who does something.",
            examples: [
              "teach → teacher",
              "act → actor",
              "tour → tourist",
            ],
          },
          {
            title: "Opposites with un-, in- and dis-",
            text: "These prefixes often make an adjective negative. There is no rule for which to use, so learn them with the word.",
            examples: [
              "happy → unhappy",
              "correct → incorrect",
              "honest → dishonest",
            ],
          },
        ],
        watchOut: ["Check the sentence. Sometimes you need a noun (after a, the or an adjective), sometimes an adjective (before a noun or after be) and sometimes an adverb."],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Make a noun from: discover",
            answer: "discovery",
            why: "Discover → discovery. The ending changes to -y.",
          },
          {
            prompt: "Make an adjective meaning 'without hope' from: hope",
            answer: "hopeless",
            why: "-less means without, so hopeless means without hope.",
          },
          {
            prompt: "Which word fits? 'The ___ of the new library was in May.' (open → opening / opened / opener)",
            answer: "opening",
            why: "After The and before of we need a noun, so opening is correct.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          gap(
            "Her ___ to the problem was very clever. (solve)",
            ["solution"],
            "After her we need a noun. The noun from solve is solution.",
          ),
          choice(
            "The weather forecast says it will be ___ tomorrow.",
            ["cloudy", "cloud", "cloudily"],
            0,
            "We need an adjective after will be to describe the weather: cloudy.",
          ),
          gap(
            "Be ___ when you cross the road. (care)",
            ["careful"],
            "After be we need an adjective. Careful means taking care.",
          ),
          choice(
            "He is a very good ___. He can play the piano and the violin.",
            ["musical", "music", "musician"],
            2,
            "After a good we need a person noun. A musician is a person who plays music.",
          ),
          gap(
            "It was ___ that he won the race after such a bad start. (believe)",
            ["unbelievable"],
            "We need an adjective after was. Unbelievable means very difficult to believe: un- + believe + -able.",
            "Start with un-.",
          ),
          choice(
            "Our teacher gave us a lot of useful ___ for the exam.",
            ["informs", "information", "informative"],
            1,
            "We need an uncountable noun after a lot of. Information is the noun.",
          ),
          gap(
            "Thank you for the ___ to your birthday party. (invite)",
            ["invitation"],
            "After the we need a noun. The noun from invite is invitation.",
          ),
          choice(
            "The bus driver was friendly and ___.",
            ["helpful", "helpless", "help"],
            0,
            "Helpful means ready to help. Helpless means unable to do anything, which does not match friendly.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Reading ─────────────────────────
  {
    key: "preb1-reading-phone-free-weekend",
    level: "Pre-B1",
    category: "Reading",
    topic: "Magazine article",
    title: "Reading: a weekend without phones",
    summary: "Read a short magazine article, find the main ideas and work out new words from context.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Can you live without your phone?",
        before: [
          "How many hours a day do you use your phone? What for?",
          "Could you spend a whole weekend without it? Why or why not?",
        ],
        paragraphs: [
          "Last month, a group of fifteen teenagers in a small town in Scotland agreed to try an unusual experiment. For one weekend, they switched off their phones and gave them to their teachers.",
          "At first, many of them felt anxious. Daniel, 15, said, 'I kept touching my pocket to check for messages. It was a habit.' But by Saturday afternoon, things were different. The group went hiking in the hills, played board games and cooked a meal together. Nobody was looking at a screen, so they talked a lot more.",
          "On Sunday evening, the teenagers got their phones back. Most of them were surprised by their own reaction. 'I thought I would be desperate to read my messages,' said Leila, 14, 'but I wasn't. I actually felt calmer.' However, not everybody enjoyed the weekend. Sam, 16, admitted, 'It was interesting, but I missed listening to music on my phone, and I couldn't contact my parents when we were late.'",
          "The teachers say they do not want to ban phones. 'They are useful,' said one of them. 'But it is good to know that we can enjoy ourselves without them.'",
        ],
        glossary: [
          { term: "anxious", meaning: "worried and nervous" },
          { term: "habit", meaning: "something you do regularly without thinking" },
          { term: "desperate", meaning: "wanting something very much" },
          { term: "ban", meaning: "to say officially that something is not allowed" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer, or type your answer. Go back to the text to check.",
        questions: [
          choice(
            "What was the experiment?",
            [
              "Teachers collected phones for a month.",
              "Teenagers used their phones to play board games.",
              "Teenagers did not use their phones for a weekend.",
            ],
            2,
            "The first paragraph says they switched off their phones for one weekend and gave them to teachers.",
          ),
          choice(
            "How did many of the teenagers feel at the start?",
            ["Bored", "Angry with their teachers", "Anxious"],
            2,
            "The text says: 'At first, many of them felt anxious.'",
          ),
          choice(
            "What does Daniel's comment about his pocket show?",
            [
              "Checking his phone had become an automatic action.",
              "He lost his phone on Friday.",
              "He wanted to buy a new phone.",
            ],
            0,
            "He calls it 'a habit', which means something he did without thinking.",
          ),
          choice(
            "Why did the group talk more on Saturday?",
            [
              "The teachers asked them questions.",
              "They were not looking at screens.",
              "They had nothing else to do inside.",
            ],
            1,
            "The text says: 'Nobody was looking at a screen, so they talked a lot more.'",
          ),
          choice(
            "How did Leila feel on Sunday evening?",
            ["Desperate", "Calm", "Disappointed"],
            1,
            "She says: 'I actually felt calmer.' She expected to be desperate, but she wasn't.",
          ),
          gap(
            "Why did Sam miss his phone? Write one thing he mentions.",
            ["music", "listening to music", "listen to music", "contacting his parents", "contact his parents", "contacting parents", "contact my parents"],
            "Sam missed listening to music and he could not contact his parents when they were late. Either answer is correct.",
          ),
          choice(
            "True, false or not stated? 'The teachers want to ban phones in school.'",
            ["True", "Not stated", "False"],
            2,
            "The text says: 'The teachers say they do not want to ban phones.'",
          ),
          choice(
            "True, false or not stated? 'All fifteen teenagers enjoyed the weekend.'",
            ["False", "True", "Not stated"],
            0,
            "Sam admitted that he missed some things, and the text says not everybody enjoyed the weekend.",
          ),
          choice(
            "What is the best title for the last paragraph?",
            [
              "Why phones are dangerous",
              "How to cook a meal in the hills",
              "Teachers: phones are useful, but not always necessary",
            ],
            2,
            "The teachers say phones are useful but it is good to know we can enjoy ourselves without them.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Writing ─────────────────────────
  {
    key: "preb1-writing-short-story",
    level: "Pre-B1",
    category: "Writing",
    topic: "Narrative",
    title: "Writing: a short story",
    summary: "Plan and write a short story using past tenses, linkers and description.",
    minutes: 25,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your English teacher has asked you to write a short story. The story must begin with this sentence: 'It was a normal morning until I heard a strange noise.' Write your story.",
        wordGuide: "A class guide: about 100 to 130 words. This is not an exam rule.",
        planning: [
          "Decide what the noise was and who is in the story.",
          "Beginning: set the scene (where, when, who). Use the past continuous for background.",
          "Middle: say what happened. Use the past simple for events in order.",
          "End: say how the story finished and how the character felt.",
          "Use linkers: first, then, suddenly, after that, finally.",
        ],
        usefulLanguage: [
          "I was walking / sitting / waiting when …",
          "Suddenly, … / All of a sudden, …",
          "After that, … / A few minutes later, …",
          "I was surprised / terrified / relieved.",
          "In the end, … / Finally, …",
        ],
        checklist: [
          "My story starts with the sentence in the task.",
          "I used the past simple for the main events and the past continuous for the background.",
          "I used at least four linking words.",
          "I described feelings or the place with some adjectives.",
          "The story has a clear beginning, middle and end.",
          "I checked spelling, capital letters and irregular past forms.",
        ],
        model: [
          "It was a normal morning until I heard a strange noise. I was having breakfast in the kitchen while my parents were still asleep. The noise was coming from the garden.",
          "Slowly, I opened the back door and looked outside. At first, I couldn't see anything. Then I noticed a small brown dog under the table. It was shaking and its leg was bleeding a little.",
          "I felt sorry for the dog, so I gave it some water and woke up my father. After that, we took it to the vet. The vet said the dog would be fine.",
          "A week later, nobody had come to collect it, so we decided to keep it. Now Max sleeps next to my bed every night.",
        ],
        modelNotes: [
          "It starts with the required sentence and sets the scene with the past continuous: I was having breakfast, the noise was coming.",
          "The main events are in the past simple: opened, noticed, gave, took.",
          "It uses linkers: slowly, at first, then, after that, a week later.",
          "It has a clear ending and shows feelings: I felt sorry for the dog.",
          "This is one possible answer. Your story can be completely different.",
        ],
        assessment: [
          "Does the story begin with the sentence from the task and stay on topic?",
          "Are the events easy to follow in a clear order?",
          "Are the past simple and past continuous used accurately?",
          "Is there a range of linking words and some interesting vocabulary?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },
  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "preb1-speaking-describe-photo-opinion",
    level: "Pre-B1",
    category: "Speaking",
    topic: "Describing a photo and giving opinions",
    title: "Speaking: describe a photo and give your opinion",
    summary: "Describe what you can see, guess what people are doing and say what you think.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Describe and discuss",
        setup: "Find a photo on your phone or in a magazine with people in it, for example friends at a party, a family meal or a sports event. Talk about it for about one minute. Then answer the discussion questions.",
        prompts: [
          { label: "Where and who", text: "Where are the people? Who are they? What are they wearing?" },
          { label: "Action", text: "What are they doing? What is happening in the background?" },
          { label: "Guess", text: "How do they feel? Why do you think so?" },
          { label: "Opinion", text: "Would you like to be there? Why or why not?" },
          { label: "Discussion", text: "Do you prefer spending time with a big group of friends or a small group? Why?" },
        ],
        usefulLanguage: [
          "In this photo I can see …",
          "In the background there is / there are …",
          "They seem / look / might be …",
          "I think they are … because …",
          "I'd prefer … because …",
          "It reminds me of …",
        ],
        steps: [
          "Look at the photo for twenty seconds.",
          "Say where it is, who is in it and what they are doing.",
          "Add one guess: they might be … They look …",
          "Give an opinion and a reason.",
          "Say it again and try to speak without stopping.",
        ],
        checklist: [
          "I said where the people are and what they are doing.",
          "I used the present continuous for actions in the picture.",
          "I used might, look or seem to guess.",
          "I gave my opinion with because.",
        ],
        model: {
          title: "Model answer (transcript)",
          lines: [
            "In this photo I can see five young people sitting around a table in a restaurant. They are all smiling and they are holding their glasses. In the background there are some other tables and a big window.",
            "I think they are celebrating something, maybe a birthday, because there is a cake on the table. They look very happy and relaxed.",
            "I'd like to be there because the food looks delicious and the people seem friendly. I prefer meeting in a small group because it's easier to talk to everybody.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "preb1-everyday-hotel-and-complaints",
    level: "Pre-B1",
    category: "Everyday English",
    topic: "Hotel booking and polite complaints",
    title: "Everyday English: at a hotel",
    summary: "Book a room, ask about facilities and make a polite complaint.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Useful language at a hotel",
        intro: "Polite language matters when you ask for something or when there is a problem. Short, clear questions with please and could usually work best.",
        points: [
          {
            title: "Booking and checking in",
            text: "These phrases are common at reception.",
            examples: [
              "I'd like to book a double room for two nights, please.",
              "Is breakfast included?",
              "What time is check-out?",
              "I have a reservation under the name Garcia.",
            ],
          },
          {
            title: "Asking for things",
            text: "Use Could I … or Would it be possible to … to sound polite.",
            examples: [
              "Could I have an extra towel, please?",
              "Would it be possible to change my room?",
              "Is there a hairdryer in the room?",
            ],
          },
          {
            title: "Making a polite complaint",
            text: "Start with a soft opening, then explain the problem and ask for a solution.",
            examples: [
              "I'm sorry to bother you, but the air conditioning isn't working.",
              "Excuse me, there seems to be a problem with the shower.",
              "Could you send someone to have a look?",
              "Thank you for your help.",
            ],
          },
        ],
        watchOut: ["To complain politely, we do not say You must fix it now. We say Could you fix it, please? or Would it be possible to…?"],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Receptionist: 'How can I help you?' You: 'I have a ___ under the name Lopez.'",
            ["reception", "reservation", "recommendation"],
            1,
            "A reservation is a booking. We say I have a reservation under the name …",
          ),
          choice(
            "Which question asks politely for another pillow?",
            [
              "Could I have an extra pillow, please?",
              "Give me another pillow.",
              "I want a pillow now.",
            ],
            0,
            "Could I have … , please? is a polite request.",
          ),
          gap(
            "Excuse me, there ___ to be a problem with the Wi-Fi. (seem)",
            ["seems"],
            "There seems to be a problem is a polite way to report a problem. The verb agrees with there.",
          ),
          choice(
            "'What time is check-out?' means:",
            [
              "What time can I enter the room?",
              "What time does the restaurant open?",
              "What time do I have to leave the room?",
            ],
            2,
            "Check-out is the time when guests leave the hotel room.",
          ),
          gap(
            "I'm sorry to ___ you, but the shower is not working. (bother)",
            ["bother", "trouble", "disturb"],
            "I'm sorry to bother you is a polite opening. Trouble and disturb also work.",
          ),
          choice(
            "Which reply is most suitable for a complaint about a noisy room?",
            [
              "Your hotel is terrible.",
              "I never want to come back.",
              "Would it be possible to move to a quieter room?",
            ],
            2,
            "A polite complaint states a problem and asks for a solution.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: a problem at reception",
        setup: "Work with a partner or read both parts aloud. Student A is the guest and Student B is the receptionist. Then swap roles.",
        prompts: [
          { label: "Guest", text: "You arrived at night. The room is cold, the window will not close and there is only one towel. You also want to ask if breakfast is included." },
          { label: "Receptionist", text: "Be helpful. Apologise, offer to change the room or send someone, and answer the question about breakfast." },
        ],
        usefulLanguage: [
          "I'm sorry to bother you, but …",
          "Could you send someone to look at it?",
          "Would it be possible to change rooms?",
          "I'm very sorry about that. I'll …",
          "Breakfast is served from … to …",
        ],
        steps: [
          "Greet each other politely.",
          "The guest explains each problem calmly.",
          "The receptionist offers a solution.",
          "Close the conversation with thanks.",
        ],
        checklist: [
          "I started with a polite opening.",
          "I used could, would it be possible or please.",
          "I explained the problem clearly.",
          "I thanked the other person at the end.",
        ],
        model: {
          title: "Model dialogue (transcript)",
          lines: [
            "Guest: Excuse me, I'm sorry to bother you, but there seems to be a problem with my room. It's very cold and the window won't close.",
            "Receptionist: I'm very sorry about that. I'll send someone up right away. Is there anything else?",
            "Guest: Yes, could I have an extra towel, please? And is breakfast included?",
            "Receptionist: Of course. Breakfast is included and it's served from seven to ten. I'll bring the towel myself.",
            "Guest: Thank you very much for your help.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Revision ─────────────────────────
  {
    key: "preb1-revision-mixed-1",
    level: "Pre-B1",
    category: "Revision",
    topic: "Mixed revision",
    title: "Mixed revision quiz 1",
    summary: "Ten mixed questions to revise grammar and vocabulary from the Pre-B1 units.",
    minutes: 10,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "This quiz is for your own practice. Read each question carefully and think about the rule before you answer.",
        questions: [
          choice(
            "When I arrived at the party, my friends ___.",
            ["were dancing", "danced", "have danced"],
            0,
            "The dancing was already in progress when I arrived, so we use the past continuous.",
          ),
          gap(
            "If it ___ tomorrow, the match will be cancelled. (rain)",
            ["rains"],
            "The if clause of a first conditional uses the present simple.",
          ),
          choice(
            "Could you ___ the radio? I'm trying to sleep.",
            ["give up", "turn down", "look after"],
            1,
            "Turn down means to lower the volume.",
          ),
          gap(
            "Our trip was a great ___. We learned so much. (experience)",
            ["experience"],
            "After a great we need a noun. Experience is already a noun, so it stays the same.",
          ),
          choice(
            "We were still playing football ___ it started to rain heavily.",
            ["while", "when", "during"],
            1,
            "When introduces the short event that interrupted the longer action.",
          ),
          choice(
            "I'll call you as soon as I ___ at the station.",
            ["will arrive", "am arriving", "arrive"],
            2,
            "After as soon as we use the present simple to talk about the future.",
          ),
          gap(
            "He's a very ___ boy. He always helps his mother. (help)",
            ["helpful"],
            "Helpful is the adjective that means ready to help.",
          ),
          choice(
            "Which sentence is polite and suitable at a hotel?",
            [
              "Could you tell me what time breakfast starts?",
              "Tell me what time breakfast starts.",
              "I need breakfast times now.",
            ],
            0,
            "Could you tell me … ? is a polite indirect question.",
          ),
          choice(
            "I haven't got a lot of time, but I ___ to see you when I finish work.",
            ["come", "came", "will come"],
            2,
            "The sentence is about the future and the speaker is making a promise, so we use will.",
          ),
          gap(
            "My sister ___ me up at seven o'clock every day. (wake)",
            ["wakes"],
            "The sentence describes a routine. The subject is third person singular, so the verb ends in -s. The phrasal verb wake me up has the pronoun in the middle.",
          ),
        ],
      },
    ],
  },
];
