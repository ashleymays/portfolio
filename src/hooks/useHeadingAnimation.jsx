import { useEffect } from "react";
import anime from "animejs";

function useHeadingAnimation(title) {
  const titleCharacters = [...title];
  const isSpaceCharacter = (char) => char === " ";

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

  const animatedHeading = titleCharacters.map((char, index) => {
    if (isSpaceCharacter(char)) {
      return "\u00a0";
    }
    return (
      <span key={index.toString()} className="letter">
        {char}
      </span>
    );
  });

  return <div className="hide-overflow">{animatedHeading}</div>;
}

export default useHeadingAnimation;
