from PIL import Image
import os

im = Image.open(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")
w, h = im.size
print("Size:", w, h)

# In marketing_p4.png (2160 x 1215):
# Left edge ~ 380, Right edge ~ 1780
# Top edge ~ 250, Bottom edge ~ 920

col_ranges = [
    (380, 720),
    (730, 1070),
    (1080, 1420),
    (1430, 1780),
]

row_ranges = [
    (240, 460),
    (470, 680),
    (690, 920),
]

client_names = [
    ["aarefa", "ugrowth", "covid-home-care", "aman-consultancy"],
    ["well-treat", "map-medicare", "jagadamba-mobiles", "shree-import-export"],
    ["pizzalicious", "gurace", "gabbars", "smile-all"]
]

out_dir1 = r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\public\assets\clients"
out_dir2 = r"C:\Users\ABC\OneDrive\Desktop\vedanco3\frontend\src\assets\clients"
os.makedirs(out_dir1, exist_ok=True)
os.makedirs(out_dir2, exist_ok=True)

for r_idx, (y1, y2) in enumerate(row_ranges):
    for c_idx, (x1, x2) in enumerate(col_ranges):
        name = client_names[r_idx][c_idx]
        crop = im.crop((x1, y1, x2, y2))
        
        # Convert to RGB to be sure
        rgb = crop.convert("RGB")
        cw, ch = rgb.size
        
        # Find non-white bounds (pixels not close to white: r < 240 or g < 240 or b < 240)
        min_x, max_x = cw, 0
        min_y, max_y = ch, 0
        found = False
        
        pixels = rgb.load()
        for y in range(ch):
            for x in range(cw):
                r, g, b = pixels[x, y]
                # Watermark "Vedanco" has very light gray pixels around 210-230 in background
                # The logos are darker or saturated (R,G,B < 200 or saturated)
                # Let's detect foreground content:
                is_logo = (r < 210 or g < 210 or b < 210)
                if is_logo:
                    found = True
                    if x < min_x: min_x = x
                    if x > max_x: max_x = x
                    if y < min_y: min_y = y
                    if y > max_y: max_y = y
                    
        if found and max_x > min_x and max_y > min_y:
            pad = 12
            bx1 = max(0, min_x - pad)
            by1 = max(0, min_y - pad)
            bx2 = min(cw, max_x + pad)
            by2 = min(ch, max_y + pad)
            final_crop = crop.crop((bx1, by1, bx2, by2))
        else:
            final_crop = crop
            
        final_crop.save(os.path.join(out_dir1, f"{name}.png"))
        final_crop.save(os.path.join(out_dir2, f"{name}.png"))
        print(f"Saved {name}.png: size={final_crop.size}")

print("All 12 logos saved to public/assets/clients and src/assets/clients successfully!")
