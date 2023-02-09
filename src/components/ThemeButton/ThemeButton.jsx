import { useEffect, useState } from "react";
import "./ThemeButton.scss";

function ThemeButton() {
  const [theme, setTheme] = useState("Light");

  const changeTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  const updateBackgroundColor = () => (theme === "Light" ? "#f2f2f2" : "#101010");

  const updateColor = () => (theme === "Light" ? "#121212" : "#d5d5d5");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.background = updateBackgroundColor();
    body.style.color = updateColor();
  });

  return (
    <button type="button" name="theme-button" onClick={changeTheme}>
      {theme}
    </button>
  );
}

export default ThemeButton;
