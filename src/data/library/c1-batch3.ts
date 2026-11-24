import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const c1UnitsBatch3: StudyUnit[] = [
  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "c1-vocabulary-economy-business",
    level: "C1",
    category: "Vocabulary",
    topic: "The economy and business",
    title: "The economy and business",
    summary: "Learn precise vocabulary and collocations for economic trends, companies and markets.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "The language of economics and business",
        intro: "At C1 you need collocations and nuance, not only single words. Notice which verbs and adjectives go with each noun.",
        points: [
          {
            title: "Describing economic trends",
            text: "Learn the verbs and adjectives for describing change.",
            examples: [
              "a sharp rise / a steady decline / a sudden drop / a slight recovery",
              "inflation soared / unemployment fell dramatically / prices have stabilised",
              "the economy is in recession / is booming / is slowly recovering",
            ],
          },
          {
            title: "Companies and the market",
            text: "These collocations are common in business texts.",
            examples: [
              "launch a product / enter a new market / gain a competitive edge",
              "make a profit / run at a loss / go bankrupt",
              "take over a rival / merge with another company",
              "cut costs / boost sales / raise capital",
            ],
          },
          {
            title: "Work and finance",
            text: "Words connected with money and management.",
            examples: [
              "invest in shares / diversify your portfolio",
              "a start-up / a multinational / a family-run business",
              "meet targets / exceed expectations / fall short of forecasts",
              "stakeholders / shareholders / consumers",
            ],
          },
          {
            title: "Formal verbs and nouns",
            text: "Prefer these in reports and essays.",
            examples: [
              "boost / stimulate / undermine growth",
              "an upturn / a downturn / a slump",
              "implement a strategy / allocate resources",
            ],
          },
        ],
        table: {
          caption: "Easily confused",
          head: ["Word", "Meaning"],
          rows: [
            ["revenue", "the total money a company receives from sales"],
            ["profit", "the money left after costs are paid"],
            ["turnover", "the total value of goods or services a company sells in a period"],
            ["capital", "money used to start or expand a business"],
          ],
        },
        watchOut: [
          "Do not use rise as a transitive verb: 'The bank raised interest rates' (raise needs an object), 'Interest rates rose'.",
          "Economic is about the economy; economical means cheap or not wasteful: 'an economic crisis' but 'an economical car'.",
        ],
      },
      {
        type: "guided",
        heading: "Think, then check",
        intro: "Choose the best word. Then reveal the answer.",
        items: [
          {
            prompt: "The company's sales ___ the forecast, so the shareholders were pleased. (better than expected)",
            answer: "exceeded",
            why: "Exceed expectations/forecasts means do better than predicted.",
          },
          {
            prompt: "The firm is losing money every year. It is running at a ___.",
            answer: "loss",
            why: "Run at a loss is a fixed phrase.",
          },
          {
            prompt: "Two large banks joined to form one company. They ___.",
            answer: "merged",
            why: "Merge means combine into a single organisation.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Practice: economy and business",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "The government hopes to ___ economic growth by lowering taxes.",
            ["undermine", "decline", "stimulate"],
            2,
            "Stimulate growth means encourage it.",
          ),
          choice(
            "After a sudden ___ in sales, the company laid off fifty workers.",
            ["drop", "boost", "surplus"],
            0,
            "A sudden drop in sales is a fall.",
          ),
          gap(
            "The company launched a new product in order to gain a competitive ___. (starts with e)",
            ["edge"],
            "Competitive edge/advantage is a common collocation.",
          ),
          choice(
            "The economy is slowly ___ after the recession.",
            ["soaring", "recovering", "diversifying"],
            1,
            "Recover means return to a normal state after a difficult time.",
          ),
          choice(
            "Many investors ___ their portfolios to reduce risk.",
            ["undermine", "diversify", "exceed"],
            1,
            "Diversify a portfolio means invest in different things.",
          ),
          gap(
            "The retailer went ___ after failing to pay its debts. (starts with b)",
            ["bankrupt"],
            "Go bankrupt means be unable to pay debts.",
          ),
          choice(
            "The total money a company receives from sales is its ___.",
            ["profit", "capital", "revenue"],
            2,
            "Revenue is the total income from sales.",
          ),
          choice(
            "Which is the most formal way to say 'The economy got worse'?",
            [
              "The economy experienced a downturn.",
              "The economy went downhill.",
              "The economy went bad.",
            ],
            0,
            "Downturn is a formal noun for a worsening of the economy.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "c1-reading-ai-creativity",
    level: "C1",
    category: "Reading",
    topic: "Reading a discursive article",
    title: "Reading: can machines be creative?",
    summary: "Read a discursive article and follow the argument, the writer's attitude and implied meaning.",
    minutes: 18,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "The creative machine",
        before: [
          "What do you understand by 'creativity'? Is it only a human quality?",
          "Have you seen music, pictures or texts produced by a computer? What did you think?",
        ],
        paragraphs: [
          "Few ideas unsettle us as deeply as the suggestion that machines might one day be creative. For centuries, creativity was considered the defining feature of human beings: the spark that separated artists from engineers and humans from tools. Today, software can compose music, paint portraits and write poetry that, in blind tests, many listeners and readers cannot distinguish from human work. It is tempting to conclude that the line has already been crossed.",
          "However, this conclusion depends on how one defines creativity. If creativity means producing something novel and valuable, then machines may qualify. If, on the other hand, it implies intention, emotion or a desire to express something, then they plainly do not. A program that generates a sad melody feels nothing; it merely recombines patterns it has absorbed from thousands of human compositions.",
          "Some argue that this distinction is overrated. After all, human artists also learn by imitation, and many of the most celebrated works draw heavily on existing traditions. Seen in this light, the difference between a machine and a student of music might be one of degree rather than kind. Yet this analogy has its limits. The student has a life, a history and something to say, and it is precisely this that audiences have always valued in art.",
          "Perhaps the more pressing question is not whether machines can be creative but what we will do with the answer. If we begin to prefer cheap, endlessly available imitation to the work of real artists, the economic and cultural consequences could be considerable. In that sense, the debate is less about the nature of machines than about the kind of culture we want to live in.",
        ],
        glossary: [
          { term: "unsettle", meaning: "to make someone feel uneasy or worried" },
          { term: "novel", meaning: "new and different" },
          { term: "analogy", meaning: "a comparison that shows a similarity between two things" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the article",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "What does the writer say about creativity in the first paragraph?",
            [
              "It was never considered important.",
              "It can be measured by tests.",
              "It has always been thought to belong to humans only.",
            ],
            2,
            "Creativity was considered the defining feature of human beings.",
          ),
          choice(
            "What is suggested by 'in blind tests'?",
            [
              "The tests were carried out in the dark.",
              "Participants could not identify which works were made by machines.",
              "The software was tested on blind people.",
            ],
            1,
            "In blind tests, people cannot distinguish the machine's work from human work.",
          ),
          choice(
            "According to the second paragraph, machines may qualify as creative if creativity means …",
            [
              "producing something new and valuable.",
              "feeling emotion.",
              "copying human artists.",
            ],
            0,
            "If it means novel and valuable output, machines may qualify.",
          ),
          choice(
            "What is the writer's attitude to the idea that a machine and a music student differ only in degree?",
            [
              "Completely convinced",
              "Totally dismissive",
              "Partly sympathetic but with reservations",
            ],
            2,
            "The writer acknowledges the point but says the analogy has its limits.",
          ),
          choice(
            "What do audiences value in art, according to the writer?",
            [
              "Technical perfection",
              "Low prices",
              "That the artist has a life and something to say",
            ],
            2,
            "The student 'has a life, a history and something to say', and audiences have always valued this.",
          ),
          choice(
            "What does the writer see as the 'more pressing question'?",
            [
              "How society will respond to machine-made imitation",
              "Whether machines can feel emotion",
              "Who owns computer-generated art",
            ],
            0,
            "The pressing question is what we will do with the answer and the culture we want.",
          ),
          choice(
            "What is the writer's main aim in this article?",
            [
              "To prove that machines are not creative",
              "To explore a complex question without simple answers",
              "To warn people against using software",
            ],
            1,
            "The writer weighs definitions and arguments and ends with a wider cultural question.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "c1-writing-essay-for-against",
    level: "C1",
    category: "Writing",
    topic: "Writing an essay",
    title: "Writing: an essay considering two views",
    summary: "Write a balanced essay that evaluates two viewpoints and reaches a clear conclusion.",
    minutes: 32,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "In your English class you have been talking about technology in education. Your teacher has asked you to write an essay giving your opinion on the following statement: 'Schools should replace printed textbooks with digital devices.' Write your essay, discussing at least two of the points below and giving reasons for your point of view. (a) the cost; (b) the effect on learning; (c) your own idea.",
        wordGuide: "A class guide: about 220 to 260 words. This is not an exam rule.",
        planning: [
          "Introduce the topic without simply repeating the question.",
          "Develop two main points. For each, consider both sides before giving your view.",
          "Use a formal, impersonal style where possible and a range of linking devices.",
          "End with a conclusion that states your opinion clearly.",
        ],
        usefulLanguage: [
          "It is often argued that … / There is a widespread view that …",
          "Proponents of this idea claim that …, whereas critics point out that …",
          "A further consideration is …",
          "While it is true that …, it should also be remembered that …",
          "This is not to say that … / Admittedly, …",
          "On balance, I am inclined to believe that …",
          "In conclusion, … / All things considered, …",
        ],
        checklist: [
          "I introduced the topic and my line of argument.",
          "I discussed at least two points with reasons and examples.",
          "I used a formal register and a range of linkers.",
          "I used advanced structures (inversion, participle clauses, passives).",
          "I stated my opinion clearly in the conclusion.",
          "I checked accuracy, spelling and punctuation.",
        ],
        model: [
          "Technology has transformed almost every area of modern life, and it is often argued that classrooms should follow suit by replacing printed textbooks with digital devices. While there are undeniable advantages, I believe that a complete replacement would be unwise.",
          "The first consideration is cost. Proponents of digital learning claim that tablets are cheaper in the long run, since digital materials are easily updated. However, devices must be bought, maintained and replaced, and schools in less wealthy areas may be unable to afford them. A textbook, by contrast, requires no electricity, no software and no repairs.",
          "A second issue is the effect on learning. Admittedly, interactive tools can make lessons more engaging, and students can access a vast range of information instantly. Nevertheless, research suggests that reading on screens can reduce concentration, and the temptation to open other applications is considerable. Not only do printed books allow deeper reading, but they also remove many distractions.",
          "On balance, I am inclined to believe that schools should use both formats, choosing the one that best suits each task. All things considered, digital devices should supplement, rather than replace, printed textbooks.",
        ],
        modelNotes: [
          "The introduction places the topic in context and states the writer's position.",
          "Each main paragraph presents both sides before giving a view, using linkers such as however, admittedly, nevertheless.",
          "It shows a range of structures: inversion (Not only do printed books allow …), participle phrases, passives.",
          "The conclusion is balanced but clear, and returns to the question.",
        ],
        assessment: [
          "Does the essay address the question, with at least two points and a clear opinion?",
          "Is the structure logical, with effective paragraphing and cohesion?",
          "Is the register consistently formal and appropriate?",
          "Is there a wide range of grammar and vocabulary, used accurately?",
          "Do the ideas show depth rather than only listing points?",
        ],
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "c1-everyday-negotiating-agreement",
    level: "C1",
    category: "Everyday English",
    topic: "Negotiating",
    title: "Everyday English: negotiating and reaching agreement",
    summary: "Make proposals, concede points tactfully and close an agreement.",
    minutes: 16,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Language for negotiation",
        points: [
          {
            title: "Opening your position",
            text: "State what you need clearly and leave room for discussion.",
            examples: [
              "What we would ideally like is …",
              "Our main concern is …",
              "We were hoping to reach an agreement on …",
            ],
          },
          {
            title: "Making and responding to proposals",
            text: "Use conditionals to make proposals tentative and negotiable.",
            examples: [
              "If you could lower the price, we would be prepared to sign for two years.",
              "Would you be willing to consider …?",
              "We could possibly meet you halfway on that.",
              "I'm afraid that wouldn't be feasible for us.",
            ],
          },
          {
            title: "Conceding and compromising",
            text: "Give way on one point to gain another.",
            examples: [
              "We can go along with that, provided that …",
              "That seems fair enough, as long as …",
              "I take your point, but …",
              "Let's agree to differ on that and move on.",
            ],
          },
          {
            title: "Closing the deal",
            text: "Summarise and confirm.",
            examples: [
              "So, to sum up, we've agreed that …",
              "Shall we put that in writing?",
              "Well, I think we have a deal.",
            ],
          },
        ],
        watchOut: [
          "Avoid saying 'No' bluntly. Use softeners: 'I'm afraid that might be difficult'.",
          "Provided that and as long as introduce conditions. Do not use will after them: 'provided that you pay', not 'provided that you will pay'.",
        ],
      },
      {
        type: "practice",
        heading: "Practice: negotiation language",
        intro: "Choose or type the best answer.",
        questions: [
          choice(
            "Which is the most tactful way to refuse?",
            [
              "No way.",
              "I'm afraid that wouldn't be feasible for us.",
              "That's a stupid idea.",
            ],
            1,
            "The softened form is tactful and professional.",
          ),
          choice(
            "'We can agree to that, ___ you deliver on time.'",
            ["unless", "despite", "provided that"],
            2,
            "Provided that introduces a condition.",
          ),
          gap(
            "I take your ___, but I still think we need more time. (a valid argument)",
            ["point"],
            "I take your point means I accept your argument.",
          ),
          choice(
            "Meet someone halfway means …",
            [
              "to compromise by each giving something",
              "to arrive late",
              "to refuse to negotiate",
            ],
            0,
            "To meet halfway is to make a compromise.",
          ),
          gap(
            "To sum ___, we have agreed on the price and the delivery date. (one word)",
            ["up"],
            "To sum up introduces a short summary.",
          ),
          choice(
            "Which sentence uses a conditional to make a tentative proposal?",
            [
              "You must extend the deadline.",
              "We accept and extend the deadline.",
              "If you could extend the deadline, we would be able to accept.",
            ],
            2,
            "If + could, would be able to makes the proposal tentative.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: a business negotiation",
        setup: "Work with a partner. Student A represents a company that wants to rent office space. Student B represents the landlord. Aim to reach an agreement in five minutes. Then swap roles.",
        prompts: [
          { label: "Student A (tenant)", text: "You want a two-year lease at 1,800 euros a month, with the first month free and flexible opening hours. You can offer a larger deposit if necessary." },
          { label: "Student B (landlord)", text: "You want a three-year lease at 2,200 euros a month, with a deposit of two months. You can offer a free month if the lease is three years." },
        ],
        usefulLanguage: [
          "What we would ideally like is …",
          "If you could …, we'd be prepared to …",
          "We could meet you halfway on …",
          "I take your point, but …",
          "provided that / as long as",
          "So, to sum up, we've agreed that …",
        ],
        steps: [
          "Read your role and decide what is essential and what you can concede.",
          "Negotiate, using conditional language.",
          "Summarise the agreement.",
          "Swap roles with different conditions.",
        ],
        checklist: [
          "I stated my position clearly.",
          "I used conditionals for proposals.",
          "I conceded at least one point.",
          "I summarised the agreement.",
          "I stayed polite and tactful.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "A: What we would ideally like is a two-year lease at 1,800 euros a month.",
            "B: I'm afraid that wouldn't be feasible for us. We were hoping for three years at 2,200.",
            "A: If you could lower the rent to 2,000, we would be prepared to sign for three years, provided that the first month is free.",
            "B: I take your point. We could meet you halfway at 2,100, with the first month free.",
            "A: That seems fair enough, as long as the deposit is one month.",
            "B: Agreed. So, to sum up: three years, 2,100 a month, one free month and a one-month deposit.",
            "A: Well, I think we have a deal.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "c1-revision-mixed-3",
    level: "C1",
    category: "Revision",
    topic: "Mixed C1 revision",
    title: "C1 mixed revision 3",
    summary: "Twelve mixed questions on business vocabulary, participle clauses, inversion, formal style and collocations.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the C1 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "Sales ___ expectations, so the board approved a bonus.",
            ["undermined", "exceeded", "diversified"],
            1,
            "Exceed expectations means do better than predicted.",
          ),
          choice(
            "___ the report, she called her manager.",
            ["Having read", "Reading to", "Read"],
            0,
            "The reading came first: having read.",
          ),
          gap(
            "Only after the meeting ___ she realise her mistake. (did)",
            ["did"],
            "After Only after … we invert: did she realise.",
          ),
          choice(
            "The company is believed ___ planning a merger.",
            ["being", "be", "to be"],
            2,
            "Impersonal passive: is believed to be planning.",
          ),
          gap(
            "The two firms decided to ___ and form a single company. (starts with m)",
            ["merge"],
            "Merge means combine.",
          ),
          choice(
            "If it had not been for his advice, I ___ the job.",
            ["would not get", "will not get", "would not have got"],
            2,
            "Third conditional result: would not have got.",
          ),
          choice(
            "It is ___ that unemployment will fall next year.",
            ["by no means certain", "no means certain", "by no mean certain"],
            0,
            "The collocation is by no means certain.",
          ),
          gap(
            "___ with care, the machine will last for years. (use, past participle)",
            ["used"],
            "A passive participle clause with a conditional meaning: Used with care …",
          ),
          choice(
            "What I really need ___ a long holiday.",
            ["are", "is", "have"],
            1,
            "A cleft sentence with what + singular: What I need is a holiday.",
          ),
          choice(
            "Not until she left ___ how much she missed the city.",
            ["she realised", "did she realise", "she did realise"],
            1,
            "After Not until at the start we invert: did she realise.",
          ),
          gap(
            "A company that sells fewer goods than expected has fallen ___ of its forecast. (starts with s)",
            ["short"],
            "Fall short of means fail to reach.",
          ),
          choice(
            "I would rather you ___ anyone about this.",
            ["don't tell", "won't tell", "didn't tell"],
            2,
            "I'd rather + subject + past simple for a present preference.",
          ),
        ],
      },
    ],
  },
];
