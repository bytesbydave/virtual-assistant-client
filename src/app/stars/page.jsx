'use client';
import React, { useState, useRef, useEffect } from 'react';
import Star from './star';
import './star';

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

  const assignRating = (index) => {
    setRating(index + 1);
  };

  const resetRating = () => {
    setRating(0);
  };

  return (
    <div className='container'>
      <h1 className='result'>Stars</h1>
      {GRADES.map((grade, index) => {
        if (index < rating) {
          return (
            <div
            // onMouseLeave={() => resetRating()}
            >
              Yellow Star
            </div>
          );
        } else {
          return (
            <button
              onClick={() => assignRating(index)}
              // onMouseEnter={() => assignRating(index)}
            >
              <Star key={index} />
            </button>
          );
        }
      })}
      <button onClick={() => resetRating()}>Reset Rating</button>
      <div>{GRADES[rating]}</div>
    </div>
  );
};

export default RatingStars;

// 1. Display a list of stars for the rating
// 2. Stars are defaulted black.
// 3. When clicked the star turns yellow and the siblings turn yellow
// 4. If the state is default, display onHover. If you hover over the stars it will need to fill in the yellow color.
// 5. Reset button to clear state
// 6. Display Current Rating underneath with star numerical value
