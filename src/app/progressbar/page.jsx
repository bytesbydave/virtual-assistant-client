'use client';

import { useState, useEffect } from 'react';

const ProgressBar = ({ percentage = 10 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <div>
      <div
        className='progress-bar'
        style={{
          width: `${width}%`,
          backgroundColor: '#3498db',
          height: '20px',
        }}></div>
    </div>
  );
};

export default ProgressBar;
