import React, { useState } from 'react';
import './NewGoal.css';

const NewGolas = () => {
  const [userInput, setUserInput] = useState('');
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === '') {
      return;
    }

    setGoals((prevGoals) => [...prevGoals, userInput.trim()]);
    setUserInput('');
  };

  return (
    <div>
      <form className="add-goal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your goal"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button type="submit">Add Goal</button>
      </form>

      {/* THIS DISPLAYS THE GOALS ON THE PAGE */}
      <div>
        {goals.map((goal, index) => (
          <p key={index}>{goal}</p>
        ))}
      </div>
    </div>
  );
};

export default NewGolas;