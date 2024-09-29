import React, { useState } from 'react';

const ImageCard = ({ photo, onDelete }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="relative group">
      {isFullScreen ? (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <img src={photo.url} alt={photo.name} className="max-w-full max-h-full" />
          <button 
            onClick={() => setIsFullScreen(false)} 
            className="absolute top-4 right-4 text-4xl text-white"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="relative cursor-pointer" onClick={() => setIsFullScreen(true)}>
          <img src={photo.url} alt={photo.name} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
          <div className="absolute top-2 right-2">
            <button onClick={onDelete} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
