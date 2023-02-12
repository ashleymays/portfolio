import "./AnchorLink.scss";

function AnchorLink(props) {
  const heading = props.heading;
  if (heading === "h2") {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        <h2 className="flex-row flex-align-center anchorlink">
          {props.title}
          <div className="anchorlink__underline" />
        </h2>
      </a>
    );
  }
  if (heading === "h3") {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        <h3 className="flex-row flex-align-center anchorlink">
          {props.title}
          <div className="anchorlink__underline" />
        </h3>
      </a>
    );
  }
}

export default AnchorLink;
