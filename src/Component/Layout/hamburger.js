import classes from "./hamburger.module.css";
import { useState } from "react";
import Navigation from "./Navigation";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${classes.hamburger} ${open && classes.open}`}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
      <Navigation open={open} />
    </>
  );
};

export default Hamburger;
