import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo_white.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo CBX" className="logo" />
      <nav className="nav">
        <NavLink className="link" to="/">Accueil</NavLink>
        <NavLink className="link" to="/about">À Propos</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
