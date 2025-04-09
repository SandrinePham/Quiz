import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import QuizWrapper from "../components/QuizWrapper"; 

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
        
        {/* Route pour les quiz */}
        <Route path="/quiz/:theme" element={<QuizWrapper />} /> {/* Route dynamique pour les quiz */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
