from PIL import Image, ImageDraw, ImageFont

# Create about image
img = Image.new('RGB', (400, 500), color=(41, 128, 185))
draw = ImageDraw.Draw(img)

# Draw a circle
draw.ellipse([50, 50, 350, 350], fill=(230, 126, 34), outline='white', width=3)

# Add text
try:
    font = ImageFont.truetype("arial.ttf", 28)
except:
    font = ImageFont.load_default()

draw.text((120, 370), "Kevin Patel", fill='white', font=font)
draw.text((100, 410), "ML & AI Engineer", fill='white', font=font)

img.save(r"C:\Users\kevin\Downloads\Khushi-12.github.io-main\Khushi-12.github.io-main\src\assets\about.jpg", quality=95)
print("Created about.jpg")
