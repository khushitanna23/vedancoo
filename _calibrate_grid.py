from PIL import Image, ImageDraw, ImageFont

im = Image.open(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")
w, h = im.size

# Let's inspect where the logos are by finding connected components of non-white pixels:
# The background is white (255, 255, 255) and watermark is light gray (220-240).
# Logo colors:
# Aarefa: black
# ugrowth: brown/gold (170, 130, 90)
# Covid Home Care: teal/green (0, 150, 150)
# Aman: yellow/navy (230, 150, 20) and (20, 20, 80)
# Well Treat: blue/green
# MAP Medicare: blue/navy
# Jagadamba: dark gray/gold
# Shree: red/blue
# Pizzalicious: black/red/yellow
# Grace: green/gold
# Gabbars: black/gold
# Smile All: green/white

# Let's write a script that scans bounding boxes of dark/vibrant pixels in 12 sectors:
# 3 rows, 4 columns:
# Sector X bounds:
# Col 0: 450 to 800
# Col 1: 800 to 1100
# Col 2: 1100 to 1350
# Col 3: 1350 to 1700

# Sector Y bounds:
# Row 0: 250 to 460
# Row 1: 460 to 680
# Row 2: 680 to 950

sectors = [
    # Row 0
    {"name": "aarefa", "x": (480, 820), "y": (250, 460)},
    {"name": "ugrowth", "x": (820, 1080), "y": (250, 460)},
    {"name": "covid-home-care", "x": (1100, 1330), "y": (250, 460)},
    {"name": "aman-consultancy", "x": (1340, 1600), "y": (250, 460)},
    
    # Row 1
    {"name": "well-treat", "x": (480, 820), "y": (460, 680)},
    {"name": "map-medicare", "x": (820, 1080), "y": (460, 680)},
    {"name": "jagadamba-mobiles", "x": (1080, 1330), "y": (460, 680)},
    {"name": "shree-import-export", "x": (1330, 1620), "y": (460, 680)},
    
    # Row 2
    {"name": "pizzalicious", "x": (480, 820), "y": (680, 950)},
    {"name": "gurace", "x": (820, 1080), "y": (680, 950)},
    {"name": "gabbars", "x": (1080, 1330), "y": (680, 950)},
    {"name": "smile-all", "x": (1330, 1600), "y": (680, 950)},
]

draw_im = im.copy()
draw = ImageDraw.Draw(draw_im)

import os
out_dir = r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\public\assets\clients"
os.makedirs(out_dir, exist_ok=True)

for sec in sectors:
    sx1, sx2 = sec["x"]
    sy1, sy2 = sec["y"]
    
    # Within this sector, find pixels that are part of the logo:
    # Notice watermark has R,G,B all very similar and > 200 (light gray).
    # Logos have either saturated color (max(rgb) - min(rgb) > 20) or very dark (r < 170 and g < 170 and b < 170).
    logo_pixels = []
    for y in range(sy1, sy2):
        for x in range(sx1, sx2):
            r, g, b = im.getpixel((x, y))[:3]
            sat = max(r, g, b) - min(r, g, b)
            is_dark = (r < 180 and g < 180 and b < 180)
            is_colored = (sat > 25)
            if is_dark or is_colored:
                logo_pixels.append((x, y))
                
    if logo_pixels:
        xs = [p[0] for p in logo_pixels]
        ys = [p[1] for p in logo_pixels]
        pad = 16
        bx1 = max(sx1, min(xs) - pad)
        by1 = max(sy1, min(ys) - pad)
        bx2 = min(sx2, max(xs) + pad)
        by2 = min(sy2, max(ys) + pad)
    else:
        bx1, by1, bx2, by2 = sx1, sy1, sx2, sy2
        
    crop = im.crop((bx1, by1, bx2, by2))
    name = sec["name"]
    crop.save(os.path.join(out_dir, f"{name}.png"))
    crop.save(os.path.join(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\src\assets\clients", f"{name}.png"))
    print(f"Calibrated {name}: bbox=({bx1}, {by1}, {bx2}, {by2}), size={crop.size}")

print("Calibrated cropping finished!")
