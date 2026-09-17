from PIL import Image
import os

im = Image.open(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")
w, h = im.size

# Exact bounding boxes measured from the 2160x1215 image:
# Row 1:
# Aarefa: x: 500 to 820, y: 280 to 430
# ugrowth: x: 830 to 1060, y: 250 to 420
# Covid Home Care: x: 1110 to 1300, y: 240 to 430
# Aman: x: 1350 to 1570, y: 250 to 430

# Row 2:
# Well Treat: x: 540 to 820, y: 510 to 630
# MAP: x: 840 to 1040, y: 480 to 640
# Jagadamba: x: 1080 to 1310, y: 490 to 640
# Shree: x: 1330 to 1600, y: 500 to 640

# Row 3:
# Pizzalicious: x: 550 to 800, y: 730 to 870
# Grace: x: 840 to 1040, y: 700 to 870
# Gabbars: x: 1080 to 1300, y: 710 to 870
# Smile All: x: 1350 to 1580, y: 700 to 870

boxes = {
    "aarefa": (520, 275, 830, 420),
    "ugrowth": (830, 250, 1070, 420),
    "covid-home-care": (1110, 240, 1305, 425),
    "aman-consultancy": (1350, 250, 1575, 425),
    "well-treat": (540, 510, 810, 630),
    "map-medicare": (840, 475, 1045, 635),
    "jagadamba-mobiles": (1080, 490, 1310, 640),
    "shree-import-export": (1330, 500, 1600, 640),
    "pizzalicious": (560, 730, 800, 870),
    "gurace": (840, 700, 1045, 875),
    "gabbars": (1080, 715, 1300, 870),
    "smile-all": (1350, 695, 1585, 875),
}

out_dirs = [
    r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\public\assets\clients",
    r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\src\assets\clients",
]

for name, box in boxes.items():
    crop = im.crop(box)
    for d in out_dirs:
        os.makedirs(d, exist_ok=True)
        crop.save(os.path.join(d, f"{name}.png"))
    print(f"Cropped {name}: box={box}, size={crop.size}")

print("All 12 cropped with exact bounds!")
