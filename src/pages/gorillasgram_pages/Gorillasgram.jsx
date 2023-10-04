import { useState, useEffect } from 'react';
import '../../styles/Gorrila-images-container.css';

const Gorillasgram = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  // Load the uploaded image URLs from local storage when the component mounts
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    setUploadedImages(storedImages);
  }, []);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 0) {
      const newImages = files.map((file) => ({
        url: URL.createObjectURL(file),
        alt: 'Uploaded Meme',
      }));

      setUploadedImages((prevImages) => [...prevImages, ...newImages]);

      // Store the updated image URLs in local storage
      localStorage.setItem(
        'uploadedImages',
        JSON.stringify([...uploadedImages, ...newImages])
      );
    }
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
    localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
  };

  return (
    <>
      <h1>Gorillasgram</h1>
      <div className="file-input-container">
        <label className="custom-file-input-label" htmlFor="file-input">
          Add Images
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </div>
      <div className="gorrila-images-container">
        {uploadedImages.map((image, index) => (
          <div key={index} className="upload-image-container">
            <button
              className="delete-button"
              onClick={() => handleImageDelete(index)}
            >
              X
            </button>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gorillasgram;
