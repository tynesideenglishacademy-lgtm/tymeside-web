from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
LOGO = ROOT / "public" / "logo-light.png"
PAGE_W, PAGE_H = A4

NAVY = HexColor("#0E2635")
NAVY_2 = HexColor("#173847")
TEAL = HexColor("#0F766E")
TEAL_PALE = HexColor("#E2F0ED")
GOLD = HexColor("#E7BB57")
INK = HexColor("#13242D")
MUTED = HexColor("#566971")
PAPER = HexColor("#F7F3EA")
RULE = HexColor("#C8D1CE")


PACKS = {
    "b1-preliminary-exam-toolkit.pdf": {
        "level": "B1",
        "exam": "Preliminary",
        "tagline": "Clear structures. Useful language. Better decisions under pressure.",
        "writing": {
            "title": "Writing without getting lost",
            "intro": "At B1, clear communication matters more than complicated language. Plan for two minutes, cover every content point and leave two minutes to check.",
            "formats": [
                ("Email", "Greeting - reason for writing - answer every prompt - friendly closing"),
                ("Article", "Engaging title - short introduction - two developed ideas - personal ending"),
                ("Story", "Set the scene - create a change or problem - sequence events - finish clearly"),
            ],
            "language": [
                "Opening: Thanks for your message. It was great to hear from you.",
                "Adding: Another thing I should mention is...",
                "Reason: This is because... / The main reason is that...",
                "Ending: Let me know what you think. Hope to hear from you soon.",
            ],
            "check": "TASK - Have I answered every point?  ORGANISATION - Can the reader follow my ideas?  LANGUAGE - Have I checked verbs, spelling and punctuation?",
        },
        "model": {
            "task": "Your English-speaking friend Alex asks: What activity do you enjoy after class? Who do you do it with? Why would you recommend it? Write an email to Alex.",
            "answer": [
                "Hi Alex,",
                "Thanks for your message. After class, I usually play basketball at the sports centre near my house. I go there twice a week with two friends from school.",
                "I enjoy it because it helps me forget about homework and stay active. We are not an amazing team, but we always have a good time and encourage each other.",
                "You should try it because you do not need expensive equipment and it is a great way to meet people. Maybe we could play together when you visit.",
                "See you soon,\nSam",
            ],
            "notes": [
                "All three content points are answered and developed.",
                "The tone is friendly and consistent.",
                "Basic linking words make the progression easy to follow.",
                "The final suggestion gives the email a natural ending.",
            ],
        },
        "speaking": {
            "title": "Keep speaking, even when the word is missing",
            "moves": [
                ("Describe", "In the foreground... / On the left... / It looks as if..."),
                ("Develop", "They might be... / Perhaps they are feeling... because..."),
                ("Interact", "What do you think? / Shall we choose...? / I agree up to a point."),
                ("Repair", "I am not sure of the exact word, but it is a kind of..."),
            ],
            "challenge": "Photo prompt: A group of teenagers are preparing food together. Speak for one minute. Describe the people and place, speculate about the occasion and explain how they might feel.",
            "routine": "NOTICE 3 DETAILS - CONNECT THEM - SPECULATE - ADD A REASON - FINISH WITH THE GENERAL ATMOSPHERE",
        },
        "vocab": {
            "collocations": ["make progress", "make an effort", "take part", "take responsibility", "have a chance", "keep in touch", "spend time", "pay attention"],
            "phrasals": [("find out", "discover information"), ("give up", "stop trying or doing"), ("look forward to", "feel excited about the future"), ("put off", "postpone"), ("take up", "start a hobby"), ("work out", "solve or understand")],
            "tip": "Do not learn progress alone. Learn make progress and write your own example sentence.",
        },
        "errors": [
            ("I am agree.", "I agree."),
            ("People is friendly.", "People are friendly."),
            ("I have 16 years.", "I am 16 years old."),
            ("I enjoy to read.", "I enjoy reading."),
            ("It depends of the weather.", "It depends on the weather."),
            ("I have lived here since three years.", "I have lived here for three years."),
        ],
        "practice": [
            "1. Choose: I want to (do / make) progress before June.",
            "2. Correct: I am looking forward to see you.",
            "3. Complete: We had to ___ the match because of the rain. (postpone)",
            "4. Link the ideas with although: The journey was long. It was worth it.",
            "5. Speaking: Ask your partner for an opinion and then agree partly.",
        ],
        "answers": [
            "1. make progress",
            "2. I am looking forward to seeing you.",
            "3. put off",
            "4. Although the journey was long, it was worth it.",
            "5. Example: What do you think? I agree up to a point, but...",
        ],
    },
    "b2-first-exam-toolkit.pdf": {
        "level": "B2",
        "exam": "First",
        "tagline": "Develop ideas. Control register. Show range without forcing it.",
        "writing": {
            "title": "Build an argument the reader can follow",
            "intro": "A strong B2 answer has a position, paragraph logic and specific support. Range is valuable only when it remains accurate and natural.",
            "formats": [
                ("Essay", "Paraphrase the issue - develop two given ideas - add your own idea - conclude"),
                ("Article", "Create interest - address the reader - use examples - finish memorably"),
                ("Review", "Identify the work - describe selectively - evaluate - recommend to a target reader"),
                ("Report", "Use headings - describe findings - evaluate - make practical recommendations"),
            ],
            "language": [
                "Position: While both options have merit, I would argue that...",
                "Development: This is particularly relevant when...",
                "Contrast: Whereas... / Nevertheless... / Despite the fact that...",
                "Conclusion: On balance, the most effective approach would be to...",
            ],
            "check": "CONTENT - Every task point?  COMMUNICATIVE ACHIEVEMENT - Correct reader and tone?  ORGANISATION - Logical paragraphs and links?  LANGUAGE - Range with control?",
        },
        "model": {
            "task": "Essay: Some people think schools should spend more time teaching practical skills. Discuss learning to manage money and preparing food, and add one idea of your own.",
            "answer": [
                "Schools are expected to prepare young people for adult life, yet many students leave without basic practical knowledge. While academic subjects remain essential, selected life skills deserve a regular place in the timetable.",
                "Managing money is particularly important. If teenagers learn to plan a budget, compare costs and understand borrowing, they are less likely to make expensive mistakes later. Preparing food also promotes independence and can improve health, provided lessons focus on affordable everyday meals.",
                "A further priority should be communication. Practising how to make a formal request, resolve a disagreement or speak in public would benefit students in both employment and personal life.",
                "On balance, schools should not replace academic learning, but a weekly practical-skills programme would make education more relevant and complete.",
            ],
            "notes": [
                "The introduction answers the question without copying it.",
                "Each body paragraph follows idea - explanation - consequence.",
                "The third paragraph contributes a distinct personal idea.",
                "The conclusion qualifies the position rather than repeating a sentence.",
            ],
        },
        "speaking": {
            "title": "Compare, speculate and answer the question",
            "moves": [
                ("Compare", "Both pictures show..., whereas only the first..."),
                ("Speculate", "They might be... / It could be that... / They are likely to..."),
                ("Evaluate", "The main advantage would be... / This seems more suitable because..."),
                ("Collaborate", "Shall we move on to...? / That is a fair point. What about...?"),
            ],
            "challenge": "Photo prompt: Compare learning a skill in a classroom with learning it outdoors. Why might the people have chosen these places, and which setting is likely to be more memorable?",
            "routine": "ANSWER THE QUESTION - SUPPORT WITH VISUAL DETAIL - COMPARE THROUGHOUT - SPECULATE - REACH A CLEAR JUDGEMENT",
        },
        "vocab": {
            "collocations": ["raise awareness", "meet a deadline", "have an impact", "take into account", "play a role", "reach an agreement", "pose a challenge", "gain experience"],
            "phrasals": [("carry out", "perform a task or study"), ("come up with", "produce an idea"), ("cut down on", "reduce"), ("get across", "communicate successfully"), ("rule out", "eliminate an option"), ("turn out", "have a final result")],
            "tip": "Upgrade precisely: very important can become crucial, but only if the strength matches your meaning.",
        },
        "errors": [
            ("Despite of the cost...", "Despite the cost... / In spite of the cost..."),
            ("The news are encouraging.", "The news is encouraging."),
            ("He suggested to go early.", "He suggested going early."),
            ("I did not used to...", "I did not use to..."),
            ("We discussed about the plan.", "We discussed the plan."),
            ("It allows people working.", "It allows people to work."),
        ],
        "practice": [
            "1. Complete: The campaign helped ___ awareness of the issue.",
            "2. Transform: I last saw Marta in May. SINCE",
            "3. Correct: Despite of being tired, he finished the report.",
            "4. Choose a report phrase: (It was awesome / The facilities were broadly satisfactory).",
            "5. Speaking: Partly agree, introduce an alternative and invite a response.",
        ],
        "answers": [
            "1. raise awareness",
            "2. I have not seen Marta since May.",
            "3. Despite being tired, he finished the report.",
            "4. The facilities were broadly satisfactory.",
            "5. Example: That is a fair point, although another option might be... What do you think?",
        ],
    },
    "c1-advanced-exam-toolkit.pdf": {
        "level": "C1",
        "exam": "Advanced",
        "tagline": "Make precise choices. Qualify claims. Control tone and emphasis.",
        "writing": {
            "title": "Move from fluent to purposeful",
            "intro": "C1 writing rewards control: relevant selection, clear stance, flexible organisation and language calibrated to purpose and reader.",
            "formats": [
                ("Essay", "Synthesize the input - evaluate two points - establish criteria - select the stronger case"),
                ("Proposal", "Define the aim - identify needs - recommend actions - justify likely benefits"),
                ("Report", "Set scope - present findings - interpret evidence - recommend proportionately"),
                ("Review", "Establish criteria - analyse selected features - evaluate impact - target the recommendation"),
            ],
            "language": [
                "Hedging: This appears to suggest... / It would be premature to assume...",
                "Evaluation: The principal limitation lies in... / Of greater significance is...",
                "Cohesion: That said... / By the same token... / In practical terms...",
                "Recommendation: Priority should therefore be given to...",
            ],
            "check": "PURPOSE - What must the reader know or do?  SELECTION - Is every detail useful?  CONTROL - Is complexity accurate?  IMPACT - Does the ending deliver a judgement or action?",
        },
        "model": {
            "task": "Proposal: Your college wants to help new international students settle in. Recommend two initiatives and explain how they should be implemented.",
            "answer": [
                "Proposal: Supporting New International Students",
                "The aim of this proposal is to recommend two practical initiatives that would help incoming students form connections and navigate college life from their first week.",
                "Peer guide scheme: Each newcomer should be paired with a trained volunteer from a later year. Rather than providing a single tour, guides would make brief weekly contact during the first month and answer routine questions. Clear guidance and a named staff coordinator would prevent volunteers from taking on responsibilities beyond their role.",
                "Local discovery programme: A series of low-cost visits to transport hubs, libraries and cultural venues would build confidence beyond the campus. Student societies could lead the visits, while the college negotiates group access with local partners.",
                "Recommendation: Priority should be given to launching both initiatives together. The peer scheme offers continuity, whereas the visits create shared experiences; combined, they address both practical uncertainty and social isolation.",
            ],
            "notes": [
                "The title and headings make the proposal easy to scan.",
                "Recommendations include implementation details, not just ideas.",
                "Potential risk is anticipated and managed.",
                "The final paragraph evaluates how the two initiatives complement each other.",
            ],
        },
        "speaking": {
            "title": "Sound flexible, not memorised",
            "moves": [
                ("Frame", "What strikes me as significant is... / Viewed from another angle..."),
                ("Qualify", "To some extent... / That may be true, although..."),
                ("Develop", "The wider implication is... / This may stem from..."),
                ("Negotiate", "I take your point. Would it be fair to say that...?"),
            ],
            "challenge": "Photo prompt: Compare two situations in which people are under pressure. What qualities might each situation require, and which pressure is more likely to produce a positive result?",
            "routine": "DEFINE A CRITERION - COMPARE EVIDENCE - QUALIFY YOUR CLAIM - RESPOND TO YOUR PARTNER - NEGOTIATE A DECISION",
        },
        "vocab": {
            "collocations": ["draw criticism", "mounting pressure", "compelling evidence", "far-reaching consequences", "address a shortcoming", "strike a balance", "exercise restraint", "underlying assumption"],
            "phrasals": [("boil down to", "have as the essential point"), ("brush up on", "refresh a skill"), ("phase out", "remove gradually"), ("play down", "make seem less important"), ("single out", "select for attention"), ("zero in on", "focus precisely")],
            "tip": "Use lexical bundles to control register: pose a significant challenge is more useful than memorising significant alone.",
        },
        "errors": [
            ("It is highly recommended to invest...", "It is highly recommended that the college invest..."),
            ("Rarely I have seen...", "Rarely have I seen..."),
            ("The proposal is comprised of...", "The proposal comprises... / is composed of..."),
            ("This could have lead to...", "This could have led to..."),
            ("An advice was given.", "A piece of advice was given."),
            ("The reason is due to...", "The reason is... / This is due to..."),
        ],
        "practice": [
            "1. Hedge: The policy ___ to have improved access, although the data is limited.",
            "2. Invert: Rarely / I / see / such a convincing performance.",
            "3. Complete: The proposal has ___ criticism from residents.",
            "4. Form the adjective: The scheme is financially ___. (SUSTAIN)",
            "5. Speaking: Acknowledge a partner's point and introduce a measured reservation.",
        ],
        "answers": [
            "1. appears",
            "2. Rarely have I seen such a convincing performance.",
            "3. drawn",
            "4. sustainable",
            "5. Example: I take your point, although I wonder whether we may be overlooking...",
        ],
    },
}


