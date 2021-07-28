import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 50) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className={classes["scroll-to-top"]} onClick={scrollToTop}>
      <FontAwesomeIcon className={classes.icon} icon="chevron-up" />
    </div>
  );
};

export default ScrollToTop;
