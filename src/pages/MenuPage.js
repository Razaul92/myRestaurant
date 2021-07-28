import React, { useState } from "react";
import CartProvider from "../store/cartProvider";
import Header from "../Component/Layout/Header";
import Cart from "../Component/Cart/Cart";
import Footer from "../Component/Layout/Footer";
import Menu from "../Component/Menu/menuList";
import classes from "./MenuPage.module.css";
import MenuHeading from "../Component/Menu/MenuHeading";
import ScrollToTop from "../Component/Layout/ScrollToTop";
import ScrollIndicator from "../Component/Layout/ScrollIndicator";

function MyMenu() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <MenuHeading />

      <main className={classes.menuMain}>
        <Menu />
      </main>
      <ScrollIndicator />
      <ScrollToTop />

      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
}

export default MyMenu;
