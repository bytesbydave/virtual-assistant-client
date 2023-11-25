'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';

const TrafficLight = ({ initialColor = 'green', config }) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  const changeColor = useCallback(() => {
    const { next } = config[currentColor];
    setCurrentColor(next);
  }, [currentColor, config]);

  useEffect(() => {
    const { duration } = config[currentColor];

    const timerId = setTimeout(changeColor, duration);
    
    return () => {
      clearTimeout(timerId);
    };
  }, [changeColor, currentColor]);

  const trafficLights = useMemo(() => {
    return Object.keys(config).map((color, id) => {
      return (
        <p
          key={id}
          style={{
            backgroundColor: `${color === currentColor ? color : 'white'}`,
          }}>
          {color}
        </p>
      );
    });
  }, [config, currentColor]);

  return <div>{trafficLights}</div>;
};

// const TrafficLight = ({ initialColor = 'green', config }) => {
//   const [currentColor, setCurrentColor] = useState(initialColor);

//   useEffect(() => {
//     const { duration, next } = config[currentColor];

//     const timerId = setTimeout(() => {
//       setCurrentColor(next);
//     }, duration);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [currentColor]);

//   return (
//     <div>
//       {Object.keys(config).map((color, id) => {
//         return (
//           <p
//             key={id}
//             style={{
//               backgroundColor: `${
//                 color === currentColor ? config[color].backgroundColor : 'white'
//               }`,
//             }}>
//             {color}
//           </p>
//         );
//       })}
//     </div>
//   );
// };

const TrafficLightContainer = () => {
  const config = {
    green: {
      duration: 5000,
      next: 'yellow',
    },
    yellow: {
      duration: 2000,
      next: 'red',
    },
    red: {
      duration: 5000,
      next: 'green',
    },
  };
  return <TrafficLight config={config} />;
};

export default TrafficLightContainer;
