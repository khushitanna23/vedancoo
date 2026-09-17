import fitz
from pathlib import Path

pdf_path = r"C:\Users\ABC\Downloads\VEDANCO MARKETING.pdf"
doc = fitz.open(pdf_path)
page = doc[3] # page 4 (0-indexed 3)

print("Page 4 rect:", page.rect)
imgs = page.get_images(full=True)
print("Page 4 embedded images:", len(imgs))

out_dir = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\p4_extracted")
out_dir.mkdir(exist_ok=True)

for i, img in enumerate(imgs):
    xref = img[0]
    pix = fitz.Pixmap(doc, xref)
    if pix.n > 4:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    dest = out_dir / f"p4_img_{i}_xref{xref}.png"
    pix.save(dest)
    print(f"Image {i}: xref={xref}, size={pix.width}x{pix.height}, saved to {dest.name}")
