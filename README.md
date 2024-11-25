Medical Image Viewer - Software Engineer Role Challenge

Overview
This project is a Medical Image Viewer SaaS application designed to assist healthcare professionals in viewing, annotating, and manipulating medical images (including DICOM images). It provides a user-friendly interface for performing tasks like cropping, zooming, adjusting brightness/contrast, and more, to improve workflow in medical diagnostics. The application also supports DICOM image handling and provides a real-world measurement feature to convert pixel distances into millimeters or centimeters.

Tech Stack
Frontend Framework: React.js
Styling: Tailwind CSS
Image Manipulation: Konva.js
Containerization: Docker (optional for deployment)
Version Control: Git, GitHub
Features
Image Manipulation Tools:

Cropping: Select and crop regions of interest in medical images.
Zooming & Panning: Zoom in and out of images and pan across them for detailed views.
Brightness/Contrast Adjustment: Modify image brightness and contrast to enhance visibility of features.
Window/Level Adjustment: Modify the contrast and brightness range of the images.
DICOM Image Support:

Upload and display DICOM images, which are commonly used in medical imaging.
View relevant metadata like patient name, study date, and image dimensions.
Real-World Measurement Feature (Brownie Points Feature):

Convert pixel distances to real-world units like millimeters (mm) or centimeters (cm) using pixel spacing and resolution from the DICOM metadata.
Responsive UI:

The application is designed to be fully responsive across different devices.

Image Manipulation
Cropping: The app allows users to select a region of interest and crop the image accordingly.
Zooming & Panning: Users can zoom in and out of the images for detailed inspection, and pan across the image for better visibility.
Brightness & Contrast Adjustment: The image's brightness and contrast can be adjusted to better view certain features.
Window/Level Adjustment: Allows adjustment of image contrast and brightness ranges for better diagnosis.
DICOM Image Handling
DICOM images can be uploaded and viewed directly in the app.
Metadata such as Patient Name, Study Date, and Image Dimensions are extracted from the DICOM file and displayed to the user.
Real-World Measurement
The app provides an optional feature that converts pixel distances into real-world measurements, such as millimeters (mm) or centimeters (cm). It uses the pixel spacing and resolution metadata from the DICOM image to calculate these distances accurately.
Project Structure
bash
Copy code
/medical-image-viewer
│
├── /src
│   ├── /components       # Reusable React components
│   ├── /images           # Image assets
│   ├── App.js            # Main application logic
│   └── index.js          # React entry point
│
├── /public
│   └── index.html        # HTML template
│
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
└── Dockerfile            # Docker configuration (optional)
How to Use
Open the app on your local server (http://localhost:3000).
Upload a medical image by clicking the "Upload" button.
Use the provided tools to manipulate the image, such as cropping, zooming, and adjusting the contrast.
View DICOM image metadata like the patient's name and study date.
Use the real-world measurement tool to convert pixel distances to millimeters or centimeters.
Known Issues
Image manipulation tools may not work seamlessly with very large DICOM images due to performance limitations. This will be addressed in future updates.
Future Improvements
Implement dark mode/light mode support.
Improve handling of larger medical images for better performance.
Add additional image annotation tools for more advanced diagnostics.
