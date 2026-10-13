import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

// B2 study units. Draft until a teacher has reviewed them.
// Choice answers are written with the correct option first and then
// rebalanced by scripts/rebalance-answers.mjs.

export const b2Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "b2-grammar-passive-causative",
    level: "B2",
    category: "Grammar",
    topic: "Passive voice and causative have",
    title: "The passive and have something done",
    summary: "Choose between active and passive, form the passive in different tenses and talk about services you pay for.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Focus on the action, not the doer",
        intro: "We use the passive when the action or the result is more important than who did it, when we do not know who did it, or when it is obvious.",
        points: [
          {
            title: "Form: be + past participle",
            text: "The verb be shows the tense. The main verb is always a past participle.",
            examples: [
              "The room is cleaned every day. (present simple)",
              "The bridge was built in 1890. (past simple)",
              "The report has been finished. (present perfect)",
              "The new library is being built. (present continuous)",
              "The film will be shown on Friday. (future)",
              "The window must be repaired. (modal)",
            ],
          },
          {
            title: "Using by",
            text: "Add by + agent only when the information is useful or surprising.",
            examples: [
              "The Mona Lisa was painted by Leonardo da Vinci.",
              "My bike was stolen. (We do not know who by.)",
            ],
          },
          {
            title: "Verbs with two objects",
            text: "Verbs like give, send and show can have two passive forms. The person is often the subject.",
            examples: [
              "She was given a prize. (more natural than A prize was given to her.)",
              "We were sent an invitation.",
            ],
          },
          {
            title: "Have something done",
            text: "We use have + object + past participle when someone else does a service for us, or when something happens to us.",
            examples: [
              "I'm having my hair cut tomorrow.",
              "She had her car repaired last week.",
              "We need to have the heating checked.",
              "He had his wallet stolen on holiday.",
            ],
          },
        ],
        watchOut: [
          "Do not use the passive with verbs that cannot take an object, such as happen, arrive or die. We say The accident happened, not The accident was happened.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Make this passive: 'Someone has stolen my phone.'",
            answer: "My phone has been stolen.",
            why: "Present perfect passive: have/has + been + past participle. We do not know who did it, so there is no by.",
          },
          {
            prompt: "Complete: 'The road ___ (repair) at the moment.'",
            answer: "is being repaired",
            why: "Present continuous passive: is/are being + past participle.",
          },
          {
            prompt: "Say that a mechanic repaired your car (you paid him).",
            answer: "I had my car repaired.",
            why: "Have + object + past participle expresses a service that someone does for you.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "The museum ___ every year by thousands of tourists.",
            ["visits", "is visiting", "is visited"],
            2,
            "The museum receives the action, so we need the passive. The present simple passive is is visited.",
          ),
          gap(
            "This house ___ in 1920. (build)",
            ["was built"],
            "The action is finished and in the past, and the house cannot build itself, so we need the past simple passive.",
          ),
          choice(
            "Sorry about the noise. The road ___ at the moment.",
            ["is being repaired", "is repaired", "has repaired"],
            0,
            "The work is in progress now, so we need the present continuous passive.",
          ),
          gap(
            "We ___ our windows cleaned every month. (have)",
            ["have"],
            "Have something done describes a regular service that someone else does for us.",
          ),
          choice(
            "She ___ a free ticket by the manager.",
            ["gave", "was given", "was giving"],
            1,
            "She received the ticket, so the verb is passive: was given.",
          ),
          choice(
            "Which sentence about a stolen laptop is correct?",
            [
              "My laptop has stolen.",
              "My laptop has been stolen.",
              "My laptop is stolen yesterday.",
            ],
            1,
            "The laptop receives the action, so the present perfect passive is has been stolen.",
          ),
          gap(
            "The documents must ___ by Friday. (sign)",
            ["be signed"],
            "A modal passive uses modal + be + past participle.",
          ),
          choice(
            "I'm going to ___ at the hairdresser's tomorrow.",
            ["cut my hair myself", "get cut my hair", "have my hair cut"],
            2,
            "Have + object + past participle describes a service that someone else does. Cut stays in the past participle form.",
          ),
        ],
      },
    ],
  },
  {
    key: "b2-grammar-modals-deduction",
    level: "B2",
    category: "Grammar",
    topic: "Modals of deduction and past modals",
    title: "Modals of deduction and past modals",
    summary: "Make logical guesses about the present and the past and talk about past regrets and criticism.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "How sure are you?",
        intro: "We use modal verbs to say how sure we are about something. The more sure we are, the stronger the modal.",
        points: [
          {
            title: "Present deduction",
            text: "Use must (very sure it's true), might / may / could (possible) and can't (very sure it's not true) + base verb.",
            examples: [
              "She's wearing a uniform, so she must be a nurse.",
              "He might be at the gym. I'm not sure.",
              "That can't be Tom. He's in Italy.",
            ],
          },
          {
            title: "Past deduction",
            text: "Use modal + have + past participle for guesses about the past.",
            examples: [
              "The lights were off, so they must have gone out.",
              "She might have forgotten the appointment.",
              "He can't have heard us. He wasn't there.",
            ],
          },
          {
            title: "Past regrets and criticism",
            text: "Should have + past participle: it would have been better to do something. Shouldn't have: it was a mistake.",
            examples: [
              "I should have studied more. (I didn't, and it was a mistake.)",
              "You shouldn't have shouted at him.",
              "We could have taken the train. (It was possible, but we didn't.)",
            ],
          },
          {
            title: "Needn't have and didn't need to",
            text: "Needn't have + past participle means you did it, but it was not necessary. Didn't need to means it was not necessary, and we do not know if you did it.",
            examples: [
              "I needn't have brought an umbrella. (I brought it, but it didn't rain.)",
              "I didn't need to bring an umbrella. (It wasn't necessary.)",
            ],
          },
        ],
        watchOut: [
          "Do not use mustn't for deduction. The opposite of must be is can't be: He can't be the manager. He's too young.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "The shop is closed and the lights are off. Maybe it's a holiday. → It ___ be a holiday.",
            answer: "might (or may / could)",
            why: "Maybe means it is possible, but we are not sure, so might, may or could.",
          },
          {
            prompt: "I'm certain he didn't see the sign. → He ___ have seen the sign.",
            answer: "can't",
            why: "Can't have + past participle expresses a past deduction with a strong negative certainty.",
          },
          {
            prompt: "I didn't call her and now she's angry. → I ___ have called her.",
            answer: "should",
            why: "Should have + past participle expresses regret about something we did not do.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "He's been working for twelve hours. He ___ be exhausted.",
            ["must", "can't", "shouldn't"],
            0,
            "The evidence makes us very sure, so we use must.",
          ),
          gap(
            "That ___ be Maria. She's on holiday in Peru. (very sure it's not true)",
            ["can't", "cannot", "can not"],
            "To say that something is impossible, we use can't, not mustn't.",
          ),
          choice(
            "The window is broken. Someone ___ it last night.",
            ["must break", "can't have broken", "must have broken"],
            2,
            "We are sure about a past event, so we use must have + past participle.",
          ),
          gap(
            "I ___ have gone to bed so late. Now I'm tired. (regret)",
            ["shouldn't"],
            "Shouldn't have + past participle expresses regret about a past action.",
          ),
          choice(
            "I took an umbrella, but it didn't rain. I ___ it.",
            ["mustn't have taken", "needn't have taken", "couldn't have taken"],
            1,
            "Needn't have + past participle means we did something that was not necessary.",
          ),
          choice(
            "I can't find my keys. I ___ them at the café.",
            ["might have left", "should leave", "must leave"],
            0,
            "The speaker is not sure, so might have + past participle is correct.",
          ),
          choice(
            "You ___ me about the party! I would have loved to come.",
            ["must have told", "might tell", "should have told"],
            2,
            "The speaker is criticising a past failure: should have + past participle.",
          ),
          choice(
            "'Why isn't she answering?' 'She ___ asleep.'",
            ["could have been", "can't be", "could be"],
            2,
            "We are guessing about the present moment, so we use could be, a present deduction.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "b2-vocabulary-word-formation",
    level: "B2",
    category: "Vocabulary",
    topic: "Word formation",
    title: "Word formation: Use of English Part 3 skills",
    summary: "Decide which word class you need, then choose the correct prefix and suffix.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "A method for word formation",
        intro: "Word formation tasks ask you to change a word so that it fits the gap. Follow the same steps every time.",
        points: [
          {
            title: "Step 1: Decide what kind of word you need",
            text: "Look at the words around the gap. After the or an adjective, you probably need a noun. After be, you need an adjective (or a past participle). Before a noun, you need an adjective. Before or after a verb, you may need an adverb.",
            examples: [
              "The ___ of the new bridge was celebrated. (a noun)",
              "She spoke ___ about her plans. (an adverb)",
              "It was a very ___ experience. (an adjective)",
            ],
          },
          {
            title: "Step 2: Check meaning",
            text: "Is the missing word positive or negative? Is the meaning plural? A negative meaning usually needs un-, in-, im-, dis- or -less.",
            examples: [
              "possible → impossible",
              "agree → disagreement",
              "hope → hopeless",
              "legal → illegal",
            ],
          },
          {
            title: "Common suffixes",
            text: "Learn the typical endings for each word class.",
            examples: [
              "Nouns: -ment, -ness, -ity, -ence/-ance, -ation, -ship",
              "Adjectives: -able/-ible, -ous, -ive, -ful, -less, -al, -ic",
              "Adverbs: -ly",
              "Verbs: -ise, -en, -ify",
            ],
          },
          {
            title: "Step 3: Check spelling",
            text: "Spelling often changes. Drop a final e (create → creative), change y to i (happy → happiness) and double a consonant (begin → beginner).",
            examples: [
              "advertise → advertisement",
              "silly → silliness",
              "run → runner",
            ],
          },
        ],
        table: {
          caption: "Word families",
          head: ["Verb", "Noun", "Adjective"],
          rows: [
            ["decide", "decision", "decisive"],
            ["succeed", "success", "successful"],
            ["employ", "employment / employee", "employed"],
            ["compete", "competition / competitor", "competitive"],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "He's not very ___ at the moment. (RELY) Which word class is needed?",
            answer: "an adjective: unreliable",
            why: "After be and very we need an adjective, and the meaning is negative (not reliable), so un-reliable.",
          },
          {
            prompt: "The company is looking for an ___ manager. (EXPERIENCE)",
            answer: "experienced",
            why: "Before a noun we need an adjective. Experienced describes a person with a lot of experience.",
          },
          {
            prompt: "She ___ refused to apologise. (STUBBORN)",
            answer: "stubbornly",
            why: "The word describes the verb refused, so we need an adverb ending in -ly.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          gap(
            "The ___ of the experiment surprised all the scientists. (DISCOVER)",
            ["discovery"],
            "After the we need a noun. The noun from discover is discovery.",
          ),
          gap(
            "It is ___ to park here after six o'clock. (LEGAL)",
            ["illegal"],
            "We need a negative adjective. The negative of legal is illegal (il- before l).",
          ),
          gap(
            "My brother is extremely ___ about video games. (ENTHUSIASM)",
            ["enthusiastic"],
            "After the adverb extremely and the verb be we need an adjective: enthusiastic.",
          ),
          choice(
            "He was ___ by the news of the accident.",
            ["shocked", "shocking", "shockingly"],
            0,
            "The news made him feel shocked. We use the -ed adjective for how a person feels.",
          ),
          gap(
            "Their ___ with the new system was clear from their faces. (SATISFY)",
            ["dissatisfaction"],
            "We need a negative noun after Their: dissatisfaction.",
          ),
          choice(
            "The film was ___ boring. I almost fell asleep.",
            ["incredible", "incredibly", "incredibility"],
            1,
            "The word modifies the adjective boring, so we need an adverb: incredibly.",
          ),
          gap(
            "Teamwork is an important ___ for success. (REQUIRE)",
            ["requirement"],
            "After an important we need a noun. The noun from require is requirement.",
          ),
          choice(
            "The doctor gave us some ___ advice about healthy eating.",
            ["usefully", "useful", "usefulness"],
            1,
            "Before the noun advice we need an adjective: useful.",
          ),
        ],
      },
    ],
  },
  {
    key: "b2-vocabulary-phrasal-verbs-feelings-relationships",
    level: "B2",
    category: "Vocabulary",
    topic: "Phrasal verbs: feelings and relationships",
    title: "Phrasal verbs for feelings and relationships",
    summary: "Learn phrasal verbs for describing people, emotions and social situations.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Phrasal verbs in social life",
        intro: "Many phrasal verbs have more than one meaning. Learn them with an example sentence so you remember the meaning you need.",
        points: [
          {
            title: "Getting along with people",
            text: "These verbs describe relationships.",
            examples: [
              "fall out (with): We fell out over money, and we haven't spoken since.",
              "make up (with): They argued, but made up the next day.",
              "get along / get on (with): I get along well with my cousins.",
              "look up to: She looks up to her older brother.",
              "let down: Don't let me down. I'm counting on you.",
            ],
          },
          {
            title: "Dealing with feelings",
            text: "These verbs describe how we cope with emotions.",
            examples: [
              "cheer up: Cheer up! Things will get better.",
              "calm down: Calm down. There's no need to shout.",
              "get over: It took him a long time to get over the disappointment.",
              "bottle up: Don't bottle up your feelings. Talk to someone.",
              "cope with: She copes well with stress.",
            ],
          },
          {
            title: "Multiple meanings",
            text: "The same phrasal verb can mean different things.",
            examples: [
              "take after: He takes after his father. (is similar to)",
              "take off: The plane took off. / Take off your jacket.",
              "put up with: I can't put up with this noise. (tolerate)",
            ],
          },
        ],
        table: {
          caption: "Quick reference",
          head: ["Phrasal verb", "Meaning", "Type"],
          rows: [
            ["fall out with", "have an argument and stop being friends", "inseparable"],
            ["look up to", "admire and respect", "inseparable"],
            ["let (someone) down", "disappoint", "separable"],
            ["cheer (someone) up", "make happier", "separable"],
            ["get over", "recover from", "inseparable"],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which phrasal verb means 'to disappoint someone who trusts you'?",
            answer: "let down",
            why: "Let someone down means to fail to do what someone hoped or expected.",
          },
          {
            prompt: "Which phrasal verb means 'to be similar to a parent or relative'?",
            answer: "take after",
            why: "Take after means to look or behave like an older family member.",
          },
          {
            prompt: "Complete: 'She finally got ___ the flu after two weeks.'",
            answer: "over",
            why: "Get over means to recover from an illness or a difficult experience.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "I can't ___ the noise from the building site any longer.",
            ["get over", "look up to", "put up with"],
            2,
            "Put up with means to tolerate something annoying.",
          ),
          gap(
            "They had a terrible argument, but they ___ up the next morning.",
            ["made"],
            "Made up means became friends again after an argument.",
          ),
          choice(
            "She is very close to her grandmother and really ___ her.",
            ["looks up to", "falls out with", "lets down"],
            0,
            "Looks up to means admires and respects.",
          ),
          gap(
            "My friends organised a surprise party to ___ me up. I was feeling miserable. (c _ _ _ _)",
            ["cheer"],
            "Cheer someone up means to make them feel happier. The verb is separable, so me goes in the middle.",
          ),
          gap(
            "It took her months to get ___ the shock of losing her job.",
            ["over"],
            "Get over means to recover from a bad experience.",
          ),
          choice(
            "He's very like his mother. He really ___ her.",
            ["gets over", "puts up with", "takes after"],
            2,
            "Take after means to resemble an older relative in looks or character.",
          ),
          choice(
            "You promised to help, so please don't ___ me down.",
            ["put", "let", "bring"],
            1,
            "Let someone down means to disappoint them.",
          ),
          gap(
            "You shouldn't ___ up your worries. Talk to someone about them. (bottle)",
            ["bottle"],
            "Bottle up means to keep strong feelings inside without telling anyone.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Reading ─────────────────────────
  {
    key: "b2-reading-teenage-sleep",
    level: "B2",
    category: "Reading",
    topic: "Article: sleep and school start times",
    title: "Reading: should school start later?",
    summary: "Follow the argument in an article and answer detail, opinion and reference questions.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "Does early school hurt teenagers?",
        before: [
          "What time do you wake up on school days? Do you feel tired?",
          "Would you like school to start later? What would the advantages and disadvantages be?",
        ],
        paragraphs: [
          "Most teenagers know the feeling of being dragged out of bed at an hour when their bodies are still telling them to sleep. According to sleep researchers, this is not simply laziness. During adolescence, the body's internal clock shifts, so teenagers naturally feel sleepy later at night and need to wake up later in the morning.",
          "Several schools in the United Kingdom and the United States have therefore experimented with later start times. In one study of eight schools, pupils who began lessons at 10 a.m. instead of 8.30 a.m. reported better concentration, and the number of days they were absent through illness fell by almost a third. Teachers also noticed that fewer students fell asleep in class.",
          "Nevertheless, the idea has its critics. Some parents argue that a later start would make it harder to organise their own working day. Others worry that sports and after-school activities would have to finish too late in the evening. A few teachers also fear that a change in the timetable would simply encourage teenagers to stay up even later.",
          "Dr Helena Ortiz, who has studied the subject for over ten years, accepts that a change would not be easy. 'There is no perfect solution,' she says. 'But if we know that young people learn better when they have slept properly, we should at least be willing to discuss it.' She believes the greatest obstacle is not practical but cultural: 'Many adults simply feel that getting up early is a virtue.'",
        ],
        glossary: [
          { term: "dragged", meaning: "pulled with force or effort" },
          { term: "adolescence", meaning: "the period between childhood and adulthood" },
          { term: "concentration", meaning: "the ability to focus on something" },
          { term: "absent", meaning: "not present, for example at school" },
          { term: "obstacle", meaning: "something that makes it difficult to achieve something" },
          { term: "virtue", meaning: "a good quality or habit" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer, or type your answer. Look back at the text to check.",
        questions: [
          choice(
            "According to the first paragraph, why do teenagers want to sleep later?",
            [
              "Their body clock changes during adolescence.",
              "They go to bed too early.",
              "They are lazier than adults.",
            ],
            0,
            "The text says it is not laziness but a shift in the body's internal clock during adolescence.",
          ),
          choice(
            "What happened in the study of eight schools?",
            [
              "Pupils slept more but did worse in tests.",
              "Teachers complained that lessons were too short.",
              "Pupils who started at 10 a.m. were absent through illness less often.",
            ],
            2,
            "Absences through illness fell by almost a third. The text does not mention test results or complaints.",
          ),
          gap(
            "By how much did illness absences fall? Write the fraction in words.",
            ["a third", "one third", "almost a third"],
            "The text says the number of days absent through illness fell by almost a third.",
          ),
          choice(
            "What is one concern of the parents mentioned in the third paragraph?",
            [
              "Teenagers would eat less breakfast.",
              "Schools would be less safe.",
              "A later start would make their own working day harder to organise.",
            ],
            2,
            "The text says: 'Some parents argue that a later start would make it harder to organise their own working day.'",
          ),
          choice(
            "Why do some teachers worry about a later timetable?",
            [
              "Teenagers might go to bed even later.",
              "Teachers would have to work at weekends.",
              "Students would lose their friends.",
            ],
            0,
            "They fear it would 'encourage teenagers to stay up even later'.",
          ),
          choice(
            "What does Dr Ortiz say about changing school times?",
            [
              "It is impossible and not worth discussing.",
              "It would not be easy, but it deserves discussion.",
              "It has already been proved to work everywhere.",
            ],
            1,
            "She says there is no perfect solution but we should at least be willing to discuss it.",
          ),
          choice(
            "What does Dr Ortiz think is the biggest obstacle to change?",
            [
              "The cost of new school buildings",
              "The belief that getting up early is a virtue",
              "The opinion of teenagers",
            ],
            1,
            "She says the obstacle is cultural: many adults feel that getting up early is a virtue.",
          ),
          choice(
            "In paragraph 3, 'Nevertheless' introduces:",
            [
              "an example of the previous point",
              "a final conclusion",
              "an opposing point of view",
            ],
            2,
            "Nevertheless introduces a contrast with what was said before: the idea has critics.",
          ),
          choice(
            "The writer's overall attitude to later school starts is:",
            [
              "balanced, presenting evidence and objections",
              "strongly against the idea",
              "completely in favour without any reservations",
            ],
            0,
            "The article gives research evidence, lists concerns from critics and ends with an expert who believes the idea should be discussed.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Writing ─────────────────────────
  {
    key: "b2-writing-opinion-essay",
    level: "B2",
    category: "Writing",
    topic: "Opinion essay",
    title: "Writing: an opinion essay",
    summary: "Plan and write a clear essay that develops an argument and considers other views.",
    minutes: 30,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "In your English class you have been talking about technology in education. Your teacher has asked you to write an essay giving your opinion on this statement: 'Schools should allow students to use smartphones in lessons.' Write your essay.",
        wordGuide: "A class guide: about 140 to 190 words. This is not an exam rule.",
        planning: [
          "Decide your opinion before you write: for, against or partly for.",
          "Paragraph 1: introduce the topic and say what the essay will discuss.",
          "Paragraph 2: give your main argument with a reason and an example.",
          "Paragraph 3: give a second argument or consider the opposite view and answer it.",
          "Paragraph 4: conclude with your opinion in new words.",
          "Use a formal, neutral style: no slang, few contractions.",
        ],
        usefulLanguage: [
          "It is often argued that …",
          "On the one hand, … On the other hand, …",
          "Firstly, … Furthermore, … In addition, …",
          "For instance, … / A good example of this is …",
          "However, … / Nevertheless, … / Despite this, …",
          "To sum up, … / In conclusion, … I firmly believe that …",
        ],
        checklist: [
          "I introduced the topic and gave my opinion clearly.",
          "Each paragraph has one main idea, with a reason or an example.",
          "I considered a different point of view.",
          "I used a range of linking expressions, not only and and but.",
          "My style is mostly formal and my conclusion repeats my view in new words.",
          "I checked grammar, spelling and punctuation.",
        ],
        model: [
          "Nowadays, almost every teenager owns a smartphone, so many people wonder whether students should be allowed to use them in lessons. In my opinion, phones can be valuable learning tools, provided that clear rules are in place.",
          "Firstly, smartphones give students immediate access to information. For instance, if a pupil does not understand a word, he or she can look it up in seconds. Furthermore, there are many educational apps that make learning more interactive and enjoyable.",
          "However, it cannot be denied that phones can be a distraction. Some students might send messages or play games instead of paying attention. Nevertheless, this problem can be solved if teachers decide exactly when phones may be used, for example during research tasks only.",
          "To sum up, I believe that schools should allow smartphones in lessons, but only under the supervision of the teacher. In this way, students can benefit from technology without losing concentration.",
        ],
        modelNotes: [
          "It has four clear paragraphs: introduction, first argument, opposing view, conclusion.",
          "It gives a reason and an example for the main argument: looking up a word, educational apps.",
          "It considers the other side (distraction) and answers it (rules set by teachers).",
          "It uses a range of linkers: firstly, furthermore, however, nevertheless, to sum up.",
          "The register is formal: provided that, it cannot be denied that, no contractions.",
          "This is one possible answer. You could argue the opposite and still write an excellent essay.",
        ],
        assessment: [
          "Content: does the essay answer the question and develop the ideas with reasons and examples?",
          "Communicative achievement: is the register suitable and is the opinion clear?",
          "Organisation: are the paragraphs logical, with effective linking?",
          "Language: is there a good range of vocabulary and structures, used accurately?",
          "Accuracy: are spelling, punctuation and grammar generally correct?",
        ],
      },
    ],
  },
  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "b2-speaking-compare-photos",
    level: "B2",
    category: "Speaking",
    topic: "Long turn: comparing photos",
    title: "Speaking: compare two photos",
    summary: "Compare, contrast and speculate for about a minute, then answer a follow-up question.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "The long turn",
        setup: "Choose two photos of people doing different activities, for example two different ways of travelling, studying or relaxing. You have one minute to speak. Do not describe every detail. Compare and speculate.",
        prompts: [
          { label: "Task", text: "Compare the two photos and say why people might choose to do these activities, and how they might feel." },
          { label: "Follow-up (to a partner)", text: "Which of these activities would you prefer to do? Why?" },
          { label: "Extension", text: "Do you think people spend enough time outdoors? Why or why not?" },
        ],
        usefulLanguage: [
          "Both photos show … but in the first one … whereas in the second …",
          "One difference is that … Another similarity is that …",
          "She might be … / He looks as if he is …",
          "I'd say they are probably … because …",
          "This could be because … / It must be … since …",
          "Personally, I'd prefer … because …",
        ],
        steps: [
          "Spend ten seconds looking and choosing two or three points to compare.",
          "Start with a general comparison, then give details.",
          "Speculate with might, could, must or looks as if.",
          "Answer the follow-up question briefly and give a reason.",
          "Record yourself if you can and listen for hesitation and repeated words.",
        ],
        checklist: [
          "I compared the photos instead of only describing them.",
          "I used linking words for contrast and similarity.",
          "I speculated about feelings or reasons.",
          "I spoke for about a minute without long pauses.",
          "I answered the follow-up question with a reason.",
        ],
        model: {
          title: "Model answer (transcript)",
          lines: [
            "Both photos show people travelling, but in the first one a family is driving through the countryside, whereas in the second a group of friends is waiting on a station platform.",
            "One difference is that the family seems to have more freedom because they can stop wherever they like. The friends, on the other hand, probably chose the train because it's cheaper and they can relax or chat during the journey.",
            "The people in the car look as if they are enjoying the scenery, and the friends might be looking forward to a weekend away. I'd say both groups are probably quite excited.",
            "Follow-up: Personally, I'd prefer the train, because I can read or listen to music instead of concentrating on the road.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "b2-everyday-formal-complaint",
    level: "B2",
    category: "Everyday English",
    topic: "Making a complaint",
    title: "Everyday English: making a formal complaint",
    summary: "Explain a problem clearly, state what you want and respond diplomatically.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "How to complain effectively",
        intro: "A good complaint is polite but firm. It explains the problem, says what you expect and avoids personal attacks.",
        points: [
          {
            title: "Describe the problem",
            text: "State the facts calmly and in order.",
            examples: [
              "I bought this blender last week, but it stopped working yesterday.",
              "I'm writing to complain about the service at your restaurant on Saturday.",
              "Unfortunately, the item that arrived was not what I ordered.",
            ],
          },
          {
            title: "Say what you want",
            text: "Be clear about the solution you expect.",
            examples: [
              "I would like a full refund.",
              "I would appreciate it if you could replace it.",
              "I would be grateful if you could look into this matter.",
            ],
          },
          {
            title: "Respond to excuses diplomatically",
            text: "Show you understand but repeat your request.",
            examples: [
              "I understand that you are very busy, but I have been waiting for an hour.",
              "I appreciate your help, but I'd still like to speak to the manager.",
            ],
          },
        ],
        watchOut: [
          "Avoid sounding aggressive. 'This is a disgrace!' is not a useful complaint. 'I'm afraid I'm not satisfied with the service' is firmer and more effective.",
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Which sentence is the most suitable for a formal complaint?",
            [
              "You must sort this out at once.",
              "I am very angry with your stupid staff.",
              "I would be grateful if you could look into this matter.",
            ],
            2,
            "It is polite, formal and clear about what is expected.",
          ),
          gap(
            "I'm writing to ___ about the poor service on Friday. (c _ _ _ _ _ _ _)",
            ["complain"],
            "I'm writing to complain about … is a standard opening for a complaint.",
            "Starts with c, eight letters.",
          ),
          choice(
            "'I would appreciate it if you ___ replace the product.'",
            ["can", "could", "will"],
            1,
            "After I would appreciate it if you we use could, a polite past form.",
          ),
          choice(
            "The manager says he is very busy. What is the most diplomatic reply?",
            [
              "I understand, but I'm afraid I still need a solution.",
              "That's not my problem.",
              "Then I'll tell everybody online how bad you are.",
            ],
            0,
            "It shows understanding and repeats the request politely.",
          ),
          gap(
            "I would like a full ___ for the damaged goods. (money back)",
            ["refund"],
            "A refund is money returned to the customer.",
          ),
          choice(
            "Which phrase best introduces a problem politely?",
            [
              "It is your fault that …",
              "You have ruined …",
              "Unfortunately, there seems to be a problem with …",
            ],
            2,
            "Unfortunately, there seems to be a problem is a diplomatic way to start.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: a faulty product",
        setup: "Work with a partner or read both parts aloud. Student A is a customer who bought a faulty tablet. Student B is a shop assistant. Then swap roles.",
        prompts: [
          { label: "Customer", text: "You bought a tablet two weeks ago. The screen has stopped working. You have the receipt. You want a refund, not a replacement." },
          { label: "Shop assistant", text: "Explain the shop policy: replacement or repair within thirty days, refund only in special cases. Be helpful but cautious. Find a compromise." },
        ],
        usefulLanguage: [
          "I bought this … on … and it has …",
          "I would like a full refund, please.",
          "I understand your policy, but …",
          "Would it be possible to … ?",
          "Perhaps we could … / How about … ?",
          "Let's agree that …",
        ],
        steps: [
          "Greet politely and describe the problem.",
          "State what you want clearly.",
          "Respond to the other person's objections.",
          "Agree on a solution and thank the other person.",
        ],
        checklist: [
          "I explained the problem calmly and clearly.",
          "I said what I wanted using polite language.",
          "I responded to objections without becoming aggressive.",
          "We found a solution.",
        ],
        model: {
          title: "Model dialogue (transcript)",
          lines: [
            "Customer: Good afternoon. I bought this tablet two weeks ago and the screen has stopped working. I have the receipt here.",
            "Assistant: I'm sorry to hear that. I can send it for repair or give you a replacement.",
            "Customer: I understand, but I'd prefer a full refund, because I've lost confidence in this model.",
            "Assistant: I'm afraid refunds are only possible in special cases. Would a replacement from a different brand suit you?",
            "Customer: That might be acceptable if the price is the same and it comes with a guarantee.",
            "Assistant: Of course. Let me check what we have in stock.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Revision ─────────────────────────
  {
    key: "b2-revision-mixed-1",
    level: "B2",
    category: "Revision",
    topic: "Mixed revision",
    title: "Mixed revision quiz 1",
    summary: "Ten mixed questions to revise the passive, modals, word formation and phrasal verbs.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "This quiz is for your own practice. Think about what the sentence needs before you answer.",
        questions: [
          choice(
            "The new stadium ___ by the mayor next year.",
            ["will open", "is opened", "will be opened"],
            2,
            "The stadium receives the action and the sentence refers to the future, so the future passive is will be opened.",
          ),
          choice(
            "Someone ___ the cash from the safe. We found it empty.",
            ["must have taken", "can't have taken", "should take"],
            0,
            "We have evidence that the money is gone, so we are sure someone took it: must have + past participle.",
          ),
          gap(
            "She felt ___ when she heard the results. (DISAPPOINT)",
            ["disappointed"],
            "After felt we need an adjective describing a feeling: disappointed.",
          ),
          choice(
            "I haven't spoken to him since we ___ out last year.",
            ["got", "fell", "made"],
            1,
            "Fall out means have an argument and stop being friends.",
          ),
          gap(
            "We're going to ___ our kitchen painted next month. (have)",
            ["have"],
            "Have something done describes a service that someone else does for you.",
          ),
          choice(
            "You ___ so much food! There's plenty left over.",
            ["mustn't have cooked", "needn't have cooked", "can't cook"],
            1,
            "Needn't have + past participle means you did something unnecessary.",
          ),
          gap(
            "It is ___ to predict the result of the election. (POSSIBLE)",
            ["impossible"],
            "We need a negative adjective. The negative of possible is impossible.",
          ),
          choice(
            "I wanted to learn the violin, but I ___ because it was too difficult.",
            ["put up", "let down", "gave up"],
            2,
            "Gave up means stopped trying.",
          ),
          choice(
            "'Where's Peter?' 'He ___ at the library. He said he would study there.'",
            ["might be", "might have been", "must have been"],
            0,
            "The speaker is making a present guess based on what Peter said, so might be.",
          ),
          gap(
            "The suspect ___ by the police yesterday. (question)",
            ["was questioned"],
            "The suspect receives the action, so we need the past simple passive.",
          ),
        ],
      },
    ],
  },
];
