import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

// C2 study units. Draft until a teacher has reviewed them.
// Choice answers are written with the correct option first and then
// rebalanced by scripts/rebalance-answers.mjs.

export const c2Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "c2-grammar-inversion-emphasis",
    level: "C2",
    category: "Grammar",
    topic: "Inversion after negative and limiting adverbials",
    title: "Inversion for emphasis in formal English",
    summary: "Use auxiliary-subject inversion after negative and restrictive expressions, with accurate tense choice.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Putting the auxiliary before the subject",
        intro: "In formal writing and speech we can begin a sentence with a negative or limiting expression. The auxiliary verb then comes before the subject, as in a question. This gives the sentence extra emphasis.",
        points: [
          {
            title: "The pattern",
            text: "Negative adverbial + auxiliary + subject + main verb. If there is no auxiliary in the normal sentence, add do, does or did.",
            examples: [
              "Never have I seen such a beautiful sunset.",
              "Rarely does he complain about his workload.",
              "Seldom did they meet without arguing.",
            ],
          },
          {
            title: "Common expressions that trigger inversion",
            text: "These expressions are followed by inverted word order when they begin the sentence.",
            examples: [
              "Hardly / Scarcely / No sooner … when / than: Hardly had we left when it began to rain.",
              "Not only … but also: Not only did she win, but she also broke the record.",
              "Under no circumstances / On no account: Under no circumstances should you open this door.",
              "Little, only, not until: Only then did I realise the truth.",
              "In no way / At no time: At no time was the public in danger.",
            ],
          },
          {
            title: "Inversion in conditional sentences",
            text: "We can omit if and invert the auxiliary in a formal conditional: Should, Were and Had.",
            examples: [
              "Should you need any help, please contact reception.",
              "Were I in your position, I would resign.",
              "Had I known, I would have said something.",
            ],
          },
          {
            title: "Tense after hardly and no sooner",
            text: "Hardly and scarcely go with when. No sooner goes with than. The first part is usually the past perfect, and the second part is the past simple.",
            examples: [
              "No sooner had she sat down than the phone rang.",
              "Scarcely had he finished when the crowd applauded.",
            ],
          },
        ],
        watchOut: [
          "Inversion happens only when the expression comes first in the sentence. Compare: Never have I seen it (emphatic, formal) and I have never seen it (normal order).",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Rewrite with inversion: 'I have never felt so embarrassed.'",
            answer: "Never have I felt so embarrassed.",
            why: "Put the negative adverb first, then the auxiliary have, then the subject, then the participle.",
          },
          {
            prompt: "Complete: 'No sooner ___ she arrived than it started to rain.'",
            answer: "had",
            why: "No sooner is followed by the past perfect (had arrived) in the first clause, and than introduces the second event.",
          },
          {
            prompt: "Rewrite: 'If you should need help, call me.' (begin with Should)",
            answer: "Should you need help, call me.",
            why: "Omit if and put the auxiliary should before the subject.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Not only ___ the exam, but she also got the highest mark.",
            ["she passed", "she did pass", "did she pass"],
            2,
            "After Not only at the beginning of the sentence we invert the subject and the auxiliary: did she pass.",
          ),
          gap(
            "Hardly ___ I sat down when the phone rang. (have)",
            ["had"],
            "Hardly + had + subject + past participle + when + past simple.",
          ),
          choice(
            "Only after the meeting ___ the full story.",
            ["did we learn", "we learned", "we did learn"],
            0,
            "Only after + time expression at the start of a sentence triggers inversion: did we learn.",
          ),
          gap(
            "___ you require further information, please do not hesitate to contact us. (Should)",
            ["should"],
            "A formal first conditional can be expressed with Should + subject: Should you require.",
            "Use the word from the brackets.",
          ),
          choice(
            "On no account ___ the doors be left open at night.",
            ["do", "should", "have"],
            1,
            "After On no account we need an inverted auxiliary: should the doors be left open.",
          ),
          choice(
            "Little ___ they know about what was about to happen.",
            ["had", "did", "were"],
            1,
            "Little at the beginning has a negative meaning (they knew nothing). We need did + subject + base verb.",
          ),
          choice(
            "'At no time ___ aware of the danger.'",
            ["the passengers were", "did the passengers be", "were the passengers"],
            2,
            "After At no time we invert the verb be and the subject: were the passengers.",
          ),
          gap(
            "No sooner had the film started ___ the power went off. (one word)",
            ["than"],
            "No sooner is followed by than, not when.",
          ),
        ],
      },
    ],
  },
  {
    key: "c2-grammar-subjunctive-hypothetical",
    level: "C2",
    category: "Grammar",
    topic: "Subjunctive and hypothetical structures",
    title: "The subjunctive and formal hypothetical structures",
    summary: "Use the subjunctive after verbs of demand and suggestion, and as if / as though, were to and suppose.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Formal ways of expressing necessity and possibility",
        intro: "English has a small number of structures that express demands, recommendations and hypothetical ideas in formal registers. They are especially common in academic, legal and business writing.",
        points: [
          {
            title: "The present subjunctive",
            text: "After verbs and adjectives of demand, necessity or recommendation (demand, insist, recommend, suggest, essential, vital, important), the that-clause can use the base form of the verb for every person. In British English, should + base verb is also common.",
            examples: [
              "The board insists that he resign immediately.",
              "It is essential that every student be informed.",
              "I suggest that she take a day off. / … that she should take a day off.",
            ],
          },
          {
            title: "Negatives",
            text: "The negative subjunctive is formed with not + base verb, without do.",
            examples: [
              "The committee recommends that he not be appointed.",
              "It is vital that nobody forget the deadline.",
            ],
          },
          {
            title: "As if and as though",
            text: "These introduce comparisons. If the situation is unreal, we use a past tense (and were instead of was in formal style). If it is possible or true, we use a normal tense.",
            examples: [
              "She talks as if she knew everything. (she doesn't)",
              "He looks as if he is ill. (he may be)",
              "It looked as though it had never rained here.",
            ],
          },
          {
            title: "Were to, suppose and it's time",
            text: "Were to + base verb expresses a very unlikely future. Suppose / supposing introduces a hypothesis. It's (high) time + past simple means that something should be done now.",
            examples: [
              "If the company were to close, hundreds would lose their jobs.",
              "Suppose they had refused, what would you have done?",
              "It's high time we left. (We should leave now.)",
            ],
          },
        ],
        watchOut: [
          "In formal English we do not say He insists that she resigns when we mean a demand. The subjunctive form (resign) or should resign shows that it is a demand, not a fact.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "The doctor recommended that he ___ (rest) for a week.",
            answer: "rest",
            why: "The subjunctive uses the base form for every person, so rest, not rests.",
          },
          {
            prompt: "She behaves as if she ___ (own) the place. (she doesn't)",
            answer: "owned",
            why: "As if + past tense expresses an unreal comparison.",
          },
          {
            prompt: "It's time we ___ (leave). We're late.",
            answer: "left",
            why: "It's time + past simple means that the action is needed now, not in the past.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "It is vital that the report ___ submitted by noon.",
            ["be", "is", "will be"],
            0,
            "After vital that, the subjunctive uses the base form: be submitted.",
          ),
          gap(
            "The union demanded that the manager ___ immediately. (resign)",
            ["resign", "should resign"],
            "After demand, we use the base form or should + base verb.",
          ),
          choice(
            "He talks to me as if I ___ a child.",
            ["am", "will be", "were"],
            2,
            "As if with an unreal comparison requires a past form, and formal style prefers were.",
          ),
          choice(
            "It is high time the government ___ something about housing.",
            ["does", "did", "will do"],
            1,
            "It's high time + past simple means the action is overdue.",
          ),
          gap(
            "If the prices ___ to rise any further, many families could not afford heating. (be)",
            ["were"],
            "Were to + base verb expresses an unlikely future possibility.",
          ),
          choice(
            "The committee recommends that she ___ be given the award.",
            ["not", "doesn't", "isn't"],
            0,
            "The negative subjunctive is formed with not before the base verb.",
          ),
          choice(
            "She looks as though she ___ a ghost. (she may really have seen one)",
            ["had seen", "would see", "has seen"],
            2,
            "The situation may be true, so we use a normal tense (present perfect). A past form would suggest it is unreal.",
          ),
          gap(
            "I insist that he ___ the truth immediately. (tell)",
            ["tell", "should tell"],
            "After insist (in the sense of a demand) we use the base form or should + base.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "c2-vocabulary-idioms-figurative",
    level: "C2",
    category: "Vocabulary",
    topic: "Idioms and figurative language",
    title: "Idioms and figurative language",
    summary: "Understand and use idiomatic expressions accurately and with appropriate register.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Using idioms with control",
        intro: "Native speakers use idioms constantly, but a learner who uses too many can sound unnatural. Choose expressions you know well, use them in the right register and keep the form fixed.",
        points: [
          {
            title: "Idioms about effort and difficulty",
            text: "These are common in conversation and informal writing.",
            examples: [
              "to bite off more than you can chew: to try to do too much",
              "to be up against it: to face serious difficulty",
              "to go the extra mile: to make more effort than is expected",
              "to be a tall order: to be very hard to achieve",
            ],
          },
          {
            title: "Idioms about information and opinion",
            text: "These help you talk about what is known or concealed.",
            examples: [
              "to let the cat out of the bag: to reveal a secret by accident",
              "to read between the lines: to understand a hidden meaning",
              "to be on the same page: to share the same understanding",
              "to take something with a pinch of salt: to not believe it completely",
            ],
          },
          {
            title: "Idioms about time and change",
            text: "These describe situations and turning points.",
            examples: [
              "at the eleventh hour: at the last possible moment",
              "a turning point: a moment when things change significantly",
              "to be back to square one: to have to start again",
              "to be in the same boat: to be in the same difficult situation",
            ],
          },
          {
            title: "Keep the form fixed",
            text: "Most idioms cannot be changed. We say to bite off more than you can chew, not to bite more than you can eat. Check the exact words, prepositions and tense you can use.",
            examples: [
              "She went the extra mile for her customers.",
              "They reached an agreement at the eleventh hour.",
            ],
          },
        ],
        watchOut: [
          "Idioms are often informal. In a formal essay, choose a more neutral expression: at the last moment rather than at the eleventh hour, unless the idiom is clearly appropriate.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which idiom means 'to reveal a secret by mistake'?",
            answer: "let the cat out of the bag",
            why: "The expression comes from the idea of a cat escaping from a bag in which it was hidden.",
          },
          {
            prompt: "Complete: 'The negotiations collapsed, so we are back to ___ one.'",
            answer: "square",
            why: "Back to square one means we have to start again from the beginning.",
          },
          {
            prompt: "What does 'take it with a pinch of salt' mean?",
            answer: "Do not believe it completely.",
            why: "It is used when information may not be entirely reliable.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "He tried to run three projects at once and soon realised he had ___ more than he could chew.",
            ["taken on up", "eaten up", "bitten off"],
            2,
            "To bite off more than you can chew means to try to do too much.",
          ),
          choice(
            "The company went the extra ___ to make sure that every customer was satisfied.",
            ["mile", "step", "road"],
            0,
            "To go the extra mile means to make more effort than expected.",
          ),
          gap(
            "I didn't tell anyone about the surprise party, but my brother let the ___ out of the bag. (c _ _)",
            ["cat"],
            "To let the cat out of the bag means to reveal a secret accidentally.",
          ),
          choice(
            "The letter did not say it directly, but if you read between the ___, it was a warning.",
            ["words", "lines", "pages"],
            1,
            "To read between the lines means to understand a hidden or unstated meaning.",
          ),
          choice(
            "'We are all in the same boat' means:",
            [
              "We are going on a boat trip.",
              "We all face the same difficult situation.",
              "We all agree with one another.",
            ],
            1,
            "The idiom means that everyone is in a similar, often difficult, situation.",
          ),
          gap(
            "The two sides reached an agreement at the eleventh ___. (h _ _ _)",
            ["hour"],
            "At the eleventh hour means at the very last moment.",
          ),
          choice(
            "'I'd take that report with a pinch of salt.' The speaker thinks the report is:",
            [
              "extremely important",
              "very funny",
              "possibly unreliable",
            ],
            2,
            "To take something with a pinch of salt means to be sceptical about it.",
          ),
          choice(
            "Which sentence uses the idiom correctly?",
            [
              "After the failure, we were back to square one.",
              "After the failure, we were back at square two.",
              "After the failure, we were square one back.",
            ],
            0,
            "The fixed form is back to square one.",
          ),
        ],
      },
    ],
  },
  {
    key: "c2-vocabulary-register-formal-neutral",
    level: "C2",
    category: "Vocabulary",
    topic: "Register: formal, neutral and informal",
    title: "Register: choosing the right word",
    summary: "Replace informal vocabulary with precise, formal alternatives, and recognise when a neutral choice is better.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Matching vocabulary to the situation",
        intro: "At C2 you are expected to control register. This means choosing words that fit the context: a formal report, a polite email or a conversation with friends.",
        points: [
          {
            title: "Formal alternatives to common verbs",
            text: "Formal writing often prefers a single Latin-origin verb to a phrasal verb.",
            examples: [
              "find out → ascertain / discover",
              "look into → investigate",
              "put up with → tolerate",
              "get worse → deteriorate",
              "go up → increase / rise",
              "ask for → request",
            ],
          },
          {
            title: "Formal alternatives to common adjectives and nouns",
            text: "Choose a more precise word instead of a general one.",
            examples: [
              "a big problem → a considerable / significant difficulty",
              "enough → sufficient",
              "a lot of → a substantial amount of / numerous",
              "help → assistance",
              "start → commence (very formal)",
            ],
          },
          {
            title: "Neutral is often best",
            text: "Very formal words can sound pompous. Use them only when the context requires it. Many situations call for a neutral word.",
            examples: [
              "We began the meeting at ten. (neutral)",
              "We commenced the meeting at ten. (very formal)",
              "We kicked off the meeting at ten. (informal)",
            ],
          },
          {
            title: "Nominalisation",
            text: "Formal writing often uses nouns instead of verbs to sound more objective.",
            examples: [
              "People are worried about it. → There is widespread concern about it.",
              "They decided to stop the project. → The decision was made to terminate the project.",
            ],
          },
        ],
        watchOut: [
          "Do not use contractions, slang or phrasal verbs that are very informal in formal writing, but do not replace every word with a difficult one either. Clarity matters more than complexity.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Give a formal verb for 'look into' (a problem).",
            answer: "investigate",
            why: "Investigate is the formal equivalent of look into.",
          },
          {
            prompt: "Give a formal word for 'enough'.",
            answer: "sufficient",
            why: "Sufficient is the formal equivalent: sufficient funds.",
          },
          {
            prompt: "Which is more suitable in a formal report: 'put up with' or 'tolerate'?",
            answer: "tolerate",
            why: "Tolerate is a single formal verb. Put up with is a phrasal verb and sounds informal.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Which word is the most formal alternative to 'get worse'?",
            ["go down", "slide", "deteriorate"],
            2,
            "Deteriorate is the formal verb for becoming worse over time.",
          ),
          gap(
            "We would be grateful for your ___ in this matter. (help → formal noun)",
            ["assistance", "aid"],
            "Assistance is the formal noun for help. Aid is also possible.",
          ),
          choice(
            "Which sentence is the most appropriate for a formal complaint letter?",
            [
              "I want my money back now.",
              "I would like to request a full refund.",
              "Give me my cash back.",
            ],
            1,
            "Request and would like are polite and formal.",
          ),
          gap(
            "The company has taken ___ steps to reduce emissions. (enough → formal adjective)",
            ["sufficient", "adequate"],
            "Sufficient is the formal equivalent of enough. Adequate also fits.",
          ),
          choice(
            "'We found out the truth.' Which formal verb replaces 'found out'?",
            ["ascertained", "discovered up", "got to know"],
            0,
            "Ascertain means to find out something with certainty.",
          ),
          choice(
            "Which version uses nominalisation?",
            [
              "Prices suddenly went up and alarmed consumers.",
              "Prices rose suddenly and consumers got worried.",
              "The sudden increase in prices alarmed consumers.",
            ],
            2,
            "Nominalisation turns the verb (increase) into a noun phrase (the sudden increase in prices).",
          ),
          choice(
            "In which context would 'commence' be most suitable?",
            [
              "A casual text to a friend",
              "A conversation about breakfast",
              "A formal announcement of the start of a legal procedure",
            ],
            2,
            "Commence is very formal and is mainly used in legal and official contexts.",
          ),
          gap(
            "Many residents have raised ___ concerns about the plan. (a lot of → formal adjective)",
            ["numerous", "considerable", "serious"],
            "Numerous (many) or considerable are formal alternatives to a lot of. Serious also fits the context.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c2-reading-translation",
    level: "C2",
    category: "Reading",
    topic: "Essay: translation and meaning",
    title: "Reading: what is lost in translation?",
    summary: "Read an essay with subtle argumentation, identify the writer's stance and interpret figurative language.",
    minutes: 25,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Between languages",
        before: [
          "Have you ever read a book in translation and then in the original? What differences did you notice?",
          "Is it possible for a translation to be as good as the original?",
        ],
        paragraphs: [
          "It is a commonplace that translation is betrayal, and, as with most commonplaces, the truth lies somewhere less comfortable. The Italian pun traduttore, traditore (translator, traitor) is clever precisely because it is almost untranslatable, which rather proves the point it makes. Yet the conclusion that translation is therefore pointless would be as hasty as the opposite assumption, that a competent translator simply swaps one set of words for another.",
          "What the translator confronts is not a vocabulary problem but a problem of worlds. A word such as the Portuguese saudade or the German Fernweh carries a history of usage, a cluster of associations and a tone that no single English word can reproduce. The translator may resort to a phrase, a footnote or an approximate equivalent, but each solution involves a loss, and the skill lies in deciding which loss the reader can best afford.",
          "Nor is the difficulty confined to untranslatable words. Rhythm, register and humour are notoriously fragile. A joke that works because of a double meaning in one language usually dies on the page in another, and a sentence whose music depends on the stress patterns of its original may sound lifeless once its sounds are replaced. Many translators therefore describe their work less as reproduction than as performance: the original is a score, and each translation is a new interpretation of it.",
          "If this seems discouraging, it should not. Without translation, most of us would be cut off from nearly all the world's literature. Moreover, some translations have achieved a life of their own: certain English versions of Russian novels, for example, have shaped the way generations of readers imagine those books. It may be that the best a translation can hope for is not to be identical to its original, but to be worth reading in its own right.",
        ],
        glossary: [
          { term: "commonplace", meaning: "a statement that people often make and that is not new or original" },
          { term: "pun", meaning: "a joke that uses the double meaning of a word" },
          { term: "register", meaning: "the level of formality of language" },
          { term: "notoriously", meaning: "in a way that is well known, usually for a bad quality" },
          { term: "score", meaning: "the written form of a piece of music" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the essay",
        intro: "Choose the best answer. Think carefully, because more than one option may seem attractive.",
        questions: [
          choice(
            "Why does the writer mention the pun 'traduttore, traditore'?",
            [
              "It illustrates the difficulty it describes, since it loses its effect in translation.",
              "It proves that Italian is better than English.",
              "It is an example of a perfect translation.",
            ],
            0,
            "The writer says the pun is clever because it is almost untranslatable, which proves its own point.",
          ),
          choice(
            "What is the writer's view of the idea that translation is pointless?",
            [
              "It is completely true.",
              "It is as hasty as thinking a translator simply swaps words.",
              "It is the opinion of most translators.",
            ],
            1,
            "The text says this conclusion 'would be as hasty as the opposite assumption'.",
          ),
          choice(
            "In paragraph 2, what does 'a problem of worlds' suggest?",
            [
              "Translators do not know enough vocabulary.",
              "Words belong to different cultural contexts that cannot be matched exactly.",
              "There are too many languages in the world.",
            ],
            1,
            "The writer says words such as saudade carry a history of usage and associations that no single English word reproduces.",
          ),
          choice(
            "According to paragraph 2, what is the translator's main skill?",
            [
              "Finding a perfect equivalent for each word",
              "Avoiding difficult words",
              "Deciding which loss of meaning is the most acceptable",
            ],
            2,
            "The text says the skill lies in deciding 'which loss the reader can best afford'.",
          ),
          choice(
            "Why does the writer say humour is 'fragile'?",
            [
              "It often depends on features of the original language that cannot be reproduced.",
              "Translators do not find jokes funny.",
              "Humour changes over time.",
            ],
            0,
            "A joke based on a double meaning in one language usually fails in another.",
          ),
          choice(
            "What does the comparison with a score (paragraph 3) imply?",
            [
              "Translation should be performed on a stage.",
              "The translator must be a musician.",
              "Each translation is an individual interpretation of the original.",
            ],
            2,
            "A score can be performed in many ways, so each translation is a new interpretation.",
          ),
          choice(
            "What does the writer say at the start of paragraph 4?",
            [
              "Translation should be abandoned.",
              "The difficulties described should not make us pessimistic.",
              "Most people already read everything in the original language.",
            ],
            1,
            "The paragraph begins: 'If this seems discouraging, it should not.'",
          ),
          choice(
            "What example does the writer give of translations with a life of their own?",
            [
              "English versions of Russian novels",
              "German versions of Portuguese poems",
              "Italian versions of English plays",
            ],
            0,
            "The text mentions English versions of Russian novels that have shaped generations of readers.",
          ),
          choice(
            "The overall tone of the essay is best described as:",
            [
              "angry and dismissive",
              "light-hearted and comic",
              "reflective and nuanced",
            ],
            2,
            "The writer explores a complex question, qualifies each point and ends with a measured conclusion.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c2-writing-discursive-essay",
    level: "C2",
    category: "Writing",
    topic: "Discursive essay",
    title: "Writing: a discursive essay",
    summary: "Develop a well-organised argument that engages with complexity and uses a sophisticated range of language.",
    minutes: 35,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "Write an essay discussing the following statement: 'In an age of instant translation tools, learning foreign languages is no longer necessary.' You should consider the practical, cultural and personal aspects of language learning and give your own conclusion.",
        wordGuide: "A class guide: about 280 to 320 words. This is not an exam rule.",
        planning: [
          "Decide on a clear line of argument before you write. A nuanced position is acceptable: you can partly agree.",
          "Introduction: engage the reader and indicate how you will approach the topic. Avoid simply repeating the question.",
          "Body 1 (practical): what technology can and cannot do.",
          "Body 2 (cultural and personal): what language learning offers beyond communication.",
          "Consider and answer a counter-argument.",
          "Conclusion: a considered judgement, not just a summary.",
        ],
        usefulLanguage: [
          "It is tempting to assume that … Nevertheless, …",
          "While it is undeniable that …, it would be misleading to suggest that …",
          "A case can be made for … but this overlooks …",
          "Far from rendering X obsolete, Y has made it more valuable.",
          "This is not to say that … / That said, …",
          "On balance, I would argue that …",
        ],
        checklist: [
          "My argument is clear and develops logically from paragraph to paragraph.",
          "I addressed practical, cultural and personal aspects.",
          "I considered a counter-argument and responded to it.",
          "I used a wide range of vocabulary and structures, including some inversion or emphatic structures.",
          "My register is consistently formal.",
          "I checked punctuation, article use and prepositions.",
        ],
        model: [
          "It is tempting to assume that machine translation has made foreign languages redundant. With a smartphone, one can now order a meal in Tokyo or read a Finnish newspaper in seconds. Nevertheless, this view mistakes convenience for competence.",
          "From a practical standpoint, translation tools are undeniably impressive, but they remain unreliable where nuance matters. Idioms, irony and cultural references are frequently mishandled, and a single mistranslated word in a contract or a medical record can have serious consequences. Moreover, a tool cannot read the room: it cannot tell whether a pause is polite or hostile, or whether a joke is welcome.",
          "Culturally and personally, the benefits of learning a language extend far beyond communication. Studying another language changes the way we think about our own; it develops patience, attentiveness and empathy. Furthermore, relationships tend to be built on effort. Few things win a stranger's trust as quickly as an honest attempt, however clumsy, to speak their language.",
          "It might be objected that most people have neither the time nor the aptitude to become fluent, and that technology is a pragmatic substitute. A case can be made for this, particularly for travellers with short-term needs. That said, the objection overlooks the fact that learning does not have to be perfect to be valuable.",
          "On balance, I would argue that far from making language learning obsolete, translation technology has made it more precious. Machines can transfer words, but only learners can truly understand the people who use them.",
        ],
        modelNotes: [
          "The introduction engages the reader with a common assumption and signals a counter-view (Nevertheless).",
          "It covers practical, cultural and personal aspects, as the task requires.",
          "It addresses a counter-argument (It might be objected that …) and responds (That said …).",
          "It uses sophisticated structures and expressions: far from + ing/noun, a case can be made, tends to, mistakes convenience for competence.",
          "The conclusion gives a judgement (On balance) instead of repeating the paragraphs.",
          "This is one possible answer. Other positions are equally valid if they are developed with care.",
        ],
        assessment: [
          "Content: does the essay address all the aspects and develop a coherent argument?",
          "Communicative achievement: is the register consistent and does the writer engage the reader?",
          "Organisation: is the text well structured with sophisticated cohesive devices?",
          "Language: is there a wide, precise range of vocabulary and complex grammar with natural control?",
          "Accuracy: are errors rare and do they not affect understanding?",
        ],
      },
    ],
  },
  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "c2-speaking-present-defend-view",
    level: "C2",
    category: "Speaking",
    topic: "Presenting and defending a view",
    title: "Speaking: present and defend a viewpoint",
    summary: "Give a structured two-minute talk, respond to challenge and handle abstract questions fluently.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "A short talk and a challenge",
        setup: "Prepare for two minutes, then speak for about two minutes without reading. Then ask a partner (or imagine one) to challenge your position with the questions below.",
        prompts: [
          { label: "Talk", text: "'Competition does more harm than good in education.' Present your position." },
          { label: "Challenge 1", text: "Surely competition motivates people to do their best. How would you respond?" },
          { label: "Challenge 2", text: "Is it realistic to remove competition from a system where places at university are limited?" },
          { label: "Abstract question", text: "To what extent do you think a society's values are reflected in how it educates its young people?" },
        ],
        usefulLanguage: [
          "I'd like to begin by suggesting that …",
          "There are three points I'd like to make: …",
          "Admittedly, … Nevertheless, …",
          "That's a fair challenge, but I'd argue that …",
          "To put it another way, … / What I mean is …",
          "Ultimately, it comes down to …",
        ],
        steps: [
          "Plan three points in notes, not sentences.",
          "Open with a clear position, develop each point with an example and close with a conclusion.",
          "When challenged, acknowledge the challenge and then respond with a reason or an example.",
          "Rephrase if you lose your way: To put it another way, …",
          "Listen to a recording of yourself and note repeated words and hesitation.",
        ],
        checklist: [
          "My talk had a clear opening, development and conclusion.",
          "I used discourse markers to signal my structure.",
          "I responded to the challenge without becoming defensive.",
          "I used a wide range of vocabulary and avoided repeating words.",
          "I spoke fluently, with natural stress and intonation.",
        ],
        model: {
          title: "Model opening and response (transcript)",
          lines: [
            "Opening: I'd like to begin by suggesting that competition, while superficially motivating, tends to narrow what we think education is for. There are three points I'd like to make. First, it rewards the result rather than the process. Second, it discourages collaboration. And third, it affects pupils unequally.",
            "Challenge 1: That's a fair challenge, and I'd concede that some pupils thrive on competition. But I'd argue that they are the minority, and that those who don't feel they are winning often stop trying altogether. The evidence from motivation research suggests that curiosity is a far more durable driver than rivalry.",
            "Challenge 2: Admittedly, limited places make some competition unavoidable. Nevertheless, the question is whether it should begin at the age of seven. We can ask children to collaborate and still assess them fairly later on.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "c2-everyday-diplomacy-feedback-declining",
    level: "C2",
    category: "Everyday English",
    topic: "Diplomacy: feedback, refusing and tactful disagreement",
    title: "Everyday English: tact and diplomacy",
    summary: "Give difficult feedback, decline a request and soften criticism without losing clarity.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Saying difficult things well",
        intro: "At C2 you should be able to say things that are uncomfortable without causing offence or sounding vague. The key is to combine softening language with a clear message.",
        points: [
          {
            title: "Softening criticism",
            text: "Begin with something positive or neutral, then use hedging and a suggestion.",
            examples: [
              "I really appreciate the effort you've put in. It might be worth reconsidering the structure, though.",
              "I wonder whether it might be clearer if …",
              "Would you consider revising the second section?",
            ],
          },
          {
            title: "Declining without damaging the relationship",
            text: "Explain briefly, thank the other person and, where possible, offer an alternative.",
            examples: [
              "I'm afraid I won't be able to take that on at the moment. Could we revisit it next month?",
              "It's very kind of you to ask, but I'll have to decline.",
              "I'd love to, but I'm already committed on that date.",
            ],
          },
          {
            title: "Understatement and hedging",
            text: "British English often uses understatement to express strong feelings politely.",
            examples: [
              "That's not entirely what I had in mind. (= I disagree.)",
              "It's not the best result we could have hoped for. (= It's bad.)",
              "I'm slightly concerned about the deadline. (= I'm seriously worried.)",
            ],
          },
          {
            title: "Being clear, not vague",
            text: "Diplomacy is not evasion. After softening, state clearly what must change.",
            examples: [
              "I'd be grateful if the report could be revised and returned by Friday.",
            ],
          },
        ],
        watchOut: [
          "Too much hedging makes a message unclear. If your colleague might not realise there is a serious problem, say so clearly after the softening phrase.",
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Which sentence gives critical feedback most tactfully?",
            [
              "The second section is a mess.",
              "You obviously haven't thought about the structure.",
              "It might be worth reconsidering the structure of the second section.",
            ],
            2,
            "It gives a clear suggestion with a softening expression.",
          ),
          choice(
            "What does 'I'm slightly concerned about the deadline' often mean in British English?",
            [
              "I am seriously worried about the deadline.",
              "I am not worried at all.",
              "I am happy with the deadline.",
            ],
            0,
            "Understatement is common in British English. 'Slightly' often softens a strong concern.",
          ),
          gap(
            "I'm afraid I won't be able to take that on ___ the moment. (preposition)",
            ["at"],
            "At the moment means now.",
          ),
          choice(
            "Which reply declines an invitation graciously?",
            [
              "No. I'm busy.",
              "It's very kind of you to ask, but I'm afraid I'll have to decline.",
              "I don't want to come.",
            ],
            1,
            "It expresses thanks and refuses politely.",
          ),
          gap(
            "I ___ whether it might be clearer if we reorganised the introduction. (wonder)",
            ["wonder"],
            "I wonder whether is a softening phrase for suggesting a change.",
          ),
          choice(
            "'That's not entirely what I had in mind' is most likely to mean:",
            [
              "That is exactly right.",
              "I disagree or I'm disappointed.",
              "I had no ideas.",
            ],
            1,
            "It is an understated way of expressing disagreement or disappointment.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: difficult feedback",
        setup: "Work with a partner or read both parts aloud. Student A is a manager. Student B is a team member who has submitted a late, weak report. Then swap roles.",
        prompts: [
          { label: "Manager", text: "Give feedback that is tactful but clear. The report is late and the analysis is thin, but the person is usually reliable. Say what must change and by when." },
          { label: "Team member", text: "You have been under pressure with another project. Explain, accept the feedback and propose a realistic plan. You might also ask for support." },
        ],
        usefulLanguage: [
          "I wanted to have a word about the report.",
          "I appreciate how much you have on your plate, but …",
          "It might be worth looking again at …",
          "I'd be grateful if you could …",
          "What would help you most?",
          "Let's agree that …",
        ],
        steps: [
          "Open with an appreciative or neutral comment.",
          "State the problem clearly and softly.",
          "Listen and respond to the explanation.",
          "Agree on actions, with a date.",
        ],
        checklist: [
          "I used softening language without being vague.",
          "I said what needed to change and by when.",
          "I listened and responded to the other person's explanation.",
          "We agreed on a plan.",
        ],
        model: {
          title: "Model extract (transcript)",
          lines: [
            "Manager: Thanks for coming in. I wanted to have a word about the report. I know how much you have on your plate at the moment, and I appreciate your effort.",
            "Team member: Thank you. I'm sorry it was late. I've been tied up with the other project.",
            "Manager: I understand. That said, it might be worth looking again at the analysis, which is thinner than I'd expect from you. I'd be grateful if you could revise it by Thursday.",
            "Team member: That seems fair. Could I have an hour with you tomorrow to check that I'm on the right track?",
            "Manager: Of course. Let's agree that you'll send me a draft on Wednesday morning.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c2-revision-mixed-1",
    level: "C2",
    category: "Revision",
    topic: "Mixed revision",
    title: "Mixed revision quiz 1",
    summary: "Ten mixed questions to revise inversion, the subjunctive, idioms and register.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "This quiz is for your own practice. Take your time and think about register as well as grammar.",
        questions: [
          choice(
            "Rarely ___ such dedication in a young player.",
            ["we see", "we do see", "do we see"],
            2,
            "Rarely at the beginning of a sentence triggers inversion: do we see.",
          ),
          choice(
            "The judge demanded that the witness ___ the truth.",
            ["tell", "tells", "told"],
            0,
            "After demand we use the subjunctive, the base form of the verb.",
          ),
          gap(
            "No sooner had he left ___ the phone rang. (one word)",
            ["than"],
            "No sooner is followed by than.",
          ),
          choice(
            "Which expression means 'to start again from the beginning'?",
            [
              "to bite off more than you can chew",
              "to go the extra mile",
              "to be back to square one",
            ],
            2,
            "Back to square one means starting again after a failure.",
          ),
          choice(
            "He's very proud of his work, but I take his claims with a pinch of ___.",
            ["sugar", "salt", "pepper"],
            1,
            "To take something with a pinch of salt means to be sceptical.",
          ),
          gap(
            "It is high time the council ___ the roads. (repair)",
            ["repaired"],
            "It's high time + past simple means that something should be done now.",
          ),
          choice(
            "Which word is the most formal alternative to 'ask for'?",
            ["request", "beg", "want"],
            0,
            "Request is a formal verb.",
          ),
          choice(
            "'___ you require assistance, please contact reception.'",
            ["If you", "Would", "Should"],
            2,
            "Should + subject is a formal alternative to if in a first conditional.",
          ),
          gap(
            "She behaves as if she ___ the manager, but she is only an assistant. (be)",
            ["were", "was"],
            "As if with an unreal situation uses a past form. Were is the more formal choice, but was is also acceptable.",
          ),
          choice(
            "Under no circumstances ___ the password with anyone.",
            ["you should share", "you share", "should you share"],
            2,
            "After Under no circumstances we invert the auxiliary and the subject.",
          ),
        ],
      },
    ],
  },
];