def draw_wrapped(c: canvas.Canvas, text: str, x: float, y: float, width: float, size: float = 10.5, leading: float = 15, color=MUTED, font: str = "Helvetica") -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    approximate_chars = max(18, int(width / (size * 0.5)))
    for paragraph in text.split("\n"):
        lines = wrap(paragraph, width=approximate_chars, break_long_words=False) or [""]
        for line in lines:
            c.drawString(x, y, line)
            y -= leading
        y -= leading * 0.25
    return y


def header(c: canvas.Canvas, level: str, exam: str, page_number: int, section: str) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 58, PAGE_W, 58, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GOLD)
    c.drawString(42, PAGE_H - 35, f"TYNESIDE / {level} {exam.upper()}")
    c.setFont("Helvetica", 8)
    c.setFillColor(white)
    c.drawRightString(PAGE_W - 42, PAGE_H - 35, section.upper())
    c.setStrokeColor(RULE)
    c.line(42, 38, PAGE_W - 42, 38)
    c.setFont("Helvetica", 7.5)
    c.setFillColor(MUTED)
    c.drawString(42, 24, "Tyneside English Academy - Student resource")
    c.drawRightString(PAGE_W - 42, 24, f"{page_number} / 7")


def page_title(c: canvas.Canvas, kicker: str, title: str, intro: str | None = None) -> float:
    y = PAGE_H - 105
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(TEAL)
    c.drawString(42, y, kicker.upper())
    y -= 36
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(INK)
    for line in wrap(title, width=31, break_long_words=False):
        c.drawString(42, y, line)
        y -= 32
    if intro:
        y -= 5
        y = draw_wrapped(c, intro, 42, y, PAGE_W - 84, 11, 16, MUTED)
    return y - 12


