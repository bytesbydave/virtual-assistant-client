'use client';

import { useState } from 'react';

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertFtoC = (e) => {
    const inputValue = e.target.value;
    setFahrenheit(inputValue);
    const convertedTemp = ((inputValue - 32) * 5) / 9;
    setCelsius(convertedTemp);
  };

  const convertCtoF = (e) => {
    const inputValue = e.target.value;
    setCelsius(inputValue);
    const convertedTemp = inputValue * (9 / 5) + 32;
    setFahrenheit(convertedTemp);
  };

  return (
    <div>
      Fahrenheit
      <input value={fahrenheit} onChange={(e) => convertFtoC(e)} />
      Celsius
      <input value={celsius} onChange={(e) => convertCtoF(e)} />
    </div>
  );
};

export default Temperature;
