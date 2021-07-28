import { useContext } from "react";
import classes from "./Navigation.module.css";
import {
  HashLink as Link,
  NavHashLink as NavLink,
} from "react-router-hash-link";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // history.replace("/");
    // optional: redirect the user
  };

  return (
    <nav
      className={`${classes.nav} ${props.open && classes.open}`}
      open={props.open}
    >
      <h2 open={props.open}>MyRestro</h2>
      <ul>
        <li>
          <NavLink
            smooth
            to="/homePage#header"
            ActiveClassName={`${classes.active}`}
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink smooth to="/menuPage" ActiveClassName={classes.active}>
              Our Menu
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink smooth to="#header" ActiveclassName={classes.active}>
              About Us
            </NavLink>
          </li>
        )}
        <li>
          <Link smooth to="#footer" className={`${classes.active}`}>
            Contact
          </Link>
        </li>
        <li> </li>

        <li>
          {isLoggedIn && (
            <button className={classes.logout} onClick={logoutHandler}>
              LogOut
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
