import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const c1UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "c1-grammar-participle-clauses",
    level: "C1",
    category: "Grammar",
    topic: "Participle clauses",
    title: "Participle clauses: -ing, -ed and perfect participles",
    summary: "Combine ideas economically with present, past and perfect participle clauses.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Shortening and linking sentences",
        intro: "Participle clauses let you add information without a full clause. The subject of the participle must be the same as the subject of the main clause.",
        points: [
          {
            title: "Present participle (-ing): active, at the same time or because",
            text: "Use the -ing form for an action happening at the same time as, or as the reason for, the main action.",
            examples: [
              "Walking along the beach, she found an old coin.",
              "Feeling exhausted, he went straight to bed.",
              "Not knowing the answer, I stayed silent.",
            ],
          },
          {
            title: "Past participle (-ed): passive meaning",
            text: "Use the past participle for a passive meaning, often to give a reason or a condition.",
            examples: [
              "Built in 1880, the bridge is still in use.",
              "Frightened by the noise, the dog ran away.",
              "Used carefully, the machine will last for years.",
            ],
          },
          {
            title: "Perfect participle: having + past participle",
            text: "Use the perfect participle when the participle action happened before the main action.",
            examples: [
              "Having finished the report, she went home.",
              "Having been warned, they should have listened.",
            ],
          },
        ],
        watchOut: [
          "The subject must match. 'Walking down the street, a dog bit me' is wrong, because the dog was not walking. Say: 'Walking down the street, I was bitten by a dog.'",
          "After conjunctions such as while, before, after and since, the -ing form is common: 'Before leaving, check the windows.'",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Rewrite each pair of sentences as one sentence with a participle clause. Then reveal a model answer.",
        items: [
          {
            prompt: "She was tired after the journey. She fell asleep immediately.",
            answer: "Tired after the journey, she fell asleep immediately. / Feeling tired after the journey, she fell asleep immediately.",
            why: "Both sentences share the same subject. The first becomes a participle clause giving the reason.",
          },
          {
            prompt: "He had read the instructions carefully. He started to assemble the shelf.",
            answer: "Having read the instructions carefully, he started to assemble the shelf.",
            why: "The reading happened before the assembling, so we use the perfect participle.",
          },
          {
            prompt: "The house was built on a hill. It has a wonderful view.",
            answer: "Built on a hill, the house has a wonderful view.",
            why: "The house did not build itself: the passive meaning needs a past participle.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: participle clauses",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "___ the rules, the referee gave a penalty.",
            ["Followed", "To follow", "Following"],
            2,
            "The referee is the one who follows the rules: the active present participle.",
          ),
          choice(
            "___ in the rain for an hour, we were soaked.",
            ["Having waited", "Waited", "Wait"],
            0,
            "The waiting finished before we were soaked, and we did the waiting: having waited.",
          ),
          gap(
            "___ by the news, she sat down. (shock, past participle) Write one word.",
            ["shocked"],
            "A passive meaning (she was shocked): shocked.",
          ),
          choice(
            "Choose the sentence in which the participle clause is used correctly.",
            [
              "Opening the door, a cold wind hit me.",
              "Opening the door, I felt a cold wind.",
              "Opened the door, I felt a cold wind.",
            ],
            1,
            "The person opening the door must be the subject of the main clause.",
          ),
          gap(
            "___ left the office, he realised he had forgotten his phone. (have) Write the missing word(s).",
            ["having"],
            "Having left (perfect participle) shows the earlier action.",
          ),
          choice(
            "___ in a hurry, he made several mistakes.",
            ["Written", "Writing", "Being written"],
            1,
            "He was writing, so we use the active -ing form.",
          ),
          choice(
            "___ the answer, I gave up.",
            ["Knowing not", "Not known", "Not knowing"],
            2,
            "The negative of a present participle is not + -ing: Not knowing.",
          ),
          gap(
            "___ with care, the vase will last for centuries. (handle, past participle)",
            ["handled"],
            "A passive condition: if it is handled with care.",
          ),
        ],
      },
    ],
  },
  {
    key: "c1-grammar-nominalisation-passive-formal",
    level: "C1",
    category: "Grammar",
    topic: "Formal style",
    title: "Formal style: nominalisation and impersonal passives",
    summary: "Turn verbs into nouns and use reporting passives for a more formal, academic tone.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Making your writing sound formal and objective",
        intro: "In formal writing we often prefer nouns to verbs and the passive to the active, to sound objective and concise.",
        points: [
          {
            title: "Nominalisation: verb or adjective → noun",
            text: "Replace a clause with a noun phrase. The result is denser and more formal.",
            examples: [
              "Because prices rose, people spent less. → The rise in prices led to a reduction in spending.",
              "Scientists discovered a new species. → The discovery of a new species surprised scientists.",
            ],
          },
          {
            title: "Impersonal passives",
            text: "It is said / believed / thought / reported that … or X is said / believed / thought to + infinitive.",
            examples: [
              "It is believed that the theory was developed in 1920.",
              "The company is said to be planning a merger.",
              "The suspect is thought to have left the country.",
            ],
          },
          {
            title: "Useful noun phrases",
            text: "These phrases help link ideas: a growing awareness of, an increase in, a lack of, the introduction of, the decline of.",
            examples: [
              "There has been a sharp increase in the number of cyclists.",
              "A lack of sleep can affect concentration.",
            ],
          },
        ],
        watchOut: [
          "Do not use nominalisation too much: too many abstract nouns make a text heavy and hard to read.",
          "With a perfect infinitive, the reported event is earlier: 'He is said to have won' = people say he won.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Rewrite the sentences in a more formal style. Then reveal a model answer.",
        items: [
          {
            prompt: "People think that the manager has resigned.",
            answer: "The manager is thought to have resigned. / It is thought that the manager has resigned.",
            why: "Impersonal passive: 'is thought to have + past participle' for an earlier event.",
          },
          {
            prompt: "Many tourists now visit the city, which has created traffic problems.",
            answer: "The growing number of tourists has led to traffic problems.",
            why: "The verb phrase becomes the noun phrase 'the growing number of tourists'.",
          },
          {
            prompt: "Because pollution has increased, public health has suffered.",
            answer: "An increase in pollution has harmed public health.",
            why: "Nominalisation: pollution has increased → an increase in pollution.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: formal style",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "The new law is ___ to reduce crime.",
            ["expected", "expecting", "expect"],
            0,
            "Impersonal passive: is expected to + infinitive.",
          ),
          choice(
            "It is widely ___ that the minister will resign.",
            ["reporting", "report", "reported"],
            2,
            "Impersonal passive: it is reported that …",
          ),
          choice(
            "Choose the best noun phrase: 'People are more aware of the risks.' → There is a growing ___ of the risks.",
            ["aware", "awareness", "awarely"],
            1,
            "The noun form of aware is awareness.",
          ),
          choice(
            "'Because the company expanded, many jobs were created.' → The ___ of the company created many jobs.",
            ["expansion", "expansive", "expanding"],
            0,
            "Expand → expansion (nominalisation).",
          ),
          gap(
            "The painting is believed ___ stolen in 1990. Write the missing words.",
            ["to have been"],
            "Perfect infinitive passive for an earlier event: to have been stolen.",
          ),
          choice(
            "Which sentence is more formal?",
            [
              "They found out that the report was wrong.",
              "Turns out the report was wrong.",
              "It was discovered that the report was inaccurate.",
            ],
            2,
            "The impersonal passive and the more formal word inaccurate make the sentence formal.",
          ),
          choice(
            "'The unemployment rate fell.' → There was a ___ in the unemployment rate.",
            ["declining", "declined", "decline"],
            2,
            "After a/an we need a noun: a decline.",
          ),
          gap(
            "Many people ___ to be unaware of the danger. (think, present passive)",
            ["are thought"],
            "Present passive: are thought to be unaware.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c1-reading-slow-travel",
    level: "C1",
    category: "Reading",
    topic: "Reading an opinion article",
    title: "Reading: the case for travelling slowly",
    summary: "Read an opinion article and follow the writer's argument, attitude and implications.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Slow down",
        before: [
          "How do you usually travel when you go on holiday? Does speed matter to you?",
          "What might we lose when we travel fast?",
        ],
        paragraphs: [
          "There was a time when a journey was part of the adventure. A traveller crossing Europe by rail might share a compartment with strangers, watch the landscape change slowly from window to window, and arrive somewhere having genuinely felt the distance. Today, we step on a plane in one world and step off into another, with barely a sense of the space in between.",
          "Advocates of 'slow travel' argue that something valuable is lost in this efficiency. The movement, which began in the food culture of Italy, encourages people to stay longer in fewer places and to choose transport that allows them to notice their surroundings. Its supporters claim that this approach not only reduces carbon emissions but also fosters a deeper connection with local communities.",
          "Sceptics are quick to point out that slow travel is a luxury. Not everyone has the time or the money to spend a week on a train when a flight costs less than a night in a hotel. There is some truth in this, and the movement's enthusiasts would do well to acknowledge it. Yet to dismiss the idea entirely would be to miss its central point, which is not about rejecting speed altogether, but about choosing it consciously.",
          "Perhaps the real question is what we want from a trip. If it is simply to 'tick off' a destination, then the quickest route will do. If, however, we hope to be changed, even slightly, by where we have been, then the journey itself may be worth more than we realise.",
        ],
        glossary: [
          { term: "compartment", meaning: "a small room in a train carriage" },
          { term: "foster", meaning: "to encourage something to develop" },
          { term: "sceptic", meaning: "someone who doubts that something is true or useful" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What does the writer suggest about modern travel in the first paragraph?",
            [
              "It makes us less aware of the journey itself.",
              "It gives us a feeling of the distance we have covered.",
              "It is more adventurous than it used to be.",
            ],
            0,
            "He says we step on a plane and into another world 'with barely a sense of the space in between'.",
          ),
          choice(
            "Where did the slow travel movement begin?",
            ["In Spanish railways", "In the food culture of Italy", "In the tourist industry"],
            1,
            "The second paragraph says it began in the food culture of Italy.",
          ),
          choice(
            "What do supporters of slow travel claim?",
            [
              "It saves money.",
              "It reduces carbon emissions and builds links with local communities.",
              "It is faster than flying in the long term.",
            ],
            1,
            "They claim it reduces carbon emissions and fosters a deeper connection with local communities.",
          ),
          choice(
            "How does the writer respond to the sceptics?",
            [
              "He agrees that they are completely right.",
              "He ignores their view.",
              "He accepts some of their point but says it does not destroy the main idea.",
            ],
            2,
            "He admits 'there is some truth' but says dismissing the idea would miss its central point.",
          ),
          choice(
            "What is the 'central point' of slow travel, according to the writer?",
            [
              "Choosing speed consciously",
              "Rejecting all fast transport",
              "Travelling only by train",
            ],
            0,
            "It is 'not about rejecting speed altogether, but about choosing it consciously'.",
          ),
          choice(
            "What does 'tick off' a destination suggest in the last paragraph?",
            [
              "Plan it carefully",
              "Describe it in detail",
              "Visit it quickly just to say you have been",
            ],
            2,
            "'Tick off' implies treating a place as an item on a list to complete.",
          ),
          choice(
            "What is the writer's overall purpose?",
            [
              "To criticise people who fly",
              "To encourage readers to think about how they travel",
              "To compare prices of trains and planes",
            ],
            1,
            "He ends with a reflective question about what we want from a trip.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c1-writing-review-article",
    level: "C1",
    category: "Writing",
    topic: "Writing a review",
    title: "Writing: a review that balances description and evaluation",
    summary: "Write an engaging, well-organised review with a clear recommendation.",
    minutes: 30,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "An English-language magazine for young adults has invited readers to submit reviews of places in their area where people can study or work. Write a review of a library, co-working space or café that you know. Describe its atmosphere and facilities, evaluate how useful it is, and say whether you would recommend it and to whom.",
        wordGuide: "A class guide: about 220 to 260 words. This is not an exam rule.",
        planning: [
          "Choose a title that makes readers curious.",
          "Paragraph 1: introduce the place and the atmosphere.",
          "Paragraph 2: describe the facilities and what works well.",
          "Paragraph 3: mention any weaknesses honestly.",
          "Paragraph 4: give your recommendation and say who would enjoy it most.",
        ],
        usefulLanguage: [
          "Tucked away in …, … is a hidden gem for …",
          "What sets it apart is …",
          "The atmosphere is relaxed, if a little crowded at peak times.",
          "On the downside, … / The only drawback is …",
          "Anyone who needs a quiet space to concentrate will appreciate …",
          "All things considered, I would thoroughly recommend it to …",
          "Not only … but also … / Whereas … / Having tried …",
        ],
        checklist: [
          "I gave the review an interesting title.",
          "I described the atmosphere and the facilities with specific details.",
          "I evaluated, not just described: strengths and weaknesses.",
          "I used a range of structures: participle clauses, relative clauses, inversion.",
          "I wrote a clear recommendation for a target reader.",
          "I kept a lively, engaging, semi-formal tone.",
        ],
        model: [
          "A haven for the easily distracted",
          "Tucked away behind the old market, the Riverside Reading Room is the kind of place you would walk past a hundred times without noticing. Having visited it every week since September, I can honestly say it has changed the way I study.",
          "What sets it apart is the atmosphere. Housed in a former chapel, it combines high ceilings and natural light with a rule that everyone respects: silence. There are long wooden tables, plenty of sockets and a small kitchen where members can make tea.",
          "That said, it is not perfect. The Wi-Fi is occasionally unreliable, and since the room fills up quickly after school, arriving early is essential. Nor is it open at weekends, which is a shame for people who work during the week.",
          "All things considered, I would thoroughly recommend it to anyone who needs a calm space to concentrate, particularly students preparing for exams. For the price of a coffee, you get a day of uninterrupted work.",
        ],
        modelNotes: [
          "The title and the first sentence aim to engage the reader.",
          "It evaluates: atmosphere and facilities are strengths, Wi-Fi and opening hours are weaknesses.",
          "It shows a range of structures: participle clause (Tucked away…, Having visited…), relative clause (that everyone respects), inversion (Nor is it open…).",
          "The ending recommends the place for a specific type of reader.",
        ],
        assessment: [
          "Does the review include description, evaluation and a recommendation?",
          "Is the tone engaging and suited to the magazine's readers?",
          "Is the organisation clear, with paragraphs and cohesive devices?",
          "Is the grammar sophisticated and accurate?",
          "Is the vocabulary precise, varied and natural?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "c1-speaking-long-turn-compare",
    level: "C1",
    category: "Speaking",
    topic: "Comparing and speculating",
    title: "Speaking: a long turn, comparing and speculating",
    summary: "Speak for one minute comparing situations, speculating and giving a considered opinion.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Compare and speculate",
        setup: "Choose two photos or imagine two scenes. For example: a person working from home and a person working in a busy office. Speak for one minute, then answer your partner's follow-up question for 30 seconds.",
        prompts: [
          { label: "Task", text: "Compare the two situations. Say what the advantages and disadvantages might be for the people, and which situation you would prefer." },
          { label: "Follow-up 1", text: "Partner: Do you think working from home will become the norm? Why or why not?" },
          { label: "Follow-up 2", text: "Partner: How might technology change the way we work in the next ten years?" },
          { label: "Second task", text: "Compare studying alone and studying in a group. What are the benefits and the risks of each?" },
        ],
        usefulLanguage: [
          "Whereas … / While … / In contrast, …",
          "Both situations have … in common, but …",
          "The people in the first picture seem to be … whereas those in the second …",
          "It could be that … / They might well be feeling … / One would imagine that …",
          "On balance, I would opt for … because …",
          "That is not to say that … / Having said that, …",
        ],
        steps: [
          "Take ten seconds to decide on an angle (for example, freedom versus structure).",
          "Do not describe in detail: compare, speculate and evaluate.",
          "Use a variety of linking expressions to show contrast and addition.",
          "Finish your turn with a clear personal view.",
          "Record yourself and check that you did not repeat the same words.",
        ],
        checklist: [
          "I compared (similarities and differences), not just described.",
          "I speculated using modal verbs and adverbs.",
          "I used a range of contrast language.",
          "I gave a personal opinion with a reason.",
          "I spoke fluently and without long pauses.",
        ],
        model: {
          title: "Model answer (transcript)",
          lines: [
            "Both pictures show people working, but the situations could hardly be more different. The man at home appears to be relaxed, whereas the people in the office seem focused and a little under pressure.",
            "I would imagine that the man saves a great deal of time by not commuting, and he might well enjoy more flexibility. On the other hand, he may feel isolated, and it could be harder for him to separate work from private life.",
            "Having said that, working in a busy office is not necessarily better, as noise and interruptions can be a real drain on concentration. On balance, I would opt for a mixture of the two, because it offers the benefits of both.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c1-revision-mixed-2",
    level: "C1",
    category: "Revision",
    topic: "Mixed C1 revision",
    title: "C1 mixed revision 2",
    summary: "Twelve mixed questions on participle clauses, formal style, inversion, collocations and word formation.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the C1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "___ the film before, I knew how it ended.",
            ["Having seen", "Seen", "Seeing"],
            0,
            "The seeing came before the knowing: having seen.",
          ),
          choice(
            "Not only ___ late for the interview, but he also forgot his CV.",
            ["he arrived", "arrived he", "did he arrive"],
            2,
            "After 'Not only' at the beginning, we invert the subject and auxiliary: did he arrive.",
          ),
          gap(
            "The decision is widely ___ to have been a mistake. (think, passive)",
            ["thought"],
            "The impersonal passive: is thought to have been …",
          ),
          choice(
            "If it ___ for your help, I would have failed.",
            ["was not", "would not be", "had not been"],
            2,
            "Mixed/third conditional: if it had not been for your help.",
          ),
          gap(
            "Word formation: There has been a sharp ___ in house prices. (INCREASE)",
            ["increase"],
            "After 'a sharp' we need a noun: increase (noun, stress on the first syllable).",
          ),
          choice(
            "It is ___ that this is the best option.",
            ["by no means clear", "not in the least clear", "no clear way"],
            0,
            "The collocation 'by no means clear' is natural at this level.",
          ),
          choice(
            "What I need ___ a holiday.",
            ["are", "is", "were"],
            1,
            "A cleft sentence with what + singular: What I need is a holiday.",
          ),
          gap(
            "She talked as if she ___ the manager. (be)",
            ["were", "was"],
            "As if + past subjunctive-like form: were (or was in informal English).",
          ),
          choice(
            "Choose the correct word: He had no ___ but to accept the offer.",
            ["wish", "choice", "hope"],
            1,
            "The fixed phrase is 'no choice but to' (or 'no alternative but to').",
          ),
          choice(
            "Hardly ___ the door when the phone rang.",
            ["he had closed", "did he close", "had he closed"],
            2,
            "Hardly + had + subject + past participle + when.",
          ),
          gap(
            "Word formation: The company's ___ made it hard for them to win. (RELIABLE)",
            ["unreliability"],
            "A noun with a negative prefix and suffix: unreliability.",
          ),
          choice(
            "Choose the best linking phrase: ___ the bad weather, the match went ahead.",
            ["Despite", "Although", "However"],
            0,
            "Despite is followed by a noun phrase: the bad weather.",
          ),
        ],
      },
    ],
  },
];
