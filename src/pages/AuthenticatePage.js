import { Fragment } from "react";
import images from "../images/meals1.jpg";
import Header from "../Component/Layout/Header";
import classes from "../Component/Authenticate/Authenticate.module.css";
import AuthForm from "../Component/Authenticate/AuthenticateForm";
import Footer from "../Component/Layout/Footer";
import ScrollToTop from "../Component/Layout/ScrollToTop";

const AuthenticatePage = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <div className={classes["main-image"]}>
          <img src={images} alt="Delicious food" />
        </div>
        <AuthForm />
      </main>
      <ScrollToTop />
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default AuthenticatePage;