def label_box(c: canvas.Canvas, number: str, title: str, body: str, x: float, y: float, width: float) -> float:
    c.setFillColor(TEAL_PALE)
    c.roundRect(x, y - 94, width, 94, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(TEAL)
    c.drawString(x + 13, y - 20, number)
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(INK)
    c.drawString(x + 13, y - 39, title)
    draw_wrapped(c, body, x + 13, y - 56, width - 26, 8.5, 11.5, MUTED)
    return y - 106


def draw_cover(c: canvas.Canvas, pack: dict) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(NAVY_2)
    c.circle(PAGE_W + 25, PAGE_H - 55, 185, fill=1, stroke=0)
    c.setFillColor(TEAL)
    c.rect(0, 0, 18, PAGE_H, fill=1, stroke=0)
    if LOGO.exists():
        image = ImageReader(str(LOGO))
        c.drawImage(image, 42, PAGE_H - 108, width=220, height=76, preserveAspectRatio=True, mask="auto", anchor="sw")
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(GOLD)
    c.drawString(42, PAGE_H - 168, "CAMBRIDGE EXAM PREPARATION")
    c.setFont("Helvetica-Bold", 82)
    c.setFillColor(white)
    c.drawString(38, PAGE_H - 285, pack["level"])
    c.setFont("Helvetica-Bold", 35)
    c.drawString(42, PAGE_H - 335, pack["exam"])
    c.drawString(42, PAGE_H - 375, "Exam Toolkit")
    c.setStrokeColor(GOLD)
    c.setLineWidth(3)
    c.line(42, PAGE_H - 410, 142, PAGE_H - 410)
    draw_wrapped(c, pack["tagline"], 42, PAGE_H - 450, 355, 14, 21, HexColor("#D8E2E6"), "Helvetica")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GOLD)
    c.drawString(42, 85, "WRITING / SPEAKING / VOCABULARY / ACCURACY / PRACTICE")
    c.setFont("Helvetica", 8)
    c.setFillColor(HexColor("#B9CAD2"))
    c.drawString(42, 62, "Private student edition - tynesideacademy.com")


