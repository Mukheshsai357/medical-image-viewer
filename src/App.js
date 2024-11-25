import React, { useState, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";

const App = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const imageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new window.Image();
        img.src = reader.result;
        img.onload = () => setImage(img);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(scale - 0.1);
  const handleRotate = () => setRotation(rotation + 15);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Medical Image Viewer</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 w-full p-2 border rounded"
        />
        <div className="mb-4 flex space-x-4">
          <button onClick={handleZoomIn} className="btn">
            Zoom In
          </button>
          <button onClick={handleZoomOut} className="btn">
            Zoom Out
          </button>
          <button onClick={handleRotate} className="btn">
            Rotate
          </button>
        </div>
        <div className="relative border bg-gray-200 h-96">
          {image && (
            <Stage width={600} height={400}>
              <Layer>
                <Image
                  image={image}
                  x={300}
                  y={200}
                  ref={imageRef}
                  draggable
                  scaleX={scale}
                  scaleY={scale}
                  rotation={rotation}
                  offsetX={image ? image.width / 2 : 0}
                  offsetY={image ? image.height / 2 : 0}
                />
              </Layer>
            </Stage>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

