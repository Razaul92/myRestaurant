import { useContext, useEffect, useState } from "react";
import ButtonsC from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; //cartCtx.items is Destructured

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${ButtonsC.button} ${
    btnIsHighlighted ? ButtonsC.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={ButtonsC.icon}>
        <CartIcon />
      </span>
      <span className={classes.ytext}>Your Cart</span>
      <span className={ButtonsC.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
