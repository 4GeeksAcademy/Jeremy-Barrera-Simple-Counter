import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles/index.css'; 


const FlipCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 1000000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const digits = counter.toString().padStart(6, '0').split('');

  return (
    <div className="container">
      <div className="digit">
        <FontAwesomeIcon icon={faClock} />
      </div>
      {digits.map((digit, index) => (
        <div key={index} className="digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default FlipCounter;
