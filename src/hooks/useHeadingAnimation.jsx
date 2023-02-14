const isSpaceCharacter = (char) => char === " ";

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

const putWordsInDivs = (words) => {
  const wordsDivs = [];
  words.forEach((word, index) => {
    wordsDivs.push(
      <span key={index.toString()} className="word">
        {word}
      </span>
    );
  });
  return wordsDivs;
};

function useHeadingAnimation(title) {
  const words = getWordsFromTitle(title);

  const wordsDivs = putWordsInDivs(words);

  console.log(title);

  return <div className="hide-overflow">{wordsDivs}</div>;
}

export default useHeadingAnimation;
