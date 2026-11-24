import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const c2UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "c2-vocabulary-connotation-euphemism",
    level: "C2",
    category: "Vocabulary",
    topic: "Connotation and euphemism",
    title: "Connotation, euphemism and shades of meaning",
    summary: "Choose words for their attitude as well as their meaning, and recognise euphemism and loaded language.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Words carry attitude",
        intro: "Two words can share a dictionary meaning but suggest very different attitudes. At C2 you choose between them deliberately.",
        points: [
          {
            title: "Positive, neutral and negative connotation",
            text: "The same quality can be described favourably or unfavourably.",
            examples: [
              "determined (positive) / stubborn (negative) / persistent (neutral to positive)",
              "frugal (positive) / thrifty (positive) / stingy (negative) / mean (negative)",
              "slim (positive) / skinny (negative) / thin (neutral)",
              "curious (positive) / nosy (negative)",
            ],
          },
          {
            title: "Euphemism",
            text: "A euphemism is a mild or indirect expression used instead of a harsher one. It can show tact, but it can also hide the truth.",
            examples: [
              "pass away (die)",
              "let someone go / downsize (dismiss workers)",
              "between jobs (unemployed)",
              "collateral damage (civilian casualties)",
            ],
          },
          {
            title: "Loaded language and spin",
            text: "Words chosen to influence opinion rather than simply inform.",
            examples: [
              "regime (negative) vs government (neutral)",
              "freedom fighter vs terrorist",
              "a crackdown vs a measure",
              "inexpensive vs cheap vs budget",
            ],
          },
          {
            title: "Shades of meaning in groups of near-synonyms",
            text: "Notice differences in strength, formality and attitude.",
            examples: [
              "walk / stroll / stride / trudge / swagger",
              "look / glance / gaze / stare / glare",
              "say / murmur / mutter / declare / insist",
            ],
          },
        ],
        table: {
          caption: "Neutral vs loaded",
          head: ["Neutral", "Loaded"],
          rows: [
            ["a protest", "a riot"],
            ["tax", "burden"],
            ["firm", "ruthless"],
            ["informal", "sloppy"],
          ],
        },
        watchOut: [
          "A euphemism may sound inappropriate if overused. 'Passed away' is acceptable in condolences, but 'between jobs' in a report may be criticised as evasive.",
          "Connotation is cultural. Check authentic examples before using an unfamiliar word with a strong attitude.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Decide which word has the attitude you need. Then reveal the answer.",
        items: [
          {
            prompt: "You want to describe a friend admiringly: 'She is very ___ and never gives up.' (determined / stubborn)",
            answer: "determined",
            why: "Determined has a positive connotation; stubborn is critical.",
          },
          {
            prompt: "A company writes 'We have decided to let some staff go.' What is the plain meaning?",
            answer: "The company is dismissing some employees.",
            why: "'Let go' is a euphemism for dismiss or make redundant.",
          },
          {
            prompt: "Which verb is more critical: 'He gazed at the painting' or 'He glared at the painting'?",
            answer: "glared",
            why: "Glare suggests anger; gaze suggests admiration or deep attention.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: connotation and euphemism",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which word is the most negative?",
            ["thrifty", "frugal", "stingy"],
            2,
            "Stingy is a criticism; thrifty and frugal are positive or neutral.",
          ),
          choice(
            "'Between jobs' is a euphemism for ___.",
            ["unemployed", "employed", "retired"],
            0,
            "It is a mild way to say unemployed.",
          ),
          gap(
            "He did not just look at her; he ___ at her angrily. (g, a word for an angry look)",
            ["glared"],
            "Glared means looked angrily.",
          ),
          choice(
            "Which phrase is a euphemism?",
            ["died", "passed away", "was killed"],
            1,
            "Passed away is a gentler way of saying died.",
          ),
          choice(
            "A speaker describes the government as 'a regime'. What effect does this have?",
            [
              "It sounds neutral and formal.",
              "It suggests disapproval.",
              "It shows that the speaker likes the government.",
            ],
            1,
            "Regime often carries negative connotations.",
          ),
          gap(
            "She is a very ___ person: always asking questions about other people's lives. (n, negative)",
            ["nosy"],
            "Nosy is negative; curious would be neutral or positive.",
          ),
          choice(
            "Which verb suggests walking slowly and heavily because of tiredness?",
            ["stride", "stroll", "trudge"],
            2,
            "Trudge means walk with effort and heavy steps.",
          ),
          choice(
            "'Collateral damage' is an example of ___.",
            ["a euphemism that hides the human cost", "a technical term with no attitude", "a positive description"],
            0,
            "The expression softens a harsh reality.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c2-reading-narrative-extract",
    level: "C2",
    category: "Reading",
    topic: "Reading literary prose",
    title: "Reading: a narrative extract and its implications",
    summary: "Read an original piece of narrative prose and interpret tone, imagery and implied meaning.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "The last train",
        before: [
          "What do you expect from the title 'The last train'?",
          "How can a writer suggest a character's feelings without stating them directly?",
        ],
        paragraphs: [
          "The station had the exhausted air of a place that had given up on being useful. A single lamp buzzed above the platform, and beneath it Elena sat with her suitcase on her knees, as though it might be taken from her. She had arrived forty minutes early, which was unlike her; she had always despised waiting.",
          "Across the tracks, someone had painted the name of the town on a wall in letters that had once been white. She read it twice, in the way one rereads a letter to be sure that it says what one feared. Twenty years she had lived here, and not once had she thought the word looked sad.",
          "When the train finally appeared, it did so quietly, without the announcement of a whistle, like a guest who did not wish to disturb. Elena stood, then hesitated, and in that small hesitation lay the whole of what she could not say to anyone. She had told her sister it was merely a visit. She had told the neighbours it was for work. Only the suitcase, heavier than any visit required, knew better.",
          "The doors opened with a sigh. For a moment she looked back at the dark windows of the houses she was leaving, each of them lit by nothing but the memory of a conversation. Then, with a decisiveness that surprised her, she stepped on board and did not turn round again.",
        ],
        glossary: [
          { term: "despise", meaning: "to dislike very strongly" },
          { term: "hesitate", meaning: "to pause before doing something because you are unsure" },
          { term: "decisiveness", meaning: "the quality of making decisions quickly and firmly" },
        ],
      },
      {
        type: "practice",
        heading: "Interpreting the extract",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What does the opening description of the station suggest?",
            [
              "That the place is busy and welcoming",
              "That the station is about to be modernised",
              "A sense of abandonment which mirrors Elena's mood",
            ],
            2,
            "Phrases like 'exhausted air' and 'given up' create a mood of decline that reflects her feelings.",
          ),
          choice(
            "Why is it significant that Elena arrived forty minutes early?",
            [
              "It shows she is organised.",
              "It suggests she is unusually anxious or eager to leave.",
              "It proves the train was late.",
            ],
            1,
            "The text says it was unlike her, since she despised waiting.",
          ),
          choice(
            "What is the effect of the comparison to rereading a letter?",
            [
              "It suggests she dreads what the word confirms.",
              "It shows she likes reading.",
              "It indicates that she is confused about the language.",
            ],
            0,
            "She rereads 'to be sure that it says what one feared'.",
          ),
          choice(
            "What does 'in that small hesitation lay the whole of what she could not say' imply?",
            [
              "She has forgotten something.",
              "She decided to stay.",
              "Her doubt reveals the real emotional weight of her departure.",
            ],
            2,
            "The hesitation communicates what she could not say aloud.",
          ),
          choice(
            "Why does the narrator mention that 'only the suitcase … knew better'?",
            [
              "It shows the suitcase was lost.",
              "It suggests that the suitcase was broken.",
              "It implies she is not coming back, despite what she has told people.",
            ],
            2,
            "The suitcase is heavier than any visit requires, so her story is not true.",
          ),
          choice(
            "What is suggested by 'each of them lit by nothing but the memory of a conversation'?",
            [
              "The houses are empty and the memories are painful or lost.",
              "The houses have electric lights.",
              "The conversations took place at night.",
            ],
            0,
            "The image suggests absence and memory, not actual light.",
          ),
          choice(
            "How does the tone change at the end of the extract?",
            [
              "From joy to sadness",
              "From quiet melancholy to determined resolve",
              "From anger to fear",
            ],
            1,
            "She steps on board with decisiveness and does not look back.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c2-writing-report",
    level: "C2",
    category: "Writing",
    topic: "Writing a report",
    title: "Writing: an evaluative report with recommendations",
    summary: "Write a precise, well-structured report that evaluates a situation and recommends action.",
    minutes: 35,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "A cultural foundation has asked you to evaluate a community arts programme in your town. The programme offers free workshops in music, theatre and painting for people of all ages. Write a report for the foundation's board. Assess the strengths and weaknesses of the programme, consider its impact on the community, and recommend whether its funding should be continued, increased or reduced.",
        wordGuide: "A class guide: about 280 to 320 words. This is not an exam rule.",
        planning: [
          "Use a title and headings. Begin with a clear statement of purpose.",
          "Evaluate: strengths, weaknesses and impact, supporting each with evidence or examples.",
          "Maintain an objective, formal register with precise vocabulary and varied structures.",
          "Close with a firm recommendation and justify it in a sentence or two.",
        ],
        usefulLanguage: [
          "The purpose of this report is to assess … and to make recommendations regarding …",
          "It is evident that … / The findings suggest that …",
          "A notable strength is … / A significant shortcoming is …",
          "Although the programme has succeeded in …, it has yet to …",
          "Were funding to be increased, the programme could …",
          "In light of the above, I would strongly recommend …",
          "It would be advisable to … / It is imperative that …",
        ],
        checklist: [
          "I used a title, headings and a clear purpose statement.",
          "I evaluated both strengths and weaknesses with specific evidence.",
          "I addressed the impact on the community.",
          "I used formal language, nominalisation and impersonal structures.",
          "I made a clear and justified recommendation.",
          "I checked cohesion, accuracy and style.",
        ],
        model: [
          "Report on the Community Arts Programme",
          "Purpose",
          "The purpose of this report is to assess the effectiveness of the programme and to make recommendations regarding its future funding.",
          "Strengths",
          "A notable strength is its accessibility. Because the workshops are free, participation is not restricted by income, and the findings suggest that numbers have risen steadily, with over four hundred attendees last year. The programme has also fostered links between generations, as young people and retired residents frequently work together.",
          "Weaknesses",
          "Nevertheless, there are significant shortcomings. Workshops take place only in the town centre, which excludes residents of outlying villages, and several instructors are volunteers, so quality is uneven. Moreover, little effort has been made to measure results, making it difficult to demonstrate lasting benefits.",
          "Impact",
          "Despite these limitations, the impact on community life has been considerable. Local businesses report increased footfall on workshop evenings, and the annual exhibition has become a popular event.",
          "Recommendation",
          "In light of the above, I would strongly recommend that funding be increased. It is imperative, however, that part of the additional money be used to extend the programme to outlying areas and to introduce a system of evaluation. Were this done, the programme would be better placed to serve the whole community.",
        ],
        modelNotes: [
          "Headings and a purpose statement give a clear, professional structure.",
          "Strengths and weaknesses are both evaluated, with specific evidence.",
          "The register is formal, using nominalisation (accessibility, participation), passives and the subjunctive (that funding be increased).",
          "The recommendation is firm and linked to the evaluation, with conditions.",
        ],
        assessment: [
          "Does the report assess strengths, weaknesses and impact, and make a justified recommendation?",
          "Is the organisation clear and appropriate for a report?",
          "Is the register consistently formal and precise?",
          "Is there a wide range of sophisticated language, used accurately?",
          "Is the argument convincing and well supported?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "c2-everyday-formal-speech-toast",
    level: "C2",
    category: "Everyday English",
    topic: "Giving a speech",
    title: "Everyday English: giving a short formal speech",
    summary: "Open, structure and close a short speech for an occasion, with tact, wit and clarity.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for speeches and toasts",
        points: [
          {
            title: "Opening",
            text: "Greet the audience, state the occasion, and establish a connection.",
            examples: [
              "Ladies and gentlemen, it is a great pleasure to be here this evening.",
              "I would like to begin by thanking …",
              "It is not often that one has the privilege of …",
            ],
          },
          {
            title: "Structuring the speech",
            text: "Signpost your ideas so that listeners can follow.",
            examples: [
              "I would like to say a few words about three things: …",
              "Turning now to …",
              "That brings me to my next point.",
              "As many of you will know, …",
            ],
          },
          {
            title: "Style: warmth, humour and rhetorical devices",
            text: "Short sentences, repetition and a light touch make a speech memorable.",
            examples: [
              "Not only did she lead the team; she inspired it.",
              "We came, we learned, and we laughed.",
              "If I may be allowed an indiscretion, …",
            ],
          },
          {
            title: "Closing and toast",
            text: "End with a clear signal and, if appropriate, raise a glass.",
            examples: [
              "In closing, I would like to say how grateful we all are.",
              "So please raise your glasses: to Maria, and to the years ahead!",
              "Thank you all for listening.",
            ],
          },
        ],
        watchOut: [
          "Avoid reading from notes word for word. Use brief prompts and keep eye contact.",
          "Do not apologise at length ('I'm not good at this'). Begin confidently.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: speech language",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which is the most suitable opening for a formal retirement speech?",
            [
              "Hi guys, so, um, we're here for Mr Lopez.",
              "Ladies and gentlemen, it is a privilege to say a few words this evening.",
              "Please be quiet.",
            ],
            1,
            "Formal opening with a greeting and a statement of occasion.",
          ),
          gap(
            "That ___ me to my next point. (one word, verb)",
            ["brings"],
            "That brings me to … signals the next point.",
          ),
          choice(
            "Which sentence is a rhetorical device (tricolon / parallel structure)?",
            [
              "We came to the party.",
              "It was good.",
              "We came, we saw, we conquered.",
            ],
            2,
            "Repetition of three parallel elements is a classic device.",
          ),
          choice(
            "How should you end a toast?",
            [
              "By inviting the audience to raise their glasses to the person",
              "By saying 'The end.'",
              "By asking for questions",
            ],
            0,
            "A toast ends with raised glasses: 'To Maria!'",
          ),
          gap(
            "As many of you will ___, Anna started with the company in 2005. (know)",
            ["know"],
            "As many of you will know is a standard speech phrase.",
          ),
          choice(
            "Which phrase softens the introduction of a humorous story about the guest of honour?",
            [
              "I will now tell you something embarrassing.",
              "Everyone knows he's a fool, but …",
              "If I may be allowed an indiscretion, …",
            ],
            2,
            "The phrase softens the anecdote and signals humour.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Deliver a short speech",
        setup: "Work in groups of three. Each person delivers a two-minute speech for one of the occasions below. The others give feedback on structure and style. Then swap.",
        prompts: [
          { label: "Occasion 1", text: "A speech at the retirement party of a much-loved teacher." },
          { label: "Occasion 2", text: "A speech to welcome new students at the start of the school year." },
          { label: "Occasion 3", text: "A toast to a friend who has just won an award." },
          { label: "Feedback", text: "Listeners: note one strength, one phrase you liked, and one thing to improve." },
        ],
        usefulLanguage: [
          "Ladies and gentlemen, …",
          "I would like to begin by …",
          "As many of you will know, …",
          "That brings me to …",
          "If I may be allowed an indiscretion, …",
          "So please raise your glasses to …",
        ],
        steps: [
          "Write down three key points on a card (not a script).",
          "Plan an opening, two main ideas and a closing.",
          "Deliver the speech standing up, looking at the audience.",
          "Get feedback and deliver it again, improving one thing.",
        ],
        checklist: [
          "I opened and closed clearly.",
          "I used signposting language.",
          "I included at least one rhetorical device.",
          "I used a suitable tone: warm, tactful, confident.",
          "I spoke without reading.",
        ],
        model: {
          title: "Model speech (transcript)",
          lines: [
            "Ladies and gentlemen, it is a great pleasure to be here this evening to celebrate someone who has meant so much to so many of us.",
            "I would like to say a few words about three things: her patience, her humour and her generosity.",
            "Not only did Mrs Navarro teach us grammar; she taught us to love language. If I may be allowed an indiscretion, she also taught us to hide our phones in our pockets.",
            "In closing, I would like to say how grateful we all are. So please raise your glasses: to Mrs Navarro, and to many happy years ahead!",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c2-revision-mixed-3",
    level: "C2",
    category: "Revision",
    topic: "Mixed C2 revision",
    title: "C2 mixed revision 3",
    summary: "Twelve mixed questions on connotation, ellipsis, inversion, collocations and register.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the C2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "Which adjective has the most negative connotation?",
            ["persistent", "obstinate", "determined"],
            1,
            "Obstinate suggests an unreasonable refusal to change.",
          ),
          choice(
            "'Did he apologise?' — 'He ___, but reluctantly.'",
            ["did", "was", "done"],
            0,
            "Ellipsis after the auxiliary: He did (apologise).",
          ),
          gap(
            "Seldom ___ such a talented young pianist. (I, hear: inversion) Write the two words.",
            ["have i heard"],
            "Inversion after a negative adverb: Seldom have I heard.",
          ),
          choice(
            "The two designs differ: ___ is more elegant, ___ more practical.",
            ["one … another", "this … those", "the former … the latter"],
            2,
            "The former and the latter refer back to two items in order.",
          ),
          choice(
            "Which expression is a euphemism?",
            ["he died", "he was dead", "he passed away"],
            2,
            "Passed away softens the harsher word died.",
          ),
          gap(
            "The committee insisted that the rules ___ followed. (be)",
            ["be"],
            "Subjunctive after insist: that the rules be followed.",
          ),
          choice(
            "It is high time the government ___ action.",
            ["took", "takes", "will take"],
            0,
            "It's high time + past simple.",
          ),
          choice(
            "Which phrase signals a summary at the end of a speech?",
            ["Turning now to …", "In closing, …", "By the way, …"],
            1,
            "In closing introduces the end.",
          ),
          gap(
            "Little ___ they know that the plan would fail. (did)",
            ["did"],
            "Inversion after Little: Little did they know.",
          ),
          choice(
            "He walked along the beach slowly and wearily. Which verb suits best?",
            ["strode", "trudged", "darted"],
            1,
            "Trudge means walk slowly with effort.",
          ),
          gap(
            "No sooner ___ she arrived than it started to rain. (had)",
            ["had"],
            "No sooner + had + subject + past participle + than.",
          ),
          choice(
            "Which is the most formal way to say 'The firm dismissed 200 workers'?",
            [
              "The firm kicked out 200 workers.",
              "The firm got rid of 200 workers.",
              "The firm made 200 workers redundant.",
            ],
            2,
            "Made redundant is the standard formal term.",
          ),
        ],
      },
    ],
  },
];
