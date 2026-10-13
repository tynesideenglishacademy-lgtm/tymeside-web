import type { StudentWorksheet } from '../studentResources';

export const c1Worksheets: StudentWorksheet[] = [
  {
    key: 'c1-phrasal-verbs-1',
    level: 'C1',
    topic: 'Phrasal verbs',
    title: 'C1 Phrasal verbs 1',
    focus: 'Phrasal verbs in formal and professional contexts',
    duration: '7-9 min',
    questions: [
      {
        prompt: 'It took the committee months to ___ a workable solution.',
        options: ['come down with', 'come in for', 'come up with', 'come up against'],
        answer: 2,
        explanation: 'Come up with means produce an idea or solution. Come up against means face a problem; come down with means catch an illness.',
      },
      {
        prompt: 'The new rules are designed to ___ tax avoidance.',
        options: ['fall back on', 'bring about', 'put across', 'clamp down on'],
        answer: 3,
        explanation: 'Clamp down on means take strong action to stop something. Bring about means cause something to happen.',
      },
      {
        prompt: 'She refused to ___ pressure from her colleagues.',
        options: ['give in to', 'give away to', 'give off to', 'give out to'],
        answer: 0,
        explanation: 'Give in to means yield to something. The other combinations do not work with pressure.',
      },
      {
        prompt: 'It finally ___ on me that I had been wrong all along.',
        options: ['struck', 'dawned', 'hit', 'came'],
        answer: 1,
        explanation: 'Dawn on someone means become gradually clear to them. Compare: It struck me that… / It hit me that… (no preposition).',
      },
      {
        prompt: 'The company was forced to ___ a number of staff because of falling profits.',
        options: ['call off', 'lay off', 'set off', 'take off'],
        answer: 1,
        explanation: 'Lay off means end someone\'s employment, usually because there is not enough work. Call off means cancel.',
      },
    ],
  },
  {
    key: 'c1-collocations-1',
    level: 'C1',
    topic: 'Collocations',
    title: 'C1 Collocations 1',
    focus: 'Fixed combinations in formal English',
    duration: '7-9 min',
    questions: [
      {
        prompt: 'He has a ___ interest in the company\'s success; he owns half of it.',
        options: ['vested', 'invested', 'granted', 'fixed'],
        answer: 0,
        explanation: 'A vested interest is a personal stake in something, usually financial. Invested is not used in this fixed expression.',
      },
      {
        prompt: 'The scandal has ___ serious doubt on the minister\'s honesty.',
        options: ['lifted', 'set', 'cast', 'drove'],
        answer: 2,
        explanation: 'We cast doubt on something (also cast a shadow). Cast is irregular: cast, cast, cast.',
      },
      {
        prompt: 'The campaign has ___ momentum in recent weeks.',
        options: ['won', 'gained', 'earned', 'made'],
        answer: 1,
        explanation: 'Gain momentum (or gather momentum) means develop speed and strength.',
      },
      {
        prompt: 'There is ___ concern that the new tax will hurt pensioners.',
        options: ['widespread', 'broad', 'large', 'vast'],
        answer: 0,
        explanation: 'Widespread concern, support or criticism is the natural collocation for feelings shared by many people.',
      },
      {
        prompt: 'We hope to ___ even by the end of the year.',
        options: ['make', 'reach', 'hit', 'break'],
        answer: 3,
        explanation: 'Break even means earn exactly as much as you spend, with no profit and no loss.',
      },
    ],
  },
  {
    key: 'c1-word-formation-1',
    level: 'C1',
    topic: 'Word formation',
    title: 'C1 Word formation 1',
    focus: 'Prefixes, suffixes and word class',
    duration: '7-9 min',
    questions: [
      {
        prompt: 'There was ___ evidence to convict him. (SUFFICIENT)',
        options: ['insufficiency', 'insufficiently', 'insufficient', 'unsufficient'],
        answer: 2,
        explanation: 'We need an adjective before the noun evidence. The negative prefix for sufficient is in-: insufficient.',
      },
      {
        prompt: 'Her ___ to detail is what makes her work exceptional. (ATTEND)',
        options: ['attentive', 'attention', 'attentively', 'attendance'],
        answer: 1,
        explanation: 'After her we need a noun, and attention to detail is the fixed phrase. Attendance means being present.',
      },
      {
        prompt: 'The ___ of the new regulations has been widely criticised. (IMPLEMENT)',
        options: ['implementation', 'implementing', 'implementable', 'implement'],
        answer: 0,
        explanation: 'After The we need a noun: implement → implementation (-ation makes nouns from verbs).',
      },
      {
        prompt: 'Many believed the minister\'s remarks were ___. (FORTUNE)',
        options: ['misfortune', 'unfortunately', 'infortunate', 'unfortunate'],
        answer: 3,
        explanation: 'After were we need an adjective. The opposite of fortunate is unfortunate (un- + fortunate).',
      },
      {
        prompt: 'The ___ of the experiment was questioned by several scientists. (VALID)',
        options: ['validate', 'validly', 'validity', 'invalid'],
        answer: 2,
        explanation: 'We need a noun after The. Valid → validity (-ity forms abstract nouns from adjectives).',
      },
    ],
  },
  {
    key: 'c1-grammar-1',
    level: 'C1',
    topic: 'Grammar',
    title: 'C1 Grammar 1',
    focus: 'Inversion, subjunctive-style structures and passive reporting',
    duration: '7-9 min',
    questions: [
      {
        prompt: 'Not only ___ late, but he also forgot the documents.',
        options: ['he arrived', 'did he arrive', 'arrived he', 'he did arrive'],
        answer: 1,
        explanation: 'After Not only at the start of a sentence, use auxiliary + subject + base verb: did he arrive.',
      },
      {
        prompt: 'I\'d rather you ___ anyone about this.',
        options: ['don\'t tell', 'won\'t tell', 'didn\'t tell', 'not tell'],
        answer: 2,
        explanation: 'When would rather has a different subject for the next verb, use the past simple to refer to the present or future.',
      },
      {
        prompt: 'Should you need any further information, please ___ me.',
        options: ['contact', 'to contact', 'contacting', 'contacted'],
        answer: 0,
        explanation: 'Should you need = If you need. The main clause uses an imperative (please contact me).',
      },
      {
        prompt: 'The scheme, ___ aim is to reduce unemployment, has been extended.',
        options: ['which', 'whose', 'that', 'of which'],
        answer: 1,
        explanation: 'Whose shows possession: the aim of the scheme. It can be used for things as well as people.',
      },
      {
        prompt: 'She is said ___ the best player in the world.',
        options: ['being', 'to being', 'be', 'to be'],
        answer: 3,
        explanation: 'Passive reporting structure: is said + to-infinitive. Equivalent to People say that she is…',
      },
    ],
  },
];
