import type { StudentWorksheet } from '../studentResources';

export const b2Worksheets: StudentWorksheet[] = [
  {
    key: 'b2-phrasal-verbs-1',
    level: 'B2',
    topic: 'Phrasal verbs',
    title: 'B2 Phrasal verbs 1',
    focus: 'Phrasal verbs for work, news and opinions',
    duration: '6-8 min',
    questions: [
      {
        prompt: 'The company has ___ a new policy on working from home.',
        options: ['brought in', 'brought up', 'brought out', 'brought on'],
        answer: 0,
        explanation: 'Bring in means introduce a new law or rule. Bring up means raise a topic; bring out means release a product; bring on means cause (an illness, for example).',
      },
      {
        prompt: 'I can\'t ___ with all this noise any longer.',
        options: ['keep up', 'give up', 'put up', 'take up'],
        answer: 2,
        explanation: 'Put up with means tolerate. Keep up with means stay at the same pace.',
      },
      {
        prompt: 'Something urgent has ___, so I won\'t be able to come tonight.',
        options: ['come out', 'come up', 'come off', 'come in'],
        answer: 1,
        explanation: 'Come up means happen unexpectedly. Come out means be published or become known.',
      },
      {
        prompt: 'The project fell ___ because we didn\'t have enough funding.',
        options: ['off', 'away', 'back', 'through'],
        answer: 3,
        explanation: 'Fall through means a plan fails to happen. Fall back on means use something as a reserve.',
      },
      {
        prompt: 'She ___ the job offer because the salary was too low.',
        options: ['turned down', 'turned up', 'turned over', 'turned out'],
        answer: 0,
        explanation: 'Turn down means refuse an offer. Turn up means arrive or appear; turn out means end up in a particular way.',
      },
    ],
  },
  {
    key: 'b2-collocations-1',
    level: 'B2',
    topic: 'Collocations',
    title: 'B2 Collocations 1',
    focus: 'Verb + noun and adverb + adjective',
    duration: '6-8 min',
    questions: [
      {
        prompt: 'After hours of discussion, they finally ___ an agreement.',
        options: ['arrived', 'held', 'reached', 'took'],
        answer: 2,
        explanation: 'We reach an agreement, a decision or a compromise. Arrive needs a preposition: arrive at.',
      },
      {
        prompt: 'The company is ___ a lot of pressure to cut costs.',
        options: ['under', 'on', 'in', 'at'],
        answer: 0,
        explanation: 'Under pressure is a fixed expression. Compare: under stress, under control.',
      },
      {
        prompt: 'I was ___ disappointed with the results.',
        options: ['highly', 'widely', 'strongly', 'deeply'],
        answer: 3,
        explanation: 'Deeply collocates with feelings: deeply disappointed, deeply concerned. Highly goes with words like successful and recommended.',
      },
      {
        prompt: 'After studying the data, the team ___ the conclusion that the drug was safe.',
        options: ['made', 'took', 'drew', 'held'],
        answer: 2,
        explanation: 'We draw a conclusion. The collocation draw a conclusion is fixed in this form.',
      },
      {
        prompt: 'We\'re sorry, but we\'re ___ short of staff this week.',
        options: ['badly', 'hardly', 'heavily', 'strictly'],
        answer: 0,
        explanation: 'Badly short of is a natural combination. Hardly means almost not, so it cannot modify short here.',
      },
    ],
  },
  {
    key: 'b2-word-formation-1',
    level: 'B2',
    topic: 'Word formation',
    title: 'B2 Word formation 1',
    focus: 'Choosing the correct word class',
    duration: '6-8 min',
    questions: [
      {
        prompt: 'Many people feel ___ about speaking in public. (COMFORT)',
        options: ['comfortless', 'discomforted', 'uncomfortably', 'uncomfortable'],
        answer: 3,
        explanation: 'After feel we need an adjective. Un- gives the negative meaning: uncomfortable.',
      },
      {
        prompt: 'The government\'s decision caused a lot of ___. (AGREE)',
        options: ['disagreeing', 'disagreeable', 'disagreement', 'unagreement'],
        answer: 2,
        explanation: 'After a lot of we need a noun. The noun is disagreement (dis- + agree + -ment).',
      },
      {
        prompt: 'Scientists are ___ that the new treatment will work. (OPTIMISM)',
        options: ['optimism', 'optimistic', 'optimist', 'optimistically'],
        answer: 1,
        explanation: 'After are we need an adjective. Optimistic is the adjective form.',
      },
      {
        prompt: 'Her ___ to the team was highly valued. (CONTRIBUTE)',
        options: ['contribution', 'contributing', 'contributor', 'contributory'],
        answer: 0,
        explanation: 'After her we need a noun for the action: contribution. A contributor is the person.',
      },
      {
        prompt: 'The system is simple, cheap and very ___. (RELY)',
        options: ['reliance', 'reliant', 'reliable', 'reliably'],
        answer: 2,
        explanation: 'We need an adjective, like simple and cheap. Reliable means you can depend on it; reliant means dependent.',
      },
    ],
  },
  {
    key: 'b2-grammar-1',
    level: 'B2',
    topic: 'Grammar',
    title: 'B2 Grammar 1',
    focus: 'Wishes, past perfect, inverted conditionals, gerunds and relative clauses',
    duration: '6-8 min',
    questions: [
      {
        prompt: 'I wish I ___ to the party last night.',
        options: ['went', 'had gone', 'would go', 'have gone'],
        answer: 1,
        explanation: 'To express regret about the past, use wish + past perfect.',
      },
      {
        prompt: 'By the time we arrived, the film ___.',
        options: ['already started', 'was starting', 'had already started', 'has started'],
        answer: 2,
        explanation: 'The past perfect shows that the film started before we arrived.',
      },
      {
        prompt: 'Had I known about the traffic, I ___ earlier.',
        options: ['would have left', 'would leave', 'left', 'had left'],
        answer: 0,
        explanation: 'This is an inverted third conditional (Had I known = If I had known). The result clause uses would have + past participle.',
      },
      {
        prompt: 'She suggested ___ a taxi because it was raining.',
        options: ['to take', 'take', 'took', 'taking'],
        answer: 3,
        explanation: 'Suggest is followed by the -ing form (or a that-clause), not by to + infinitive.',
      },
      {
        prompt: 'The report, ___ was published yesterday, has caused controversy.',
        options: ['that', 'which', 'what', 'who'],
        answer: 1,
        explanation: 'This is a non-defining relative clause between commas. Use which for things; that cannot be used here.',
      },
    ],
  },
];
