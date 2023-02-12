import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import anime from "animejs";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.scss";

function Header() {
  useEffect(() => {
    anime
      .timeline({
        targets: "header *",
        duration: 100,
        opacity: 1,
      })
      .add({
        duration: 350,
        rotateX: [90, 0],
        easing: "linear",
      });
  }, []);

  return (
    <header className="flex-row flex-align-center flex-justify-space-btwn width-100">
      <NavLink to="/">Ashley Mays</NavLink>
      <div /> {/* Spacing buffer */}
      <nav className="flex-row flex-align-center flex-justify-space-btwn">
        <NavLink to="/">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/">Resume</NavLink>
      </nav>
      <ThemeButton />
    </header>
  );
}

export default Header;
