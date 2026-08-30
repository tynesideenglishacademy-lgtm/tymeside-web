import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { PRE_ENROLMENT_URL } from '../lib/enrolmentLinks';
import './LevelTest.css';

const ACADEMY_CONFIG = {
  admissionsEmail: "secretaria@tynesideacademy.com",
  testTimePerQuestion: 45 // seconds
};

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LEVEL_DESCRIPTIONS = ["Beginner", "Elementary", "Intermediate", "Upper Intermediate", "Advanced", "Proficiency"];

const QUESTION_BANK: Record<number, any[]> = {
  0: [ // A1
    { q: "I ___ from Spain.", options: ["am", "is", "are", "be"], answer: 0 },
    { q: "___ your name?", options: ["What's", "Who's", "How's", "Why's"], answer: 0 },
    { q: "She ___ a dog.", options: ["have", "has", "having", "is"], answer: 1 },
    { q: "They ___ playing football.", options: ["am", "is", "are", "do"], answer: 2 },
    { q: "I go to work ___ bus.", options: ["in", "on", "by", "with"], answer: 2 },
    { q: "Where ___ you live?", options: ["does", "are", "do", "is"], answer: 2 },
    { q: "My brother ___ like cheese.", options: ["don't", "doesn't", "isn't", "aren't"], answer: 1 },
    { q: "___ is the hospital?", options: ["When", "Who", "Where", "What"], answer: 2 },
    { q: "I have two ___.", options: ["childs", "childrens", "child", "children"], answer: 3 },
    { q: "He works ___ a bank.", options: ["in", "on", "at", "by"], answer: 0 },
    { q: "Can you ___ English?", options: ["speaks", "speak", "speaking", "to speak"], answer: 1 },
    { q: "___ a book on the table.", options: ["There is", "There are", "Is", "Are"], answer: 0 },
    { q: "Look at ___ bird!", options: ["these", "those", "that", "this"], answer: 2 },
    { q: "We usually have lunch ___ 1 o'clock.", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "She is ___ teacher.", options: ["a", "an", "the", "-"], answer: 0 },
    { q: "___ old are you?", options: ["What", "How", "Who", "Which"], answer: 1 },
    { q: "They ___ got a new car.", options: ["has", "have", "are", "is"], answer: 1 },
    { q: "I usually get up ___ 7 am.", options: ["in", "on", "at", "to"], answer: 2 },
    { q: "___ you like coffee?", options: ["Do", "Are", "Does", "Is"], answer: 0 },
    { q: "My favorite color ___ blue.", options: ["are", "am", "is", "be"], answer: 2 }
  ],
  1: [ // A2
    { q: "I ___ to the cinema yesterday.", options: ["go", "went", "going", "gone"], answer: 1 },
    { q: "She is ___ than her brother.", options: ["tall", "taller", "tallest", "more tall"], answer: 1 },
    { q: "Have you ever ___ to Paris?", options: ["be", "been", "was", "went"], answer: 1 },
    { q: "I don't have ___ money.", options: ["some", "many", "any", "no"], answer: 2 },
    { q: "What ___ you doing at 8 PM last night?", options: ["was", "were", "are", "did"], answer: 1 },
    { q: "He usually ___ up early.", options: ["wakes", "wake", "waking", "is waking"], answer: 0 },
    { q: "You ___ smoke in the hospital.", options: ["mustn't", "don't have to", "needn't", "aren't"], answer: 0 },
    { q: "I am going to ___ a cake for her birthday.", options: ["made", "make", "making", "makes"], answer: 1 },
    { q: "We ___ playing tennis when it started to rain.", options: ["was", "were", "are", "did"], answer: 1 },
    { q: "___ much does this shirt cost?", options: ["How", "What", "Who", "Which"], answer: 0 },
    { q: "He drives very ___.", options: ["careful", "carefully", "care", "cared"], answer: 1 },
    { q: "I have known him ___ 5 years.", options: ["since", "for", "in", "from"], answer: 1 },
    { q: "If it rains tomorrow, we ___ stay home.", options: ["would", "will", "are", "do"], answer: 1 },
    { q: "This is the ___ movie I have ever seen.", options: ["worse", "worst", "bad", "most bad"], answer: 1 },
    { q: "They ___ dinner when the phone rang.", options: ["had", "were having", "have", "are having"], answer: 1 },
    { q: "I ___ my keys yesterday.", options: ["lose", "losed", "lost", "loose"], answer: 2 },
    { q: "She ___ to the gym twice a week.", options: ["go", "goes", "going", "is going"], answer: 1 },
    { q: "Can I have ___ water, please?", options: ["any", "some", "many", "few"], answer: 1 },
    { q: "We are meeting ___ Monday morning.", options: ["in", "at", "on", "by"], answer: 2 },
    { q: "There isn't ___ milk in the fridge.", options: ["some", "many", "a", "much"], answer: 3 }
  ],
  2: [ // B1
    { q: "If it rains, we ___ at home.", options: ["stay", "will stay", "would stay", "stayed"], answer: 1 },
    { q: "I've been living here ___ 2015.", options: ["for", "since", "in", "from"], answer: 1 },
    { q: "The letter ___ yesterday.", options: ["was sent", "sent", "is sent", "has sent"], answer: 0 },
    { q: "She asked me where I ___ going.", options: ["am", "was", "have been", "will be"], answer: 1 },
    { q: "I'm looking forward ___ you.", options: ["to seeing", "to see", "seeing", "see"], answer: 0 },
    { q: "You ___ better see a doctor.", options: ["should", "had", "would", "ought"], answer: 1 },
    { q: "I ___ to play football every weekend when I was young.", options: ["used", "was used", "am used", "use"], answer: 0 },
    { q: "That is the man ___ car was stolen.", options: ["who", "which", "whose", "whom"], answer: 2 },
    { q: "By the time we arrived, the film ___.", options: ["started", "had started", "was starting", "has started"], answer: 1 },
    { q: "She ___ her hair cut yesterday.", options: ["has", "have", "had", "was having"], answer: 2 },
    { q: "Although he was tired, he ___ working.", options: ["kept", "stopped", "prevented", "avoided"], answer: 0 },
    { q: "The letter ___ sent two days ago.", options: ["was", "is", "has been", "had"], answer: 0 },
    { q: "If I had more time, I ___ learn French.", options: ["will", "would", "can", "may"], answer: 1 },
    { q: "By the time we arrived, the movie ___ already started.", options: ["has", "had", "was", "is"], answer: 1 },
    { q: "He suggested ___ to the museum.", options: ["go", "to go", "going", "went"], answer: 2 },
    { q: "I'm not used to ___ up so early.", options: ["get", "getting", "got", "to get"], answer: 1 },
    { q: "The man ___ car was stolen called the police.", options: ["who", "whose", "whom", "which"], answer: 1 },
    { q: "You ___ bring an umbrella; it's not going to rain.", options: ["needn't", "mustn't", "can't", "couldn't"], answer: 0 },
    { q: "She asked me where I ___.", options: ["lived", "live", "am living", "have lived"], answer: 0 },
    { q: "I wish I ___ a bigger house.", options: ["have", "had", "will have", "would have"], answer: 1 },
    { q: "He apologized ___ being late.", options: ["for", "of", "about", "to"], answer: 0 },
    { q: "Neither John ___ Mary came to the meeting.", options: ["or", "nor", "and", "but"], answer: 1 },
    { q: "I'd rather you ___ do that.", options: ["don't", "didn't", "not", "won't"], answer: 1 },
    { q: "The cake was ___ delicious that I ate two pieces.", options: ["so", "such", "very", "too"], answer: 0 },
    { q: "He succeeded ___ passing the exam.", options: ["in", "on", "at", "by"], answer: 0 }
  ],
  3: [ // B2
    { q: "Had I known about the party, I ___ attended.", options: ["would have", "will have", "had", "would"], answer: 0 },
    { q: "She insisted on ___ the bill.", options: ["pay", "to pay", "paying", "paid"], answer: 2 },
    { q: "The report needs ___ by tomorrow morning.", options: ["finish", "to finish", "finishing", "finished"], answer: 2 },
    { q: "It's high time you ___ studying.", options: ["start", "started", "starting", "to start"], answer: 1 },
    { q: "I would rather you ___ here.", options: ["don't smoke", "didn't smoke", "not smoke", "won't smoke"], answer: 1 },
    { q: "We had the car ___ yesterday.", options: ["repair", "to repair", "repaired", "repairing"], answer: 2 },
    { q: "I can't make ___ what it says on this sign.", options: ["up", "out", "off", "over"], answer: 1 },
    { q: "It is essential that she ___ the documents immediately.", options: ["signs", "sign", "signed", "will sign"], answer: 1 },
    { q: "Hardly ___ asleep when the phone rang.", options: ["had I fallen", "I had fallen", "did I fall", "I fell"], answer: 0 },
    { q: "He was on the ___ of leaving when she arrived.", options: ["edge", "verge", "border", "brink"], answer: 1 },
    { q: "Not only ___ late, but he also forgot his books.", options: ["he was", "was he", "he is", "is he"], answer: 1 },
    { q: "We'll go out as soon as it ___ raining.", options: ["will stop", "stops", "stopped", "is stopping"], answer: 1 },
    { q: "She didn't want to go, and ___ did I.", options: ["so", "neither", "either", "not"], answer: 1 },
    { q: "They managed to finish the job ___ of the difficulties.", options: ["although", "despite", "regardless", "even"], answer: 2 },
    { q: "He denied ___ anything about the missing money.", options: ["to know", "knowing", "knew", "know"], answer: 1 },
    { q: "Let's go for a walk, ___ we?", options: ["shall", "will", "do", "don't"], answer: 0 },
    { q: "I wish I ___ more money.", options: ["have", "had", "would have", "will have"], answer: 1 },
    { q: "You ___ have told me! I was so worried.", options: ["must", "should", "could", "would"], answer: 1 },
    { q: "It's no use ___ to change his mind.", options: ["try", "trying", "to try", "tried"], answer: 1 }
  ],
  4: [ // C1
    { q: "Scarcely ___ the room when the phone rang.", options: ["had she entered", "she had entered", "did she enter", "she entered"], answer: 0 },
    { q: "___ having a lot of money, he is very frugal.", options: ["Although", "In spite of", "Despite of", "Even though"], answer: 1 },
    { q: "The project was entirely ___ by the government.", options: ["funded", "founded", "found", "founds"], answer: 0 },
    { q: "No sooner ___ the door than the dog ran out.", options: ["he had opened", "did he open", "had he opened", "he opened"], answer: 2 },
    { q: "It's imperative that she ___ present at the meeting.", options: ["is", "be", "was", "will be"], answer: 1 },
    { q: "I'll do it provided ___ you help me.", options: ["that", "if", "when", "for"], answer: 0 },
    { q: "The politician tried to ___ the issue by changing the subject.", options: ["mitigate", "obfuscate", "alleviate", "corroborate"], answer: 1 },
    { q: "But for his help, we ___ the deadline.", options: ["would miss", "would have missed", "missed", "will miss"], answer: 1 },
    { q: "The company is ___ the verge of bankruptcy.", options: ["in", "on", "at", "to"], answer: 1 },
    { q: "I'd as soon you ___ tell anyone.", options: ["didn't", "don't", "wouldn't", "won't"], answer: 0 },
    { q: "He was accused of ___ the company's funds.", options: ["embezzling", "extorting", "forging", "bribing"], answer: 0 },
    { q: "The new rules are bound to ___ controversy.", options: ["make", "arouse", "spark", "catch"], answer: 2 },
    { q: "She has a ___ for remembering names and faces.", options: ["knack", "habit", "custom", "trend"], answer: 0 },
    { q: "He took ___ at my completely innocent remark.", options: ["offence", "umbrage", "insult", "anger"], answer: 1 },
    { q: "The witness ___ the suspect's alibi.", options: ["corroborated", "conspired", "collaborated", "coerced"], answer: 0 },
    { q: "She was completely ___ by his strange behavior.", options: ["baffled", "deterred", "hindered", "averted"], answer: 0 },
    { q: "The museum boasts an impressive ___ of artifacts.", options: ["array", "batch", "cluster", "bundle"], answer: 0 },
    { q: "He is prone to ___ outbursts of anger.", options: ["sporadic", "chronic", "incessant", "perpetual"], answer: 0 },
    { q: "The negotiations are currently at a ___.", options: ["stalemate", "climax", "standpoint", "threshold"], answer: 0 },
    { q: "She has a ___ of experience in the field.", options: ["wealth", "bulk", "mass", "chunk"], answer: 0 }
  ],
  5: [ // C2
    { q: "The new policy will ___ havoc on our supply chain.", options: ["wreak", "play", "make", "cause"], answer: 0 },
    { q: "I am not ___ to taking a few risks.", options: ["adverse", "averse", "opposed", "reluctant"], answer: 1 },
    { q: "The manager was ___ from his duties after the scandal.", options: ["relieved", "ousted", "exonerated", "discharged"], answer: 1 }, 
    { q: "She ___ over the problem for days before finding a solution.", options: ["pondered", "mulled", "dwelt", "brooded"], answer: 1 }, 
    { q: "The decision was made ___ to the board's approval.", options: ["dependent", "subject", "conditional", "liable"], answer: 1 },
    { q: "Try as I ___, I couldn't open the jar.", options: ["could", "should", "might", "would"], answer: 2 },
    { q: "The evidence was completely ___, leaving no room for doubt.", options: ["irrefutable", "implausible", "infallible", "impeccable"], answer: 0 },
    { q: "The project was ___ with difficulties from the start.", options: ["fraught", "laden", "rife", "steeped"], answer: 0 },
    { q: "The team's victory was a ___ conclusion.", options: ["foregone", "predetermined", "destined", "predictable"], answer: 0 },
    { q: "Only when the storm subsided ___ the extent of the damage.", options: ["did we realize", "we realized", "have we realized", "we did realize"], answer: 0 },
    { q: "His argument was entirely ___, based on false premises.", options: ["fallacious", "fastidious", "facetious", "fatuous"], answer: 0 },
    { q: "The company attempted to ___ the public's fears with a PR campaign.", options: ["allay", "quell", "subdue", "appease"], answer: 0 },
    { q: "She delivered a ___ critique of the author's latest novel.", options: ["scathing", "scorching", "searing", "blistering"], answer: 0 },
    { q: "His ___ refusal to compromise led to the strike.", options: ["obdurate", "obsequious", "obstreperous", "obtuse"], answer: 0 },
    { q: "The treaty was meant to ___ the escalating conflict.", options: ["defuse", "diffuse", "dissipate", "dispel"], answer: 0 },
    { q: "He was known for his ___ approach to problem-solving, never missing a detail.", options: ["meticulous", "mercurial", "mundane", "myopic"], answer: 0 },
    { q: "The politician's speech was full of ___, empty promises.", options: ["rhetoric", "polemic", "diatribe", "panegyric"], answer: 0 },
    { q: "Her ___ rise to fame surprised everyone in the industry.", options: ["meteoric", "astronomic", "colossal", "monumental"], answer: 0 },
    { q: "The CEO was accused of ___ the company's assets for personal gain.", options: ["appropriating", "expropriating", "confiscating", "usurping"], answer: 0 },
    { q: "The comedian's ___ humor offended a large portion of the audience.", options: ["irreverent", "irrelevant", "irresolute", "irrevocable"], answer: 0 }
  ]
};

