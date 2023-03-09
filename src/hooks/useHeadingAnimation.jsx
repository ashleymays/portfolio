/*
import { useEffect } from "react";

const isSpaceCharacter = (char) => char === " ";

const putLettersInSpans = (title) => {
  let char = "";
  const spans = [];
  for (let i = 0; i < title.length; ++i) {
    char = isSpaceCharacter(title[i]) ? "\u00a0" : title[i];
    spans.push(<div className="letter">{char}</div>);
  }
  return spans;
};

function useHeadingAnimation(title) {
  const spans = putLettersInSpans(title);

  useEffect(() => {
    const lines = document.querySelectorAll(".text-animation");
    lines.forEach((line) => {
      const letters = line.querySelectorAll("div");
      letters.forEach((letter, index) => {
        letter.style.setProperty("--anim", index + 1);
      });
    });
  });

  return <div className="text-animation flex-row">{spans}</div>;
}

export default useHeadingAnimation;
*/

import { useEffect } from "react";

const isSpaceCharacter = (char) => char === " ";

const putLettersInSpans = (word) => {
  let char = "";
  const spans = [];
  for (let i = 0; i < word.length; ++i) {
    char = isSpaceCharacter(word[i]) ? "\u00a0" : word[i];
    spans.push(
      <span key={i.toString()} className="letter">
        {char}
      </span>
    );
  }
  return spans;
};

const putWordsInSpans = (words) => {
  const wordsSpans = [];
  words.forEach((word, index) => {
    wordsSpans.push(
      <span key={index.toString()} className="text-animation">
        {putLettersInSpans(word)}
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
  const words = getWordsFromTitle(title);
  const wordsSpans = putWordsInSpans(words);

  useEffect(() => {
    const lines = document.querySelectorAll(".text-animation");
    lines.forEach((line) => {
      const letters = line.querySelectorAll(".letter");
      letters.forEach((letter, index) => {
        letter.style.setProperty("--anim", index + 1);
      });
    });
  });

  return <div className="flex-row flex-wrap">{wordsSpans}</div>;
}

export default useHeadingAnimation;
