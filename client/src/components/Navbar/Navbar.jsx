import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/home" className="nav-links">
        Home
      </NavLink>
      <NavLink to="/myGames" className="nav-links">
        My Games
      </NavLink>
      <NavLink to="/addGame" className="nav-links">
        Add Game
      </NavLink>
    </nav>
  );
};
