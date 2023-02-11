import { useEffect } from "react";
import anime from "animejs";

function useHeadingAnimation(title) {
  const titleCharacters = [...title];
  const isSpaceCharacter = (char) => char === " ";
  const isNewLineCharacter = (char) => char === "\n";
  const animation = () =>
    anime
      .timeline({
        targets: ".hide-overflow",
        opacity: 1,
        duration: 100,
      })
      .add({
        targets: ".letter",
        translateY: ["1.1em", 0],
        duration: 1100,
        easing: "easeOutQuint",
        delay: anime.stagger(22.5),
      });

  useEffect(() => {
    animation();
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

  return <div className="hide-overflow">{elements}</div>;
}

export default useHeadingAnimation;
