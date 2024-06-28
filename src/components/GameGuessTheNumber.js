import React, { useState } from 'react';

const GameGuessTheNumber = () => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const secretNum = 10; 

  const handleGuessChange = (event) => {
    const numericGuess = parseInt(event.target.value, 10);
    if (isNaN(numericGuess)) {
      setFeedback('Invalid input. Please enter a number.');
    } else if (numericGuess < secretNum) {
      setFeedback('You guessed lesser');
    } else if (numericGuess > secretNum) {
      setFeedback('You guessed greater');
    } else {
      setFeedback('You guessed correct');
    }
    setGuess(event.target.value);
  };

  return (
    <div className="container mt-5">
       
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Guess The Number Game</h5>
              <div className="mb-3">
                <label htmlFor="guess-input" className="form-label">Enter your guess (between 1 and 20):</label>
                <input
                  type="text"
                  className="form-control"
                  id="guess-input"
                  value={guess}
                  onChange={handleGuessChange}
                />
              </div>
              {feedback && <p className="mt-3">{feedback}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameGuessTheNumber;
