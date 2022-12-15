import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  console.log("Reducer has been called");
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

const store = createStore(counterReducer);

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
