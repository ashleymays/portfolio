import "./AnchorLink.scss";

function AnchorLink(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <h2 className="flex-row flex-align-center anchorlink">
        {props.title}
        <div className="anchorlink__underline" />
      </h2>
    </a>
  );
}

export default AnchorLink;
