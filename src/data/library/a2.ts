import { choice, gap } from './helpers';
import type { StudyUnit } from './types';

export const a2Units: StudyUnit[] = [
  // ───────────────────────── Grammar ─────────────────────────
  {
    key: "a2-grammar-present-perfect",
    level: "A2",
    category: "Grammar",
    topic: "Present perfect",
    title: "Present perfect: experience and news",
    summary: "Talk about things you have done in your life and news that matters now.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "How the present perfect works",
        intro: "We use the present perfect to connect the past with now. We do not say exactly when something happened.",
        points: [
          {
            title: "Form: have or has + past participle",
            text: "The past participle of regular verbs ends in -ed. Many common verbs are irregular, so learn them as you meet them.",
            examples: [
              "I have visited London twice.",
              "She has finished her homework.",
              "They haven't seen that film.",
              "Have you ever eaten paella?",
            ],
          },
          {
            title: "Experience: ever and never",
            text: "Use ever in questions about your life so far. Use never when the answer is 'not once'.",
            examples: [
              "Have you ever ridden a horse?",
              "Yes, I have. / No, I haven't.",
              "I have never ridden a horse.",
            ],
          },
          {
            title: "News: just, already and yet",
            text: "Just means a very short time ago. Already means earlier than expected. Yet goes at the end of questions and negative sentences.",
            examples: [
              "I've just finished my project.",
              "He's already left.",
              "Have you done your homework yet?",
              "We haven't eaten yet.",
            ],
          },
          {
            title: "Been and gone",
            text: "Has been means someone went and came back. Has gone means someone went and is still there.",
            examples: [
              "Maria has been to Italy. (She is back now.)",
              "Maria has gone to Italy. (She is there now.)",
            ],
          },
        ],
        table: {
          caption: "Some common irregular verbs",
          head: ["Infinitive", "Past simple", "Past participle"],
          rows: [
            ["be", "was / were", "been"],
            ["do", "did", "done"],
            ["eat", "ate", "eaten"],
            ["go", "went", "gone / been"],
            ["see", "saw", "seen"],
            ["write", "wrote", "written"],
            ["buy", "bought", "bought"],
          ],
        },
        watchOut: [
          "Do not use the present perfect with a finished time such as yesterday or last week. Say: I saw her yesterday.",
          "Short forms are normal in speech: I've, she's, they've, haven't, hasn't. 'S can mean is or has: She's finished = She has finished.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        intro: "Decide on your answer before you show it.",
        items: [
          {
            prompt: "I ___ (see) that film last night. Past simple or present perfect?",
            answer: "saw",
            why: "Last night is a finished time, so we use the past simple.",
          },
          {
            prompt: "Have you ___ (be) to Scotland? Which form of be do we need?",
            answer: "been",
            why: "The question is about experience, so we use have + past participle. The past participle of be is been.",
          },
          {
            prompt: "My sister isn't here. She ___ to Berlin. (has gone or has been?)",
            answer: "has gone",
            why: "She went to Berlin and she is still there, so we use has gone. Has been would mean that she has come back.",
          },
          {
            prompt: "We haven't finished our homework ___. (yet or already?)",
            answer: "yet",
            why: "Yet goes at the end of negative sentences and questions. Already is used in positive sentences.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Now try it yourself",
        questions: [
          choice(
            "Have you ever ___ a horse?",
            ["ride", "rode", "ridden"],
            2,
            "After have we use the past participle. The past participle of ride is ridden. Rode is the past simple.",
          ),
          gap(
            "I ___ my keys. I can't open the door. (lose)",
            ["have lost", "'ve lost"],
            "The problem exists now (I can't open the door), so we use the present perfect: have lost or 've lost.",
            "Use the present perfect (have + past participle).",
          ),
          choice(
            "Sofia isn't here. She has ___ to the shop and will be back soon.",
            ["gone", "been", "went"],
            0,
            "Has gone means she went and she is still away. Went is the past simple and cannot follow has.",
          ),
          gap(
            "They ___ their dinner yet. (not / finish)",
            ["haven't finished", "have not finished", "'ve not finished"],
            "With yet in a negative sentence we use the present perfect: haven't finished. The full form have not finished is also correct.",
            "Use the present perfect negative.",
          ),
          choice(
            "I've ___ finished my essay, so I can relax now.",
            ["yet", "already", "ever"],
            1,
            "Already is used in a positive sentence for something done. Yet belongs in questions and negatives. Ever is used in questions about experience.",
          ),
          choice(
            "Which sentence about losing a phone is correct?",
            [
              "I have lost my phone yesterday.",
              "I lost my phone yesterday.",
              "I have losing my phone yesterday.",
            ],
            1,
            "Yesterday is a finished time, so we use the past simple: I lost my phone yesterday.",
          ),
          gap(
            "Has she ___ her email yet? (write)",
            ["written"],
            "After has we need the past participle. The past participle of write is written.",
          ),
          choice(
            "We ___ to the cinema last Saturday.",
            ["have been", "have gone", "went"],
            2,
            "Last Saturday is a finished time, so we use the past simple: went.",
          ),
        ],
      },
    ],
  },
  {
    key: "a2-grammar-comparatives-superlatives",
    level: "A2",
    category: "Grammar",
    topic: "Comparatives and superlatives",
    title: "Comparing things: bigger, the best, as tall as",
    summary: "Compare people, places and things with -er, more, the -est and as … as.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Three ways to compare",
        points: [
          {
            title: "Short adjectives: -er and the -est",
            text: "Add -er to compare two things and the + -est for the top of a group. If the adjective ends in one vowel and one consonant, double the consonant. If it ends in -y, change y to i.",
            examples: [
              "Spain is hotter than England.",
              "Today is the hottest day of the year.",
              "This exercise is easier than the last one.",
            ],
          },
          {
            title: "Long adjectives: more and the most",
            text: "Use more and the most with adjectives that have two or more syllables, except those that end in -y.",
            examples: [
              "This book is more interesting than that one.",
              "It is the most expensive hotel in town.",
            ],
          },
          {
            title: "Irregular adjectives",
            text: "Good and bad have their own forms. Learn them as pairs.",
            examples: [
              "My English is better than last year.",
              "That was the worst film I have ever seen.",
            ],
          },
          {
            title: "As … as for things that are equal",
            text: "Use as + adjective + as when two things are the same. Use not as … as when the first thing has less of the quality.",
            examples: [
              "Tom is as tall as Ben.",
              "My bike isn't as fast as yours.",
            ],
          },
        ],
        table: {
          caption: "Comparative and superlative forms",
          head: ["Adjective", "Comparative", "Superlative"],
          rows: [
            ["tall", "taller", "the tallest"],
            ["big", "bigger", "the biggest"],
            ["happy", "happier", "the happiest"],
            ["expensive", "more expensive", "the most expensive"],
            ["good", "better", "the best"],
            ["bad", "worse", "the worst"],
          ],
        },
        watchOut: [
          "Never use more and -er together: say taller, not more taller.",
          "After a comparative, use than. After a superlative, we usually say in or of: the best player in the team.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Madrid is ___ (big) than Murcia.",
            answer: "bigger",
            why: "Big is a short adjective that ends in one vowel and one consonant, so we double the g and add -er.",
          },
          {
            prompt: "This is ___ (good) film I have ever seen.",
            answer: "the best",
            why: "We compare this film with all the others, so we need the superlative. The superlative of good is the best.",
          },
          {
            prompt: "Tom is 1.80 m tall. Ben is 1.80 m tall. Tom is ___ tall ___ Ben.",
            answer: "as … as (as tall as)",
            why: "They are the same height, so we use as + adjective + as.",
          },
          {
            prompt: "This exercise is difficult. The last exercise was easy. This exercise is ___ (difficult) than the last one.",
            answer: "more difficult",
            why: "Difficult has three syllables, so we use more before it, not -er.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Now try it yourself",
        questions: [
          choice(
            "My brother is ___ than me. He is 1.85 m and I am 1.75 m.",
            ["taller", "tall", "more tall"],
            0,
            "Tall is a short adjective, so the comparative is taller. We never use more with a short adjective like tall.",
          ),
          gap(
            "Today is ___ day of the year. (hot)",
            ["the hottest"],
            "We need the superlative with the. Hot ends in one vowel and one consonant, so we double the t: the hottest.",
            "Remember the and watch the spelling.",
          ),
          choice(
            "This exercise is ___ than the last one.",
            ["difficulter", "most difficult", "more difficult"],
            2,
            "Difficult is a long adjective, so we use more difficult. Difficulter does not exist, and most difficult is a superlative.",
          ),
          gap(
            "She is the ___ student in our class. (good)",
            ["best"],
            "The superlative of good is best, and it follows the.",
          ),
          choice(
            "Anna is 16 and her sister is 18. Anna is ___ than her sister.",
            ["older", "younger", "the youngest"],
            1,
            "Sixteen is less than eighteen, so Anna is younger. The youngest is a superlative and cannot be followed by than.",
          ),
          gap(
            "This is the ___ meal I have ever had. (bad)",
            ["worst"],
            "The superlative of bad is worst. Bad has an irregular form.",
          ),
          choice(
            "Which sentence compares a son and his father correctly?",
            [
              "He is taller than his father.",
              "He is more tall than his father.",
              "He is tallest than his father.",
            ],
            0,
            "Use -er with a short adjective and than to compare two people: taller than.",
          ),
          choice(
            "The Nile is one of ___ rivers in the world.",
            ["longer", "the most long", "the longest"],
            2,
            "One of the + superlative is a common pattern. Long is a short adjective, so the superlative is the longest.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Vocabulary ─────────────────────────
  {
    key: "a2-vocabulary-travel-transport",
    level: "A2",
    category: "Vocabulary",
    topic: "Travel and transport",
    title: "Travel and transport",
    summary: "Words and phrases for trains, planes, buses and tickets.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Words you need when you travel",
        points: [
          {
            title: "Ways to travel",
            text: "Use by + the type of transport (no 'a' or 'the'). Say on foot for walking.",
            examples: [
              "We went to Valencia by train.",
              "I go to school by bus.",
              "She goes to work on foot.",
            ],
          },
          {
            title: "Getting on and off",
            text: "Use get on / get off for buses, trains, planes and bikes. Use get in / get out of for cars and taxis.",
            examples: [
              "Please get off the bus at the next stop.",
              "He got into the taxi and closed the door.",
            ],
          },
          {
            title: "At the station or airport",
            text: "These words are very common on signs and in announcements.",
            examples: [
              "The train leaves from platform 3.",
              "Your flight is delayed by one hour.",
              "Check the timetable for the times of the trains.",
              "You must show your passport at the airport.",
            ],
          },
          {
            title: "Useful verbs",
            text: "We catch or miss a train, book a ticket, check in at the airport and arrive at or in a place.",
            examples: [
              "Hurry up or we'll miss the bus!",
              "I've booked two tickets for Saturday.",
              "We arrived at the station ten minutes early.",
            ],
          },
        ],
        table: {
          caption: "Tickets in British English",
          head: ["Word", "Meaning"],
          rows: [
            ["single ticket", "one way only"],
            ["return ticket", "there and back (American English: round-trip)"],
            ["platform", "the place where you wait for a train"],
            ["gate", "the place where you wait to board a plane"],
          ],
        },
        watchOut: [
          "We say on foot, not by foot.",
          "We arrive at a small place such as a station and in a city or country: arrive at the airport, arrive in London.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "The train leaves from ___ 3. (platform or gate?)",
            answer: "platform",
            why: "Passengers wait on a platform for a train. A gate is the place where you wait to board a plane.",
          },
          {
            prompt: "I ran, but the bus left. Did I catch it or miss it?",
            answer: "I missed it.",
            why: "If you arrive too late and the bus has gone, you miss it. If you get on it, you catch it.",
          },
          {
            prompt: "She ___ the bus at the corner. (gets on or gets in?)",
            answer: "gets on",
            why: "We get on a bus, train or plane. We get in a car or a taxi.",
          },
          {
            prompt: "A ticket for a journey in one direction only is a ___ ticket. (single or return?)",
            answer: "single",
            why: "A single ticket is for one way. A return ticket is for the journey there and back.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Now try it yourself",
        questions: [
          choice(
            "We went to Valencia ___ train.",
            ["with", "on", "by"],
            2,
            "We use by with the type of transport: by train, by bus, by car.",
          ),
          choice(
            "The flight was ___ for two hours because of fog.",
            ["delayed", "late", "missed"],
            0,
            "A delayed flight leaves later than planned. We say the flight was delayed, not late for two hours.",
          ),
          gap(
            "You need your ___ to travel to another country. It is a small book with your photo.",
            ["passport"],
            "A passport is the document you show when you travel abroad.",
          ),
          choice(
            "Hurry! We will ___ the train if we don't run.",
            ["lose", "miss", "lack"],
            1,
            "If you arrive too late for a train, you miss it.",
          ),
          gap(
            "Please get ___ the bus at the next stop. (on or off?)",
            ["off"],
            "We get off a bus when we leave it. Get on means to enter it.",
          ),
          choice(
            "I'd like a ___ ticket to Madrid, please. I'm coming back on Sunday.",
            ["single", "return", "free"],
            1,
            "A return ticket covers the journey there and back. A single ticket is only one way.",
          ),
          choice(
            "Where can I check the times of the trains? Look at the ___.",
            ["luggage", "platform", "timetable"],
            2,
            "A timetable shows the times of buses, trains and flights.",
          ),
          gap(
            "We arrived ___ the station ten minutes early. (at or in?)",
            ["at"],
            "We arrive at a small place such as a station, an airport or a hotel.",
          ),
        ],
      },
    ],
  },
  {
    key: "a2-vocabulary-health-body",
    level: "A2",
    category: "Vocabulary",
    topic: "Health and the body",
    title: "Health and the body",
    summary: "Describe common problems, give simple advice and understand the doctor.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Talking about health",
        points: [
          {
            title: "Common problems",
            text: "Use have + a / an for most illnesses. Use my … hurts for a part of the body.",
            examples: [
              "I have a headache.",
              "She has a sore throat and a cough.",
              "My back hurts.",
              "He feels sick.",
            ],
          },
          {
            title: "Asking and answering",
            text: "Doctors and friends ask What's the matter? or What's wrong? Answer with the problem.",
            examples: [
              "What's the matter? — I have a temperature.",
              "I don't feel well.",
            ],
          },
          {
            title: "Advice with should and shouldn't",
            text: "Use should + base verb to give advice. Use shouldn't for advice not to do something.",
            examples: [
              "You should drink a lot of water.",
              "You shouldn't go to school today.",
            ],
          },
          {
            title: "At the doctor's and the pharmacy",
            text: "Learn these words for visits to the doctor.",
            examples: [
              "I've got an appointment at ten o'clock.",
              "The doctor gave me a prescription.",
              "You can buy medicine at the pharmacy.",
            ],
          },
        ],
        watchOut: [
          "In British English the shop for medicine is the chemist's or the pharmacy.",
          "We say I have a cold, but I feel cold when the temperature is low. They are different.",
        ],
      },
      {
        type: "guided",
        heading: "Think first, then check",
        items: [
          {
            prompt: "Complete the advice: You have a high temperature. You ___ stay in bed. (should or shouldn't?)",
            answer: "should",
            why: "Resting is good advice for a high temperature, so we use should.",
          },
          {
            prompt: "Which word fits? My ___ hurts, so I can't eat. (tooth or toe?)",
            answer: "tooth",
            why: "A problem with teeth stops you eating comfortably. We can also say I have a toothache.",
          },
          {
            prompt: "The doctor writes a note for medicine. What is the note called?",
            answer: "a prescription",
            why: "A prescription tells the pharmacy which medicine to give you.",
          },
        ],
      },
      {
        type: "practice",
        heading: "Now try it yourself",
        questions: [
          choice(
            "I ate too much at the party and now my ___ hurts.",
            ["stomach", "ear", "knee"],
            0,
            "Eating too much usually gives you a stomachache, so it is my stomach that hurts.",
          ),
          choice(
            "You have a high temperature. You ___ stay at home today.",
            ["shouldn't", "can't", "should"],
            2,
            "Should gives advice. Staying at home is sensible when you are ill, so we use should.",
          ),
          gap(
            "You can buy medicine at the ___. (It is also called the chemist's.)",
            ["pharmacy", "chemist", "chemist's", "chemists"],
            "A pharmacy, or chemist's in British English, is the shop where you buy medicine.",
          ),
          choice(
            "The doctor gave me a ___ for the medicine.",
            ["appointment", "prescription", "temperature"],
            1,
            "A prescription is the paper from the doctor for medicine. An appointment is a planned visit.",
          ),
          gap(
            "I fell off my bike and I think I have ___ my leg. (break)",
            ["broken"],
            "After have we need the past participle. The past participle of break is broken.",
          ),
          choice(
            "You ___ eat so many sweets. They are bad for your teeth.",
            ["shouldn't", "should", "will"],
            0,
            "Shouldn't gives negative advice: it is better not to do it.",
          ),
          choice(
            "The doctor says 'What's the matter?' This means:",
            ["Where are you from?", "What is your job?", "What is the problem?"],
            2,
            "What's the matter? is a common way to ask what is wrong.",
          ),
          gap(
            "She keeps coughing because she has a bad ___.",
            ["cough", "cold"],
            "Both words fit: a bad cough or a bad cold can make you keep coughing.",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Reading ─────────────────────────
  {
    key: "a2-reading-email-from-hannah",
    level: "A2",
    category: "Reading",
    topic: "Reading an informal email",
    title: "Reading: an email about weekend plans",
    summary: "Read a friendly email and find the main points and the details.",
    minutes: 12,
    status: "draft",
    blocks: [
      {
        type: "reading",
        title: "An email from Hannah",
        before: [
          "Look at the title. What do you think the email is about?",
          "Do you write emails to friends in English? What do you usually write about?",
        ],
        paragraphs: [
          "Hi Marta,",
          "Thanks for your message! I'm sorry I haven't written for a few weeks. I've been very busy with exams, but I've finally finished them, so now I can relax.",
          "Next weekend we're going to stay at my uncle's house near the lake. My cousin Jack is coming too. He's seventeen and he's really funny. We are going to leave on Friday after school and we'll take the train, because it's cheaper than the bus.",
          "On Saturday we're going to rent a boat. I've never done that before, so I'm a bit nervous! On Sunday morning we'll have a long breakfast and then we'll walk around the lake. We'll come home on Sunday evening.",
          "Would you like to come with us? There's plenty of room, and my uncle is a great cook. Let me know by Wednesday, because we need to buy the tickets.",
          "Love,",
          "Hannah",
        ],
        glossary: [
          { term: "relax", meaning: "to rest and stop worrying" },
          { term: "rent", meaning: "to pay money to use something for a short time" },
          { term: "nervous", meaning: "a little afraid or worried" },
          { term: "plenty of", meaning: "more than enough" },
        ],
      },
      {
        type: "practice",
        heading: "Understanding the email",
        intro: "Choose the best answer. Go back to the text to check.",
        questions: [
          choice(
            "Why hasn't Hannah written for a few weeks?",
            ["She was ill.", "She was on holiday.", "She has been busy with exams."],
            2,
            "Hannah says: 'I've been very busy with exams'.",
          ),
          choice(
            "How are they going to travel to the lake?",
            ["By train", "By bus", "By car"],
            0,
            "The text says: 'we'll take the train'.",
          ),
          choice(
            "Why will they take the train?",
            ["It is faster than the bus.", "It is cheaper than the bus.", "Jack doesn't like buses."],
            1,
            "Hannah says the train is 'cheaper than the bus'. The text does not mention speed or Jack's opinion.",
          ),
          choice(
            "What has Hannah never done before?",
            ["Walked around a lake", "Rented a boat", "Stayed with her uncle"],
            1,
            "She says 'we're going to rent a boat' and then 'I've never done that before'. That refers to renting a boat.",
          ),
          choice(
            "What does Hannah want Marta to do by Wednesday?",
            [
              "Buy her own ticket",
              "Send photos of the lake",
              "Tell her if she can come",
            ],
            2,
            "Hannah asks 'Would you like to come with us?' and wants an answer by Wednesday because they must buy tickets.",
          ),
          choice(
            "In the text, 'relax' means:",
            ["rest and stop worrying", "work hard", "travel far"],
            0,
            "Hannah has finished her exams, so now she can rest. Relax means to rest and stop worrying.",
          ),
          choice(
            "True, false or not stated? 'Hannah's uncle cooks very well.'",
            ["False", "Not stated", "True"],
            2,
            "The text says: 'my uncle is a great cook'. That means he cooks very well.",
          ),
          choice(
            "True, false or not stated? 'Marta has already agreed to go.'",
            ["True", "False", "Not stated"],
            1,
            "Hannah is still asking: 'Would you like to come with us?' Marta has not agreed yet.",
          ),
          gap(
            "What is Jack to Hannah? Write one word.",
            ["cousin", "her cousin", "a cousin"],
            "Hannah says: 'My cousin Jack is coming too.'",
          ),
        ],
      },
    ],
  },

  // ───────────────────────── Writing ─────────────────────────
  {
    key: "a2-writing-invitation-email",
    level: "A2",
    category: "Writing",
    topic: "Informal email",
    title: "Writing: an email inviting a friend",
    summary: "Write a short, friendly email with all the information your friend needs.",
    minutes: 20,
    status: "draft",
    blocks: [
      {
        type: "writing",
        task: "It is your birthday next Saturday. Write an email to an English-speaking friend called Tom. Invite him to your party. Say when and where the party is, what you are going to do, and what Tom should bring.",
        wordGuide: "A class guide: about 60 to 80 words. This is not an exam rule.",
        planning: [
          "Start with Hi Tom, and finish with a friendly ending and your name.",
          "Paragraph 1: say what the party is for and when and where it is.",
          "Paragraph 2: say what you are going to do and what Tom should bring.",
          "Finish by asking him to reply.",
        ],
        usefulLanguage: [
          "I'm having a party on …",
          "It starts at … and finishes at …",
          "We're going to …",
          "Please bring …",
          "Can you come? Let me know.",
          "See you soon! / Best wishes,",
        ],
        checklist: [
          "I answered all the questions: when, where, what we will do and what to bring.",
          "I used a greeting and an ending.",
          "I used and, but or because at least once.",
          "I used going to or the present continuous for plans.",
          "I checked spelling and capital letters.",
        ],
        model: [
          "Hi Tom,",
          "I'm having a party for my birthday next Saturday at my house. It starts at six o'clock and finishes at ten. Can you come?",
          "My mum is making pizza and a big cake. We're going to listen to music and play games in the garden if the weather is good. Please bring your guitar!",
          "Let me know if you can come.",
          "See you soon,",
          "Carla",
        ],
        modelNotes: [
          "It answers every point in the task: when, where, activities and what to bring.",
          "It uses plans language: I'm having, we're going to, my mum is making.",
          "It uses simple linking: and, if. A longer answer could add because or but.",
          "The tone is friendly: Hi Tom, Please bring your guitar!, See you soon.",
        ],
        assessment: [
          "Does the email include all the information in the task?",
          "Is the message easy to follow, with a clear start and ending?",
          "Are the verb forms for plans correct, for example going to + verb?",
          "Is the language friendly and suitable for a friend?",
          "Are spelling and punctuation mostly accurate?",
        ],
      },
    ],
  },

  // ───────────────────────── Speaking ─────────────────────────
  {
    key: "a2-speaking-about-you-free-time",
    level: "A2",
    category: "Speaking",
    topic: "Personal questions and free time",
    title: "Speaking: about you and your free time",
    summary: "Answer personal questions with reasons and ask a partner questions back.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "speaking",
        heading: "Talk about yourself",
        setup: "Practise with a partner, a family member or on your own. Answer each question with two or three sentences. Do not stop after yes or no.",
        prompts: [
          { label: "Free time", text: "What do you like doing at the weekend? Why?" },
          { label: "Routine", text: "What time do you get up on school days? What do you do in the evening?" },
          { label: "Past", text: "What did you do last weekend?" },
          { label: "Plans", text: "What are you going to do next summer?" },
          { label: "Ask your partner", text: "Ask three questions back. For example: What about you? Do you like …? Where do you …?" },
        ],
        usefulLanguage: [
          "I usually … / I often … / I sometimes …",
          "I like … because …",
          "At the weekend I … with my friends.",
          "Last weekend I …",
          "I'm going to …",
          "What about you?",
        ],
        steps: [
          "Read the question and think for ten seconds.",
          "Answer with at least two sentences: an answer and a reason or an example.",
          "Say it again, slowly and clearly.",
          "If you can, record yourself on your phone and listen.",
        ],
        checklist: [
          "I gave a reason or an example, not just yes or no.",
          "I used the right tense: usually for routine, last weekend for past, going to for plans.",
          "I spoke clearly, not too fast.",
          "I asked my partner at least one question.",
        ],
        model: {
          title: "Model answers (transcript)",
          lines: [
            "Q: What do you like doing at the weekend? Why? — A: I like going to the beach with my friends because it's relaxing and we can play volleyball. Sometimes I stay at home and watch films too.",
            "Q: What did you do last weekend? — A: Last weekend I visited my grandparents. We had lunch together and then I helped my grandfather in the garden. It was really nice.",
            "Q: What are you going to do next summer? — A: I'm going to spend two weeks in a language camp. I'm going to meet new people and speak English every day. What about you?",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Everyday English ─────────────────────────
  {
    key: "a2-everyday-cafe-and-tickets",
    level: "A2",
    category: "Everyday English",
    topic: "Ordering and paying",
    title: "Everyday English: ordering food and buying tickets",
    summary: "Ask politely, understand what people say to you and pay.",
    minutes: 15,
    status: "draft",
    blocks: [
      {
        type: "explain",
        heading: "Polite language for shops, cafés and stations",
        points: [
          {
            title: "Asking for things politely",
            text: "Use Can I have …? or Could I have …? and add please. I'd like … is also polite. Do not use only the name of the thing.",
            examples: [
              "Can I have a coffee, please?",
              "Could I have the bill, please?",
              "I'd like a cheese sandwich, please.",
            ],
          },
          {
            title: "What staff often say to you",
            text: "Learn to understand these questions and answer them.",
            examples: [
              "Are you ready to order?",
              "Would you like something to drink?",
              "Anything else? — No, that's all, thanks.",
              "Eat in or take away?",
            ],
          },
          {
            title: "Prices and paying",
            text: "Ask How much is it? or How much are they? and answer with the price. Ask Do you take cards? if you want to pay by card.",
            examples: [
              "How much is the coffee? — It's two euros fifty.",
              "That's six euros, please.",
              "Can I pay by card?",
            ],
          },
          {
            title: "Buying a ticket",
            text: "Say where you want to go and what kind of ticket you need.",
            examples: [
              "A return ticket to Madrid, please.",
              "What time is the next train to Valencia?",
              "Which platform does it leave from?",
            ],
          },
        ],
        watchOut: [
          "Please makes a request polite. Give me a coffee sounds rude.",
          "In British English a take-away meal is food you carry out. In American English it is called takeout.",
        ],
      },
      {
        type: "practice",
        heading: "Choose the best language",
        questions: [
          choice(
            "Waiter: Are you ready to order? You: Yes, I ___ a cheese sandwich, please.",
            ["would like", "am liking", "liking"],
            0,
            "I would like (I'd like) is a polite way to order. Like is not used in the continuous form here.",
          ),
          choice(
            "Customer: How much ___ the coffee? Waiter: It's two euros.",
            ["are", "does", "is"],
            2,
            "Coffee is singular, so we say How much is the coffee?",
          ),
          choice(
            "Which is the most polite way to ask for water?",
            ["Give me water.", "I want water now.", "Could I have some water, please?"],
            2,
            "Could I have … , please? is polite. The other sentences sound like orders.",
          ),
          gap(
            "Waiter: Anything ___? You: No, that's all, thanks.",
            ["else"],
            "Anything else? is the usual question when a customer has finished ordering.",
          ),
          choice(
            "Waiter: ___ you like something to drink?",
            ["Would", "Do", "Are"],
            0,
            "Would you like …? is the polite offer. Do you like …? asks about general taste.",
          ),
          gap(
            "I don't have any cash. Can I pay by ___? (It is a plastic card.)",
            ["card"],
            "We pay by card or by cash.",
          ),
          choice(
            "'Do you take cards?' means:",
            ["Can I take your card?", "Can I pay with a card?", "Do you like cards?"],
            1,
            "Do you take cards? is a question to the shop about whether they accept card payments.",
          ),
          choice(
            "At the station: 'A ___ to Madrid, please.' 'Single or return?'",
            ["timetable", "ticket", "platform"],
            1,
            "You buy a ticket. The timetable shows times and the platform is where you wait for the train.",
          ),
        ],
      },
      {
        type: "speaking",
        heading: "Role play: at the café",
        setup: "Work with a partner. Student A is the customer. Student B is the waiter. Then swap roles.",
        prompts: [
          { label: "Student A (customer)", text: "You are hungry and thirsty. Order a drink and something to eat. Ask how much it is. Say you want to pay by card." },
          { label: "Student B (waiter)", text: "Welcome the customer. Ask what they would like to eat and drink. Ask if they want anything else. Give the price and answer the question about cards (choose yes or no)." },
        ],
        usefulLanguage: [
          "Can I have …, please?",
          "I'd like …",
          "Would you like …?",
          "Anything else?",
          "How much is that?",
          "Can I pay by card?",
        ],
        steps: [
          "Read your role and plan three sentences.",
          "Act the conversation without reading.",
          "Swap roles and do it again with different food and drink.",
        ],
        checklist: [
          "I said please and thank you.",
          "I asked politely, with Can I have … or I'd like ….",
          "I understood and answered the questions.",
          "I asked about the price.",
        ],
        model: {
          title: "Model conversation (transcript)",
          lines: [
            "Waiter: Hello! Are you ready to order?",
            "Customer: Yes, please. Can I have an orange juice and a chicken sandwich?",
            "Waiter: Of course. Anything else?",
            "Customer: No, that's all, thanks. How much is that?",
            "Waiter: That's six euros fifty, please.",
            "Customer: Can I pay by card?",
            "Waiter: Yes, you can.",
          ],
        },
      },
    ],
  },

  // ───────────────────────── Revision ─────────────────────────
  {
    key: "a2-revision-mixed-1",
    level: "A2",
    category: "Revision",
    topic: "Mixed A2 revision",
    title: "A2 mixed revision 1",
    summary: "Ten mixed questions on present perfect, comparing, travel, health and polite requests.",
    minutes: 10,
    status: "draft",
    blocks: [
      {
        type: "practice",
        heading: "Mixed revision",
        intro: "Each question looks at something from the A2 units. Use the feedback to find what to review.",
        questions: [
          choice(
            "My sister is two years older than me. I am ___ than her.",
            ["the youngest", "more young", "younger"],
            2,
            "Use the comparative with than. Young is a short adjective, so younger.",
          ),
          gap(
            "We ___ the bus because the train was too expensive. (take, past simple)",
            ["took"],
            "The decision happened in the past and we know when (because the train was expensive), so we use the past simple: took.",
          ),
          choice(
            "We haven't booked our tickets ___.",
            ["yet", "already", "ever"],
            0,
            "Yet goes at the end of negative sentences and questions.",
          ),
          choice(
            "I feel terrible. I think I ___ go to the doctor.",
            ["shouldn't", "am", "should"],
            2,
            "Should + base verb gives advice. Going to the doctor is sensible when you feel terrible.",
          ),
          choice(
            "Is this ___ restaurant in town?",
            ["the cheaper", "the cheapest", "more cheap"],
            1,
            "We compare one restaurant with all the others in town, so we need the superlative: the cheapest.",
          ),
          gap(
            "Can I have a ___ ticket, please? I'm coming back on Sunday. (r _ _ _ _ n)",
            ["return"],
            "A return ticket is for a journey there and back.",
          ),
          choice(
            "Which sentence about a dentist visit is correct?",
            [
              "She went to the dentist yesterday.",
              "She has gone to the dentist yesterday.",
              "She has went to the dentist yesterday.",
            ],
            0,
            "Yesterday is a finished time, so we use the past simple: went.",
          ),
          choice(
            "'I'd like a coffee, please.' This is a polite way to:",
            ["pay a bill", "ask for directions", "order a drink"],
            2,
            "I'd like … is a polite way to ask for something, here a coffee.",
          ),
          gap(
            "Be careful! That knife is ___ than this one. (sharp)",
            ["sharper"],
            "Sharp is a short adjective, so the comparative is sharper.",
          ),
          choice(
            "I can't eat anything because my teeth hurt. I have a bad ___.",
            ["headache", "backache", "toothache"],
            2,
            "A toothache is a pain in a tooth.",
          ),
        ],
      },
    ],
  },
];
