from pathlib import Path
from pypdf import PdfReader

files = [
    Path(r"C:\Users\ABC\Downloads\VEDANCO MARKETING.pdf"),
    Path(r"C:\Users\ABC\Downloads\it solusion .pdf"),
    Path(r"C:\Users\ABC\Downloads\vedanco  real esate marketig (1).pdf"),
    Path(r"C:\Users\ABC\Downloads\_vedanco Social Media Marketing & Personal Branding (1) (1).pdf"),
]
out = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract")
out.mkdir(exist_ok=True)

for p in files:
    print("READING", p.name, p.stat().st_size)
    reader = PdfReader(str(p))
    print(" pages", len(reader.pages))
    texts = []
    for i, page in enumerate(reader.pages):
        t = page.extract_text() or ""
        texts.append(f"\n\n===== PAGE {i+1} =====\n" + t)
        if i >= 24:
            texts.append("\n\n[truncated remaining pages]\n")
            break
    dest = out / (p.stem[:50].strip().replace(" ", "_") + ".txt")
    dest.write_text("".join(texts), encoding="utf-8")
    print(" wrote", dest, "chars", sum(len(x) for x in texts))
print("done")
