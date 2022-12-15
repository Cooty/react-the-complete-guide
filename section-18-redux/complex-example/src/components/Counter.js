import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(actions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div style={{ display: show ? "block" : "none" }}>
        <div className={classes.container}>
          <button
            type="button"
            onClick={() => {
              dispatch(actions.decrement());
            }}
          >
            -
          </button>
          <div className={classes.value}>{count}</div>
          <button
            type="button"
            onClick={() => {
              dispatch(actions.increment());
            }}
          >
            +
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={() => {
            dispatch(actions.increment(5));
          }}
        >
          Add 5
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(actions.decrement(5));
          }}
        >
          Subtract 5
        </button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
