import { NavLink } from "react-router-dom"; // Reste inchangé
import Logo from "../assets/images/logo/logo_white.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo CBX" className="logo" />
      <nav className="nav">
        <NavLink className="link" to="/" exact>Accueil</NavLink> {/* Exact pour la route racine */}
        <NavLink className="link" to="/about">À Propos</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
