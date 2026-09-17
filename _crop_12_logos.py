from PIL import Image
from pathlib import Path

img_path = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")
im = Image.open(img_path)
w, h = im.size
print(f"Loaded image: {w}x{h}")

# The inner window on page 4 has:
# top around 21%, bottom around 83%
# left around 18%, right around 83%
# Let's inspect the rows and cols.
# Total 3 rows, 4 columns.

out_dir1 = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\src\assets\clients")
out_dir2 = Path(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\public\assets\clients")
out_dir1.mkdir(parents=True, exist_ok=True)
out_dir2.mkdir(parents=True, exist_ok=True)

# Grid bounds
x_min, x_max = int(w * 0.175), int(w * 0.835)
y_min, y_max = int(h * 0.22), int(h * 0.82)
gw = x_max - x_min
gh = y_max - y_min
cols, rows = 4, 3
cw = gw / cols
ch = gh / rows

client_keys = [
    ["aarefa", "ugrowth", "covid-home-care", "aman-consultancy"],
    ["well-treat", "map-medicare", "jagadamba-mobiles", "shree-import-export"],
    ["pizzalicious", "gurace", "gabbars", "smile-all"]
]

for r in range(rows):
    for c in range(cols):
        key = client_keys[r][c]
        # Calculate cell bounding box with padding
        x1 = int(x_min + c * cw + cw * 0.04)
        y1 = int(y_min + r * ch + ch * 0.05)
        x2 = int(x_min + (c + 1) * cw - cw * 0.04)
        y2 = int(y_min + (r + 1) * ch - ch * 0.05)
        
        crop = im.crop((x1, y1, x2, y2))
        
        # Save both to src/assets/clients and public/assets/clients
        f1 = out_dir1 / f"{key}.png"
        f2 = out_dir2 / f"{key}.png"
        crop.save(f1)
        crop.save(f2)
        print(f"Saved {key}: {crop.size}")

print("All 12 client logos cropped successfully!")
