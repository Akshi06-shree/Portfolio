# Professional Two-Page Engineering Portfolio Website
**Student:** Akshidha Shree G.R.  
**Focus:** Biomedical Engineering | PCB Design | Embedded Systems | Hardware Innovation  
**Institution:** Dhanalakshmi Srinivasan College of Engineering and Technology (DSCET)  

---

## ⚡ Overview

A modern, high-contrast hardware engineering portfolio designed for:
- Hardware Hackathons & Technical Competitions
- Engineering Internships & Co-op Applications
- Academic Conferences & Technical Showcases

Built with a dark charcoal / navy aesthetic (`#070B12`), electric cyan accents (`#00E5FF`), technical monospace typography, and interactive circuit inspection galleries.

---

## 📁 Repository Structure

```text
engineering-portfolio/
│
├── index.html                   # PAGE 1: About Me, Skills, Engineering Mindset & Profile
├── projects.html                # PAGE 2: Projects, Media Galleries & Achievements
├── portfolio-print.html         # STRICT 2-PAGE PRINT / PDF EXPORT DOCUMENT
├── README.md                    # Documentation & Deployment Guide
│
└── assets/
    ├── css/
    │   ├── style.css            # Dark engineering theme, circuit traces, components
    │   └── print.css            # Strict @media print rules for exact 2-page PDF export
    │
    ├── js/
    │   └── main.js              # Gallery switcher, lightbox modal, email copy toast, filters
    │
    └── images/                  # Real Project Photographs & CAD Renders
        ├── heart-pcb-assembled-lit.jpg         # Physically fabricated heart PCB (illuminated)
        ├── heart-pcb-kicad-traces.jpg          # KiCad 2-layer copper routing & silkscreen
        ├── heart-pcb-3d-top.jpg                # KiCad 3D Viewer top assembly
        ├── heart-pcb-3d-bottom.jpg             # KiCad 3D Viewer CR2450 coin-cell retainer
        ├── mortisafe-esp32-prototype.jpg       # MortiSafe ESP32 + 16x2 I2C LCD breadboard rig
        ├── bionova-exploded-concept.jpg        # Bio Nova exploded 3D CAD render
        ├── bionova-cad-fusion360.png           # Fusion 360 wrist_stabilizer_3D tree
        ├── ecg-hardware-acquisition-setup.jpg  # AD8232 testbench with electrodes & MATLAB
        ├── ecg-matlab-lead2-gui.jpg            # Custom MATLAB Lead II ECG assistant GUI
        └── biocrypt-roi-streamlit-demo.jpg     # Streamlit Visual Cryptography shares & SHA-256
```

---

## 🚀 How to Run & Preview

### Option 1: Direct File Open
Simply double-click `index.html`, `projects.html`, or `portfolio-print.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Local HTTP Server (Python)
Open a terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🖨️ How to Export as a Flawless 2-Page PDF

1. Navigate to **`portfolio-print.html`** or click **"Export 2-Page PDF"** in the navigation bar.
2. Press **Ctrl + P** (or click the floating **"Print / Save as PDF"** button).
3. In the print dialog:
   - **Destination:** Save as PDF
   - **Layout:** Portrait
   - **Paper Size:** A4 or Letter
   - **Margins:** Minimum or Default
   - **Options:** Check **"Background graphics"** (to preserve circuit borders and badges).
4. Click **Save**. The document is strictly partitioned into **Page 1** (Profile, Skills & Mindset) and **Page 2** (Projects, Photos & Achievements).

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. Initialize a Git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional Two-Page Engineering Portfolio"
   ```
2. Create a new repository on your GitHub account (`https://github.com/Akshi06-shree/portfolio` or `Akshi06-shree.github.io`).
3. Link and push:
   ```bash
   git remote add origin https://github.com/Akshi06-shree/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In your GitHub repository settings, go to **Pages** ➔ set source to `Deploy from a branch` (branch: `main`, folder: `/ (root)`).
5. Your live portfolio will be accessible worldwide at:
   `https://akshi06-shree.github.io/portfolio/`

---

## 📬 Contact Information
- **Email:** akshidha78@gmail.com
- **GitHub:** https://github.com/Akshi06-shree
- **LinkedIn:** https://www.linkedin.com/in/akshidha-shree-bba34b329
