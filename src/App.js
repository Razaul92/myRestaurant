import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Component/FontAwesome/index";
import HomePage from "./pages/HomePage";
// import LoadingSpinner from "./Component/UI/LoadingSpinner";
import AuthContext from "./store/auth-context";
// import AuthPage from "./pages/AuthPage";
import AuthenticatePage from "./pages/AuthenticatePage";
import MyMenu from "./pages/MenuPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        <AuthenticatePage />
      </Route>
      {!authCtx.isLoggedIn && (
        <Route path="/authPage">
          <AuthenticatePage />
        </Route>
      )}
      <Route path="/homePage">
        {authCtx.isLoggedIn && <HomePage />}
        {!authCtx.isLoggedIn && <Redirect to="/authPage" />}
      </Route>
      <Route path="/menuPage">
        {authCtx.isLoggedIn && <MyMenu />}
        {!authCtx.isLoggedIn && <Redirect to="/authPage" />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
