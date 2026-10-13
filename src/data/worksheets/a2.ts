import type { StudentWorksheet } from '../studentResources';

export const a2Worksheets: StudentWorksheet[] = [
  {
    key: 'a2-phrasal-verbs-1',
    level: 'A2',
    topic: 'Phrasal verbs',
    title: 'A2 Phrasal verbs 1',
    focus: 'Everyday phrasal verbs',
    duration: '5 min',
    questions: [
      {
        prompt: 'Please ___ your shoes before you come in.',
        options: ['take off', 'take out', 'take up'],
        answer: 0,
        explanation: 'Take off means remove clothes or shoes. Take out means remove something from inside a place.',
      },
      {
        prompt: 'I usually ___ at 7 o\'clock, but at the weekend I sleep until nine.',
        options: ['get on', 'get in', 'get up'],
        answer: 2,
        explanation: 'Get up means leave your bed. Get on and get in are used for transport: get on a bus, get in a car.',
      },
      {
        prompt: 'Can you ___ the music? It\'s too loud.',
        options: ['turn up', 'turn down', 'turn over'],
        answer: 1,
        explanation: 'Turn down means make something quieter. Turn up makes it louder.',
      },
      {
        prompt: 'I can\'t find my keys. Can you help me ___ them?',
        options: ['look at', 'look after', 'look for'],
        answer: 2,
        explanation: 'Look for means try to find. Look after means take care of. Look at means direct your eyes at something.',
      },
      {
        prompt: 'Please ___ this form and give it to the teacher.',
        options: ['fill up', 'put in', 'fill in'],
        answer: 2,
        explanation: 'We fill in a form (write the information). Fill up is for containers: fill up the tank.',
      },
    ],
  },
  {
    key: 'a2-collocations-1',
    level: 'A2',
    topic: 'Collocations',
    title: 'A2 Collocations 1',
    focus: 'do, make, take and ask',
    duration: '5 min',
    questions: [
      {
        prompt: 'I usually ___ my homework after dinner.',
        options: ['make', 'do', 'take'],
        answer: 1,
        explanation: 'We do homework, the shopping and the housework.',
      },
      {
        prompt: 'We ___ a lot of photos on holiday.',
        options: ['took', 'made', 'did'],
        answer: 0,
        explanation: 'We take a photo. Make is used for things you create, like a cake or a plan.',
      },
      {
        prompt: 'Can I ___ a question, please?',
        options: ['say', 'tell', 'ask'],
        answer: 2,
        explanation: 'We ask a question. We tell a story or the truth.',
      },
      {
        prompt: 'It\'s a lovely day. Let\'s ___ a walk in the park.',
        options: ['take', 'do', 'make'],
        answer: 0,
        explanation: 'We take a walk (or go for a walk).',
      },
      {
        prompt: 'Sorry, I ___ a mistake in my homework.',
        options: ['did', 'made', 'took'],
        answer: 1,
        explanation: 'We make a mistake. We do not do a mistake.',
      },
    ],
  },
  {
    key: 'a2-word-formation-1',
    level: 'A2',
    topic: 'Word formation',
    title: 'A2 Word formation 1',
    focus: 'Common endings and prefixes: -er, -ful, -ly, un-',
    duration: '5 min',
    questions: [
      {
        prompt: 'My brother is a very good ___. He plays for the city team. (PLAY)',
        options: ['play', 'player', 'playing'],
        answer: 1,
        explanation: 'Add -er to a verb to name the person who does the action: play → player.',
      },
      {
        prompt: 'Be ___ with that glass. It\'s very old. (CARE)',
        options: ['careful', 'careless', 'carefully'],
        answer: 0,
        explanation: 'After be we need an adjective. Careful means "taking care". Careless means the opposite.',
      },
      {
        prompt: 'He walked ___ to the door so nobody could hear him. (QUIET)',
        options: ['quiet', 'quietly', 'quietness'],
        answer: 1,
        explanation: 'Quietly is an adverb: it describes how he walked. Add -ly to many adjectives to make adverbs.',
      },
      {
        prompt: 'The film was so ___ that we left before the end. (BORE)',
        options: ['boring', 'bored', 'boredom'],
        answer: 0,
        explanation: 'Boring describes the thing that makes you feel bored. Bored describes the person\'s feeling.',
      },
      {
        prompt: 'I can\'t wear these shoes for long. They\'re very ___. (COMFORTABLE)',
        options: ['incomfortable', 'discomfortable', 'uncomfortable'],
        answer: 2,
        explanation: 'The prefix un- gives the opposite meaning: comfortable → uncomfortable.',
      },
    ],
  },
  {
    key: 'a2-grammar-1',
    level: 'A2',
    topic: 'Grammar',
    title: 'A2 Grammar 1',
    focus: 'Present continuous, past simple, comparatives, quantifiers and prepositions of time',
    duration: '5 min',
    questions: [
      {
        prompt: 'Look! It ___ outside.',
        options: ['rains', 'is raining', 'rain'],
        answer: 1,
        explanation: 'Use the present continuous (am/is/are + -ing) for something happening now.',
      },
      {
        prompt: 'Yesterday we ___ to the cinema.',
        options: ['go', 'gone', 'went'],
        answer: 2,
        explanation: 'Went is the past simple of go. Gone is the past participle (She has gone).',
      },
      {
        prompt: 'My English is ___ than last year.',
        options: ['more good', 'better', 'best'],
        answer: 1,
        explanation: 'The comparative of good is better. Best is the superlative (the best student).',
      },
      {
        prompt: 'I don\'t have ___ money with me today.',
        options: ['any', 'some', 'many'],
        answer: 0,
        explanation: 'Use any in negative sentences. Many is only for countable nouns (many friends), not money.',
      },
      {
        prompt: 'My birthday is ___ 14 March.',
        options: ['in', 'at', 'on'],
        answer: 2,
        explanation: 'Use on with days and dates: on Monday, on 14 March. Use in for months and years.',
      },
    ],
  },
];
