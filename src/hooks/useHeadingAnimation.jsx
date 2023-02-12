import { useEffect } from "react";
import anime from "animejs";

function useHeadingAnimation(title) {
  const titleCharacters = [...title];

  const isSpaceCharacter = (char) => char === " ";
  const isNewLineCharacter = (char) => char === "\n";

  const animatedHeading = titleCharacters.map((char, index) => {
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

  const animation = () =>
    anime
      .timeline({
        targets: ".hide-overflow",
        opacity: 1,
        duration: 1,
      })
      .add({
        targets: ".letter",
        duration: 450,
        translateY: ["1.1em", 0],
        easing: "easeOutCubic",
        delay: anime.stagger(22.5),
      });

  useEffect(() => {
    animation();
  }, []);

  return <div className="hide-overflow">{animatedHeading}</div>;
}

export default useHeadingAnimation;
