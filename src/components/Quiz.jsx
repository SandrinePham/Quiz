import React, { useState } from "react";
import questionsData from "../../data/Questions.json";
import "./Quiz.scss"; 

const Quiz = ({ theme }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = difficulty
    ? questionsData.questions
        .filter(
          (q) =>
            q.difficulty.toLowerCase() === difficulty.toLowerCase() &&
            q.category.toLowerCase() === theme.toLowerCase()
        )
        .slice(0, 5)
    : [];

  const isQuizFinished = currentQuestionIndex >= questions.length;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleRestart = () => {
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  // Classe en fonction du thème
  const themeClass = theme.toLowerCase().replace(/\s/g, "-");

  return (
    <div className={`quiz-container ${themeClass}`}>
      <h1>Quiz {theme}</h1>

      {!difficulty && (
        <div className="difficulty-buttons">
          <h3>Choisis une difficulté :</h3>
          <button onClick={() => handleDifficultyChange("Facile")}>Facile</button>
          <button onClick={() => handleDifficultyChange("Moyen")}>Moyen</button>
          <button onClick={() => handleDifficultyChange("Difficile")}>Difficile</button>
        </div>
      )}

      {difficulty && !showResult && questions.length > 0 && !isQuizFinished && (
        <div className="question-block">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={selectedAnswer === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            Suivant
          </button>
        </div>
      )}

      {difficulty && questions.length === 0 && !showResult && (
        <h2>Aucune question disponible pour cette difficulté.</h2>
      )}

      {showResult && (
        <div className="result">
          <h2>Quiz terminé !</h2>
          <p>Score : {score} / {questions.length}</p>
          <button onClick={handleRestart}>Rejouer</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
