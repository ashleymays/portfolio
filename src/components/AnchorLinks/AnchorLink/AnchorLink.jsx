/* eslint-disable react/prop-types */
import arrowImageURL from "../../../icons/arrow.png";
import "./AnchorLink.scss";

function AnchorLink(props) {
  const { href } = props;
  const { title } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex-row flex-al-center">
      <h3>{title}</h3>
      <img className="arrow-img" alt="" src={arrowImageURL} />
    </a>
  );
}

export default AnchorLink;
