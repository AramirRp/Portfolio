// src/components/KonamiCode.js
import React, { useEffect, useState } from 'react';
import MatrixTerminal from '../matrixCommand/MatrixTerminal';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const KonamiCode = () => {
  const [konamiCodePosition, setKonamiCodePosition] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiCodePosition]) {
        setKonamiCodePosition((prevPosition) => prevPosition + 1);
        
        if (konamiCodePosition + 1 === konamiCode.length) {
          activateEasterEgg();
          setKonamiCodePosition(0);
        }
      } else {
        setKonamiCodePosition(0);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiCodePosition]);

  const activateEasterEgg = () => {
    setShowTerminal(true);
  };

  return (
    <MatrixTerminal 
      isVisible={showTerminal} 
      onClose={() => setShowTerminal(false)} 
    />
  );
};

export default KonamiCode;