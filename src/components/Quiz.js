import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

function Quiz() {
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const clickHandler = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };
  return (
    <section className="container">
      <Link className="go-back" to="/">
        Go back
      </Link>
      <h1 style={{ marginTop: "10px" }} className="header">
        Quiz
      </h1>
      <div className="quiz-section">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question: {currentQuestion + 1} / </span>
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].options.map((answerOptions) => (
                <button
                  className="btn option-btn"
                  onClick={() => clickHandler(answerOptions.isCorrect)}
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
            <section className="correct-answers"></section>
          </>
        )}
      </div>
    </section>
  );
}

export default Quiz;
