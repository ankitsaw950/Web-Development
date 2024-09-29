import React, { useState } from "react";
import ImageCard from "./ImageCard";

const GalleryModal = ({ onClose }) => {
  const [photos, setPhotos] = useState([]);
  const [photoName, setPhotoName] = useState("");

  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setPhotos([...photos, { id: Date.now(), url: photoURL, name: file.name }]);
      setPhotoName(""); // Clear input
    }
  };

  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <button onClick={onClose} className="text-3xl hover:text-gray-300 transition">←</button>
        <h2 className="text-2xl">Photos</h2>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        {photos.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo) => (
              <ImageCard key={photo.id} photo={photo} onDelete={() => handleDeletePhoto(photo.id)} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <label htmlFor="file-upload" className="cursor-pointer text-6xl border-dashed border-2 border-white rounded p-2">+</label>
            <input id="file-upload" type="file" onChange={handleAddPhoto} className="hidden" />
          </div>
        )}
      </div>
      <div className="p-4">
        <label htmlFor="file-upload" className="cursor-pointer text-lg border-dotted border-2 border-white rounded p-2">
          <span>Add Photo</span>
        </label>
        <input id="file-upload" type="file" onChange={handleAddPhoto} className="hidden" />
      </div>
    </div>
  );
};

export default GalleryModal;
