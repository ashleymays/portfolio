import ArrowIcon from "../../ArrowIcon/ArrowIcon";
import "./AnchorLink.scss";

function AnchorLink(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <h2 className="flex-row flex-align-center">
        {props.title}
        <ArrowIcon />
      </h2>
    </a>
  );
}

export default AnchorLink;
