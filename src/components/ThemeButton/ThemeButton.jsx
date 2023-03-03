// Credit for state persistence: https://felixgerschau.com/react-localstorage/

import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./ThemeButton.scss";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "Dark");
  const getTheme = () => (isDarkMode ? "Dark" : "Light");
  const changeTheme = () => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", getTheme());
  };

  const persistTheme = () => {
    const theme = getTheme();
    localStorage.setItem("theme", theme);
  };

  const themeIcon = isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />;

  useEffect(() => {
    changeTheme();
    persistTheme();
  }, [isDarkMode]);

  return (
    <button
      type="button"
      name="theme-button"
      className="flex-row flex-align-center"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {themeIcon}
      <div id="theme-title">{getTheme()}</div>
    </button>
  );
}

export default ThemeButton;
