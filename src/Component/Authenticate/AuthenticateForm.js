import { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validateInfo";

import AuthContext from "../../store/auth-context";
import classes from "./AuthenticateForm.module.css";
import usePasswordToggle from "../../hooks/usePasswordToggle";

const AuthForm = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formIsValid, setFormISValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // let formIsValid1 = false;
  // if (!errors) {
  //   formIsValid1 = true;
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setErrors(validate(values));

    const formValidity = validate(values);
    let objectLength = Object.keys(formValidity).length;
    // console.log("Validity", objectLength);

    // const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // const enteredPassword2 = password2InputRef.current.value;

    // optional: Add validation
    // setIsLoading(true);
    let url;
    if (isLogin) {
      if (objectLength > 2) {
        return;
      }
      setIsLoading(true);
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfo1tdl9ZHc_h9iG8B0_wH1V7bK1gsq9w";
    } else {
      if (objectLength !== 0) {
        return;
      }
      setIsLoading(true);
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfo1tdl9ZHc_h9iG8B0_wH1V7bK1gsq9w";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/homePage");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler} className={classes.form} noValidate>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="username" className={classes.formLabel}>
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              ref={usernameInputRef}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="email" className={classes.formLabel}>
            Email Id
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            required
            ref={emailInputRef}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className={classes.control}>
          <label htmlFor="password" className={classes.formLabel}>
            Password
          </label>
          <input
            id="password"
            type={PasswordInputType}
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            required
            ref={passwordInputRef}
          />
          {errors.password && <p>{errors.password}</p>}
          <span className={classes.passwordToggle}>{ToggleIcon}</span>
        </div>

        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="password" className={classes.formLabel}>
              Confirm Password
            </label>
            <input
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
              ref={password2InputRef}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
        )}
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {!isLoading &&
              (isLogin ? "Create new account" : "Login with existing account")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
