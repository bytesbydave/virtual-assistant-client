'use client';
import { useState, useEffect } from 'react';

const Carousel = ({
  images = ['a', 'b', 'c'],
  interval = 3000,
  transitionDuration = 500,
  showDots = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatic advancement
  useEffect(() => {
    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return (
    <div className='carousel'>
      <button onClick={prevImage}>&#8249;</button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ transition: `transform ${transitionDuration}ms ease-in-out` }}
      />
      <button onClick={nextImage}>&#8250;</button>
      {showDots && (
        <div className='dots'>
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
