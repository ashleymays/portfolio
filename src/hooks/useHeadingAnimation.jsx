import { useEffect } from "react";

const isSpaceCharacter = (char) => char === " ";

const putLettersInDivs = (word) => {
  let char = "";
  const letters = [];
  for (let i = 0; i < word.length; ++i) {
    char = isSpaceCharacter(word[i]) ? "\u00a0" : word[i];
    letters.push(
      <div key={i.toString()} className="letter">
        {char}
      </div>
    );
  }
  return letters;
};

const putWordsInSpans = (words) => {
  const wordsSpans = [];
  words.forEach((word, index) => {
    wordsSpans.push(
      <span key={index.toString()} className="text-animation flex-row">
        {putLettersInDivs(word)}
      </span>
    );
  });
  return wordsSpans;
};

const getWordsFromTitle = (title) => {
  let word = "";
  let char = "";
  const words = [];
  for (let i = 0; i < title.length; ++i) {
    char = title[i];
    word += isSpaceCharacter(char) ? "\u00a0" : char;
    if (isSpaceCharacter(char) || i === title.length - 1) {
      words.push(word);
      word = "";
    }
  }
  return words;
};

function useHeadingAnimation(title) {
  let words = getWordsFromTitle(title);
  const wordsSpans = putWordsInSpans(words);

  useEffect(() => {
    words = document.querySelectorAll(".text-animation");
    words.forEach((word) => {
      const letters = word.querySelectorAll(".letter");
      letters.forEach((letter, index) => {
        letter.style.setProperty("--anim", index + 1);
      });
    });
  }, []);

  return <div className="flex-row flex-wrap">{wordsSpans}</div>;
}

export default useHeadingAnimation;
