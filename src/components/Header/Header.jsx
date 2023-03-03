import { NavLink } from "react-router-dom";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.scss";

function Header() {
  return (
    <header className="flex-row flex-align-center flex-justify-space-btwn width-100">
      <NavLink to="/">Ashley Mays</NavLink>
      <nav className="flex-row flex-align-center flex-justify-space-btwn">
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ThemeButton />
    </header>
  );
}

export default Header;
