import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const c2UnitsBatch2: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "c2-grammar-ellipsis-substitution-cohesion",
    level: "C2",
    category: "Grammar",
    topic: "Cohesion",
    title: "Ellipsis, substitution and cohesion",
    summary: "Avoid repetition and build tight, natural discourse with ellipsis and substitution.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Saying it once, and saying it well",
        intro: "Competent users do not repeat information the listener already knows. Ellipsis (leaving words out) and substitution (replacing words with a short form) keep language economical and natural.",
        points: [
          {
            title: "Ellipsis after and, but and or",
            text: "When two clauses share a subject or an auxiliary, the repeated words can be left out.",
            examples: [
              "She opened the letter and (she) read it twice.",
              "He has written three novels and (he has) translated two.",
              "You can stay here or (you can) come with us.",
            ],
          },
          {
            title: "Ellipsis after auxiliaries and to",
            text: "A repeated verb phrase can be omitted after an auxiliary, a modal or to. We often keep only the auxiliary.",
            examples: [
              "'Will you come?' — 'I might (come).' / 'I'd love to (come).'",
              "She hasn't finished, but he has (finished).",
              "I wanted to talk to her, but I didn't dare to (talk to her).",
            ],
          },
          {
            title: "Substitution: do so, so and not, one and ones",
            text: "Do so replaces a verb phrase in formal English. So and not replace a clause after think, hope, suppose, afraid. One/ones replaces a countable noun.",
            examples: [
              "She asked them to leave, and they did so at once.",
              "'Is it going to rain?' — 'I hope not.' / 'I'm afraid so.'",
              "I prefer the red one to the blue ones.",
            ],
          },
          {
            title: "Reference and linkers for cohesion",
            text: "Use reference words (this, that, such, the latter, the former) to link sentences without repeating nouns.",
            examples: [
              "Both options have merit; the former is cheaper, the latter more durable.",
              "The proposal was rejected. This surprised nobody.",
              "Such was the demand that tickets sold out in minutes.",
            ],
          },
        ],
        watchOut: [
          "Do not leave out words if the sentence becomes unclear or ungrammatical: 'He can swim and I can't' is fine; 'He swim and I can't' is not.",
          "Do so refers to an action under the speaker's control, so it does not fit with stative verbs (not 'He knew the answer and I did so').",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Make each sentence less repetitive. Then reveal a model answer.",
        items: [
          {
            prompt: "I would like to help you, but I can't help you.",
            answer: "I would like to help you, but I can't.",
            why: "Ellipsis after the modal can't: the verb phrase help you is understood.",
          },
          {
            prompt: "Do you think the exhibition will be crowded? I don't think the exhibition will be crowded.",
            answer: "Do you think the exhibition will be crowded? — I don't think so.",
            why: "Substitution with so replaces the whole clause after think.",
          },
          {
            prompt: "There were two proposals. The first proposal was ambitious; the second proposal was realistic.",
            answer: "There were two proposals. The former was ambitious; the latter was realistic.",
            why: "The former and the latter refer back to two things in order, avoiding repetition.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: ellipsis and substitution",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "'Are you coming to the dinner?' — 'I'd love ___, but I have a deadline.'",
            ["it", "so", "to"],
            2,
            "Ellipsis after to: I'd love to (come).",
          ),
          choice(
            "'Will the committee approve the plan?' — 'I hope ___.'",
            ["so", "it", "that"],
            0,
            "So replaces the clause after hope.",
          ),
          gap(
            "He promised to return the money, and he ___ so within a week. (do, past simple)",
            ["did"],
            "Do so replaces a verb phrase in formal English: he did so.",
          ),
          choice(
            "Which sentence is the most natural and concise?",
            [
              "She said she would visit, and she visited.",
              "She said she would visit, and she did.",
              "She said she would visit, and she did visit that.",
            ],
            1,
            "Ellipsis with the auxiliary did avoids repeating the verb.",
          ),
          gap(
            "'Has everybody finished?' — 'I'm afraid ___.' (negative)",
            ["not"],
            "I'm afraid not replaces a negative clause.",
          ),
          choice(
            "The two candidates were equally qualified; ___ had more experience, but ___ had better references.",
            ["the first … the last", "the former … the latter", "this … that one"],
            1,
            "The former/the latter refer back to two items in order.",
          ),
          choice(
            "'Which jacket do you prefer?' — 'The ___ in the window.'",
            ["ones", "it", "one"],
            2,
            "One replaces the singular countable noun jacket.",
          ),
          gap(
            "Such ___ the intensity of the storm that all flights were cancelled. (be, past)",
            ["was"],
            "Inverted structure with such: Such was the intensity of the storm that …",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c2-reading-memory-and-places",
    level: "C2",
    category: "Reading",
    topic: "Reading a reflective essay",
    title: "Reading: do places remember us?",
    summary: "Read a reflective essay and interpret implicit meaning, tone and the writer's stance.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "The memory of places",
        before: [
          "Is there a place that always brings back strong memories for you? What do you think triggers them?",
          "Do you think buildings and landscapes can have 'character' or 'memory'?",
        ],
        paragraphs: [
          "It is tempting to say that places remember us. We return to the street of our childhood and feel, almost physically, the pull of years we thought we had forgotten. A stairwell smells of damp stone, a particular window catches the afternoon light, and suddenly we are seven again. It is as though the building had kept something on our behalf.",
          "Yet this is a comforting illusion. Stones do not remember; people do. What we experience on such a return is not the preserved past but a reconstruction, assembled in the present from the fragments of sensation that the place happens to trigger. The psychologist's term is cue-dependent recall, but the phrase hardly captures the poignancy of the experience.",
          "This matters for more than sentimental reasons. When a neighbourhood is demolished or rebuilt, those who lived there often speak of a kind of bereavement, and planners tend to treat such grief as nostalgia, an inconvenient obstacle to progress. If memory resides in us but is anchored in places, however, then the loss of the place is not merely the loss of a backdrop. It is the removal of the cues by which a community knows its own history.",
          "None of this is an argument against change; cities that cannot evolve die in their own way. It is, rather, a plea for the humility to recognise what we demolish when we demolish a street: not just bricks, but the scaffolding on which countless private memories were quietly hung.",
        ],
        glossary: [
          { term: "poignancy", meaning: "a quality that evokes a keen sense of sadness or affection" },
          { term: "bereavement", meaning: "the state of having lost someone close to you through death; here used figuratively" },
          { term: "scaffolding", meaning: "a temporary structure that supports something; here, a framework" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the essay",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What does the writer mean by 'a comforting illusion' in the second paragraph?",
            [
              "The idea that places keep memories is attractive but not literally true.",
              "Returning to childhood places always makes us feel comfortable.",
              "Psychologists have proved that places remember us.",
            ],
            0,
            "The writer says stones do not remember: people do, so the idea of places remembering is an appealing illusion.",
          ),
          choice(
            "According to the writer, what do we really experience when we return to a childhood place?",
            [
              "A faithful copy of the past",
              "A feeling invented by planners",
              "A reconstruction created in the present from cues",
            ],
            2,
            "The experience is a reconstruction assembled in the present from fragments triggered by the place.",
          ),
          choice(
            "What attitude does the writer attribute to planners?",
            [
              "They respect residents' grief.",
              "They regard the grief as sentimental nostalgia that gets in the way.",
              "They are unaware of residents' feelings.",
            ],
            1,
            "Planners treat such grief as nostalgia, 'an inconvenient obstacle to progress'.",
          ),
          choice(
            "What is the writer's main argument in the third paragraph?",
            [
              "Losing a place also removes cues that hold a community's shared memories.",
              "Cities should never be rebuilt.",
              "Nostalgia is dangerous.",
            ],
            0,
            "If memory is anchored in places, the loss removes the cues by which a community knows its history.",
          ),
          choice(
            "What does the writer mean by 'cities that cannot evolve die in their own way'?",
            [
              "Cities should be allowed to die.",
              "Only old cities evolve.",
              "Cities which resist all change also suffer decline.",
            ],
            2,
            "The writer concedes that an inability to change is also a form of death for a city.",
          ),
          choice(
            "How would you describe the tone of the essay?",
            [
              "Angry and accusatory",
              "Amusing and sarcastic",
              "Thoughtful and measured",
            ],
            2,
            "The writer reflects, concedes points and makes a measured plea for humility.",
          ),
          gap(
            "In the final sentence, what do countless private memories hang on, according to the writer? Write one word.",
            ["scaffolding"],
            "The bricks are described as 'the scaffolding on which countless private memories were quietly hung'.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c2-writing-letter-to-editor",
    level: "C2",
    category: "Writing",
    topic: "Writing a letter to the editor",
    title: "Writing: a letter responding to an article",
    summary: "Write a persuasive, formal letter that takes a position and engages with the original argument.",
    minutes: 35,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "You have read an article in an English-language newspaper claiming that learning foreign languages is becoming unnecessary because of automatic translation. Write a letter to the editor responding to this view. Summarise the writer's argument, explain where you agree or disagree, and make a reasoned case for your own position.",
        wordGuide: "A class guide: about 280 to 320 words. This is not an exam rule.",
        planning: [
          "Open by referring to the article and stating your position clearly.",
          "Paragraph 2: summarise the writer's argument fairly and acknowledge any valid points.",
          "Paragraphs 3 and 4: develop your own arguments with specific examples; anticipate a counter-argument and respond to it.",
          "Close with a firm but courteous final point. Use a formal register and sign off correctly (Yours faithfully if you began Dear Sir or Madam).",
        ],
        usefulLanguage: [
          "I am writing in response to your article '…' (…), whose central claim is that …",
          "While there is some force in the argument that …, it overlooks …",
          "It would be naive to suppose that …",
          "Far from rendering … obsolete, … if anything, …",
          "Even the most sophisticated software cannot replicate …",
          "To dismiss … on the grounds that … is to confuse … with …",
          "I would urge your readers to consider …",
        ],
        checklist: [
          "I referred to the article and stated my position.",
          "I presented the opposing argument fairly and then responded.",
          "I used a formal, precise register and a persuasive tone.",
          "I used ellipsis, inversion and reference words to connect ideas.",
          "I included at least two concrete examples or illustrations.",
          "I ended with a memorable final point and the correct sign-off.",
        ],
        model: [
          "Dear Sir or Madam,",
          "I am writing in response to your recent article on automatic translation, whose central claim is that learning foreign languages is fast becoming a luxury. While there is some force in the argument that software can now handle most everyday exchanges, I believe it confuses convenience with communication.",
          "It would be naive to suppose that an app can do more than convert words. A translation tool can tell me what a menu says; it cannot tell me why the waiter smiles when I attempt a local expression. Nor can it capture the humour, hesitation or politeness that give a conversation its meaning. Such nuances are learned only through effort, and only those who have made that effort can appreciate them.",
          "Moreover, the article overlooks the cognitive and cultural benefits of learning. Studies have repeatedly linked bilingualism with improved attention, and those who study another language gain a perspective on their own that no software can offer. Far from making language skills obsolete, technology has, if anything, raised their value: as routine translation is automated, employers prize people who can interpret meaning rather than merely decode it.",
          "Of course, translation tools are invaluable, and nobody would suggest abandoning them. To dismiss the study of languages on that ground, however, is to mistake a convenient tool for a substitute. I would urge your readers to consider what is lost when we outsource not only the words but the understanding.",
          "Yours faithfully,",
          "A. Navarro",
        ],
        modelNotes: [
          "It states the position, acknowledges the opposing view, then responds with developed arguments.",
          "It shows ellipsis and substitution ('Such nuances', 'only those who have made that effort') and inversion ('Nor can it capture …').",
          "It uses precise, formal vocabulary: overlooks, obsolete, outsource, decode.",
          "It ends with a firm point and the correct sign-off for Dear Sir or Madam.",
        ],
        assessment: [
          "Does the letter respond fully to the article and take a clear position?",
          "Is the argument well organised and convincing, with examples?",
          "Is the register appropriate for a newspaper readership?",
          "Is there a wide range of grammatical structures, used accurately?",
          "Is vocabulary precise, with natural collocations and few errors?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "c2-speaking-abstract-discussion",
    level: "C2",
    category: "Speaking",
    topic: "Abstract discussion",
    title: "Speaking: sustained discussion of abstract ideas",
    summary: "Discuss an abstract question in depth, qualifying claims, exploring implications and responding to challenge.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Discuss an abstract question",
        setup: "Work with a partner. Choose a question below and talk for three minutes. The partner should challenge at least once. Aim to develop your ideas, not simply list them.",
        prompts: [
          { label: "Question 1", text: "To what extent is it possible to be truly objective when we read the news?" },
          { label: "Question 2", text: "Do we have a duty to preserve languages that are disappearing, or should languages be allowed to evolve naturally?" },
          { label: "Question 3", text: "Is public transport a right or a service, and who should pay for it?" },
          { label: "Challenge", text: "Partner: Respond with a counter-argument or ask a probing question, such as 'Isn't that a rather idealistic view?' or 'What would you say to someone who argued the opposite?'" },
        ],
        usefulLanguage: [
          "It depends to a large extent on what one understands by …",
          "One could argue that …, although this overlooks …",
          "That is a fair point, but it presupposes that …",
          "I would qualify that by saying that …",
          "The implications of this go well beyond …",
          "Be that as it may, … / Granted, … / Having said that, …",
          "If one takes that line of argument to its logical conclusion, …",
        ],
        steps: [
          "Define the key term in your first sentence to show control of the topic.",
          "Develop one idea fully before moving to the next, with an example.",
          "Accept a challenge gracefully before you answer it.",
          "Vary your register and rhythm: short, emphatic sentences are as effective as long, complex ones.",
          "Finish with a point that leaves the discussion open.",
        ],
        checklist: [
          "I qualified and nuanced my claims rather than speaking in absolutes.",
          "I responded directly to my partner's challenge.",
          "I used a range of discourse markers.",
          "I used idiomatic language and precise vocabulary naturally.",
          "My delivery was fluent, with appropriate stress and intonation.",
        ],
        model: {
          title: "Model answer (transcript)",
          lines: [
            "Q: To what extent is it possible to be truly objective when we read the news? — A: It depends to a large extent on what one understands by 'objective'. If we mean free from any perspective, then I would say it is simply unattainable, because every editor must decide what to include and what to leave out.",
            "Partner: Isn't that a rather cynical view? — A: Granted, it sounds bleak, but I would qualify it by saying that awareness of bias is itself a form of objectivity. A reader who compares several sources and asks who benefits from a story is, in practice, a good deal more objective than one who believes the news is neutral.",
            "If one takes that line of argument to its logical conclusion, the real skill is not finding the unbiased source but learning to read critically across all of them.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c2-revision-mixed-2",
    level: "C2",
    category: "Revision",
    topic: "Mixed C2 revision",
    title: "C2 mixed revision 2",
    summary: "Twelve mixed questions on ellipsis and substitution, inversion, register, idioms and precise vocabulary.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the C2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "The committee demanded that the report ___ withdrawn.",
            ["be", "is", "was"],
            0,
            "The subjunctive after demand: that the report be withdrawn.",
          ),
          choice(
            "'Did she apologise?' — 'She ___, but only under pressure.'",
            ["was", "did", "done"],
            1,
            "Ellipsis with the auxiliary: She did (apologise).",
          ),
          gap(
            "Under no circumstances ___ the doors be opened during the flight. (should)",
            ["should"],
            "Inversion after a negative adverbial: Under no circumstances should the doors be opened.",
          ),
          choice(
            "Choose the idiom that means 'to reveal a secret by accident'.",
            ["to break the ice", "to spill the beans", "to bite the bullet"],
            1,
            "To spill the beans means to reveal a secret by accident.",
          ),
          choice(
            "Which word is the most formal? 'The company decided to ___ the contract.'",
            ["end", "stop", "terminate"],
            2,
            "Terminate is the most formal of the three.",
          ),
          gap(
            "It's high time we ___ a decision. (make)",
            ["made"],
            "It's high time + past simple: made.",
          ),
          choice(
            "Little ___ she know that the decision would change her life.",
            ["did", "does", "has"],
            0,
            "Little at the start of a sentence is followed by inversion: Little did she know.",
          ),
          choice(
            "The new policy is, ___, a step in the right direction.",
            ["by large", "at large by", "by and large"],
            2,
            "By and large means on the whole.",
          ),
          gap(
            "I'd rather you ___ tell anyone about this. (not, past form)",
            ["didn't", "did not"],
            "I'd rather + subject + past simple: I'd rather you didn't tell anyone.",
          ),
          choice(
            "The two reports differ: ___ is based on interviews, ___ on statistics.",
            ["this … that", "the former … the latter", "one … another one"],
            1,
            "The former and the latter refer back to two items in order.",
          ),
          choice(
            "Which word best completes the sentence? His speech was full of ___, saying a great deal and meaning very little.",
            ["platitudes", "precision", "candour"],
            0,
            "Platitudes are overused remarks that sound meaningful but are not.",
          ),
          gap(
            "No sooner ___ she sat down than the phone rang. (have)",
            ["had"],
            "No sooner + had + subject + past participle + than.",
          ),
        ],
      },
    ],
  },
];
