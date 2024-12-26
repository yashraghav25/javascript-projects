import React from "react";

function Results({ score, totalQuestions, onRestart }) {
  const getMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "Perfect Score!";
    if (percentage >= 75) return "Great Job!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Don't give up! Try again!";
  };
  return (
    <div className="results flex flex-col justify-center items-center ">
      <h2>Your Results</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      <p>{getMessage()}</p>
      <button
        className="restart mt-3 bg-blue-600 rounded-lg p-2 flex flex-row justify-center hover:bg-blue-700"
        onClick={onRestart}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
