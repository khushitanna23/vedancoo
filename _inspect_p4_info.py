import pymupdf

doc = pymupdf.open(r"C:\Users\ABC\Downloads\VEDANCO MARKETING.pdf")
page = doc[3] # page 4

img_info = page.get_image_info(xrefs=True)
print(f"Total placed images on page 4: {len(img_info)}")
for i, item in enumerate(img_info):
    print(f"[{i}] xref={item['xref']} bbox={item['bbox']} width={item['width']} height={item['height']}")
