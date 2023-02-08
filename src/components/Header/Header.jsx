import { NavLink } from "react-router-dom";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.scss";

function Header() {
  return (
    <header className="flex-row flex-al-center flex-just-spc-btwn width-100">
      <NavLink to="/">Ashley Mays</NavLink>
      <nav className="flex-row flex-al-center flex-just-spc-btwn">
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">Resume</NavLink>
      </nav>
      <div />
      <ThemeButton />
    </header>
  );
}

export default Header;
