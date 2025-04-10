import "./Home.scss";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Quiz from "../components/Quiz";

const Home = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div>
      {!selectedTheme ? (
        <div>
          <h1>Choisis ton thème</h1>
          <button onClick={() => handleThemeSelection("Star Wars")}>
            Star Wars
          </button>
          <button onClick={() => handleThemeSelection("Dragon Ball Z")}>
            Dragon Ball Z
          </button>
        </div>
      ) : (
        <Quiz theme={selectedTheme} />
      )}
    </div>
  );
};

export default Home;
