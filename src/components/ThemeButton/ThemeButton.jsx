import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./ThemeButton.scss";

function ThemeButton() {
  const [theme, setTheme] = useState("Day");

  const changeTheme = () => (theme === "Day" ? setTheme("Night") : setTheme("Day"));

  const themeIcon = theme === "Day" ? <HiOutlineSun /> : <HiOutlineMoon />;

  useEffect(() => {
    const updateBackgroundColor = () => (theme === "Day" ? "#f2f2f2" : "#101010");

    const updateColor = () => (theme === "Day" ? "#121212" : "#d5d5d5");

    const body = document.querySelector("body");
    body.style.background = updateBackgroundColor();
    body.style.color = updateColor();
  }, [theme]);

  return (
    <button type="button" name="theme-button" className="flex-row flex-al-center" onClick={changeTheme}>
      {themeIcon}
      <div id="theme-title">{theme}</div>
    </button>
  );
}

export default ThemeButton;
