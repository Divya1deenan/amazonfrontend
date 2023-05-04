import React, { useState } from 'react'
import axios from 'axios'
import "./mobile.css"
import { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
const Mobile = () => {
    const NUM_IMAGES_TO_DISPLAY = 6;

    const [images, setImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [displayedImages, setDisplayedImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        const response = await axios.get('http://localhost:4000/products'); // replace with your API endpoint
        setImages(response.data);
        setDisplayedImages(response.data.slice(startIndex, startIndex + NUM_IMAGES_TO_DISPLAY));
      };
      fetchImages();
    }, [startIndex]);
  
    const handleNext = () => {
      if (startIndex + NUM_IMAGES_TO_DISPLAY < images.length) {
        setStartIndex(startIndex + NUM_IMAGES_TO_DISPLAY);
      }
    };
  
    const handlePrev = () => {
      if (startIndex >= NUM_IMAGES_TO_DISPLAY) {
        setStartIndex(startIndex - NUM_IMAGES_TO_DISPLAY);
      }
    };
  
    return (
      <div className="carousel">
        <div className="image-list">
          {displayedImages.map((image) => (
            <img key={image._id} src={image.url} alt={image.title} />
          ))}
        </div>
        <div className="button-container">
          {startIndex >= NUM_IMAGES_TO_DISPLAY && (
            <button className="prev-button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {startIndex + NUM_IMAGES_TO_DISPLAY < images.length && (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

export default Mobile

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NUM_IMAGES_TO_DISPLAY = 6;

// const Carousel = () => {
//   const [images, setImages] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [displayedImages, setDisplayedImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const response = await axios.get('http://localhost:4000/products'); // replace with your API endpoint
//       setImages(response.data);
//       setDisplayedImages(response.data.slice(startIndex, startIndex + NUM_IMAGES_TO_DISPLAY));
//     };
//     fetchImages();
//   }, [startIndex]);

//   const handleNext = () => {
//     if (startIndex + NUM_IMAGES_TO_DISPLAY < images.length) {
//       setStartIndex(startIndex + NUM_IMAGES_TO_DISPLAY);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex >= NUM_IMAGES_TO_DISPLAY) {
//       setStartIndex(startIndex - NUM_IMAGES_TO_DISPLAY);
//     }
//   };

//   return (
//     <div className="carousel">
//       <div className="image-list">
//         {displayedImages.map((image) => (
//           <img key={image._id} src={image.url} alt={image.title} />
//         ))}
//       </div>
//       <div className="button-container">
//         {startIndex >= NUM_IMAGES_TO_DISPLAY && (
//           <button className="prev-button" onClick={handlePrev}>
//             Previous
//           </button>
//         )}
//         {startIndex + NUM_IMAGES_TO_DISPLAY < images.length && (
//           <button className="next-button" onClick={handleNext}>
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
