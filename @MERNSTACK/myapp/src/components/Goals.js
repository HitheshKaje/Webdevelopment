import React from 'react';
import './Goals.css';

const Goals = (props) => {
  const { goals } = props;
  
  return (

    <ul className=""</ul>
    <div className="goals-container">
      <h2>My Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;