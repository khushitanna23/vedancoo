from PIL import Image
from pathlib import Path

src_dir = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images")
out = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\client_logos")
out.mkdir(exist_ok=True)

p4 = Image.open(src_dir / "marketing_p4.png")
w, h = p4.size
print("p4", w, h)
# Inner window approx (from visual): x 18%-82%, y 22%-82%
box = (int(w * 0.20), int(h * 0.24), int(w * 0.80), int(h * 0.84))
grid = p4.crop(box)
gw, gh = grid.size
rows, cols = 3, 4
names = [
    "aarefa", "ugrowth", "covid-home-care", "aman-consultancy",
    "well-treat", "map-medicare", "jagadamba-mobiles", "shree-import-export",
    "pizzafictions", "girace", "babbars", "smile-all",
]
pad_x, pad_y = int(gw * 0.02), int(gh * 0.04)
cell_w, cell_h = (gw - pad_x * 2) // cols, (gh - pad_y * 2) // rows
for r in range(rows):
    for c in range(cols):
        i = r * cols + c
        x1 = pad_x + c * cell_w + int(cell_w * 0.06)
        y1 = pad_y + r * cell_h + int(cell_h * 0.08)
        x2 = pad_x + (c + 1) * cell_w - int(cell_w * 0.06)
        y2 = pad_y + (r + 1) * cell_h - int(cell_h * 0.08)
        crop = grid.crop((x1, y1, x2, y2))
        dest = out / f"{names[i]}.png"
        crop.save(dest)
        print("saved", dest.name, crop.size)

p14 = Image.open(src_dir / "marketing_p14.png")
w, h = p14.size
print("p14", w, h)
box = (int(w * 0.12), int(h * 0.28), int(w * 0.88), int(h * 0.78))
grid = p14.crop(box)
gw, gh = grid.size
# row1 4 logos, row2 3 logos
row1 = ["cake-com", "pelican-nest", "six-woods", "dharwad-hubballi-totals"]
row2 = ["shivay-group", "pune-home-deals", "oneway-akshar"]
for i, name in enumerate(row1):
    cell = gw // 4
    x1 = i * cell + int(cell * 0.08)
    y1 = int(gh * 0.04)
    x2 = (i + 1) * cell - int(cell * 0.08)
    y2 = int(gh * 0.52)
    crop = grid.crop((x1, y1, x2, y2))
    crop.save(out / f"{name}.png")
    print("saved", name, crop.size)
# second row is 3 items, left-aligned-ish with gap in middle on original
# visual: shivay left-center, pune center, oneway right
positions = [
    (0.08, 0.55, 0.38, 0.98),
    (0.38, 0.55, 0.68, 0.98),
    (0.68, 0.55, 0.98, 0.98),
]
for name, (a, b, c, d) in zip(row2, positions):
    crop = grid.crop((int(gw * a), int(gh * b), int(gw * c), int(gh * d)))
    crop.save(out / f"{name}.png")
    print("saved", name, crop.size)

print("done")
