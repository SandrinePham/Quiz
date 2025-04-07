import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import QuizSW from "../pages/QuizSW";

// Composants
import Navbar from "../components/NavBar";
import QuizDbz from "../pages/QuizDBZ";

function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navbar visible sur toutes les pages */}
      <Navbar />

      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route vers la page À propos */}
        <Route path="/about" element={<About />} />

        {/* Routes vers les pages des quiz */}
        <Route path="/quiz-sw" element={<QuizSW />} /> {/* Quiz Star Wars */}
        <Route path="/quiz-dbz" element={<QuizDbz />} /> {/* Quiz Marvel */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
