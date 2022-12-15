import Input from "./ui/Input";
import useInput from "../hooks/use-input";
import { notEmpty, isEmailFormat } from "../utils/validators";

const BasicForm = () => {
  const {
    enteredValue: firstName,
    inputIsInvalid: firstNameIsInvalid,
    enteredValueIsValid: firstNameInputIsValid,
    onInputBlur: firstNameBlurHandler,
    onChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
  } = useInput(notEmpty);

  const {
    enteredValue: lastName,
    inputIsInvalid: lastNameIsInvalid,
    enteredValueIsValid: lastNameInputIsValid,
    onInputBlur: lastNameBlurHandler,
    onChangeHandler: lastNameChangeHandler,
    reset: resetLastName,
  } = useInput(notEmpty);

  const {
    enteredValue: email,
    inputIsInvalid: emailIsInvalid,
    enteredValueIsValid: emailInputIsValid,
    onInputBlur: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmailFormat);

  let isFormValid = false;

  if (firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    isFormValid = true;
  }

  const reset = () => {
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log({ firstName, lastName, email });

    reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <Input
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          isInvalid={firstNameIsInvalid}
          type="text"
          id="first-name"
          placeholder="John"
          label="First Name"
          errorText="Please give your first name!"
        />
        <Input
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          isInvalid={lastNameIsInvalid}
          type="text"
          id="last-name"
          placeholder="Doe"
          label="Last Name"
          errorText="Please give your last name!"
        />
      </div>
      <Input
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        isInvalid={emailIsInvalid}
        type="email"
        id="email"
        placeholder="john.doe@example.com"
        label="E-Mail Address"
        errorText="Please give a valid e-mail address!"
      />
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
