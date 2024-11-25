Medical Image Viewer

Description: 

This project is a SaaS-based Medical Image Viewer application designed to assist healthcare professionals in annotating and manipulating medical images like ultrasound scans. The application supports various image formats and provides tools for cropping, zooming, and handling DICOM images.

Key Features:

Image manipulation tools: Crop, zoom, adjust brightness, contrast, and window/level.
Support for DICOM images: View medical images and relevant metadata (patient name, study date, etc.).
Real-world measurement conversion (optional): Convert pixel distances into real-world units like millimeters (mm) or centimeters (cm).
Tech Stack
Frontend Framework: React.js
State Management: React Context API / useState
Styling: Tailwind CSS
Image Manipulation: Konva.js
Image Handling: react-konva
Containerization: Docker (optional)
Build Tools: Webpack, npm 

Features and Functionality

Image Manipulation Tools

Cropping: Allows users to crop images to focus on regions of interest.
Zooming and Panning: Use mouse controls to zoom in/out and pan the image.
Brightness and Contrast: Adjust image brightness and contrast for better visualization.
Window/Level Adjustments: Adjust the window and level for medical images to improve contrast and clarity.
DICOM Image Handling
Supports uploading and viewing DICOM images.
Displays relevant metadata such as patient name and study date extracted from the DICOM file.