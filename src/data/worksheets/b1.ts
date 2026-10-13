import type { StudentWorksheet } from '../studentResources';

export const b1Worksheets: StudentWorksheet[] = [
  {
    key: 'b1-phrasal-verbs-1',
    level: 'B1',
    topic: 'Phrasal verbs',
    title: 'B1 Phrasal verbs 1',
    focus: 'Phrasal verbs for work and daily life',
    duration: '5 min',
    questions: [
      {
        prompt: 'The outdoor concert was ___ because of the storm.',
        options: ['called up', 'called in', 'called off'],
        answer: 2,
        explanation: 'Call off means cancel. Call up means telephone; call in means visit briefly or ask someone to come.',
      },
      {
        prompt: 'I\'m trying to ___ smoking, but it\'s very difficult.',
        options: ['give up', 'give in', 'give away'],
        answer: 0,
        explanation: 'Give up means stop doing something, especially a habit. Give in means accept defeat.',
      },
      {
        prompt: 'We\'ve run out of milk, so I\'ll go to the shop and ___ some.',
        options: ['set up', 'pick up', 'take up'],
        answer: 1,
        explanation: 'Pick up can mean collect or buy something quickly. Take up means start a new hobby or activity.',
      },
      {
        prompt: 'She really takes ___ her mother. They have the same smile.',
        options: ['up', 'over', 'after'],
        answer: 2,
        explanation: 'Take after means look or behave like an older family member.',
      },
      {
        prompt: 'If you don\'t know a word, ___ it up in a dictionary.',
        options: ['look', 'put', 'turn'],
        answer: 0,
        explanation: 'Look up means search for information in a book or online. With a pronoun, it goes in the middle: look it up.',
      },
    ],
  },
  {
    key: 'b1-collocations-1',
    level: 'B1',
    topic: 'Collocations',
    title: 'B1 Collocations 1',
    focus: 'do, make, take, pay and heavy',
    duration: '5 min',
    questions: [
      {
        prompt: 'He always ___ his best to help other people.',
        options: ['makes', 'does', 'takes'],
        answer: 1,
        explanation: 'Do your best is a fixed expression.',
      },
      {
        prompt: 'I\'d like to ___ a reservation for two people at eight o\'clock.',
        options: ['make', 'do', 'take'],
        answer: 0,
        explanation: 'We make a reservation, an appointment or a booking.',
      },
      {
        prompt: 'It\'s important to ___ attention in class.',
        options: ['give', 'put', 'pay'],
        answer: 2,
        explanation: 'We pay attention. Pay is also used with pay a visit and pay a compliment.',
      },
      {
        prompt: 'Over a hundred runners ___ part in the race.',
        options: ['made', 'took', 'had'],
        answer: 1,
        explanation: 'Take part in means participate.',
      },
      {
        prompt: 'We were late because of ___ traffic on the motorway.',
        options: ['heavy', 'strong', 'big'],
        answer: 0,
        explanation: 'Traffic and rain are heavy, not strong or big. Wind and coffee are strong.',
      },
    ],
  },
  {
    key: 'b1-word-formation-1',
    level: 'B1',
    topic: 'Word formation',
    title: 'B1 Word formation 1',
    focus: 'Nouns, adjectives, adverbs and the prefix un-',
    duration: '5 min',
    questions: [
      {
        prompt: 'Her ___ to learn languages is impressive. (ABLE)',
        options: ['ability', 'ableness', 'ably'],
        answer: 0,
        explanation: 'After her we need a noun. The noun form of able is ability.',
      },
      {
        prompt: 'The hotel was cheap, but the beds were very ___. (COMFORT)',
        options: ['discomfort', 'comfortably', 'uncomfortable'],
        answer: 2,
        explanation: 'After were we need an adjective. Un- gives the opposite: comfortable → uncomfortable.',
      },
      {
        prompt: 'We were all ___ by the news. (SHOCK)',
        options: ['shocking', 'shocked', 'shock'],
        answer: 1,
        explanation: 'Shocked describes how people feel. Shocking describes the news itself.',
      },
      {
        prompt: 'The ___ of the new bridge took two years. (CONSTRUCT)',
        options: ['construction', 'construct', 'constructive'],
        answer: 0,
        explanation: 'After The we need a noun: construct → construction (-ion makes nouns from verbs).',
      },
      {
        prompt: 'He answered all the questions ___. (CONFIDENT)',
        options: ['confidence', 'confidently', 'confident'],
        answer: 1,
        explanation: 'An adverb describes how he answered. Add -ly to the adjective: confident → confidently.',
      },
    ],
  },
  {
    key: 'b1-grammar-1',
    level: 'B1',
    topic: 'Grammar',
    title: 'B1 Grammar 1',
    focus: 'Second conditional, since/for, passive, reported questions and modals of obligation',
    duration: '5-7 min',
    questions: [
      {
        prompt: 'If I ___ more time, I would learn another language.',
        options: ['had', 'have', 'will have'],
        answer: 0,
        explanation: 'Second conditional: if + past simple, would + infinitive. It talks about an unreal or unlikely situation.',
      },
      {
        prompt: 'I\'ve known her ___ 2019.',
        options: ['for', 'since', 'from'],
        answer: 1,
        explanation: 'Use since with a point in time (since 2019) and for with a period (for five years).',
      },
      {
        prompt: 'The photos ___ by my sister last summer.',
        options: ['were taken', 'took', 'have taken'],
        answer: 0,
        explanation: 'The passive is was/were + past participle. Last summer needs a past tense.',
      },
      {
        prompt: 'He asked me where ___.',
        options: ['did I live', 'do I live', 'I lived'],
        answer: 2,
        explanation: 'In reported questions the word order is like a statement (I lived), and the tense moves back.',
      },
      {
        prompt: 'You ___ use your phone during the exam. It\'s forbidden.',
        options: ['needn\'t', 'mustn\'t', 'don\'t have to'],
        answer: 1,
        explanation: 'Mustn\'t means it is forbidden. Needn\'t and don\'t have to mean it is not necessary.',
      },
    ],
  },
];
