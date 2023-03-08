const isSpaceCharacter = (char) => char === " ";

const putLettersInSpans = (title) => {
  let char = "";
  const spans = [];
  for (let i = 0; i < title.length; ++i) {
    char = isSpaceCharacter(title[i]) ? "\u00a0" : title[i];
    spans.push(<span className="letter">{char}</span>);
  }
  return spans;
};

function useHeadingAnimation(title) {
  const spans = putLettersInSpans(title);
  return <div className="text-animation">{spans}</div>;
}

export default useHeadingAnimation;
