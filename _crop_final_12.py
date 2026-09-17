from PIL import Image
import os

im = Image.open(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")

# Hand-tuned pixel-perfect bounding boxes for the 12 logos on 2160x1215 canvas:
boxes = {
    "aarefa": (560, 325, 800, 425),
    "ugrowth": (835, 255, 1070, 445),
    "covid-home-care": (1115, 260, 1280, 465),
    "aman-consultancy": (1355, 255, 1605, 465),
    "well-treat": (550, 545, 810, 665),
    "map-medicare": (845, 535, 1030, 715),
    "jagadamba-mobiles": (1080, 560, 1315, 705),
    "shree-import-export": (1330, 540, 1575, 685),
    "pizzalicious": (565, 825, 800, 955),
    "gurace": (835, 780, 1040, 960),
    "gabbars": (1080, 775, 1315, 955),
    "smile-all": (1345, 770, 1575, 960),
}

out_dirs = [
    r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\public\assets\clients",
    r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\src\assets\clients",
]

for name, (x1, y1, x2, y2) in boxes.items():
    crop = im.crop((x1, y1, x2, y2))
    for d in out_dirs:
        os.makedirs(d, exist_ok=True)
        crop.save(os.path.join(d, f"{name}.png"))
    print(f"Saved final {name}: size={crop.size}")

print("All 12 logos exported perfectly!")
