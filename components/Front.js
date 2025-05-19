// src/components/Front.js
import React, { useState } from 'react';
import './Front.css';
import TypingTest from './TypingTest';

function Front() {
  const [start, setStart] = useState(false);

  return (
    <div className="front">
      <div className="overlay">
        {!start ? (
          <>
            <h2>WELCOME TO THE TYPO TEST WEBSITE</h2>
            <p>
              After clicking the start button your test will start. We will give you a random text,
              and you have to type the sentence in 90 seconds. Based on your performance,
              we will display results.
            </p>
            <button 
              onClick={() => setStart(true)}
              style={{ fontSize: '20px', width: '100px', height: '50px', color: 'black' }}
            >
              Start
            </button>
            <h2>All The Best</h2>
          </>
        ) : (
          <TypingTest />
        )}
      </div>
    </div>
  );
}

export default Front;
