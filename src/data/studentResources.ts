export type StudentLevel = 'B1' | 'B2' | 'C1';

export type StudentResource = {
  key: string;
  level: StudentLevel;
  type: 'Study pack';
  title: string;
  summary: string;
  contents: string[];
  storagePath: string;
  downloadName: string;
  pages: number;
};

export type WorksheetQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type StudentWorksheet = {
  key: string;
  level: StudentLevel;
  title: string;
  focus: string;
  duration: string;
  questions: WorksheetQuestion[];
};

export const studentResources: StudentResource[] = [
  {
    key: 'b1-exam-toolkit',
    level: 'B1',
    type: 'Study pack',
    title: 'B1 Preliminary Exam Toolkit',
    summary: 'A practical reference pack for clearer writing, more confident speaking and reliable exam-day decisions.',
    contents: [
      'Email and article structures with a model answer',
      'Speaking frameworks for photos and collaborative tasks',
      'Core collocations, phrasal verbs and common corrections',
      'Mini practice set with answer key',
    ],
    storagePath: 'exam-toolkit/b1-preliminary-exam-toolkit.pdf',
    downloadName: 'Tyneside-B1-Preliminary-Exam-Toolkit.pdf',
    pages: 7,
  },
  {
    key: 'b2-exam-toolkit',
    level: 'B2',
    type: 'Study pack',
    title: 'B2 First Exam Toolkit',
    summary: 'A focused pack for building stronger arguments, comparing ideas naturally and avoiding high-frequency B2 errors.',
    contents: [
      'Essay, article, review and report blueprints',
      'Speaking language for comparison, speculation and discussion',
      'High-value collocations, phrasal verbs and transformations',
      'Mini practice set with answer key',
    ],
    storagePath: 'exam-toolkit/b2-first-exam-toolkit.pdf',
    downloadName: 'Tyneside-B2-First-Exam-Toolkit.pdf',
    pages: 7,
  },
  {
    key: 'c1-exam-toolkit',
    level: 'C1',
    type: 'Study pack',
    title: 'C1 Advanced Exam Toolkit',
    summary: 'An advanced reference for precise argument, flexible speaking and the lexical control expected at C1.',
    contents: [
      'Essay, proposal, report and review planning systems',
      'Hedging, evaluation and collaborative speaking strategies',
      'Advanced collocations, word formation and register control',
      'Mini practice set with answer key',
    ],
    storagePath: 'exam-toolkit/c1-advanced-exam-toolkit.pdf',
    downloadName: 'Tyneside-C1-Advanced-Exam-Toolkit.pdf',
    pages: 7,
  },
];

export const studentWorksheets: StudentWorksheet[] = [
  {
    key: 'b1-accuracy-sprint',
    level: 'B1',
    title: 'B1 Accuracy Sprint',
    focus: 'Collocations, linking and everyday grammar',
    duration: '5-7 min',
    questions: [
      {
        prompt: 'Choose the natural collocation: I want to ___ progress before the exam.',
        options: ['do', 'make', 'take'],
        answer: 1,
        explanation: 'We say make progress. Learn common verb + noun combinations as complete units.',
      },
      {
        prompt: 'Which sentence is correct?',
        options: ['I have lived here since three years.', 'I live here since three years.', 'I have lived here for three years.'],
        answer: 2,
        explanation: 'Use the present perfect with for + a period of time.',
      },
      {
        prompt: 'Complete the contrast: The journey was long, ___ it was worth it.',
        options: ['because', 'but', 'so'],
        answer: 1,
        explanation: 'But introduces the contrast between a negative fact and a positive conclusion.',
      },
      {
        prompt: 'Which opening suits an informal email to a friend?',
        options: ['Dear Sir or Madam,', 'Hi Alex,', 'To whom it may concern,'],
        answer: 1,
        explanation: 'Hi + first name is natural and appropriately informal.',
      },
      {
        prompt: 'Choose the correct phrasal verb: We had to ___ the match because of the rain.',
        options: ['put off', 'take up', 'look after'],
        answer: 0,
        explanation: 'Put off means postpone or move an event to a later time.',
      },
    ],
  },
  {
    key: 'b2-exam-language-lab',
    level: 'B2',
    title: 'B2 Exam Language Lab',
    focus: 'Transformations, register and precise vocabulary',
    duration: '7-9 min',
    questions: [
      {
        prompt: 'Choose the best essay link: ___, investing in public transport would reduce congestion.',
        options: ['All in all', 'By the way', 'Anyway'],
        answer: 0,
        explanation: 'All in all introduces a balanced final conclusion in a formal or neutral essay.',
      },
      {
        prompt: 'Complete the collocation: The campaign helped ___ awareness of the issue.',
        options: ['rise', 'raise', 'grow up'],
        answer: 1,
        explanation: 'Raise awareness is the fixed collocation. Rise is intransitive: prices rise.',
      },
      {
        prompt: 'Which sentence expresses speculation most naturally?',
        options: ['They must be enjoy the trip.', 'They might be travelling for work.', 'Maybe they travel yesterday.'],
        answer: 1,
        explanation: 'Might be + -ing is useful when speculating about a scene in the speaking exam.',
      },
      {
        prompt: 'Transform: “I last saw Marta in May.” Choose the equivalent sentence.',
        options: ['I have not seen Marta since May.', 'I did not see Marta for May.', 'I have seen Marta from May.'],
        answer: 0,
        explanation: 'Present perfect + since identifies the starting point of a continuing period.',
      },
      {
        prompt: 'Which phrase is most suitable for a formal report?',
        options: ['The place was awesome.', 'The facilities were broadly satisfactory.', 'I totally loved the facilities.'],
        answer: 1,
        explanation: 'A report normally uses neutral or formal evaluation rather than conversational intensifiers.',
      },
    ],
  },
  {
    key: 'c1-control-clinic',
    level: 'C1',
    title: 'C1 Language Control Clinic',
    focus: 'Hedging, inversion, collocation and register',
    duration: '8-10 min',
    questions: [
      {
        prompt: 'Choose the most precise hedge: The policy ___ to have improved access, although the data is limited.',
        options: ['proves', 'appears', 'obviously'],
        answer: 1,
        explanation: 'Appears to presents a supported but appropriately cautious conclusion.',
      },
      {
        prompt: 'Complete the inversion: Rarely ___ such a convincing performance.',
        options: ['I have seen', 'have I seen', 'I saw'],
        answer: 1,
        explanation: 'A negative or limiting adverb at the start triggers auxiliary-subject inversion.',
      },
      {
        prompt: 'Choose the natural collocation: The proposal has ___ criticism from local residents.',
        options: ['drawn', 'pulled', 'taken'],
        answer: 0,
        explanation: 'Draw criticism is a strong, natural collocation for formal writing.',
      },
      {
        prompt: 'Which phrase manages disagreement diplomatically in a collaborative task?',
        options: ['That is completely wrong.', 'I take your point, although I wonder whether…', 'No, choose the other one.'],
        answer: 1,
        explanation: 'Acknowledge the other view before introducing a reservation or alternative.',
      },
      {
        prompt: 'Choose the best word formation: The scheme is financially ___. (SUSTAIN)',
        options: ['sustaining', 'sustainable', 'sustainedly'],
        answer: 1,
        explanation: 'Sustainable is the adjective needed after the linking verb is and the adverb financially.',
      },
    ],
  },
];
