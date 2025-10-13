'use client';

import { useState } from "react";

interface SliderProps {
  images: string[];
  altTexts?: string[];
  titles?: string[];
}

export default function Slider({
  images,
  altTexts = [],
  titles = [],
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <button
          type="button"
          className="slider-button slider-button-prev"
          onClick={goToPrevious}
        >
          &#8249;
        </button>
        <div className="slider-main">
          <p>{titles[currentIndex]}</p>
          <img
            src={images[currentIndex]}
            alt={altTexts[currentIndex] || `Image ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>

        <button
          type="button"
          className="slider-button slider-button-next"
          onClick={goToNext}
        >
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}