import React, { useState } from "react";
import questionsData from "../../data/Questions.json"; // Importer les questions JSON

const QuizStarWars = () => {
  const [difficulty, setDifficulty] = useState(null); // Niveau sélectionné
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Filtrer les questions en fonction de la difficulté et limiter à 5
  const questions = difficulty
    ? questionsData.questions.filter(
        (question) =>
          question.difficulty === difficulty && question.category === "Star Wars"
      ).slice(0, 5)
    : [];

  const isQuizFinished = currentQuestionIndex >= questions.length;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      <h1>Quiz Star Wars</h1>

      {/* Sélection de la difficulté */}
      {!difficulty && (
        <div>
          <button onClick={() => handleDifficultyChange("Facile")}>Facile</button>
          <button onClick={() => handleDifficultyChange("Moyen")}>Moyen</button>
          <button onClick={() => handleDifficultyChange("Difficile")}>Difficile</button>
        </div>
      )}

      {/* Affichage des questions ou du résultat final */}
      {difficulty && !showResult ? (
        questions.length > 0 && !isQuizFinished ? (
          <div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={{
                    backgroundColor: selectedAnswer === option ? "lightblue" : "white",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
              Suivant
            </button>
          </div>
        ) : (
          <h2>Aucune question disponible pour cette difficulté</h2>
        )
      ) : (
        <div>
          <h2>Quiz terminé !</h2>
          <p>Score : {score} / {questions.length}</p>
          <button onClick={() => window.location.reload()}>Rejouer</button>
        </div>
      )}
    </div>
  );
};

export default QuizStarWars;