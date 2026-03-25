import React from 'react'

function QuestionsList({ question, options, onSelect, selectedAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => onSelect(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsList;
