// src/components/MatrixTerminal.js
import React, { useState, useEffect } from 'react';

const MatrixTerminal = ({ isVisible, onClose }) => {
  const [text, setText] = useState('');
  const information = [
    "Initializing...",
    "Access granted.",
    "Loading personal data...",
    "Name: Antoine Rogé-Picard",
    "Occupation: Full Stack Developer",
    "Skills: HTML, CSS, JavaScript, React, Laravel",
    "Hobbies: Music Production, Photography",
    "Status: Ready for new challenges",
    "Mission: Create amazing web experiences",
    "Follow the white rabbit",
    "Type 'exit' to close this terminal."
  ];

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < information.length) {
          setText(prev => prev + information[i] + '\n');
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [isVisible]);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const input = e.target.value.trim().toLowerCase();
      if (input === 'exit') {
        onClose();
      } else {
        setText(prev => prev + '\n> ' + input + '\nCommand not recognized.\n');
      }
      e.target.value = '';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-4 rounded-md w-full max-w-2xl h-3/4 overflow-auto">
        <pre className="text-green-500 font-mono whitespace-pre-wrap">{text}</pre>
        <input
          type="text"
          className="w-full bg-black text-green-500 font-mono outline-none"
          onKeyPress={handleInput}
          autoFocus
        />
      </div>
    </div>
  );
};

export default MatrixTerminal;