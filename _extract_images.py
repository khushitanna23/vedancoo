import fitz
from pathlib import Path

out = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images")
out.mkdir(parents=True, exist_ok=True)

files = {
    "marketing": Path(r"C:\Users\ABC\Downloads\VEDANCO MARKETING.pdf"),
    "it": Path(r"C:\Users\ABC\Downloads\it solusion .pdf"),
    "re": Path(r"C:\Users\ABC\Downloads\vedanco  real esate marketig (1).pdf"),
    "smm": Path(r"C:\Users\ABC\Downloads\_vedanco Social Media Marketing & Personal Branding (1) (1).pdf"),
}

for key, pdf in files.items():
    doc = fitz.open(pdf)
    print(key, "pages", doc.page_count)
    for i, page in enumerate(doc):
        # render selected pages that likely have logos/portfolio
        if key == "marketing" and i+1 in (4, 14, 15, 3, 5):
            pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
            dest = out / f"{key}_p{i+1}.png"
            pix.save(dest)
            print(" saved page", dest, dest.stat().st_size)
        if key == "smm" and i+1 in (9, 10, 11, 12, 13, 14, 15, 16):
            pix = page.get_pixmap(matrix=fitz.Matrix(1.2, 1.2))
            dest = out / f"{key}_p{i+1}.png"
            pix.save(dest)
            print(" saved page", dest, dest.stat().st_size)
        if key == "it" and i+1 in (11, 12, 13, 14, 15):
            pix = page.get_pixmap(matrix=fitz.Matrix(1.2, 1.2))
            dest = out / f"{key}_p{i+1}.png"
            pix.save(dest)
            print(" saved page", dest, dest.stat().st_size)
        if key == "re" and i+1 in (1, 2, 3, 4, 5, 6):
            pix = page.get_pixmap(matrix=fitz.Matrix(1.0, 1.0))
            dest = out / f"{key}_p{i+1}.png"
            pix.save(dest)
            print(" saved page", dest, dest.stat().st_size)
        imgs = page.get_images(full=True)
        print(f"  {key} p{i+1} embedded images: {len(imgs)}")
        for j, img in enumerate(imgs[:8]):
            xref = img[0]
            try:
                pix = fitz.Pixmap(doc, xref)
                if pix.n > 4:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                dest = out / f"{key}_p{i+1}_img{j}.png"
                pix.save(dest)
            except Exception as e:
                print("   skip", e)
print("done")
