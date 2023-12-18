import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="mb-4"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${index + 1}`}
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;