const TOTAL_QUESTIONS = 50;
const QUESTIONS_PER_STAGE = 5;

export default function LevelTest() {
  const { t } = useTranslation();
  const [view, setView] = useState<'registration' | 'test' | 'results'>('registration');
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState<any>({});
  
  // Test State
  const [currentLevel, setCurrentLevel] = useState(2);
  const [questionNum, setQuestionNum] = useState(1);
  const [correctInStage, setCorrectInStage] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState<Record<number, number[]>>({ 0:[], 1:[], 2:[], 3:[], 4:[], 5:[] });
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(ACADEMY_CONFIG.testTimePerQuestion);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [finalResults, setFinalResults] = useState<any>(null);
  const [emailStatus, setEmailStatus] = useState('');

  const timerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setStudent({
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      postal: (form.elements.namedItem('postal') as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim(),
      address: (form.elements.namedItem('address') as HTMLInputElement).value.trim(),
      date: new Date().toLocaleDateString()
    });
    setView('test');
    loadNextQuestion(2, 0, 0, { 0:[], 1:[], 2:[], 3:[], 4:[], 5:[] }, 1);
  };

  const getAvailableLevel = (preferredLevel: number, used: Record<number, number[]>) => {
    if (used[preferredLevel].length < QUESTION_BANK[preferredLevel].length) {
      return preferredLevel;
    }
    for (let offset = 1; offset <= 5; offset++) {
      let up = preferredLevel + offset;
      let down = preferredLevel - offset;
      if (up <= 5 && used[up].length < QUESTION_BANK[up].length) return up;
      if (down >= 0 && used[down].length < QUESTION_BANK[down].length) return down;
    }
    return 0;
  };

  const loadNextQuestion = (
    lvl: number, 
    cStage: number, 
    tCorrect: number, 
    used: Record<number, number[]>, 
    qNum: number
  ) => {
    if (qNum > TOTAL_QUESTIONS) {
      finishTest(lvl, tCorrect);
      return;
    }

    let nextLvl = lvl;
    let nextCStage = cStage;

    if (qNum > 1 && (qNum - 1) % QUESTIONS_PER_STAGE === 0) {
      if (cStage >= 4) {
        nextLvl = Math.min(5, lvl + 1);
      } else if (cStage <= 2) {
        nextLvl = Math.max(0, lvl - 1);
      }
      nextCStage = 0;
    }

    let actualLevel = getAvailableLevel(nextLvl, used);
    const bank = QUESTION_BANK[actualLevel];
    const unusedIndices = bank.map((_, idx) => idx).filter(idx => !used[actualLevel].includes(idx));
    
    const qIndex = unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
    const newUsed = { ...used };
    newUsed[actualLevel] = [...newUsed[actualLevel], qIndex];

    setCurrentLevel(nextLvl);
    setCorrectInStage(nextCStage);
    setTotalCorrect(tCorrect);
    setUsedQuestions(newUsed);
    setQuestionNum(qNum);
    setCurrentQuestion(bank[qIndex]);
    setSelectedOptionIndex(null);
    startTimer();
  };

  const startTimer = () => {
    setTimeLeft(ACADEMY_CONFIG.testTimePerQuestion);
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleAnswer(-1); // Timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswer = (selectedIndex: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedOptionIndex(selectedIndex);

    const isCorrect = (selectedIndex === currentQuestion.answer);
    
    setTimeout(() => {
      loadNextQuestion(
        currentLevel,
        isCorrect ? correctInStage + 1 : correctInStage,
        isCorrect ? totalCorrect + 1 : totalCorrect,
        usedQuestions,
        questionNum + 1
      );
    }, 400);
  };

  const finishTest = async (finalLvl: number, finalTotalCorrect: number) => {
    setIsLoading(true);
    
    const finalCEFR = CEFR_LEVELS[finalLvl];
    const finalDesc = LEVEL_DESCRIPTIONS[finalLvl];
    
    const baseScores = [100, 120, 140, 160, 180, 200];
    const levelBase = baseScores[finalLvl];
    const maxExtra = finalLvl === 5 ? 30 : 19; 
    
    const accuracy = finalTotalCorrect / TOTAL_QUESTIONS;
    const extraPoints = Math.round(accuracy * maxExtra);
    const finalScore = levelBase + extraPoints;

    const results = { cefr: finalCEFR, desc: finalDesc, score: finalScore };
    setFinalResults(results);

    // The CRM save and the notification email are independent. They used to sit
    // in one try block with the Supabase insert first, so when RLS rejected that
    // insert the throw skipped the FormSubmit call entirely - every completed
    // test was lost twice over while the visitor was shown a success message.
    let savedToCrm = false;

    if (isSupabaseConfigured) {
      try {
        const { error } = await supabase.from('leads').insert([{
          name: student.name,
          email: student.email,
          phone: student.phone,
          status: 'Active Lead',
          notes: `CEFR Level: ${finalCEFR} (Score: ${finalScore}). Correct: ${finalTotalCorrect}/50. Address: ${student.address}, ${student.postal}`
        }]);
        if (error) throw error;
        savedToCrm = true;
      } catch (err) {
        console.error('Could not save lead to CRM:', err);
      }
    }

    try {
      const formSubmitEndpoint = `https://formsubmit.co/ajax/${ACADEMY_CONFIG.admissionsEmail}`;
      const payload = {
        _subject: `Placement Test Result: ${student.name} [Level: ${finalCEFR}]`,
        _replyto: student.email,
        _captcha: "false",
        _template: "table",
        "Student Name": student.name,
        "Email Address": student.email,
        "Postal Code": student.postal,
        "Phone Number": student.phone || "Not Provided",
        "Assessed CEFR Level": finalCEFR,
        "Cambridge Scale Score": finalScore,
        "Test Date": student.date,
        "Correct Answers": `${finalTotalCorrect} out of 50`,
        "Saved to CRM": savedToCrm ? "yes" : "NO - add this lead manually"
      };
      await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error('Could not send the placement-test notification email:', err);
    }

    setEmailStatus(savedToCrm ? t('levelTest.email_saved') : t('levelTest.email_completed'));

    setTimeout(() => {
      setIsLoading(false);
      setView('results');
    }, 2000);
  };

  const downloadCertificate = () => {
    try {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();

      doc.setFillColor(245, 247, 250); 
      doc.rect(0, 0, width, height, 'F');
      
      doc.setLineWidth(4);
      doc.setDrawColor(13, 27, 42); 
      doc.rect(10, 10, width - 20, height - 20);
      
      doc.setLineWidth(1);
      doc.setDrawColor(212, 175, 55); 
      doc.rect(14, 14, width - 28, height - 28);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(26);
      doc.setTextColor(13, 27, 42); 
      doc.text("TYNESIDE ENGLISH ACADEMY", width / 2, 40, { align: "center" });

      doc.setFontSize(14);
      doc.setTextColor(212, 175, 55); 
      doc.text("LEARN. GROW. CONNECT.", width / 2, 50, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(16);
      doc.setTextColor(50, 50, 50);
      doc.text("This official certificate confirms that", width / 2, 75, { align: "center" });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(36);
      doc.setTextColor(13, 27, 42);
      doc.text(student.name.toUpperCase(), width / 2, 95, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("has successfully completed the 50-Question Adaptive Placement Assessment", width / 2, 115, { align: "center" });
      doc.text("and achieved the following standard:", width / 2, 125, { align: "center" });

      doc.setDrawColor(212, 175, 55); 
      doc.setFillColor(255, 255, 255);
      doc.setLineWidth(0.5);
      doc.roundedRect(width / 2 - 50, 135, 100, 35, 3, 3, 'FD');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(13, 27, 42);
      doc.text(`CEFR Level: ${finalResults.cefr}`, width / 2, 150, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(`Cambridge Scale Score: ${finalResults.score}`, width / 2, 162, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Date of Assessment: ${student.date}`, 30, height - 25);
      doc.text(`Assessment Method: Adaptive Web Framework`, width - 30, height - 25, { align: "right" });

      doc.save(`${student.name.replace(/\s+/g, '_')}_Tyneside_Certificate.pdf`);
    } catch (e) {
      console.error(e);
      alert("Error generating PDF.");
    }
  };

  const getRecommendedCourse = (cefr: string) => {
    return {
      name: t(`levelTest.rec_${cefr}_name`, { defaultValue: t('levelTest.rec_default_name') }),
      desc: t(`levelTest.rec_${cefr}_desc`, { defaultValue: t('levelTest.rec_default_desc') })
    };
  };

  return (
    <div className="lt-main" style={{ backgroundColor: 'var(--color-bg-base)', fontFamily: 'var(--font-body)', minHeight: '100vh', flexDirection: 'column', padding: 0 }}>
      {/* Header */}
      <header style={{ backgroundColor: 'var(--color-deep-navy)', borderBottom: '4px solid var(--color-warm-gold)', padding: '1.25rem 2rem', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/">
            <img src="/logo-light.png" alt="Tyneside English Academy" style={{ height: '50px' }} />
          </Link>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
            {t('levelTest.badge')}
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="lt-main" style={{ width: '100%' }}>
        <div className="lt-card">
          
          {isLoading && (
            <div className="lt-overlay">
              <div style={{ width: '3rem', height: '3rem', border: '4px solid var(--color-soft-cream)', borderTopColor: 'var(--color-warm-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem' }}></div>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{t('levelTest.processing_title')}</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>{t('levelTest.processing_desc')}</p>
            </div>
          )}

          {view === 'registration' && (
            <div className="animate-fade-in">
              <div className="lt-text-center">
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>{t('levelTest.header_title')}</h2>
                <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>{t('levelTest.header_subtitle')}</p>
              </div>
              <form onSubmit={handleRegistration}>
                <div className="lt-grid-2">
                  <div>
                    <label className="lt-label">{t('levelTest.form_name')}</label>
                    <input type="text" name="name" required placeholder="Ej. Sara Martínez" className="lt-input" />
                  </div>
                  <div>
                    <label className="lt-label">{t('levelTest.form_email')}</label>
                    <input type="email" name="email" required placeholder="sara@ejemplo.com" className="lt-input" />
                  </div>
                  <div>
                    <label className="lt-label">{t('levelTest.form_postal')}</label>
                    <input type="text" name="postal" required placeholder="30006" className="lt-input" />
                  </div>
                  <div>
                    <label className="lt-label">{t('levelTest.form_phone')}</label>
                    <input type="tel" name="phone" placeholder="+34 600 000 000" className="lt-input" />
                  </div>
                  <div className="lt-col-span-2">
                    <label className="lt-label">{t('levelTest.form_address')}</label>
                    <input type="text" name="address" placeholder="Puente Tocinos, Murcia" className="lt-input" />
                  </div>
                </div>
                <button type="submit" className="lt-btn">
                  {t('levelTest.start_btn')}
                </button>
              </form>
            </div>
          )}

          {view === 'test' && currentQuestion && (
            <div className="animate-fade-in">
              <div className="lt-test-header">
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7 }}>{t('levelTest.progress')}</span>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>{t('levelTest.question_of', { current: questionNum })}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7 }}>{t('levelTest.time')}</span>
                  <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', fontWeight: 700, padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid', backgroundColor: timeLeft > 10 ? 'var(--color-soft-cream)' : '#dc2626', color: timeLeft > 10 ? 'inherit' : 'white', borderColor: timeLeft > 10 ? 'transparent' : '#dc2626' }}>
                    {timeLeft}s
                  </div>
                </div>
              </div>

              <h2 className="lt-question">{currentQuestion.q}</h2>

              <div className="lt-grid-2">
                {currentQuestion.options.map((opt: string, idx: number) => (
                  <button 
                    key={idx}
                    disabled={selectedOptionIndex !== null}
                    onClick={() => handleAnswer(idx)}
                    className="lt-option-btn"
                    style={{ 
                      borderColor: selectedOptionIndex === idx ? 'var(--color-warm-gold)' : 'var(--color-soft-cream)',
                      backgroundColor: selectedOptionIndex === idx ? 'var(--color-warm-gold)' : 'white',
                      color: selectedOptionIndex === idx ? 'var(--color-deep-navy)' : 'inherit'
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="lt-progress-bg">
                <div className="lt-progress-fill" style={{ width: `${((questionNum - 1) / TOTAL_QUESTIONS) * 100}%` }}></div>
              </div>
            </div>
          )}

          {view === 'results' && finalResults && (
            <div className="animate-fade-in lt-text-center">
              <div style={{ width: '6rem', height: '6rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', backgroundColor: 'var(--color-amber-soft)', color: 'var(--color-amber-strong)', border: '1px solid var(--color-amber-border)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" style={{ width: '3rem', height: '3rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{t('levelTest.results_title')}</h2>
                <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '400px', margin: '0 auto' }}>{t('levelTest.results_subtitle')}</p>
              </div>

              <div className="lt-result-card">
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-warm-gold)' }}>{t('levelTest.cefr_evaluated')}</div>
                <div style={{ fontSize: '5rem', fontWeight: 800, color: 'white', lineHeight: 1.1, margin: '0.5rem 0' }}>{finalResults.cefr}</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>{finalResults.desc}</div>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }}></div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>
                  {t('levelTest.scale_score')}: <span style={{ fontWeight: 800, fontSize: '1rem', marginLeft: '0.25rem', color: 'var(--color-amber)' }}>{finalResults.score}</span>
                </div>
              </div>

              {/* Recommended Course Box */}
              <div style={{
                margin: '2rem auto 1.5rem',
                padding: '1.5rem',
                backgroundColor: 'var(--color-soft-cream)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-light)',
                textAlign: 'left',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-river-teal)', marginBottom: '0.4rem' }}>
                  {t('levelTest.recommended_course')}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.3rem' }}>
                  {getRecommendedCourse(finalResults.cefr).name}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                  {getRecommendedCourse(finalResults.cefr).desc}
                </div>
              </div>

              <div style={{ maxWidth: '400px', margin: '1.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* The test used to end here, with a certificate download and
                    nothing else. Someone who has just been told their level and
                    which course suits them is as warm as a lead gets, and the
                    page gave them nowhere to go. */}
                <a
                  href={PRE_ENROLMENT_URL}
                  className="lt-btn"
                  style={{
                    marginTop: 0,
                    textDecoration: 'none',
                    background: 'var(--color-amber)',
                    color: '#1a1200'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  {t('levelTest.reserve_place', { defaultValue: 'Reservar mi plaza' })}
                </a>

                <button onClick={downloadCertificate} className="lt-btn" style={{ marginTop: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                  {t('levelTest.download_cert')}
                </button>

                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-river-teal)' }}>
                   {emailStatus}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-deep-navy)' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, color: 'white' }}>
          &copy; {new Date().getFullYear()} Tyneside English Academy. <span style={{ display: 'inline-block', marginTop: '0.25rem' }}>Learn. Grow. Connect.</span>
        </div>
      </footer>
    </div>
  );
}
