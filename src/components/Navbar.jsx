import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">Explorador de Películas</div>
      <div className="nav-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/popular">Populares</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </div>
    </nav>
  );
}


