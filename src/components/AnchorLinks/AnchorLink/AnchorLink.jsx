// import ArrowIcon from "../../ArrowIcon/ArrowIcon";
import useHeadingAnimation from "../../../hooks/useHeadingAnimation";
import "./AnchorLink.scss";

function AnchorLink(props) {
  const title = useHeadingAnimation(props.title);
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <h2 className="flex-row flex-align-center">
        {title}
        {/* <ArrowIcon /> */}
      </h2>
    </a>
  );
}

export default AnchorLink;
