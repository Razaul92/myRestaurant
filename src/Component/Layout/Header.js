import { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import SearchBar from "./Search";
import AuthContext from "../../store/auth-context";
import Hamburger from "./hamburger";
import HeaderCartButton from "../Layout/HeaderCartButton";

// import { useHistory } from "react-router-dom";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  // const history = useHistory();
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MyRestro</h1>
        {isLoggedIn && <SearchBar />}
        {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
        <Hamburger />
      </header>
    </Fragment>
  );
};

export default Header;
