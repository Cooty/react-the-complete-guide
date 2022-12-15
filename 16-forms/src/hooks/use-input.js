import { useState } from "react";

const useInput = (validator) => {
  // manage the value state
  const [enteredValue, setEnteredValue] = useState("");
  // manage touched state
  const [isTouched, setIsTouched] = useState(false);
  // manage validity
  const enteredValueIsValid = validator(enteredValue);
  const inputIsInvalid = !enteredValueIsValid && isTouched;

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onInputBlur = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    inputIsInvalid,
    enteredValueIsValid,
    onInputBlur,
    onChangeHandler,
    reset,
  };
};

export default useInput;
