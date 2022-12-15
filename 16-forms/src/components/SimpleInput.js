import Input from "./ui/Input";
import { notEmpty, isEmailFormat } from "../utils/validators";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    enteredValue: enteredName,
    inputIsInvalid: enteredNameIsInvalid,
    enteredValueIsValid: nameIsValid,
    onInputBlur: onNameInputBlur,
    onChangeHandler: onNameChangeHandler,
    reset: resetName,
  } = useInput(notEmpty);
  const {
    enteredValue: enteredEmail,
    inputIsInvalid: enteredEmailIsInvalid,
    enteredValueIsValid: emailIsValid,
    onInputBlur: onEmailInputBlur,
    onChangeHandler: onEmailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmailFormat);

  let isFormValid = false;

  if (nameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log({ enteredName, enteredEmail });
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmitHandler} noValidate>
      <Input
        id="name"
        value={enteredName}
        onBlur={onNameInputBlur}
        onChange={onNameChangeHandler}
        isInvalid={enteredNameIsInvalid}
        label="Your name"
        placeholder="Your Name"
        errorText="Please add your name!"
      />
      <Input
        id="email"
        type="email"
        value={enteredEmail}
        onBlur={onEmailInputBlur}
        onChange={onEmailChangeHandler}
        isInvalid={enteredEmailIsInvalid}
        label="Your email address"
        placeholder="name@example.com"
        errorText="Please add your email address!"
      />
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
