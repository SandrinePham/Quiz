import React from "react";
import { useParams } from "react-router-dom"; 
import Quiz from "./Quiz"; 

const QuizWrapper = () => {
  // Utilisation de useParams pour récupérer le thème du quiz dans l'URL
  const { theme } = useParams();

  // Vérification du thème récupéré (par exemple, s'il est valide)
  const validThemes = ["star-wars", "dragon-ball-z"];
  if (!validThemes.includes(theme)) {
    return <h2>Thème de quiz non valide !</h2>;
  }

  return (
    <div>
      {/* Passer le thème au composant Quiz */}
      <Quiz theme={theme} />
    </div>
  );
};

export default QuizWrapper;
