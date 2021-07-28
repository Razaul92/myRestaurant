import React from "react";
import classes from "./hamburger.module.css";

const LeftNav = ({ open }) => {
  return (
    <>
      <div className={`${classes.leftnav} ${open && classes.open}`} open={open}>
        <h2>OnlineRestro</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
