import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi2";

function ArrowIcon() {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IconContext.Provider value={{ className: "flex-row flex-al-center arrow-icon" }}>
      <div>
        <HiArrowRight />
      </div>
    </IconContext.Provider>
  );
}

export default ArrowIcon;
