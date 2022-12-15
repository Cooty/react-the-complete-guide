import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import AuthContext from "../../store/auth-context";

const validateEmail = (email) => email.includes("@");
const validatePassword = (password) => password.trim().length > 6;

const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.val,
        isValid: validateEmail(action.val),
      };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: validateEmail(state.value),
      };
    default:
      return {
        value: "",
        isValid: false,
      };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.val,
        isValid: validatePassword(action.val),
      };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: validatePassword(state.value),
      };
    default:
      return {
        value: "",
        isValid: false,
      };
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 200);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler} noValidate={true}>
        <Input
          type="email"
          id="email"
          isValid={emailState.isValid}
          label="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="your.name@example.com"
          ref={emailInputRef}
        />
        <Input
          type="password"
          id="password"
          isValid={passwordState.isValid}
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder="password"
          ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