def draw_writing(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 2, "Writing blueprint")
    data = pack["writing"]
    y = page_title(c, "01 / Writing", data["title"], data["intro"])
    columns = 2
    gap = 14
    box_w = (PAGE_W - 84 - gap) / columns
    for index, (title, body) in enumerate(data["formats"]):
        row = index // columns
        col = index % columns
        box_y = y - row * 108
        label_box(c, f"0{index + 1}", title, body, 42 + col * (box_w + gap), box_y, box_w)
    y -= ((len(data["formats"]) + 1) // 2) * 108 + 15
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(42, y, "Language that does a job")
    y -= 25
    for item in data["language"]:
        c.setFillColor(GOLD)
        c.circle(47, y + 3, 2.5, fill=1, stroke=0)
        y = draw_wrapped(c, item, 58, y + 6, PAGE_W - 105, 9.5, 13, INK)
        y -= 3
    c.setFillColor(NAVY)
    c.roundRect(42, 70, PAGE_W - 84, 68, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GOLD)
    c.drawString(56, 118, "FINAL CHECK")
    draw_wrapped(c, data["check"], 56, 101, PAGE_W - 112, 8.5, 12, white)


def draw_model(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 3, "Model answer")
    model = pack["model"]
    y = page_title(c, "02 / Model", "Read like an examiner")
    c.setFillColor(TEAL_PALE)
    c.roundRect(42, y - 78, PAGE_W - 84, 78, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(TEAL)
    c.drawString(55, y - 18, "TASK")
    draw_wrapped(c, model["task"], 55, y - 36, PAGE_W - 110, 9, 12.5, INK)
    y -= 105
    left_w = (PAGE_W - 102) * 0.62
    right_x = 42 + left_w + 18
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(42, y, "Model response")
    c.drawString(right_x, y, "Why it works")
    y -= 24
    answer_y = y
    for paragraph in model["answer"]:
        answer_y = draw_wrapped(c, paragraph, 42, answer_y, left_w, 9.3, 13.6, INK)
        answer_y -= 7
    note_y = y
    for index, note in enumerate(model["notes"], 1):
        c.setFillColor(TEAL)
        c.circle(right_x + 7, note_y - 1, 7, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(white)
        c.drawCentredString(right_x + 7, note_y - 3.5, str(index))
        note_y = draw_wrapped(c, note, right_x + 22, note_y + 3, PAGE_W - right_x - 64, 8.4, 11.5, MUTED)
        note_y -= 12
    c.setStrokeColor(RULE)
    c.line(right_x - 10, y + 8, right_x - 10, 75)


def draw_speaking(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 4, "Speaking")
    speaking = pack["speaking"]
    y = page_title(c, "03 / Speaking", speaking["title"], "Use a small set of flexible moves. The goal is not to recite phrases; it is to keep meaning moving forward.")
    box_w = (PAGE_W - 98) / 2
    for index, (title, body) in enumerate(speaking["moves"]):
        row = index // 2
        col = index % 2
        label_box(c, f"0{index + 1}", title, body, 42 + col * (box_w + 14), y - row * 106, box_w)
    y -= 232
    c.setFillColor(NAVY)
    c.roundRect(42, y - 120, PAGE_W - 84, 120, 4, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GOLD)
    c.drawString(57, y - 24, "ONE-MINUTE CHALLENGE")
    draw_wrapped(c, speaking["challenge"], 57, y - 47, PAGE_W - 114, 11, 16, white)
    y -= 155
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(TEAL)
    c.drawString(42, y, "YOUR ROUTINE")
    y -= 24
    words = speaking["routine"].split(" - ")
    x = 42
    for index, word in enumerate(words):
        text_w = stringWidth(word, "Helvetica-Bold", 8) + 18
        if x + text_w > PAGE_W - 42:
            x = 42
            y -= 31
        c.setFillColor(TEAL_PALE)
        c.roundRect(x, y - 16, text_w, 23, 3, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(INK)
        c.drawCentredString(x + text_w / 2, y - 8, word)
        x += text_w + 8


def draw_vocabulary(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 5, "Vocabulary")
    vocab = pack["vocab"]
    y = page_title(c, "04 / Vocabulary", "Learn words in company", "Strong exam vocabulary is not a list of impressive words. It is a network of natural combinations you can retrieve accurately.")
    left_x = 42
    right_x = PAGE_W / 2 + 12
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(left_x, y, "High-value collocations")
    c.drawString(right_x, y, "Phrasal verbs in context")
    y -= 30
    col_w = PAGE_W / 2 - 66
    left_y = y
    for index, phrase in enumerate(vocab["collocations"], 1):
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(TEAL)
        c.drawString(left_x, left_y, f"{index:02d}")
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(INK)
        c.drawString(left_x + 28, left_y, phrase)
        left_y -= 31
        c.setStrokeColor(RULE)
        c.line(left_x, left_y + 13, left_x + col_w, left_y + 13)
    right_y = y
    for index, (phrase, meaning) in enumerate(vocab["phrasals"], 1):
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(TEAL)
        c.drawString(right_x, right_y, f"{index:02d}")
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(INK)
        c.drawString(right_x + 28, right_y, phrase)
        right_y = draw_wrapped(c, meaning, right_x + 28, right_y - 16, col_w - 28, 8.5, 11, MUTED)
        right_y -= 10
    c.setStrokeColor(RULE)
    c.line(PAGE_W / 2, y + 15, PAGE_W / 2, 155)
    c.setFillColor(TEAL_PALE)
    c.roundRect(42, 75, PAGE_W - 84, 62, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(TEAL)
    c.drawString(56, 116, "STUDY TIP")
    draw_wrapped(c, vocab["tip"], 56, 99, PAGE_W - 112, 9, 12, INK)


def draw_accuracy(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 6, "Accuracy and practice")
    y = page_title(c, "05 / Accuracy", "Correct the pattern, not just the sentence", "Keep a personal error log. Record the corrected phrase and one new example so the right pattern becomes easier to retrieve.")
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(MUTED)
    c.drawString(42, y, "NOT THIS")
    c.drawString(PAGE_W / 2 + 5, y, "USE THIS")
    y -= 16
    for wrong, right in pack["errors"]:
        c.setStrokeColor(RULE)
        c.line(42, y + 9, PAGE_W - 42, y + 9)
        y = draw_wrapped(c, wrong, 42, y - 8, PAGE_W / 2 - 62, 9, 12, HexColor("#8D3B36"))
        draw_wrapped(c, right, PAGE_W / 2 + 5, y + 19, PAGE_W / 2 - 47, 9, 12, INK)
        y -= 16
    y -= 6
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(42, y, "Mini practice")
    y -= 25
    for item in pack["practice"]:
        y = draw_wrapped(c, item, 42, y, PAGE_W - 84, 9.2, 13, INK)
        y -= 5


def draw_answers(c: canvas.Canvas, pack: dict) -> None:
    header(c, pack["level"], pack["exam"], 7, "Answers and exam day")
    y = page_title(c, "06 / Review", "Check, reflect, repeat")
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(42, y, "Mini practice answers")
    y -= 28
    for item in pack["answers"]:
        c.setFillColor(TEAL)
        c.circle(47, y + 2, 2.5, fill=1, stroke=0)
        y = draw_wrapped(c, item, 58, y + 5, PAGE_W - 105, 9.3, 13, INK)
        y -= 6
    y -= 10
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(INK)
    c.drawString(42, y, "Exam-day reset")
    y -= 26
    reset_items = [
        ("Before", "Check the task, underline the purpose and decide where your time will go."),
        ("During", "If one item blocks you, mark it, move on and return with a clearer head."),
        ("Writing", "Reserve time to check task coverage, verb forms, agreement and spelling."),
        ("Speaking", "Listen, respond and develop. A repaired sentence is better than silence."),
    ]
    for index, (title, body) in enumerate(reset_items, 1):
        y = label_box(c, f"0{index}", title, body, 42, y, PAGE_W - 84)
    c.setFillColor(NAVY)
    c.roundRect(42, 61, PAGE_W - 84, 52, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GOLD)
    c.drawString(56, 93, "NEXT STEP")
    c.setFont("Helvetica", 9)
    c.setFillColor(white)
    c.drawString(56, 76, "Complete the matching online worksheet in your Tyneside student area and review your activity with your teacher.")


def build_pdf(filename: str, pack: dict) -> None:
    target = OUTPUT / filename
    c = canvas.Canvas(str(target), pagesize=A4)
    c.setTitle(f"Tyneside {pack['level']} {pack['exam']} Exam Toolkit")
    c.setAuthor("Tyneside English Academy")
    c.setSubject("Private Cambridge exam preparation resource")
    draw_cover(c, pack)
    c.showPage()
    draw_writing(c, pack)
    c.showPage()
    draw_model(c, pack)
    c.showPage()
    draw_speaking(c, pack)
    c.showPage()
    draw_vocabulary(c, pack)
    c.showPage()
    draw_accuracy(c, pack)
    c.showPage()
    draw_answers(c, pack)
    c.save()
    print(target)


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for filename, pack in PACKS.items():
        build_pdf(filename, pack)


if __name__ == "__main__":
    main()
