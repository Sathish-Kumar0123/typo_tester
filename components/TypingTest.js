import React, { useState, useEffect, useRef } from 'react';

const quotes = [
  "Cristiano Ronaldo is a Portuguese professional footballer widely considered one of the greatest players of all time. He has played for top clubs like Manchester United, Real Madrid, and Juventus, as well as the Portuguese national team, and currently plays for Al-Nassr in the Saudi Pro League",
  "Cricket is a bat-and-ball game played between two teams of eleven players, aiming to score more runs than the opposing team by batting and bowling. The game involves a 22-yard pitch with wickets at each end. The objective is to score the most runs by batting and to prevent the opposing team from scoring by bowling and fielding.",
  "In everyday terms, usually refers to the mucus and debris that can accumulate in the corners of your eyes, especially upon waking. It's a combination of mucus, oil, skin cells, and other particles. While often described as eye boogers or sleep in your eyes, the more technical term is rheum.",
  "Excessive mobile phone use can lead to several negative consequences, including radiation exposure, sleep disturbances, eye strain, and potential mental health effects. Long-term exposure to radiofrequency radiation, used by mobile phones, has been linked to potential health risks like brain tumors, although more research is ongoing.",
  "Ratan Tata was the son of Naval Tata, who was adopted by Ratanji Tata, son of Jamshedji Tata, the founder of the Tata Group. He graduated from Cornell University College of Architecture with a bachelor's degree in architecture.[6] He had also attended the Harvard Business School (HBS) Advanced Management program in 1975.",
  "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
  "Pawan Kalyan's actual name is Konidela Kalyan Babu. He began to call himself as Pawan Kalyan when he worked on his first film, Akkada Abbai Ikkada Ammayi, in 1996. He has worked in several critically and commercially successful films and has established himself as one of the leading actors in Telugu cinema. He is also an accomplished choreographer.",
  "Telugu, a Dravidian language spoken by over 75 million people primarily in southeastern India, is a language of significant cultural and literary importance. It's the official language of Andhra Pradesh and Telangana, and its history stretches back centuries, with the first written materials dating from the 6th century CE.",
  "The human body is an intricate system with numerous fascinating facts. It's composed of trillions of cells, a vast network of blood vessels, and a complex interplay of organs, tissues, and systems working together to sustain life. Key facts include the body's composition of mostly water, its constant renewal process (like shedding skin cells), and the unique functions of various organs like the heart, brain, and lungs.",
  "Trees are essential for a thriving planet and our well-being. They provide oxygen, clean air and water, and support biodiversity. Trees also play a vital role in combating climate change, regulate the water cycle, and offer numerous benefits like shade, food, and even jobs."
];



function TypingTest() {
  const [started, setStarted] = useState(false);
  const [quote, setQuote] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(90);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && started) {
      setStarted(false);
      setFinished(true);
    }
  }, [started, timeLeft]);

  useEffect(() => {
    if (started && inputRef.current) {
      inputRef.current.focus();
    }
  }, [started]);

  const startTest = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setUserInput('');
    setTimeLeft(90);
    setStarted(true);
    setFinished(false);
  };

  const getWPM= () => {
    const words = userInput.trim().split(/\s+/).filter(word => word !== '').length;
    return (words / 1.5).toFixed(2); // 1.5 minutes
  };
  
  const mi = (tod) => {
  if (!tod.trim()) return 0;
  const words = tod.trim().split(/\s+/).filter(word => word !== '');
  return words.length;
  };


  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      {!started && !finished && (
        <button onClick={startTest} style={{ fontSize: '18px', padding: '10px 20px' }}>
          Start
        </button>
      )}

      {started && (
        <>
          <h3>Time Left: {timeLeft} sec</h3>
          <p style={{ fontSize: '18px', margin: '20px auto', maxWidth: '600px' }}>{quote}</p>
          <textarea
            ref={inputRef}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            rows="4"
            style={{ width: '80%', fontSize: '16px', padding: '10px' }}
          />
        </>
      )}

      {finished && (
        <div>
          <h2>Test Completed!</h2>
          <p><strong>Total words typed : </strong>{mi(userInput)} words</p>
          <p>Total words : {mi(quote)}</p>
          <p><strong>Typing Speed:</strong> {getWPM()} WPM</p>
          <button onClick={startTest}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default TypingTest;
