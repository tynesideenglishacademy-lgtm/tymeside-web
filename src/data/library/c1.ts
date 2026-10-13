import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

// C1 study units. Draft until a teacher has reviewed them.
// Choice answers are written with the correct option first and then
// rebalanced by scripts/rebalance-answers.mjs.

export const c1Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "c1-grammar-mixed-conditionals-wishes",
    level: "C1",
    category: "Grammar",
    topic: "Mixed conditionals, wish and if only",
    title: "Mixed conditionals, wish and if only",
    summary: "Connect past causes with present results, and express regret about the present and the past.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "When the time of the condition and the result differ",
        intro: "In a mixed conditional the if clause and the result clause refer to different times. Think about the time of each part separately.",
        points: [
          {
            title: "Past condition, present result",
            text: "If + past perfect, would + base verb. An unreal past situation has an effect now.",
            examples: [
              "If I had taken the job in Berlin, I would be living there now.",
              "If she hadn't broken her leg, she would be playing in the final.",
            ],
          },
          {
            title: "Present condition, past result",
            text: "If + past simple, would have + past participle. A permanent or present state would have changed a past event.",
            examples: [
              "If he were more organised, he wouldn't have missed the deadline.",
              "If I spoke Italian, I would have understood the guide.",
            ],
          },
          {
            title: "Wish and if only",
            text: "Wish and if only are followed by a past form for the present and the past perfect for the past. Would is used for annoying habits or things we want someone to change.",
            examples: [
              "I wish I lived closer to the sea. (present)",
              "If only I had listened to her advice. (past)",
              "I wish you would stop interrupting me. (annoyance)",
              "She wishes she could have gone. (past regret about ability)",
            ],
          },
          {
            title: "Other ways of expressing unreal conditions",
            text: "Without, but for, supposing and as long as can replace if.",
            examples: [
              "But for your help, I wouldn't have finished on time.",
              "Supposing you had won, what would you have done?",
              "I'll lend you the book provided that you return it.",
            ],
          },
        ],
        watchOut: [
          "Do not use would in the if clause: If I would have known is wrong in standard English. We say If I had known.",
          "Wish + would is not used with the same subject: I wish I would be taller is wrong. We say I wish I were taller.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "She didn't study law, so she isn't a lawyer now. → If she ___ law, she would be a lawyer now.",
            answer: "had studied",
            why: "The condition is in the past and unreal (past perfect), and the result is in the present (would + base).",
          },
          {
            prompt: "He is so careless that he lost his passport. → If he ___ more careful, he wouldn't have lost his passport.",
            answer: "were",
            why: "The cause is a permanent present quality, so the if clause uses the past simple (were), and the result refers to the past (would have + participle).",
          },
          {
            prompt: "You always leave the door open and it annoys me. → I wish you ___ the door.",
            answer: "would close",
            why: "Wish + would is used when we want someone else's behaviour to change.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "If I had saved more money, I ___ a new car now.",
            ["could have afforded", "can afford", "could afford"],
            2,
            "The unreal past condition (had saved) has a present result, so we need would/could + base verb: could afford.",
          ),
          choice(
            "If she weren't so shy, she ___ the chance to speak in public last year.",
            ["would have taken", "would take", "will take"],
            0,
            "The present quality (weren't so shy) would have changed a past event, so would have + past participle.",
          ),
          gap(
            "If only I ___ the email before the meeting! (read)",
            ["had read"],
            "If only + past perfect expresses regret about the past.",
          ),
          choice(
            "My neighbours kept me awake all night. I wish they ___ so much noise last night.",
            ["wouldn't make", "hadn't made", "didn't make"],
            1,
            "Last night is a finished past time, so a wish about it needs the past perfect: hadn't made. Didn't make would refer to the present.",
          ),
          gap(
            "___ for your support, I would never have passed the exam. (But / Without)",
            ["but", "without"],
            "But for or without + noun means if it had not been for. Both fit grammatically.",
            "Choose one word from the brackets.",
          ),
          choice(
            "I'd have gone to the concert if I ___ the date.",
            ["knew", "had known", "would know"],
            1,
            "The if clause refers to an unreal past situation, so we need the past perfect.",
          ),
          choice(
            "'I wish I ___ the train yesterday.' (regret about the past)",
            ["didn't miss", "wouldn't miss", "hadn't missed"],
            2,
            "To express regret about the past, wish is followed by the past perfect.",
          ),
          gap(
            "If I ___ born in Scotland, I would speak with a Scottish accent now. (be)",
            ["had been"],
            "The condition is in the past (where I was born) and the result is in the present, so the past perfect is correct.",
          ),
        ],
      },
    ],
  },
  {
    key: "c1-grammar-cleft-sentences",
    level: "C1",
    category: "Grammar",
    topic: "Cleft sentences and emphasis",
    title: "Cleft sentences: focusing on what matters",
    summary: "Use It was … that and What … is structures to emphasise information.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Emphasis through structure",
        intro: "A cleft sentence splits one idea into two parts so that we can emphasise one of them. It is common in speaking and in formal writing.",
        points: [
          {
            title: "It + be + focus + that / who",
            text: "Put the information you want to stress after It was or It is. Use who for people and that for other things.",
            examples: [
              "It was Maria who found the solution.",
              "It was last summer that we first met.",
              "It is the lack of time that worries me.",
            ],
          },
          {
            title: "What-clauses",
            text: "Begin with What or All and use be to introduce the information you want to emphasise.",
            examples: [
              "What I need is a long holiday.",
              "What annoys me most is the noise.",
              "All I want is a quiet evening.",
            ],
          },
          {
            title: "Other focusing expressions",
            text: "The thing that, the reason why and the place where can also introduce emphasis.",
            examples: [
              "The thing that surprised me was how quiet it was.",
              "The reason why I called is to invite you.",
              "The place where we met has been demolished.",
            ],
          },
          {
            title: "When do we use them?",
            text: "To correct information, to contrast and to make a speech or essay more dramatic. Do not overuse them: too many cleft sentences make a text sound heavy.",
            examples: [
              "It wasn't Tom who broke it. It was Sara.",
            ],
          },
        ],
        watchOut: [
          "After What + clause + be we normally use a noun or a to-infinitive: What I want to do is travel the world (or … is to travel the world).",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Emphasise the person: 'Dr Lee discovered the mistake.' → It was ___ the mistake.",
            answer: "Dr Lee who discovered",
            why: "Use It was + the person + who + the verb.",
          },
          {
            prompt: "Emphasise the thing wanted: 'I want a rest.' → What I want ___ a rest.",
            answer: "is",
            why: "A what-clause is followed by the verb be before the emphasised item.",
          },
          {
            prompt: "Emphasise the time: 'We met in 2019.' → It was ___ we met.",
            answer: "in 2019 that",
            why: "Use It was + the time phrase + that for non-person information.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "It was the director ___ made the final decision.",
            ["who", "which", "what"],
            0,
            "Use who when the focus is a person.",
          ),
          choice(
            "___ I really enjoy about this job is the variety.",
            ["That", "Which", "What"],
            2,
            "What introduces a cleft sentence that emphasises the information after is.",
          ),
          gap(
            "It was in March ___ we moved to Valencia.",
            ["that"],
            "For time and place expressions in a cleft sentence we use that.",
          ),
          choice(
            "All I ___ is a few minutes of peace and quiet.",
            ["wanting", "want", "to want"],
            1,
            "All + subject + simple verb + is introduces the emphasised information.",
          ),
          gap(
            "What worried me most ___ the lack of information. (be)",
            ["was"],
            "After a what-clause we use be, and the sentence is in the past, so was.",
          ),
          choice(
            "Which sentence emphasises 'the weather' correctly?",
            [
              "It was the weather that ruined our holiday.",
              "It was the weather what ruined our holiday.",
              "What was the weather that ruined our holiday.",
            ],
            0,
            "It + was + focus + that + clause is the standard cleft structure.",
          ),
          choice(
            "Which cleft sentence about a late train is correct?",
            [
              "It was the train what was late, not the bus.",
              "What the train was late, not the bus.",
              "It was the train that was late, not the bus.",
            ],
            2,
            "The structure is It + was + focus + that + clause. What cannot replace that here.",
          ),
          gap(
            "The thing that surprised me ___ how friendly everyone was. (be)",
            ["was"],
            "The clause 'the thing that surprised me' is followed by was.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "c1-vocabulary-collocations-work-society",
    level: "C1",
    category: "Vocabulary",
    topic: "Collocations: work, business and society",
    title: "Collocations for work, business and society",
    summary: "Learn natural verb, adjective and noun combinations used in formal writing and discussion.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Precision through collocation",
        intro: "At C1, using collocations correctly is one of the clearest signs of natural English. Learn the whole combination, not just the individual words.",
        points: [
          {
            title: "Verb + noun",
            text: "These verb and noun pairs are common in work and public life.",
            examples: [
              "meet a deadline, raise awareness, reach a compromise",
              "launch a campaign, face a challenge, take initiative",
              "conduct a survey, draw a conclusion, make a profit",
            ],
          },
          {
            title: "Adjective + noun",
            text: "Strong adjective combinations express degree or quality precisely.",
            examples: [
              "a heated debate, a fierce competition, a tight schedule",
              "widespread concern, a steady increase, a sharp decline",
              "a vested interest, a viable alternative, a lasting impression",
            ],
          },
          {
            title: "Adverb + adjective",
            text: "Certain adverbs combine more naturally with some adjectives than others.",
            examples: [
              "highly motivated, deeply concerned, bitterly disappointed",
              "perfectly capable, utterly impossible, fully aware",
            ],
          },
          {
            title: "Noun + noun and fixed phrases",
            text: "Some noun combinations are fixed, and some phrases cannot be changed.",
            examples: [
              "a sense of urgency, a wide range of options, a matter of principle",
              "in the long run, on the whole, by and large",
            ],
          },
        ],
        watchOut: [
          "Synonyms are not always interchangeable. We say heavy traffic and heavy rain, but we cannot say strong traffic. We say a strong argument, not a heavy argument.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Which verb: ___ a deadline? (do / meet / catch)",
            answer: "meet",
            why: "Meet a deadline is the standard collocation. Miss a deadline is the opposite.",
          },
          {
            prompt: "Which adverb: ___ aware of the risks? (highly / fully / strongly)",
            answer: "fully",
            why: "Fully aware is the natural collocation. Highly is used with words like motivated or successful.",
          },
          {
            prompt: "Which adjective: a ___ increase in prices? (high / steady / big)",
            answer: "steady",
            why: "A steady increase is a fixed collocation meaning a slow, regular rise.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "The charity launched a campaign to ___ awareness of climate change.",
            ["lift", "rise", "raise"],
            2,
            "Raise awareness is the standard collocation. Rise does not take an object.",
          ),
          choice(
            "After hours of negotiation, the two sides finally ___ a compromise.",
            ["reached", "arrived", "made"],
            0,
            "Reach a compromise is the usual collocation.",
          ),
          gap(
            "She is ___ motivated and always works late. (h _ _ _ _ _)",
            ["highly"],
            "Highly motivated is a common collocation: highly + adjective for a very strong degree.",
            "The word starts with h.",
          ),
          choice(
            "There has been a ___ decline in sales since January.",
            ["strong", "sharp", "wide"],
            1,
            "A sharp decline is a very rapid fall. Strong and wide do not combine with decline.",
          ),
          gap(
            "We must ___ the challenge of an ageing population. (f _ _ _)",
            ["face"],
            "Face a challenge is a standard collocation.",
          ),
          choice(
            "The two politicians had a ___ debate on television last night.",
            ["warm", "heated", "boiling"],
            1,
            "A heated debate is a very angry or intense discussion.",
          ),
          choice(
            "Which phrase is NOT a natural collocation?",
            ["heavy traffic", "light traffic", "strong traffic"],
            2,
            "We say heavy or light traffic, not strong traffic.",
          ),
          gap(
            "On the ___, the results were better than expected. (w _ _ _ _)",
            ["whole"],
            "On the whole means generally.",
            "Five letters, starts with w.",
          ),
        ],
      },
    ],
  },
  {
    key: "c1-vocabulary-word-formation-advanced",
    level: "C1",
    category: "Vocabulary",
    topic: "Word formation: advanced",
    title: "Word formation: advanced affixes and spelling",
    summary: "Choose accurate noun, adjective, adverb and negative forms in formal contexts.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Beyond the basics",
        intro: "At C1 the tasks require more than adding -ly or un-. You need to choose between several possible forms and sometimes make two changes to the same word.",
        points: [
          {
            title: "Abstract noun endings",
            text: "Many abstract nouns end in -ence/-ance, -ity, -ness, -ship and -hood.",
            examples: [
              "reluctant → reluctance",
              "flexible → flexibility",
              "aware → awareness",
              "partner → partnership",
            ],
          },
          {
            title: "Adjective endings with different meanings",
            text: "Pairs of adjectives from the same word can have different meanings.",
            examples: [
              "economic (relating to economics) / economical (saving money)",
              "historic (important in history) / historical (relating to history)",
              "responsible (in charge) / responsive (reacts quickly)",
            ],
          },
          {
            title: "Negative prefixes",
            text: "Choose the correct negative prefix: un-, in-, im-, il-, ir-, dis-, mis-.",
            examples: [
              "regular → irregular",
              "legible → illegible",
              "obey → disobey",
              "understand → misunderstand",
            ],
          },
          {
            title: "Two changes",
            text: "Sometimes a word needs a prefix and a suffix.",
            examples: [
              "predict → unpredictability",
              "reason → unreasonably",
              "employ → unemployment",
            ],
          },
        ],
        table: {
          caption: "Word families",
          head: ["Verb", "Noun", "Adjective", "Adverb"],
          rows: [
            ["succeed", "success", "successful", "successfully"],
            ["comply", "compliance", "compliant", "—"],
            ["attract", "attraction", "attractive", "attractively"],
            ["accept", "acceptance", "acceptable", "acceptably"],
          ],
        },
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "The new regulations are ___ for small businesses. (BENEFIT) → an adjective is needed.",
            answer: "beneficial",
            why: "After are we need an adjective. Beneficial means giving an advantage.",
          },
          {
            prompt: "His handwriting was completely ___. (READ)",
            answer: "unreadable (or illegible)",
            why: "We need a negative adjective. Unreadable is formed from read + -able with un-. Illegible is a different word with the same meaning.",
          },
          {
            prompt: "There is growing ___ among scientists about this issue. (AGREE) → a negative noun is needed.",
            answer: "disagreement",
            why: "A negative noun after growing is disagreement (dis- + agree + -ment).",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          gap(
            "She showed great ___ to change her mind. (RELUCTANT)",
            ["reluctance"],
            "After great we need an abstract noun. The noun from reluctant is reluctance.",
          ),
          gap(
            "The ___ of the new system took longer than expected. (IMPLEMENT)",
            ["implementation"],
            "After The we need a noun. The noun from implement is implementation.",
          ),
          choice(
            "This is a more ___ way of heating the house.",
            ["economical", "economic", "economist"],
            0,
            "Economical means saving money or resources. Economic relates to economics.",
          ),
          gap(
            "Her behaviour was ___ for a professional. (ACCEPT)",
            ["unacceptable"],
            "We need a negative adjective. Unacceptable is un- + accept + -able.",
          ),
          choice(
            "The ___ of the new treatment has been proved in several trials.",
            ["effectively", "effective", "effectiveness"],
            2,
            "After The and before of we need a noun: effectiveness.",
          ),
          gap(
            "The experts say it is ___ that interest rates will fall, so don't expect cheaper loans. (LIKE)",
            ["unlikely"],
            "The meaning is negative: don't expect cheaper loans. Unlikely is un- + like + -ly, an adjective despite the ending.",
          ),
          choice(
            "Many students find the ___ of the exam rules confusing.",
            ["interpretive", "interpretation", "interpreted"],
            1,
            "We need a noun after the. Interpretation is the noun from interpret.",
          ),
          gap(
            "His ___ to follow the instructions caused a serious accident. (FAIL)",
            ["failure"],
            "The noun from fail is failure.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c1-reading-attention-economy",
    level: "C1",
    category: "Reading",
    topic: "Article: attention and technology",
    title: "Reading: the battle for our attention",
    summary: "Follow a complex argument, identify the writer's attitude and understand reference and implication.",
    minutes: 22,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "The attention economy",
        before: [
          "Do you think you give enough attention to one task at a time?",
          "Who profits when we spend more time on our phones?",
        ],
        paragraphs: [
          "In the early days of the internet, the greatest challenge was access to information. Today, the problem is the reverse: information is so plentiful that the scarce resource is no longer data but the human ability to attend to it. Economists have begun to describe this as an attention economy, in which companies compete not for our money directly but for the minutes we spend looking at their products.",
          "The consequence, critics argue, is that many digital services are designed to be difficult to leave. Notifications arrive at carefully chosen moments, endless feeds remove natural stopping points, and bright red badges create a vague sense of obligation. None of this is accidental. Engineers study how small changes in layout affect the time users stay, and the results are used to refine the product further. It would be a mistake, however, to portray users as helpless victims. Many people use the same tools with great discipline and gain real benefits, from learning languages to keeping in touch with relatives abroad.",
          "What concerns researchers most is not occasional overuse but the gradual change in how we think. Studies suggest that frequent interruptions make it harder to sustain concentration on demanding tasks such as reading a long article or solving a complex problem. Some psychologists go further, claiming that the habit of switching constantly between tasks leaves the brain permanently less efficient. This claim remains controversial: the evidence is mostly correlational, and it is possible that people who are already easily distracted simply use their devices more.",
          "Whatever the truth, a growing number of people are experimenting with ways to take back control. Some schedule fixed times for checking messages; others turn off every notification except calls. A few have gone further and switched to 'dumb' phones. Yet the most effective strategy may be the simplest: deciding in advance what one wants to do with a device before picking it up, rather than allowing the device to decide for us.",
        ],
        glossary: [
          { term: "scarce", meaning: "not available in large amounts" },
          { term: "refine", meaning: "to improve something by making small changes" },
          { term: "correlational", meaning: "showing that two things happen together, but not proving that one causes the other" },
          { term: "sustain", meaning: "to continue something for a long time" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer. Go back to the text to check each one.",
        questions: [
          choice(
            "What does the writer mean by 'the scarce resource' in the first paragraph?",
            [
              "People's ability to pay attention",
              "Access to the internet",
              "The amount of data available",
            ],
            0,
            "The text says information is plentiful, so the scarce resource is 'the human ability to attend to it'.",
          ),
          choice(
            "What do critics claim about many digital services?",
            [
              "They are too expensive for most people.",
              "They are used only by young people.",
              "They are designed to keep users engaged for as long as possible.",
            ],
            2,
            "The text says they are 'designed to be difficult to leave'.",
          ),
          choice(
            "What does 'None of this is accidental' (paragraph 2) suggest?",
            [
              "Accidents are common on digital platforms.",
              "Users never notice the changes.",
              "The features are the result of deliberate design decisions.",
            ],
            2,
            "The following sentence says engineers study layout changes and refine the product accordingly, so the features are deliberate.",
          ),
          choice(
            "In paragraph 2, the writer warns against:",
            [
              "presenting users as powerless",
              "ignoring the role of engineers",
              "using digital services at all",
            ],
            0,
            "The writer says it would be a mistake to portray users as helpless victims.",
          ),
          choice(
            "What worries researchers most, according to paragraph 3?",
            [
              "The cost of buying a phone",
              "A gradual change in how people think",
              "Occasional overuse of devices",
            ],
            1,
            "The text says: 'What concerns researchers most is not occasional overuse but the gradual change in how we think.'",
          ),
          choice(
            "Why is the claim about task-switching 'controversial'?",
            [
              "No scientist believes it.",
              "The evidence does not prove that switching causes the problem.",
              "It has been proved wrong in every study.",
            ],
            1,
            "The text says the evidence is mostly correlational and that distracted people may simply use devices more.",
          ),
          choice(
            "In paragraph 4, what does 'take back control' refer to?",
            [
              "Banning devices in schools",
              "Reducing the price of services",
              "Managing one's own use of devices",
            ],
            2,
            "The paragraph lists strategies people use to manage their own use of devices.",
          ),
          choice(
            "What does the writer suggest is the most effective strategy?",
            [
              "Deciding in advance what to do with the device",
              "Switching to a basic phone",
              "Turning off all notifications",
            ],
            0,
            "The writer says the most effective strategy may be 'deciding in advance what one wants to do with a device'.",
          ),
          choice(
            "The writer's overall tone is best described as:",
            [
              "angry and critical",
              "humorous and informal",
              "analytical and balanced",
            ],
            2,
            "The writer presents critics' arguments, qualifies them, notes controversy and offers a practical conclusion.",
          ),
        ],
      },
    ],
  },
  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c1-writing-proposal",
    level: "C1",
    category: "Writing",
    topic: "Proposal",
    title: "Writing: a proposal",
    summary: "Organise a persuasive proposal with headings, recommendations and justification.",
    minutes: 30,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "A local council is considering ways to encourage young people to take up volunteering. You have been asked to write a proposal for the council. In your proposal you should describe the current situation, suggest two practical projects, and explain why they would be successful.",
        wordGuide: "A class guide: about 220 to 260 words. This is not an exam rule.",
        planning: [
          "Use headings: Introduction, the current situation, Proposals, Why they would work, Conclusion.",
          "Introduction: state the purpose of the proposal in one or two sentences.",
          "Give two specific projects with practical details, for example who, what and when.",
          "Justify each project with evidence or logical reasoning.",
          "Use a formal, impersonal style and positive persuasive language.",
        ],
        usefulLanguage: [
          "The purpose of this proposal is to …",
          "It is evident that … / Research suggests that …",
          "I would like to recommend … / I propose that …",
          "This would enable young people to …",
          "Not only would this …, but it would also …",
          "I am confident that this approach would …",
        ],
        checklist: [
          "I used clear headings and a formal register.",
          "I described the situation briefly before making proposals.",
          "My two proposals are specific and practical.",
          "I justified each proposal, with a reason or an expected benefit.",
          "I used persuasive and formal language, including some complex structures.",
          "I checked grammar, spelling and punctuation.",
        ],
        model: [
          "Introduction",
          "The purpose of this proposal is to recommend two initiatives that would encourage more young people in our town to volunteer.",
          "Current situation",
          "At present, only a small proportion of teenagers take part in volunteering. Many say they lack information about opportunities, while others believe that they would have little free time because of their studies.",
          "Proposals",
          "Firstly, I propose a volunteer fair to be held annually in the town hall, where local charities could present their work and recruit helpers. Secondly, I recommend a flexible scheme that would allow students to volunteer for just two hours a week, with certificates that could be included in university applications. To keep costs low, both projects could be run with the help of local schools and sports clubs, which already have the facilities and contact with young people.",
          "Why they would work",
          "A fair would solve the problem of limited information by bringing all opportunities together in one place. The scheme would remove the time barrier and give young people a practical incentive to participate, as it would improve their future prospects. Moreover, similar initiatives in neighbouring towns have led to a noticeable rise in participation, which suggests that the approach is realistic.",
          "Conclusion",
          "I am confident that these measures would not only increase participation but also strengthen links between schools and the community.",
        ],
        modelNotes: [
          "It uses headings and a formal, impersonal style.",
          "It follows the three parts of the task: current situation, two proposals, reasons they would work.",
          "It uses persuasive structures: I propose, I recommend, not only … but also.",
          "Each proposal is concrete: an annual fair, a two-hours-a-week scheme with certificates.",
          "This is one possible answer. You can propose different projects.",
        ],
        assessment: [
          "Content: are all parts of the task covered, with practical and relevant proposals?",
          "Communicative achievement: is the register consistently formal and is the purpose clear?",
          "Organisation: do the headings and paragraphs help the reader, and are ideas linked well?",
          "Language: is there a wide range of vocabulary and complex grammar used with control?",
          "Accuracy: are errors rare and not distracting?",
        ],
      },
    ],
  },
  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "c1-speaking-discuss-evaluate",
    level: "C1",
    category: "Speaking",
    topic: "Evaluating options and extended discussion",
    title: "Speaking: evaluate options and reach a decision",
    summary: "Evaluate several ideas, justify a choice and discuss a wider topic in depth.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Collaborative task and discussion",
        setup: "Work with a partner or imagine a partner's replies. You have about two minutes for the task, then about four minutes for the discussion questions.",
        prompts: [
          { label: "Task", text: "A town wants to attract more visitors. Here are some ideas: a food festival, a new museum, a cycling route, an outdoor concert series, a night market. Discuss how effective each idea would be, then decide which two would work best." },
          { label: "Discussion 1", text: "Do you think tourism always benefits the people who live in a place?" },
          { label: "Discussion 2", text: "How far should local governments spend public money on attractions for visitors?" },
          { label: "Discussion 3", text: "Is it possible to enjoy a place as a tourist without damaging it?" },
        ],
        usefulLanguage: [
          "One option is to … but I wonder whether …",
          "That would certainly appeal to … although …",
          "To a large extent, I think … However, there is a risk that …",
          "I'd argue that … / It could be argued that …",
          "Taking everything into account, I'd choose …",
          "Would you go along with that?",
        ],
        steps: [
          "Briefly evaluate each option: appeal, cost, practicality.",
          "React to your partner's ideas with a comment before adding your own.",
          "Narrow the options and justify the choice.",
          "In the discussion, develop answers with reasons, examples and a balanced view.",
        ],
        checklist: [
          "I evaluated each idea and did not only describe it.",
          "I responded to my partner and invited their opinion.",
          "I used hedging language: it could be argued, to some extent.",
          "I developed my answers with reasons and examples.",
          "We reached a decision.",
        ],
        model: {
          title: "Model extract (transcript)",
          lines: [
            "A: A food festival would certainly appeal to a wide range of people, and it wouldn't be too expensive to organise. What do you think?",
            "B: I agree to some extent, although it would probably attract visitors only for a weekend. A cycling route, on the other hand, could bring people all year round.",
            "A: That's a fair point. But I wonder whether it would be as effective, since you need good weather and decent infrastructure.",
            "B: True. Taking everything into account, I'd choose the food festival and the museum, because they could be promoted internationally.",
            "A: Would you go along with the night market too? It might give young people a reason to visit.",
            "B: Possibly, but I'd argue that it needs more security and that could be costly.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "c1-everyday-meetings-interrupting-summarising",
    level: "C1",
    category: "Everyday English",
    topic: "Meetings: interrupting, clarifying and summarising",
    title: "Everyday English: taking part in a meeting",
    summary: "Interrupt politely, ask for clarification, disagree diplomatically and summarise decisions.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for effective meetings",
        intro: "In meetings, you need to take turns, express disagreement without causing offence and make sure everyone agrees on what was decided.",
        points: [
          {
            title: "Interrupting politely",
            text: "Use softening phrases to enter the conversation.",
            examples: [
              "Sorry to interrupt, but could I add something?",
              "If I could just come in here, …",
              "May I make a quick point?",
            ],
          },
          {
            title: "Clarifying and checking",
            text: "Make sure that you have understood.",
            examples: [
              "Could you elaborate on that?",
              "If I understand you correctly, you're suggesting that …",
              "What exactly do you mean by …?",
              "Let me just check that I've got this right.",
            ],
          },
          {
            title: "Disagreeing diplomatically",
            text: "Acknowledge the other person's point before objecting.",
            examples: [
              "I see where you're coming from, but …",
              "That's a valid point; however, …",
              "I'm not entirely convinced that …",
              "I'd see it slightly differently.",
            ],
          },
          {
            title: "Summarising and agreeing actions",
            text: "Close the meeting by confirming decisions and next steps.",
            examples: [
              "To sum up, we've agreed to …",
              "So the next step is for Ana to …",
              "Shall we meet again on …?",
              "Let's go over the action points.",
            ],
          },
        ],
        watchOut: [
          "Avoid blunt phrases such as That's wrong or You don't understand. They can sound rude, even when you are sure that you are right.",
        ],
      },
      {
        type: "practice",
        heading: "Practise on your own",
        questions: [
          choice(
            "Which phrase is the best way to disagree diplomatically?",
            [
              "That's nonsense.",
              "I see where you're coming from, but I'm not entirely convinced.",
              "You clearly haven't thought about it.",
            ],
            1,
            "It acknowledges the other person's view before expressing doubt.",
          ),
          gap(
            "Sorry to ___, but could I add something? (i _ _ _ _ _ _ _ _)",
            ["interrupt"],
            "Sorry to interrupt is a polite way to join a conversation.",
            "Starts with i, nine letters.",
          ),
          choice(
            "You want the speaker to give more details. What do you say?",
            [
              "Could you elaborate on that?",
              "Could you stop?",
              "Is that all?",
            ],
            0,
            "Elaborate means to give more details.",
          ),
          choice(
            "Which phrase is used at the end of a meeting?",
            [
              "Let me interrupt you for a moment.",
              "I'd like to ask a question first.",
              "To sum up, we've agreed to postpone the launch.",
            ],
            2,
            "To sum up introduces a summary of what was decided.",
          ),
          gap(
            "If I understand you ___, you're proposing a delay. (c _ _ _ _ _ _ _ _)",
            ["correctly"],
            "If I understand you correctly is used to check your understanding.",
            "Starts with c, nine letters.",
          ),
          choice(
            "'I'd see it slightly differently.' This means:",
            [
              "I can't see the screen.",
              "I agree completely.",
              "I have a different opinion.",
            ],
            2,
            "It is a diplomatic way of introducing disagreement.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: a team meeting",
        setup: "Work in a group of three if possible, or read all parts aloud. A is the chair, B proposes to move the product launch to next month, and C thinks the date should not change.",
        prompts: [
          { label: "A: Chair", text: "Open the meeting, invite B to present the proposal, make sure everyone speaks and summarise the decision at the end." },
          { label: "B: Proposer", text: "You want to delay the launch because the final tests are not ready. Explain your reasons." },
          { label: "C: Objector", text: "You are worried that a delay will give competitors an advantage. Disagree politely and suggest an alternative, for example a smaller launch on the original date." },
        ],
        usefulLanguage: [
          "Let's get started. First on the agenda is …",
          "Could you walk us through your proposal?",
          "I see where you're coming from, but …",
          "What if we were to …?",
          "To sum up, we have agreed to …",
          "Who will take responsibility for …?",
        ],
        steps: [
          "The chair opens the meeting and introduces the topic.",
          "B presents and C responds.",
          "Everyone considers an alternative.",
          "The chair summarises the decision and the next steps.",
        ],
        checklist: [
          "I used polite interruptions and softening language.",
          "I asked for clarification when needed.",
          "We disagreed without being rude.",
          "The chair summarised the decisions and the actions.",
        ],
        model: {
          title: "Model extract (transcript)",
          lines: [
            "A: Let's get started. First on the agenda is the launch date. B, could you walk us through your proposal?",
            "B: Certainly. I'd like to postpone the launch by a month because the final tests aren't complete.",
            "C: Sorry to interrupt, but could I add something? I see where you're coming from, but I'm worried that our competitors might release their product first.",
            "B: That's a valid point. What if we ran the tests faster with extra staff?",
            "C: That could work, provided that the quality isn't affected.",
            "A: To sum up, we've agreed to keep the date if the extra team can finish the tests by the end of the month. B will report on Friday.",
          ],
        },
      },
    ],
  },
  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c1-revision-mixed-1",
    level: "C1",
    category: "Revision",
    topic: "Mixed revision",
    title: "Mixed revision quiz 1",
    summary: "Ten mixed questions to revise conditionals, emphasis, collocations and word formation.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "This quiz is for your own practice. Think about the exact meaning and form before you choose.",
        questions: [
          choice(
            "If I hadn't lost my notes, I ___ more confident about the exam now.",
            ["would feel", "would have felt", "will feel"],
            0,
            "The unreal past condition has a present result, so we use would + base verb.",
          ),
          choice(
            "It was the lack of funding ___ forced the project to close.",
            ["what", "that", "where"],
            1,
            "In an It-cleft with a non-person focus we use that.",
          ),
          gap(
            "The two sides eventually ___ a compromise after weeks of talks. (reach)",
            ["reached"],
            "Reach a compromise is the standard collocation. The sentence is in the past simple.",
          ),
          gap(
            "It would be ___ to ignore the warning. (WISE)",
            ["unwise"],
            "A negative adjective is needed. The negative of wise is unwise.",
          ),
          choice(
            "I wish you ___ leaving your things all over the floor.",
            ["stopped", "would stop", "had stopped"],
            1,
            "Wish + would expresses annoyance at a habit and a wish for change.",
          ),
          choice(
            "'What I need ___ some time alone.'",
            ["has", "does", "is"],
            2,
            "A what-clause is followed by be: What I need is some time alone.",
          ),
          choice(
            "The company has been under ___ pressure to cut costs.",
            ["intense", "intensive", "intensely"],
            0,
            "Before the noun pressure we need an adjective. Intense means very strong.",
          ),
          gap(
            "She is ___ aware of the risks involved. (f _ _ _ _)",
            ["fully"],
            "Fully aware is a standard adverb + adjective collocation.",
          ),
          choice(
            "Which phrase would be best for politely interrupting a colleague?",
            [
              "Stop talking for a second.",
              "That is simply wrong.",
              "Sorry to interrupt, but may I make a point?",
            ],
            2,
            "Sorry to interrupt, but … is a softening phrase used in meetings.",
          ),
          gap(
            "If only I ___ his advice last year! (take)",
            ["had taken"],
            "If only + past perfect expresses regret about the past.",
          ),
        ],
      },
    ],
  },
];
