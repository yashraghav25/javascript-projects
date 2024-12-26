import React from "react";
function Questions({ currentQuestion, questionnaire, onAnswer }) {
  return (
    <div className="questions">
      <h2 className="text-4xl">{questionnaire[currentQuestion].question}</h2>
      <div className="options flex flex-col gap-2 mt-4">
        {questionnaire[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option bg-sky-600 rounded-lg p-2 hover:bg-sky-700"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
