// Credit for state persistence: https://felixgerschau.com/react-localstorage/

import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./ThemeButton.scss";

function ThemeButton() {
  const [isNightMode, setIsNightMode] = useState(localStorage.getItem("theme") === "Night");

  const updateBackgroundColor = () => (isNightMode ? "#101010" : "#f2f2f2");

  const updateColor = () => (isNightMode ? "#d5d5d5" : "#121212");

  const changeTheme = () => {
    const body = document.querySelector("body");
    body.style.background = updateBackgroundColor();
    body.style.color = updateColor();
  };

  const themeIcon = isNightMode ? <HiOutlineMoon /> : <HiOutlineSun />;

  useEffect(() => {
    changeTheme();
    const theme = isNightMode ? "Night" : "Day";
    localStorage.setItem("theme", theme);
  }, [isNightMode]);

  return (
    <button
      type="button"
      name="theme-button"
      className="flex-row flex-al-center"
      onClick={() => setIsNightMode(!isNightMode)}
    >
      {themeIcon}
      <div id="theme-title">{isNightMode ? "Night" : "Day"}</div>
    </button>
  );
}

export default ThemeButton;
