// Credit for state persistence: https://felixgerschau.com/react-localstorage/

import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./ThemeButton.scss";

function ThemeButton() {
  const [isNightMode, setIsNightMode] = useState(localStorage.getItem("theme") === "Night");

  const getTheme = () => (isNightMode ? "Night" : "Day");

  const changeTheme = () => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", getTheme());
  };

  const persistTheme = () => {
    const theme = getTheme();
    localStorage.setItem("theme", theme);
  };

  const themeIcon = isNightMode ? <HiOutlineMoon /> : <HiOutlineSun />;

  useEffect(() => {
    changeTheme();
    persistTheme();
  }, [isNightMode]);

  return (
    <button
      type="button"
      name="theme-button"
      className="flex-row flex-align-center"
      onClick={() => setIsNightMode(!isNightMode)}
    >
      {themeIcon}
      <div id="theme-title">{getTheme()}</div>
    </button>
  );
}

export default ThemeButton;
