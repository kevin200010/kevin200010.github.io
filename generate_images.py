from PIL import Image, ImageDraw, ImageFont
import random
import os

# Create projects directory if not exists
projects_path = r"C:\Users\kevin\Downloads\Khushi-12.github.io-main\Khushi-12.github.io-main\src\assets\projects"
os.makedirs(projects_path, exist_ok=True)

# Project titles for sample images
project_names = [
    "CompliTru AI Platform",
    "RAG Pipeline System",
    "ML Orchestration",
    "Time-Series Forecasting",
    "Document Parsing",
    "Cloud Infrastructure",
    "ML Model Optimization",
    "Data Analytics Dashboard"
]

# Create sample images
colors = [
    (52, 152, 219),   # Blue
    (46, 204, 113),   # Green
    (155, 89, 182),   # Purple
    (230, 126, 34),   # Orange
    (41, 128, 185),   # Dark Blue
    (22, 160, 133),   # Teal
    (142, 68, 173),   # Dark Purple
    (41, 50, 65)      # Dark Gray
]

for i in range(1, 9):
    img = Image.new('RGB', (600, 400), color=colors[i-1])
    draw = ImageDraw.Draw(img)
    
    # Add text
    text = f"{project_names[i-1]}\nProject {i}"
    try:
        font = ImageFont.truetype("arial.ttf", 36)
    except:
        font = ImageFont.load_default()
    
    # Draw text in center
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    position = ((600 - text_width) // 2, (400 - text_height) // 2)
    
    draw.text(position, text, fill='white', font=font)
    
    # Add some design elements
    for _ in range(3):
        x = random.randint(0, 600)
        y = random.randint(0, 400)
        draw.ellipse([x, y, x+30, y+30], outline='white', width=2)
    
    # Save image
    filename = f"project-{i}.jpg"
    if i > 6:
        filename = f"project-{i}.jpeg"
    img.save(os.path.join(projects_path, filename), quality=95)
    print(f"Created {filename}")

# Create a profile picture
profile_img = Image.new('RGB', (400, 500), color=(52, 152, 219))
draw = ImageDraw.Draw(profile_img)

# Draw a simple circle for profile
draw.ellipse([50, 50, 350, 350], fill=(230, 126, 34), outline='white', width=3)

# Add name
try:
    font = ImageFont.truetype("arial.ttf", 40)
except:
    font = ImageFont.load_default()

draw.text((70, 380), "Kevin Patel", fill='white', font=font)

assets_path = r"C:\Users\kevin\Downloads\Khushi-12.github.io-main\Khushi-12.github.io-main\src\assets"
profile_img.save(os.path.join(assets_path, "kevin.jpeg"), quality=95)
print("Created kevin.jpeg profile picture")
