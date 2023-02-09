import { useEffect } from "react";
import anime from "animejs";

function useAnimation(title) {
  const titleCharacters = [...title];
  const isSpaceCharacter = (char) => char === " ";

  const isNewLineCharacter = (char) => char === "\n";

  useEffect(() => {
    anime({
      targets: ".letter",
      translateY: ["1em", 0],
      duration: 1200,
      easing: "easeOutQuint",
      delay: (el, i) => 10 * i,
    });
  }, []);

  const elements = titleCharacters.map((char, index) => {
    if (isSpaceCharacter(char)) {
      return "\u00a0";
    }
    if (isNewLineCharacter(char)) {
      return <br />;
    }
    return (
      <span key={index.toString()} className="letter">
        {char}
      </span>
    );
  });

  return elements;
}

export default useAnimation;
