import { useDispatch } from "react-redux";
import { useRef } from "react";
import { actions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      actions.login({
        userName: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
