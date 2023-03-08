// Credit: Hassan Shahzad (https://stackoverflow.com/users/15801356/hassan-shahzad)
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function Wrapper(props) {
  const location = useLocation();
  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children;
}

export default Wrapper;
