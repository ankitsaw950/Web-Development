import React, { useState } from "react";
import Calculator from "./Components/Calculator.jsx";
import GalleryModal from "./Components/GalleryModal.jsx";

const App = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpenGallery = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {!isGalleryOpen ? (
        <Calculator onSecretCodeEntered={handleOpenGallery} />
      ) : (
        <GalleryModal onClose={handleCloseGallery} />
      )}
    </div>
  );
};

export default App;
