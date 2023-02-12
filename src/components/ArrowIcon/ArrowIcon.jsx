import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi2";
import "./ArrowIcon.scss";

function ArrowIcon() {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IconContext.Provider value={{ className: "flex-row flex-align-center arrow-icon" }}>
      <div>
        <HiArrowRight />
      </div>
    </IconContext.Provider>
  );
}

export default ArrowIcon;
