import { useEffect, useState, useRef } from "react";
import "./ThemeButton.scss";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useRef("Light");

  useEffect(() => {
    if (isDarkMode) {
      theme.current = "Dark";
    } else {
      theme.current = "Light";
    }
  });
  return (
    <button type="button" name="theme-button" onClick={() => setIsDarkMode(!isDarkMode)}>
      {theme.current}
    </button>
  );
}

export default ThemeButton;
