import React, { useState } from "react";
import CartProvider from "../store/cartProvider";
import Header from "../Component/Layout/Header";
import Meals from "../Component/Meals/meals";
import Cart from "../Component/Cart/Cart";
import Footer from "../Component/Layout/Footer";
import ScrollToTop from "../Component/Layout/ScrollToTop";
import ScrollIndicator from "../Component/Layout/ScrollIndicator";

function HomePage() {
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
      <ScrollIndicator />
      <main>
        <Meals />
      </main>

      <ScrollToTop />
      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
}

export default HomePage;
