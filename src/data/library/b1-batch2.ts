import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const b1UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "b1-grammar-relative-clauses",
    level: "B1",
    category: "Grammar",
    topic: "Relative clauses",
    title: "Relative clauses: who, which, that, where and whose",
    summary: "Give extra information about people, things, places and possession.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "How relative clauses work",
        intro: "A relative clause adds information about a noun. It begins with a relative pronoun.",
        points: [
          {
            title: "Who, which and that",
            text: "Use who for people, which for things and that for either people or things in defining clauses. A defining clause tells us which person or thing we mean.",
            examples: [
              "The teacher who helped me is called Mr Hill.",
              "The book which I borrowed was fantastic.",
              "The film that we saw was too long.",
            ],
          },
          {
            title: "Where and whose",
            text: "Use where for places and whose for possession.",
            examples: [
              "That is the café where we first met.",
              "She is the girl whose brother plays for Murcia.",
            ],
          },
          {
            title: "Leaving out the pronoun",
            text: "When the pronoun is the object of the clause, you can leave it out in defining clauses. You cannot leave it out when it is the subject.",
            examples: [
              "The song (that) you chose is my favourite. (object: can be omitted)",
              "The man who lives next door is a pilot. (subject: cannot be omitted)",
            ],
          },
          {
            title: "Non-defining clauses",
            text: "A non-defining clause adds extra information that is not needed to identify the noun. It goes between commas, and we do not use that.",
            examples: [
              "My cousin, who lives in Madrid, is a nurse.",
              "The museum, which opened in 2019, is free on Sundays.",
            ],
          },
        ],
        watchOut: [
          "Do not repeat the subject: 'The man who lives next door is a pilot', not 'The man who he lives next door'.",
          "Never use that after a comma: 'My bike, which is new, is red', not 'My bike, that is new'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Join each pair of sentences. Then reveal a model answer.",
        items: [
          {
            prompt: "I met a girl. She plays the violin.",
            answer: "I met a girl who plays the violin.",
            why: "Who replaces she. A girl is a person, so who (or that).",
          },
          {
            prompt: "This is the village. My grandparents were born there.",
            answer: "This is the village where my grandparents were born.",
            why: "Where replaces there and refers to a place.",
          },
          {
            prompt: "Lucas is my best friend. His mother is a doctor.",
            answer: "Lucas, whose mother is a doctor, is my best friend.",
            why: "Whose shows possession. The extra information goes between commas.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: relative clauses",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "The woman ___ lives upstairs is a musician.",
            ["which", "whose", "who"],
            2,
            "The woman is a person and the pronoun is the subject: who (or that).",
          ),
          choice(
            "This is the shop ___ I bought my jacket.",
            ["where", "which", "who"],
            0,
            "A place: where (= in which).",
          ),
          choice(
            "The phone ___ I lost last week was brand new.",
            ["whose", "that", "who"],
            1,
            "Things take which or that. The pronoun can also be omitted here.",
          ),
          gap(
            "She is the author ___ book won the prize. (one word)",
            ["whose"],
            "Whose shows possession: her book.",
          ),
          choice(
            "Choose the correct sentence with extra information about a person.",
            ["My sister, that lives in Paris, is a chef.", "My sister, who lives in Paris, is a chef.", "My sister, which lives in Paris, is a chef."],
            1,
            "In non-defining clauses we cannot use that. A person takes who.",
          ),
          choice(
            "The film ___ we watched last night was very funny. Which option is NOT possible?",
            ["that", "which", "who"],
            2,
            "A film is a thing, so who is not possible. That or which (or no pronoun) are correct.",
          ),
          choice(
            "Choose the sentence in which the pronoun can be omitted.",
            ["The book that you lent me was great.", "The man who called you is outside.", "The girl who sits next to me is Italian."],
            0,
            "In the second sentence, 'that' is the object of lent, so it can be left out.",
          ),
          gap(
            "That's the park ___ we used to play football. (one word)",
            ["where"],
            "A place: where.",
          ),
        ],
      },
    ],
  },
  {
    key: "b1-grammar-gerunds-infinitives",
    level: "B1",
    category: "Grammar",
    topic: "Verb patterns",
    title: "Gerunds and infinitives",
    summary: "Choose between -ing forms and to + verb after common verbs.",
    minutes: 14,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Which form comes next?",
        intro: "Some verbs are followed by a gerund (-ing form) and some by an infinitive (to + verb). You need to learn the pattern with each verb.",
        points: [
          {
            title: "Verbs + gerund",
            text: "Enjoy, avoid, mind, finish, suggest, keep and practise are followed by -ing. So are prepositions.",
            examples: [
              "I enjoy cooking for my friends.",
              "She suggested going to the beach.",
              "He is good at drawing.",
            ],
          },
          {
            title: "Verbs + infinitive",
            text: "Want, decide, hope, plan, promise, offer, refuse and manage are followed by to + verb.",
            examples: [
              "We decided to leave early.",
              "They refused to pay.",
              "I hope to see you soon.",
            ],
          },
          {
            title: "Verbs with both forms",
            text: "Like, love, hate and prefer can take both, with little change. But stop, remember and forget change meaning.",
            examples: [
              "I like swimming. / I like to swim.",
              "He stopped smoking. (He quit.) / He stopped to smoke. (He paused in order to smoke.)",
              "Remember to lock the door. (Don't forget the task.) / I remember locking it. (I recall doing it.)",
            ],
          },
        ],
        watchOut: [
          "After a preposition we always use -ing: 'interested in learning', not 'interested in to learn'.",
          "After modal verbs we use the base verb without to: 'I can swim', not 'I can to swim'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Decide on the correct form. Then reveal the answer.",
        items: [
          {
            prompt: "She is afraid ___ (fly).",
            answer: "of flying",
            why: "After a preposition (of) we use the -ing form.",
          },
          {
            prompt: "He promised ___ (call) me tonight.",
            answer: "to call",
            why: "Promise is followed by an infinitive.",
          },
          {
            prompt: "I stopped ___ (buy) a coffee on my way to work. (I paused in order to buy a coffee.)",
            answer: "to buy",
            why: "Stop + infinitive means we stop one action to do another.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: gerunds and infinitives",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "We can't afford ___ a new car this year.",
            ["buying", "buy", "to buy"],
            2,
            "Afford is followed by the infinitive.",
          ),
          choice(
            "She enjoys ___ in the sea.",
            ["to swim", "swimming", "swim"],
            1,
            "Enjoy is followed by -ing.",
          ),
          gap(
            "I'm looking forward to ___ you. (see)",
            ["seeing"],
            "To in 'look forward to' is a preposition, so we use -ing.",
          ),
          choice(
            "He didn't mind ___ for us.",
            ["waiting", "to wait", "wait"],
            0,
            "Mind is followed by -ing.",
          ),
          gap(
            "They decided ___ the trip. (cancel)",
            ["to cancel"],
            "Decide is followed by an infinitive.",
          ),
          choice(
            "I remember ___ the door, but the wind opened it.",
            ["to lock", "lock", "locking"],
            2,
            "Remember + -ing is a memory of something that has happened.",
          ),
          choice(
            "She was too tired ___ any more.",
            ["walking", "for walk", "to walk"],
            2,
            "Too + adjective + infinitive.",
          ),
          gap(
            "He avoided ___ about the problem. (talk)",
            ["talking"],
            "Avoid is followed by -ing.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b1-reading-plastic-free-town",
    level: "B1",
    category: "Reading",
    topic: "Reading a feature article",
    title: "Reading: the town that said no to plastic bags",
    summary: "Read an article about a community project and find main ideas, details and opinions.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "A town with a plan",
        before: [
          "How many plastic bags do you think you use in a week?",
          "What can a small town do to help the environment?",
        ],
        paragraphs: [
          "When Clara Mendoza moved to the coastal town of San Miguel three years ago, she was shocked by the amount of plastic on the beach. 'Every morning I walked my dog and filled a bag with rubbish,' she says. 'I thought somebody should do something, and then I realised that somebody could be me.'",
          "Clara started a petition asking local shops to stop giving out free plastic bags. Within a month more than a thousand people had signed it. The council listened, and last spring San Miguel became the first town in the region to ban single-use bags.",
          "At first, many shop owners were worried. They thought customers would complain or go to bigger towns where bags were still free. In fact, the opposite happened. Most customers now carry their own bags, and several shops sell cloth ones decorated by local schoolchildren. The profits go to the beach clean-up fund.",
          "The town has also noticed a difference on the sand. Volunteers say there is about half as much plastic as before. 'It isn't a perfect solution,' admits the mayor, 'because we still have plastic bottles and packaging. But it proves that people will change their habits if they understand why.' Clara agrees, although she is already planning her next project: a repair café where people can fix broken items instead of throwing them away.",
        ],
        glossary: [
          { term: "petition", meaning: "a document signed by many people asking for a change" },
          { term: "single-use", meaning: "made to be used only once" },
          { term: "mayor", meaning: "the person elected to lead a town" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer or type a short answer. Go back to the text to check.",
        questions: [
          choice(
            "What made Clara start her campaign?",
            ["She saw a lot of plastic on the beach.", "A teacher asked her to.", "The council asked for help."],
            0,
            "She was shocked by the plastic on the beach and decided to act.",
          ),
          gap(
            "How many people signed the petition in a month? Write the number or 'more than' plus the number.",
            ["more than a thousand", "more than 1000", "more than 1,000", "over a thousand", "1000", "1,000", "a thousand"],
            "The text says more than a thousand people signed in a month.",
          ),
          choice(
            "What did shop owners fear at first?",
            ["The council would raise taxes.", "Customers would complain or shop elsewhere.", "Bags would become more expensive."],
            1,
            "They thought customers would complain or go to bigger towns.",
          ),
          choice(
            "What happens to the money from the cloth bags?",
            ["It goes to the schools.", "It goes to the beach clean-up fund.", "It goes to the mayor."],
            1,
            "The text says the profits go to the beach clean-up fund.",
          ),
          choice(
            "According to the volunteers, what has changed on the beach?",
            ["There is no plastic at all.", "There is more plastic than before.", "There is about half as much plastic."],
            2,
            "The volunteers say there is about half as much plastic.",
          ),
          choice(
            "What is the mayor's opinion of the ban?",
            [
              "It is a useful step, but not a perfect solution.",
              "It solves the plastic problem completely.",
              "It was a mistake.",
            ],
            0,
            "He says it is not perfect because of bottles and packaging, but it shows people can change.",
          ),
          choice(
            "What is Clara's next project?",
            ["A beach festival", "A new petition", "A repair café"],
            2,
            "The last sentence says she is planning a repair café.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b1-writing-article",
    level: "B1",
    category: "Writing",
    topic: "Writing an article",
    title: "Writing: an article for a school magazine",
    summary: "Write an engaging article with a title, opinions, examples and a clear ending.",
    minutes: 25,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Your school magazine is asking for articles called 'The best way to spend a weekend'. Write an article for the magazine. Say what you think is the best way to spend a weekend, give reasons, and describe what you did last weekend as an example.",
        wordGuide: "A class guide: about 100 to 140 words. This is not an exam rule.",
        planning: [
          "Think of a catchy title.",
          "Paragraph 1: introduce the topic with a question or an interesting statement.",
          "Paragraph 2: give your opinion and two reasons.",
          "Paragraph 3: give an example from last weekend and finish with a short conclusion.",
        ],
        usefulLanguage: [
          "Have you ever wondered how …?",
          "In my opinion, … / Personally, I think …",
          "One reason is that … Another reason is …",
          "For example, last weekend I …",
          "It was a great way to … because …",
          "To sum up, … / All in all, …",
        ],
        checklist: [
          "I wrote a title and used paragraphs.",
          "I spoke to the reader: you, we, a question.",
          "I gave at least two reasons for my opinion.",
          "I used the past simple for last weekend.",
          "I used linking words: because, so, however, for example.",
          "I checked spelling and punctuation.",
        ],
        model: [
          "A weekend to remember",
          "What is the best way to spend a weekend? Some people sleep until midday, but I believe that doing something active with friends is much more rewarding.",
          "Firstly, being active makes you feel energetic on Monday. Secondly, you can share experiences with people you care about, and those memories last a long time.",
          "For example, last weekend my friends and I took a bus to the mountains and walked to a lake. We had a picnic, took a lot of photos and laughed all day. I was tired in the evening, but I felt happy and relaxed.",
          "All in all, a weekend is short, so I think it is better to use it well.",
        ],
        modelNotes: [
          "It begins with a question to catch the reader's attention.",
          "It gives an opinion and two clear reasons, introduced by Firstly and Secondly.",
          "It gives a personal example in the past simple: took, walked, had.",
          "It finishes with a short conclusion that returns to the title.",
        ],
        assessment: [
          "Does the article answer all parts of the task?",
          "Is the style interesting and suited to a magazine reader?",
          "Is the structure clear, with an introduction, main part and ending?",
          "Are tenses, verb patterns and linking words accurate?",
          "Is vocabulary varied and is spelling accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "b1-speaking-describe-photo",
    level: "B1",
    category: "Speaking",
    topic: "Describing a photograph",
    title: "Speaking: describing a photograph",
    summary: "Describe what you can see, speculate about people and say how you feel about the situation.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Describe a photo for one minute",
        setup: "Choose a photo on your phone or in a magazine: for example people at a market, a family dinner or a sports event. Speak about it for about one minute without stopping. A partner can ask follow-up questions.",
        prompts: [
          { label: "What can you see?", text: "Say where the people are and what they are doing." },
          { label: "Describe the people", text: "What do they look like? What are they wearing? How do they seem to feel?" },
          { label: "Speculate", text: "Why do you think they are there? What do you think happened before the photo was taken?" },
          { label: "Your opinion", text: "Would you like to be in this situation? Why or why not?" },
          { label: "Follow-up", text: "Partner: Ask two questions about a similar situation in your own life." },
        ],
        usefulLanguage: [
          "In the foreground / background / on the left, there is …",
          "They seem to be … / They look (happy/tired) …",
          "It might be … / They could be … / Perhaps …",
          "I think they are … because …",
          "It reminds me of …",
          "I wouldn't like it because … / I'd love to be there because …",
        ],
        steps: [
          "Look at the photo for ten seconds and plan your first sentence.",
          "Start with the general scene, then describe details.",
          "Add a guess with might, could or perhaps.",
          "Finish with your opinion and a reason.",
          "Record yourself. Listen for hesitation and repeat words.",
        ],
        checklist: [
          "I used the present continuous to describe actions.",
          "I used place expressions (on the left, in the background …).",
          "I used might, could or perhaps for guesses.",
          "I gave my opinion with a reason.",
          "I kept speaking for the full minute.",
        ],
        model: {
          title: "Model answer (transcript)",
          lines: [
            "This photo shows a busy outdoor market. In the foreground, a woman is buying vegetables, and behind her there is a man who seems to be selling fruit. On the left, a child is holding a balloon.",
            "They look relaxed and happy. It might be a Saturday morning, because everybody is wearing casual clothes. Perhaps the woman has just arrived, because she is still holding her bag.",
            "I like markets because the food is fresh and the atmosphere is friendly. I'd love to be there, especially in summer.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b1-revision-mixed-2",
    level: "B1",
    category: "Revision",
    topic: "Mixed B1 revision",
    title: "B1 mixed revision 2",
    summary: "Twelve mixed questions on relative clauses, verb patterns, conditionals, reported speech and vocabulary.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the B1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "The boy ___ bike was stolen called the police.",
            ["who", "whose", "which"],
            1,
            "Whose shows possession: his bike.",
          ),
          gap(
            "If I ___ a million euros, I would travel the world. (have)",
            ["had"],
            "Second conditional: if + past simple, would + base verb.",
          ),
          choice(
            "She told me that she ___ tired.",
            ["was", "is", "will be"],
            0,
            "In reported speech, the present usually moves back to the past: was.",
          ),
          choice(
            "I'm used to ___ up early.",
            ["get", "got", "getting"],
            2,
            "Be used to + -ing means 'be accustomed to'.",
          ),
          gap(
            "He suggested ___ to the cinema. (go)",
            ["going"],
            "Suggest is followed by -ing.",
          ),
          choice(
            "I wish I ___ speak French.",
            ["can", "would", "could"],
            2,
            "Wish + past form: I wish I could speak French.",
          ),
          choice(
            "'Make' or 'do'? Complete: I need to ___ my homework before dinner.",
            ["do", "make", "have"],
            0,
            "Do is used with homework, chores and the housework.",
          ),
          gap(
            "She asked me where I ___. (live, reported question)",
            ["lived"],
            "In reported questions we move the tense back and use normal word order: where I lived.",
          ),
          choice(
            "The restaurant, ___ opened last month, is already popular.",
            ["that", "which", "who"],
            1,
            "In a non-defining clause for a thing we use which, not that.",
          ),
          choice(
            "You ___ wear a seat belt. It's the law.",
            ["might", "must", "would"],
            1,
            "Must expresses strong obligation.",
          ),
          gap(
            "Our flight was delayed, so we had to ___ for two hours. (wait)",
            ["wait"],
            "Have to is followed by the base verb.",
          ),
          choice(
            "The meeting was cancelled ___ the manager was ill.",
            ["because of", "despite", "because"],
            2,
            "Because is followed by a clause (the manager was ill).",
          ),
        ],
      },
    ],
  },
];
