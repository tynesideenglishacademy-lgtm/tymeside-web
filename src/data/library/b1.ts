import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

// B1 study units. Draft until a teacher has reviewed them.
// Choice answers are written with the correct option first and then
// rebalanced by scripts/rebalance-answers.mjs.

export const b1Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "b1-grammar-second-conditional",
    level: "B1",
    category: "Grammar",
    topic: "Second conditional and wish",
    title: "Second conditional: unreal and unlikely situations",
    summary: "Talk about imaginary situations, give advice with If I were you, and use wish for present regrets.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "When the situation is imaginary",
        intro: "We use the second conditional for situations that are not real now or are very unlikely in the future. The past tense does not refer to past time here. It shows that the situation is imaginary.",
        points: [
          {
            title: "Form: if + past simple, would + base verb",
            text: "The if clause has a past simple verb. The result clause has would (or 'd) plus the base verb. The order of the clauses can change.",
            examples: [
              "If I had more free time, I would learn the guitar.",
              "She would be happier if she lived near the sea.",
              "What would you do if you won the lottery?",
            ],
          },
          {
            title: "If I were you",
            text: "With I, he and she we can use were instead of was, especially in the expression If I were you, which we use to give advice.",
            examples: [
              "If I were you, I'd talk to your teacher.",
              "If he were taller, he could play basketball.",
              "If it was / were easier, more people would try it.",
            ],
          },
          {
            title: "First or second conditional?",
            text: "Use the first conditional when the possibility is real. Use the second when it is unreal or unlikely.",
            examples: [
              "If I pass the exam, I'll celebrate. (real possibility)",
              "If I passed without studying, I'd be amazed. (unlikely)",
            ],
          },
          {
            title: "Wish + past simple",
            text: "We use wish + past simple to talk about a present situation we would like to be different.",
            examples: [
              "I wish I had a bigger room.",
              "She wishes she lived closer to her friends.",
              "I wish I could swim better.",
            ],
          },
        ],
        watchOut: [
          "Do not use would in the if clause: If I would have more time is wrong. We say If I had more time.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "If I ___ (be) you, I would apologise.",
            answer: "were",
            why: "In the expression If I were you we normally use were. Was is sometimes used in informal English, but were is the safe choice.",
          },
          {
            prompt: "If we ___ (have) a car, we wouldn't use public transport.",
            answer: "had",
            why: "The situation is imaginary (we do not have a car), so the if clause uses the past simple.",
          },
          {
            prompt: "I wish I ___ (can) play the piano.",
            answer: "could",
            why: "Wish + past form talks about a present situation we want to change. Can becomes could.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "If I had a million euros, I ___ travel around the world.",
            ["will", "would have", "would"],
            2,
            "Second conditional: if + past simple, would + base verb.",
          ),
          gap(
            "She'd be much fitter if she ___ more exercise. (do)",
            ["did"],
            "The if clause of a second conditional uses the past simple.",
          ),
          choice(
            "'I can't sleep because of the noise.' 'If I ___ you, I'd ask the neighbours to be quiet.'",
            ["were", "will be", "would be"],
            0,
            "If I were you is the standard expression for giving advice.",
          ),
          gap(
            "I wish I ___ more time to read. (have)",
            ["had"],
            "Wish + past simple expresses a present wish: I wish I had.",
          ),
          choice(
            "Which sentence talks about a real possibility?",
            [
              "If the shop were open, I'd buy some bread.",
              "If the shop is open, I'll buy some bread.",
              "If the shop was open, I would buy some bread.",
            ],
            1,
            "The first sentence is a first conditional with a real possibility. The others suggest the shop is not open or the idea is imaginary.",
          ),
          gap(
            "What ___ you do if you saw a famous actor in the street?",
            ["would"],
            "The question is about an imaginary situation, so we use would in the result clause.",
          ),
          choice(
            "Why is this sentence wrong? 'If I would know the answer, I would tell you.'",
            [
              "We need the past perfect.",
              "We do not use would in the if clause.",
              "The result clause should use will.",
            ],
            1,
            "The if clause should be the past simple: If I knew the answer, I would tell you.",
          ),
          choice(
            "He's always tired. He wishes he ___ so much homework.",
            ["doesn't have", "wouldn't have", "didn't have"],
            2,
            "Wish + past simple (didn't have) is used to express a wish about the present.",
          ),
        ],
      },
    ],
  },
  {
    key: "b1-grammar-reported-speech",
    level: "B1",
    category: "Grammar",
    topic: "Reported speech",
    title: "Reported speech: saying what other people said",
    summary: "Change direct speech into reported speech, including tense, pronoun and time expression changes.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Reporting what someone said",
        intro: "When we report speech, we usually move the verb one step back in time and change pronouns and time words to fit the new situation.",
        points: [
          {
            title: "Tense changes (backshift)",
            text: "If the reporting verb is in the past (said, told), the tense usually moves back.",
            examples: [
              "'I live in Murcia.' → She said (that) she lived in Murcia.",
              "'I'm working.' → He said he was working.",
              "'I have finished.' → She said she had finished.",
              "'I'll help you.' → He said he would help me.",
              "'I can swim.' → She said she could swim.",
            ],
          },
          {
            title: "Said and told",
            text: "After told we must name the person. After said we do not need to.",
            examples: [
              "She told me she was tired.",
              "She said she was tired.",
            ],
          },
          {
            title: "Reported questions",
            text: "Use the same word order as a statement. Do not use do, does or did, and do not use a question mark. For yes/no questions use if or whether.",
            examples: [
              "'Where do you live?' → He asked me where I lived.",
              "'Are you ready?' → She asked if I was ready.",
              "'Did you see the film?' → He asked whether I had seen the film.",
            ],
          },
          {
            title: "Pronouns and time words",
            text: "Pronouns change to fit who is speaking now. Time and place words often change as well.",
            examples: [
              "today → that day",
              "tomorrow → the next day / the following day",
              "yesterday → the day before",
              "here → there",
            ],
          },
        ],
        watchOut: [
          "If the situation is still true, we may keep the original tense: She said she lives in Murcia can be correct when she still lives there.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "'I'm tired,' she said. → She said she ___ tired.",
            answer: "was",
            why: "The present simple am becomes the past simple was in reported speech.",
          },
          {
            prompt: "'What time does the film start?' he asked. → He asked me what time ___.",
            answer: "the film started",
            why: "Reported questions use statement word order, with no does, and the verb moves back to the past simple.",
          },
          {
            prompt: "'I'll call you tomorrow,' Tom said. → Tom said he ___ me the next day.",
            answer: "would call",
            why: "Will becomes would, and tomorrow changes to the next day.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "'We are going to the beach,' they said. → They said they ___ going to the beach.",
            ["were", "are", "had been"],
            0,
            "Am, is and are become was and were in reported speech: were going.",
          ),
          gap(
            "'I have lost my keys,' Anna said. → Anna said she ___ lost her keys.",
            ["had"],
            "The present perfect changes to the past perfect: had lost.",
          ),
          choice(
            "'Do you like pizza?' she asked me. → She asked me ___ pizza.",
            ["do I like", "if did I like", "if I liked"],
            2,
            "A yes/no question is reported with if or whether, statement word order and no do. The tense moves back to liked.",
          ),
          gap(
            "'I'm busy,' he said to me. → He told ___ that he was busy.",
            ["me"],
            "After told we need to say who was told. The original words were said to me, so the object is me.",
          ),
          choice(
            "'I can't come tomorrow,' said Luis. → Luis said he ___ come the next day.",
            ["can't", "couldn't", "won't can"],
            1,
            "Can't becomes couldn't, and tomorrow becomes the next day.",
          ),
          choice(
            "'Where did you buy that jacket?' he asked. → He asked me where I ___ that jacket.",
            ["had bought", "has bought", "was buying"],
            0,
            "The past simple usually moves back to the past perfect in reported speech: had bought.",
          ),
          gap(
            "'Is it far?' she asked. → She asked ___ it was far. (one word)",
            ["if", "whether"],
            "Use if or whether to report a yes/no question.",
          ),
          choice(
            "Which reported question is correct?",
            [
              "He asked where was I going.",
              "He asked where did I go.",
              "He asked where I was going.",
            ],
            2,
            "Reported questions use statement word order: where I was going.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "b1-vocabulary-collocations-make-do-take-have",
    level: "B1",
    category: "Vocabulary",
    topic: "Collocations with make, do, take and have",
    title: "Collocations: make, do, take and have",
    summary: "Learn which verbs go naturally with which nouns, and avoid common mistakes.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Words that go together",
        intro: "A collocation is a combination of words that sound natural together. Often there is no rule, so the best method is to learn the whole phrase.",
        points: [
          {
            title: "make",
            text: "Often used for creating or producing something, or for a decision, effort or mistake.",
            examples: [
              "make a mistake",
              "make a decision",
              "make an effort",
              "make progress",
              "make a noise",
            ],
          },
          {
            title: "do",
            text: "Often used for activities, tasks and work.",
            examples: [
              "do homework",
              "do the shopping",
              "do someone a favour",
              "do your best",
              "do exercise",
            ],
          },
          {
            title: "take",
            text: "Often used for a trip or a short action, for time, and for transport.",
            examples: [
              "take a photo",
              "take a break",
              "take an exam",
              "take part in",
              "take a taxi",
            ],
          },
          {
            title: "have",
            text: "Often used for food, drink, experiences and short activities.",
            examples: [
              "have a shower",
              "have lunch",
              "have a good time",
              "have a look",
              "have an argument",
            ],
          },
        ],
        table: {
          caption: "Common mistakes",
          head: ["Incorrect", "Correct"],
          rows: [
            ["do a mistake", "make a mistake"],
            ["make homework", "do homework"],
            ["make a photo", "take a photo"],
            ["do a decision", "make a decision"],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which verb: ___ a phone call?",
            answer: "make",
            why: "We make a phone call, make a call.",
          },
          {
            prompt: "Which verb: ___ your best?",
            answer: "do",
            why: "Do your best is a fixed expression.",
          },
          {
            prompt: "Which verb: ___ a look at this photo?",
            answer: "have (or take)",
            why: "Have a look and take a look are both natural, and both mean to look quickly.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "I have to ___ an important decision before Friday.",
            ["do", "have", "make"],
            2,
            "The collocation is make a decision. In British English you may also hear take a decision, but make is the safe, universal choice.",
          ),
          choice(
            "Could you ___ me a favour and carry this bag?",
            ["do", "make", "have"],
            0,
            "The collocation is do someone a favour.",
          ),
          gap(
            "We should ___ a break. We've been studying for two hours. (take or have)",
            ["take", "have"],
            "Take a break and have a break are both correct in British English.",
          ),
          choice(
            "He ___ a mistake in the last question.",
            ["did", "made", "took"],
            1,
            "The collocation is make a mistake.",
          ),
          gap(
            "Everyone should ___ part in the class discussion. (take)",
            ["take"],
            "Take part in means to participate in something.",
          ),
          choice(
            "I haven't ___ my homework yet.",
            ["made", "done", "taken"],
            1,
            "The collocation is do homework. Here it is in the present perfect.",
          ),
          gap(
            "We ___ a great time at the festival. (have)",
            ["had"],
            "Have a great time is a common collocation. The sentence is in the past simple.",
          ),
          choice(
            "Which phrase is NOT natural?",
            ["take a photo", "make progress", "do a photo"],
            2,
            "We take a photo. Do a photo is not natural English.",
          ),
        ],
      },
    ],
  },
  {
    key: "b1-vocabulary-phrasal-verbs-work-study",
    level: "B1",
    category: "Vocabulary",
    topic: "Phrasal verbs for work and study",
    title: "Phrasal verbs for work and study",
    summary: "Learn phrasal verbs that you need when you talk about school, jobs and plans.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Phrasal verbs in study and work contexts",
        intro: "Phrasal verbs are very common in spoken English. Learn each one in a sentence so that you also learn where the object goes.",
        points: [
          {
            title: "Study",
            text: "Common phrasal verbs about school and learning.",
            examples: [
              "hand in: We have to hand in our essays on Monday.",
              "catch up (with): I missed class, so I have to catch up.",
              "look up: Look the word up in a dictionary.",
              "carry on: Carry on reading until the end of the page.",
              "go over: Let's go over the answers together.",
            ],
          },
          {
            title: "Work",
            text: "Common phrasal verbs about jobs and business.",
            examples: [
              "set up: She set up her own company last year.",
              "take on: The shop is taking on two new assistants.",
              "fill in: Please fill in this form.",
              "get back to: I'll get back to you tomorrow.",
              "put off: They put off the meeting until next week.",
            ],
          },
          {
            title: "Separable or inseparable",
            text: "Some can be separated (hand in your essay / hand your essay in). Others cannot (get back to you, carry on, catch up with). A pronoun must go in the middle of a separable verb: hand it in.",
            examples: [
              "She handed her essay in. / She handed it in.",
              "I'll get back to you. (not I'll get you back to.)",
            ],
          },
        ],
        table: {
          caption: "Quick reference",
          head: ["Phrasal verb", "Meaning"],
          rows: [
            ["hand in", "give something to a teacher or boss"],
            ["catch up", "reach the same level as others"],
            ["put off", "delay or postpone"],
            ["set up", "start a business or organisation"],
            ["fill in", "write information on a form"],
            ["go over", "check or review carefully"],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which phrasal verb means 'to delay until later'?",
            answer: "put off",
            why: "Put off means to postpone: They put off the meeting.",
          },
          {
            prompt: "Replace the object with it: 'Please fill in the form.'",
            answer: "Please fill it in.",
            why: "Fill in is separable, so the pronoun goes in the middle.",
          },
          {
            prompt: "Which phrasal verb: 'I was ill last week, so I need to ___ up with my classmates.'",
            answer: "catch",
            why: "Catch up with means to reach the same level as other people after being behind.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "The teacher wants us to ___ our projects by Friday.",
            ["hand in", "put off", "carry on"],
            0,
            "Hand in means to give your work to a teacher.",
          ),
          gap(
            "I don't know this word. I'll look it ___ in my dictionary.",
            ["up"],
            "Look something up means to search for information in a book or online.",
          ),
          choice(
            "We were tired, but we decided to ___ working until we finished.",
            ["set up", "fill in", "carry on"],
            2,
            "Carry on means to continue.",
          ),
          choice(
            "My uncle ___ his own restaurant ten years ago.",
            ["put off", "set up", "went over"],
            1,
            "Set up means to start a business.",
          ),
          gap(
            "Before the test, we went ___ the main rules one more time.",
            ["over"],
            "Go over means to review something carefully.",
          ),
          choice(
            "Which sentence uses the phrasal verb hand in correctly?",
            [
              "Please hand it in on Monday.",
              "Please hand in it on Monday.",
              "Please in hand it on Monday.",
            ],
            0,
            "Hand in is separable, so a pronoun goes between hand and in.",
          ),
          gap(
            "They have ___ on three new employees this month. (take)",
            ["taken"],
            "Take on means to employ someone. The sentence is in the present perfect, so we need the past participle.",
          ),
          choice(
            "I can't talk now. I'll ___ you later.",
            ["put off", "hand in", "get back to"],
            2,
            "Get back to someone means to contact them again later.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b1-reading-city-farm",
    level: "B1",
    category: "Reading",
    topic: "Magazine article",
    title: "Reading: a farm in the middle of the city",
    summary: "Read an article, find specific information and decide what the writer means.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Farming in the city",
        before: [
          "Do you know any green spaces in your town where people grow food?",
          "What are the advantages of growing your own vegetables?",
        ],
        paragraphs: [
          "When Maria Torres moved from her village to a flat in Madrid, she missed her grandparents' vegetable garden more than anything else. 'I couldn't believe I could buy tomatoes every day and still miss the taste of the ones I used to pick myself,' she says.",
          "So three years ago, she and a group of neighbours turned an empty piece of ground behind their building into a small community garden. At first, the city council was not very enthusiastic. 'They thought it would be messy and noisy,' Maria explains. 'But we promised to keep it clean, and we invited the mayor to our first harvest.'",
          "Today, the garden has thirty-two small plots, and each family pays a small yearly fee to look after one. Some people grow lettuces, peppers and tomatoes. Others prefer flowers or herbs. There is also a bench where elderly neighbours sit and chat, and a corner for children, who learn where their food comes from.",
          "Not everything has been easy. During the hot summer, the group had to water the plants carefully because of water restrictions, and last year a storm destroyed most of the beans. Even so, Maria says she has no regrets. 'The best part is not the vegetables,' she says. 'It's that I now know the names of people who live two doors away.'",
        ],
        glossary: [
          { term: "community garden", meaning: "a piece of land that a group of people look after together" },
          { term: "enthusiastic", meaning: "very interested and excited" },
          { term: "harvest", meaning: "the time when you collect food that you have grown" },
          { term: "plot", meaning: "a small area of land" },
          { term: "restrictions", meaning: "rules that limit what you can do" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer, or type your answer. Go back to the text to check.",
        questions: [
          choice(
            "Why did Maria start the garden?",
            [
              "She wanted a job on a farm.",
              "The city council asked her to.",
              "She missed growing vegetables like her grandparents.",
            ],
            2,
            "The first paragraph says she missed her grandparents' vegetable garden. The council was not enthusiastic, so it did not ask her.",
          ),
          choice(
            "What was the council's first reaction?",
            [
              "It was worried about noise and mess.",
              "It gave her money to start.",
              "It refused to visit the garden.",
            ],
            0,
            "Maria says: 'They thought it would be messy and noisy.'",
          ),
          choice(
            "How did Maria change the council's opinion?",
            [
              "She paid the council a large fee.",
              "She promised to keep the garden clean and invited the mayor to the first harvest.",
              "She asked the newspapers to write about the garden.",
            ],
            1,
            "The text says: 'we promised to keep it clean, and we invited the mayor to our first harvest.'",
          ),
          gap(
            "How many small plots does the garden have today? (number)",
            ["thirty-two", "thirty two", "32"],
            "The third paragraph says the garden has thirty-two small plots.",
          ),
          choice(
            "Which of these is NOT in the garden?",
            ["A bench", "A swimming pool", "A corner for children"],
            1,
            "The text mentions a bench and a children's corner. There is no swimming pool.",
          ),
          choice(
            "What problem did the garden have last summer?",
            [
              "The soil was too dry to grow anything.",
              "Too many neighbours wanted to join.",
              "There were limits on how much water they could use.",
            ],
            2,
            "The text says they 'had to water the plants carefully because of water restrictions'.",
          ),
          choice(
            "What destroyed most of the beans?",
            ["A storm", "The heat", "The children"],
            0,
            "The text says 'a storm destroyed most of the beans'.",
          ),
          choice(
            "What does Maria think is the best part of the garden?",
            [
              "Saving money on vegetables",
              "Winning an award",
              "Getting to know her neighbours",
            ],
            2,
            "She says: 'The best part is not the vegetables. It's that I now know the names of people who live two doors away.'",
          ),
          choice(
            "In the second paragraph, 'enthusiastic' is closest in meaning to:",
            ["angry", "keen", "uncertain"],
            1,
            "Not very enthusiastic means they were not very keen on the idea.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b1-writing-review",
    level: "B1",
    category: "Writing",
    topic: "Review",
    title: "Writing: a review of a film, book or place",
    summary: "Write a balanced review with description, opinion and a clear recommendation.",
    minutes: 25,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "You have seen a film (or read a book, or visited a restaurant) that you would like to recommend. Write a review for your school's English magazine. Say what it is about, what you liked, one thing you did not like, and who you would recommend it to.",
        wordGuide: "A class guide: about 100 to 150 words. This is not an exam rule.",
        planning: [
          "Choose something you know well enough to describe.",
          "Paragraph 1: introduce it and say what it is about, without telling the whole story.",
          "Paragraph 2: say what you liked and give reasons and examples.",
          "Paragraph 3: mention one weakness, then give your recommendation.",
          "Use a title that catches the reader's attention.",
        ],
        usefulLanguage: [
          "It is set in … / It tells the story of …",
          "The best thing about it is …",
          "What I really liked was …",
          "The only problem is that …",
          "It's a bit slow / predictable at times.",
          "I would recommend it to anybody who enjoys …",
        ],
        checklist: [
          "I have a title and my review is organised in paragraphs.",
          "I described the topic without telling the whole story.",
          "I gave reasons for my opinion, not only adjectives like good or boring.",
          "I included one criticism and a recommendation.",
          "I used a variety of adjectives and linking words.",
          "I checked spelling and verb tenses.",
        ],
        model: [
          "A Film Worth Watching Twice",
          "The Intouchables is a French comedy-drama about a rich man who can't move his body and the young man he hires to look after him. It is based on a true story.",
          "What I really liked was the friendship between the two main characters. Their conversations are funny, but they are also touching, and the acting is excellent. The music is beautiful too, and the film makes you think about how we treat people who are different from us.",
          "The only problem is that the story is a little predictable in the second half. Even so, I would recommend this film to anybody who enjoys a mix of humour and emotion. I think everybody will leave the cinema with a smile.",
        ],
        modelNotes: [
          "It has a title and three clear paragraphs: introduction, positive points, one criticism and recommendation.",
          "It gives reasons: the friendship, the acting and the music, not only 'it was good'.",
          "It uses linking and opinion phrases such as what I really liked, the only problem is, even so.",
          "This is one possible answer. You can choose any film, book or place.",
        ],
        assessment: [
          "Does the review answer all parts of the task: topic, what you liked, a criticism and a recommendation?",
          "Is it organised clearly in paragraphs?",
          "Does the writer give reasons and examples for opinions?",
          "Is there a good range of vocabulary and linkers?",
          "Are tenses and spelling mostly accurate?",
        ],
      },
    ],
  },
  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "b1-speaking-discussion-agree-disagree",
    level: "B1",
    category: "Speaking",
    topic: "Discussion: opinions, agreeing and disagreeing",
    title: "Speaking: discuss, agree and disagree",
    summary: "Give an opinion with a reason, react to another person's ideas and reach a decision together.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "A collaborative discussion",
        setup: "Work with a partner. If you are alone, imagine the partner's answers and respond to them. Read the situation, discuss each option, and then choose together.",
        prompts: [
          { label: "Situation", text: "Your school wants to organise a day out for your class. Look at the four ideas: a visit to a museum, a day at a theme park, a hike in the mountains, a day at the beach." },
          { label: "Step 1", text: "Talk about each idea. What are the good and bad points? Which would be best for your class?" },
          { label: "Step 2", text: "Decide together which is best. Be ready to explain why." },
          { label: "Follow-up", text: "Do you think school trips are a good way to learn? Why or why not?" },
        ],
        usefulLanguage: [
          "What do you think about …?",
          "In my opinion, … because …",
          "I agree. / I see what you mean, but …",
          "That's a good point. However, …",
          "I'm not sure about that because …",
          "Shall we choose …? / Let's go for …",
        ],
        steps: [
          "Give your own opinion with a reason.",
          "React to your partner before you give a new idea: agree, partly agree or disagree politely.",
          "Ask your partner a question to keep the conversation going.",
          "Make a decision together at the end and summarise it in one sentence.",
        ],
        checklist: [
          "I gave opinions with reasons.",
          "I listened and reacted to my partner's ideas.",
          "I disagreed politely, for example I see what you mean, but …",
          "I asked at least two questions.",
          "We reached a decision.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "A: What do you think about going to the theme park?",
            "B: It could be fun, but it's quite expensive, and some students might not be able to pay.",
            "A: That's a good point. What about the museum? It's cheaper.",
            "B: I see what you mean, but I think a museum could be boring for some people. In my opinion, the hike in the mountains would be better because we could do something active together.",
            "A: I agree that it's healthy, but what if it rains?",
            "B: Good question. Maybe we could choose the beach, then. It's cheap and relaxing, and there are lots of activities.",
            "A: Yes, let's go for the beach.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "b1-everyday-phone-appointments",
    level: "B1",
    category: "Everyday English",
    topic: "Phone calls and appointments",
    title: "Everyday English: making an appointment by phone",
    summary: "Make, change and cancel an appointment, and leave a clear message.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Useful language for phone calls",
        intro: "Phone calls can be difficult because you cannot see the other person. Use clear, polite phrases and check important details.",
        points: [
          {
            title: "Starting and asking for someone",
            text: "Introduce yourself and say why you are calling.",
            examples: [
              "Good morning. This is Ana Ruiz speaking.",
              "I'm calling about an appointment.",
              "Could I speak to Dr Smith, please?",
            ],
          },
          {
            title: "Making and changing an appointment",
            text: "Suggest times and check them.",
            examples: [
              "I'd like to make an appointment for next week.",
              "Would Tuesday at ten o'clock suit you?",
              "I'm afraid I can't make it on Tuesday. Could we change it to Wednesday?",
              "Could you confirm that, please?",
            ],
          },
          {
            title: "Leaving a message and checking details",
            text: "Spell your name and give a phone number if necessary.",
            examples: [
              "Could you ask her to call me back?",
              "My number is … Let me repeat that.",
              "Could you spell that, please?",
              "Sorry, could you speak more slowly?",
            ],
          },
        ],
        watchOut: [
          "On the phone in British English we say This is Ana speaking, not I am Ana. We say Who's calling?, not Who are you?",
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Which phrase is the best way to introduce yourself on the phone?",
            [
              "Hello, this is Pablo Sanz speaking.",
              "Hello, I am Pablo Sanz.",
              "Hello, who are you?",
            ],
            0,
            "This is … speaking is the usual way to introduce yourself on the phone.",
          ),
          gap(
            "I'm ___, I can't make it on Tuesday. Could we change it?",
            ["afraid", "sorry"],
            "I'm afraid / I'm sorry are polite ways to introduce a refusal or bad news.",
          ),
          choice(
            "Which phrase is used to ask someone to repeat their name letter by letter?",
            [
              "Could you say it faster?",
              "Could you write it again?",
              "Could you spell that, please?",
            ],
            2,
            "Could you spell that? asks for the letters of a name or word.",
          ),
          gap(
            "Would Thursday at four o'clock ___ you? (suit)",
            ["suit"],
            "Would that suit you? is a polite way to check whether a time is convenient.",
          ),
          choice(
            "The person you want to speak to is not there. What is the best thing to say?",
            [
              "I will wait on the line for ever.",
              "Please speak to me now.",
              "Could I leave a message, please?",
            ],
            2,
            "Could I leave a message? is a polite request when the person is not available.",
          ),
          choice(
            "'I'm calling about the English course.' This means:",
            [
              "I want to ask for information about it.",
              "I am the teacher of the course.",
              "I want to cancel the phone.",
            ],
            0,
            "I'm calling about … introduces the reason for the call.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: changing a dentist appointment",
        setup: "Work with a partner or read both parts aloud. Student A is the patient. Student B is the receptionist. Then swap roles.",
        prompts: [
          { label: "Patient", text: "You have an appointment on Tuesday at 10:00 but you cannot go because of an exam. Ask to change it to Wednesday or Thursday morning. Give your name and a phone number." },
          { label: "Receptionist", text: "You only have Thursday at 11:30 or Friday at 9:00 free. Offer a time, confirm the details and repeat the phone number." },
        ],
        usefulLanguage: [
          "I'm calling to change my appointment.",
          "I'm afraid I can't make it on …",
          "Would Thursday at 11:30 suit you?",
          "Could I take the Friday appointment instead?",
          "Let me read that back to you.",
        ],
        steps: [
          "Greet and say who you are.",
          "Explain the reason for the call.",
          "Agree a new time and check the details.",
          "End the call politely.",
        ],
        checklist: [
          "I introduced myself and said why I was calling.",
          "I used polite expressions such as I'm afraid or Would … suit you?",
          "We both checked the day, the time and the phone number.",
          "We finished politely.",
        ],
        model: {
          title: "Model dialogue (transcript)",
          lines: [
            "Receptionist: Good morning, Dr Navarro's surgery. How can I help you?",
            "Patient: Good morning. This is Lucía Moreno speaking. I'm calling to change my appointment on Tuesday at ten.",
            "Receptionist: Of course. I'm afraid I only have Thursday at eleven thirty or Friday at nine. Would either suit you?",
            "Patient: Thursday at eleven thirty would be fine, thank you.",
            "Receptionist: Lovely. So that's Thursday at eleven thirty. Could I have a contact number, please?",
            "Patient: Yes, it's six, five, five, two, one, four, three, three, two.",
            "Receptionist: Thank you, Ms Moreno. See you on Thursday.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b1-revision-mixed-1",
    level: "B1",
    category: "Revision",
    topic: "Mixed revision",
    title: "Mixed revision quiz 1",
    summary: "Ten mixed questions to revise grammar and vocabulary from the B1 units.",
    minutes: 10,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "This quiz is for your own practice. Think about the rule before you answer.",
        questions: [
          choice(
            "If I won a lot of money, I ___ buy a house by the sea.",
            ["will", "would", "am going to"],
            1,
            "Second conditional: the situation is unlikely, so the result clause uses would.",
          ),
          gap(
            "'The exam was difficult,' she said to me. → She told ___ that the exam had been difficult.",
            ["me"],
            "After told we need to say who was told: told me. The past simple was moves back to had been.",
          ),
          choice(
            "He didn't ___ much progress in Spanish last year.",
            ["do", "make", "have"],
            1,
            "The collocation is make progress.",
          ),
          choice(
            "'Are you coming to the party?' he asked me. → He asked me ___ to the party.",
            ["was I coming", "if was I coming", "if I was coming"],
            2,
            "Reported yes/no questions use if and statement word order, with the tense moved back.",
          ),
          gap(
            "The students have to ___ in their essays on Monday morning. (hand)",
            ["hand"],
            "Hand in means to give your work to a teacher.",
          ),
          choice(
            "I wish I ___ speak French fluently.",
            ["could", "can", "would"],
            0,
            "Wish + past form (could) expresses a wish about the present.",
          ),
          gap(
            "We ___ part in a competition last month. (take)",
            ["took"],
            "Take part in is the collocation. The sentence is in the past simple.",
          ),
          choice(
            "'I'll call you tomorrow,' she said. → She said she ___ me the next day.",
            ["will call", "called", "would call"],
            2,
            "Will changes to would in reported speech, and tomorrow becomes the next day.",
          ),
          choice(
            "Which expression is a polite way to refuse an invitation?",
            [
              "No, I won't come.",
              "I'm afraid I can't make it, but thank you for asking.",
              "That's a silly idea.",
            ],
            1,
            "I'm afraid I can't make it is polite and gives thanks.",
          ),
          gap(
            "I'll ___ back to you as soon as I have more information. (get)",
            ["get"],
            "Get back to someone means to contact them again later.",
          ),
        ],
      },
    ],
  },
];
