from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "dossier-colegios-tyneside-2026-27.pdf"
PUBLIC = ROOT / "public" / "downloads" / "dossier-colegios-tyneside-2026-27.pdf"
IMG = ROOT / "public" / "img"

W, H = A4
NAVY = HexColor("#09131E")
BLUE = HexColor("#17385C")
GOLD = HexColor("#D6AF58")
CREAM = HexColor("#F7F2E8")
INK = HexColor("#162331")
MUTED = HexColor("#667585")
LINE = HexColor("#DCE3E8")

pdfmetrics.registerFont(TTFont("Tyneside", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Tyneside-Bold", r"C:\Windows\Fonts\arialbd.ttf"))


def draw_image_fit(c, path, x, y, width, height, contain=False):
    path = Path(path)
    if not path.exists():
        return
    with Image.open(path) as im:
        iw, ih = im.size
    scale = min(width / iw, height / ih) if contain else max(width / iw, height / ih)
    dw, dh = iw * scale, ih * scale
    c.saveState()
    p = c.beginPath()
    p.rect(x, y, width, height)
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(ImageReader(str(path)), x + (width - dw) / 2, y + (height - dh) / 2,
                width=dw, height=dh, mask="auto")
    c.restoreState()


def wrap(c, text, x, y, max_width, font="Tyneside", size=10.5,
         leading=15, color=INK, max_lines=None):
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    lines, current = [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if c.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    if max_lines:
        lines = lines[:max_lines]
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def header(c, page, title, kicker):
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.rect(0, H - 78, W, 78, stroke=0, fill=1)
    draw_image_fit(c, ROOT / "public" / "logo-light.png", 38, H - 63, 138, 38, contain=True)
    c.setFont("Tyneside-Bold", 8)
    c.setFillColor(GOLD)
    c.drawRightString(W - 38, H - 31, kicker.upper())
    c.setFont("Tyneside", 8)
    c.setFillColor(white)
    c.drawRightString(W - 38, H - 47, f"2026/27  ·  {page}/5")
    c.setFont("Tyneside-Bold", 25)
    c.setFillColor(NAVY)
    c.drawString(42, H - 125, title)
    c.setStrokeColor(GOLD)
    c.setLineWidth(3)
    c.line(42, H - 140, 116, H - 140)


def card(c, x, y, width, height, title, body, number=None):
    c.setFillColor(white)
    c.setStrokeColor(LINE)
    c.roundRect(x, y, width, height, 10, stroke=1, fill=1)
    if number:
        c.setFillColor(GOLD)
        c.circle(x + 25, y + height - 25, 13, stroke=0, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Tyneside-Bold", 9)
        c.drawCentredString(x + 25, y + height - 28, str(number))
        tx = x + 46
    else:
        tx = x + 18
    c.setFont("Tyneside-Bold", 12)
    c.setFillColor(NAVY)
    c.drawString(tx, y + height - 30, title)
    wrap(c, body, x + 18, y + height - 54, width - 36, size=9.4, leading=13.5, color=MUTED)


def footer(c):
    c.setStrokeColor(LINE)
    c.line(42, 34, W - 42, 34)
    c.setFont("Tyneside", 7.5)
    c.setFillColor(MUTED)
    c.drawString(42, 20, "Tyneside English Academy · Plaza Tomás y Valiente 6 · Puente Tocinos, Murcia")
    c.drawRightString(W - 42, 20, "secretaria@tynesideacademy.com · 868 056 729")


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("Programas de inglés para colegios y AMPAs 2026/27")
    c.setAuthor("Tyneside English Academy")

    # Cover
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    draw_image_fit(c, IMG / "newcastle-quayside-1440.webp", 0, H * 0.48, W, H * 0.52)
    c.saveState()
    c.setFillColor(NAVY)
    c.setFillAlpha(0.84)
    c.rect(0, H * 0.48, W, H * 0.52, stroke=0, fill=1)
    c.restoreState()
    draw_image_fit(c, ROOT / "public" / "logo-light.png", 42, H - 100, 195, 58, contain=True)
    c.setFillColor(GOLD)
    c.setFont("Tyneside-Bold", 10)
    c.drawString(44, H - 150, "PROPUESTA PARA COLEGIOS Y AMPAS · CURSO 2026/27")
    c.setFillColor(white)
    c.setFont("Tyneside-Bold", 31)
    c.drawString(42, H - 202, "Inglés que se vive,")
    c.drawString(42, H - 240, "se practica y se acredita")
    wrap(c, "Programas escolares y extraescolares diseñados para integrarse en la realidad de cada centro.",
         44, H - 280, 430, size=14, leading=20, color=HexColor("#DFE7EE"))
    c.setFillColor(CREAM)
    c.roundRect(42, 58, W - 84, 250, 16, stroke=0, fill=1)
    c.setFont("Tyneside-Bold", 16)
    c.setFillColor(NAVY)
    c.drawString(64, 270, "Una colaboración clara, flexible y cercana")
    bullets = [
        "Programación adaptada a la edad, nivel y objetivos del centro.",
        "Grupos reducidos y enfoque práctico de comunicación real.",
        "Seguimiento académico y comunicación con familias y coordinación.",
        "Itinerario de preparación para Cambridge English Qualifications.",
        "Opciones de inmersión cultural con International House Newcastle."
    ]
    yy = 236
    for item in bullets:
        c.setFillColor(GOLD)
        c.circle(70, yy + 3, 3, stroke=0, fill=1)
        yy = wrap(c, item, 82, yy, 430, size=10.5, leading=14, color=INK) - 9
    c.setFont("Tyneside-Bold", 10)
    c.setFillColor(BLUE)
    c.drawString(64, 78, "TYNSIDEACADEMY.COM  ·  PUENTE TOCINOS, MURCIA")
    c.showPage()

    # Why Tyneside
    header(c, 2, "Un aliado para vuestro proyecto educativo", "Por qué Tyneside")
    wrap(c, "Nuestro objetivo es que el inglés extraescolar no sea una actividad aislada, sino un recorrido coherente, medible y motivador para el alumnado.",
         42, H - 174, W - 84, size=12, leading=17, color=MUTED)
    card(c, 42, H - 350, 244, 125, "Metodología práctica", "Clases dinámicas, comunicación desde el primer día y materiales adecuados a cada etapa.", 1)
    card(c, 309, H - 350, 244, 125, "Equipo especializado", "Profesorado con experiencia en enseñanza del inglés y preparación de certificaciones oficiales.", 2)
    card(c, 42, H - 500, 244, 125, "Seguimiento real", "Objetivos por trimestre, observación continua y comunicación útil para familias y coordinación.", 3)
    card(c, 309, H - 500, 244, 125, "Camino a la acreditación", "Preparación progresiva para Cambridge y conexión con convocatorias oficiales a través de Exams Levante.", 4)
    c.setFillColor(white)
    c.setStrokeColor(LINE)
    c.roundRect(42, 112, W - 84, 140, 12, stroke=1, fill=1)
    c.setFont("Tyneside-Bold", 11)
    c.setFillColor(NAVY)
    c.drawString(62, 226, "Acreditaciones y asociaciones")
    draw_image_fit(c, IMG / "cambridge-preparation-centre-2025-26.webp", 60, 138, 140, 68, contain=True)
    draw_image_fit(c, IMG / "exams-levante-platinum.webp", 225, 145, 145, 57, contain=True)
    draw_image_fit(c, IMG / "fecei-accredited-0279.webp", 400, 149, 125, 48, contain=True)
    c.setFont("Tyneside", 7.5)
    c.setFillColor(MUTED)
    c.drawCentredString(130, 126, "Cambridge English Qualifications")
    c.drawCentredString(297, 126, "Exams Levante · Platinum ES850")
    c.drawCentredString(462, 126, "Centro acreditado FECEI · Nº 0279")
    footer(c)
    c.showPage()

    # Programmes
    header(c, 3, "Programas adaptables a cada centro", "Qué ofrecemos")
    card(c, 42, H - 294, 244, 118, "Extraescolares por etapas", "Iniciación, Primaria, Secundaria y Bachillerato. Agrupación por edad y nivel para avanzar con seguridad.")
    card(c, 309, H - 294, 244, 118, "Preparación de exámenes", "Itinerarios A2, B1, B2, C1 y C2 con práctica de destrezas, estrategia y simulacros.")
    card(c, 42, H - 436, 244, 118, "Conversación y proyectos", "Talleres de speaking, situaciones reales, presentaciones y proyectos temáticos para ganar fluidez.")
    card(c, 309, H - 436, 244, 118, "Refuerzo y apoyo curricular", "Programas coordinados con las necesidades del alumnado y los objetivos lingüísticos del centro.")
    c.setFillColor(BLUE)
    c.roundRect(42, 150, W - 84, 205, 14, stroke=0, fill=1)
    c.setFillColor(GOLD)
    c.setFont("Tyneside-Bold", 10)
    c.drawString(64, 322, "TAMBIÉN PODEMOS INCLUIR")
    c.setFillColor(white)
    c.setFont("Tyneside-Bold", 18)
    c.drawString(64, 286, "Experiencias que conectan idioma y cultura")
    wrap(c, "Charlas culturales, proyectos sobre el noreste de Inglaterra y oportunidades de inmersión con International House Newcastle. Cada propuesta se adapta a la edad, calendario y condiciones del centro.",
         64, 255, 450, size=10.5, leading=15, color=HexColor("#D8E2EB"))
    c.setFont("Tyneside-Bold", 9)
    c.setFillColor(GOLD)
    c.drawString(64, 176, "ACTIVIDADES SUJETAS A DISPONIBILIDAD Y PROPUESTA ESPECÍFICA")
    footer(c)
    c.showPage()

    # Process
    header(c, 4, "Cómo ponemos en marcha el programa", "Modelo de colaboración")
    steps = [
        ("Escuchamos", "Reunión inicial con dirección, coordinación o AMPA para entender edades, horarios, espacios y prioridades."),
        ("Diseñamos", "Propuesta de grupos, calendario, objetivos, metodología y presupuesto ajustados al contexto real del centro."),
        ("Evaluamos", "Prueba de nivel cuando sea necesaria y formación de grupos equilibrados para mejorar la experiencia de aprendizaje."),
        ("Impartimos", "Clases estructuradas, activas y consistentes, con un punto de contacto claro para la coordinación diaria."),
        ("Informamos", "Seguimiento periódico, incidencias comunicadas y valoración del progreso para familias y centro."),
    ]
    yy = H - 205
    for i, (title, body) in enumerate(steps, 1):
        c.setFillColor(GOLD)
        c.circle(68, yy + 7, 18, stroke=0, fill=1)
        c.setFillColor(NAVY)
        c.setFont("Tyneside-Bold", 11)
        c.drawCentredString(68, yy + 3, str(i))
        c.setFont("Tyneside-Bold", 13)
        c.setFillColor(NAVY)
        c.drawString(101, yy + 12, title)
        wrap(c, body, 101, yy - 8, 425, size=9.5, leading=13.5, color=MUTED)
        if i < len(steps):
            c.setStrokeColor(LINE)
            c.setLineWidth(1)
            c.line(68, yy - 24, 68, yy - 75)
        yy -= 106
    c.setFillColor(HexColor("#EDE4D0"))
    c.roundRect(42, 82, W - 84, 74, 10, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Tyneside-Bold", 11)
    c.drawString(60, 130, "Sin paquetes rígidos")
    wrap(c, "La frecuencia, duración, número de grupos y servicios complementarios se concretan con cada centro.",
         60, 110, W - 120, size=9.4, leading=13, color=INK)
    footer(c)
    c.showPage()

    # CTA
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    draw_image_fit(c, IMG / "tyne-bridge-hero-960.webp", 0, H - 255, W, 255)
    c.saveState()
    c.setFillColor(NAVY)
    c.setFillAlpha(0.80)
    c.rect(0, H - 255, W, 255, stroke=0, fill=1)
    c.restoreState()
    draw_image_fit(c, ROOT / "public" / "logo-light.png", 42, H - 85, 170, 48, contain=True)
    c.setFillColor(GOLD)
    c.setFont("Tyneside-Bold", 10)
    c.drawString(44, H - 130, "SIGUIENTE PASO")
    c.setFillColor(white)
    c.setFont("Tyneside-Bold", 28)
    c.drawString(42, H - 176, "Diseñemos el programa")
    c.drawString(42, H - 211, "que vuestro centro necesita")
    c.setFillColor(CREAM)
    c.roundRect(42, 102, W - 84, 410, 16, stroke=0, fill=1)
    c.setFillColor(NAVY)
    c.setFont("Tyneside-Bold", 17)
    c.drawString(66, 472, "Solicita una reunión informativa")
    wrap(c, "Cuéntanos el número aproximado de alumnos, las etapas educativas, el horario preferido y los objetivos del centro. Prepararemos una propuesta clara y sin compromiso.",
         66, 442, 435, size=11, leading=16, color=MUTED)
    details = [
        ("Correo", "secretaria@tynesideacademy.com"),
        ("Teléfono", "868 056 729"),
        ("Móvil / WhatsApp", "605 661 212"),
        ("Dirección", "Plaza Tomás y Valiente 6, Puente Tocinos, Murcia"),
        ("Web", "www.tynesideacademy.com"),
    ]
    yy = 348
    for label, value in details:
        c.setFont("Tyneside-Bold", 8.5)
        c.setFillColor(GOLD)
        c.drawString(68, yy, label.upper())
        c.setFont("Tyneside-Bold", 11.5)
        c.setFillColor(INK)
        c.drawString(172, yy, value)
        yy -= 43
    c.setFillColor(BLUE)
    c.roundRect(66, 102, 430, 52, 8, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Tyneside-Bold", 10.5)
    c.drawCentredString(281, 132, "FORMACIÓN BRITÁNICA · ATENCIÓN CERCANA · RESULTADOS REALES")
    c.setFont("Tyneside", 8.5)
    c.drawCentredString(281, 115, "Tyneside English Academy · Curso 2026/27")
    c.showPage()
    c.save()

    PUBLIC.write_bytes(OUT.read_bytes())
    print(OUT)
    print(PUBLIC)


if __name__ == "__main__":
    build()
