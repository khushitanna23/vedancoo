from PIL import Image, ImageDraw
from pathlib import Path

im = Image.open(r"C:\Users\ABC\OneDrive\Desktop\vedanco3\_pdf_extract\images\marketing_p4.png")
w, h = im.size
print("Size:", w, h)

# In marketing_p4.png (2160 x 1215), the inner white browser/window is:
# Let's inspect where the window borders are.
# Let's sample horizontal row at y = 600 across x:
# Window background is pure white (255, 255, 255)
# Let's find the left, right, top, bottom of the white card inside:

# Let's look at the window:
# Left edge of card is around x = 320 to 360
# Right edge is around x = 1840 to 1860
# Top edge is around y = 140 to 200
# Bottom edge is around y = 1000 to 1040

# Let's measure each logo center from the visual inspection:
# The window has the word "Clients" top left.
# The 12 logos are arranged in a 3x4 grid:
# Row 1 (y ~ 260 to 420):
#   Col 1: Aarefa: x ~ 540 to 800
#   Wait, let's look at marketing_p4.png that we viewed earlier!
# In marketing_p4.png:
# "Clients" button is top-left.
# Logo 1: Aarefa is near the left of the content area.
# Logo 2: ugrowth
# Logo 3: Covid Home Care
# Logo 4: Aman Consultancy

# Let's write a script that crops a few test slices across x from 400 to 1800, y from 250 to 950:
print("Card width approx 1500, height approx 750")
