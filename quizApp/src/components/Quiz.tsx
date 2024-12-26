import React, { useState } from "react";
import Questions from "./Questions";
import Results from "./Result";
import Timer from "./Timer";
function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const questionnaire = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 5 x 3?",
      options: ["15", "25", "10", "30"],
      answer: "15",
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questionnaire[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questionnaire.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleTimeUp = () => {
    setIsQuizFinished(true); 
    setTimeUp(true);
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setTimeUp(false);
  };

  return (
    <div className="quiz">
      {!isQuizStarted ? (
        <button
          className="start bg-blue-600 rounded-lg p-2 hover:bg-blue-700"
          onClick={() => setIsQuizStarted(true)}
        >
          Start Quiz
        </button>
      ) : !isQuizFinished ? (
        <>
          <Timer
            initialTime={60}
            onTimeUp={handleTimeUp}
          />
          <Questions
            currentQuestion={currentQuestion}
            questionnaire={questionnaire}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <Results
          score={score}
          totalQuestions={questionnaire.length}
          onRestart={restartQuiz}
        />
      )}
      {timeUp && <p className="text-red-600">Time's up!</p>}
    </div>
  );
}

export default Quiz;
