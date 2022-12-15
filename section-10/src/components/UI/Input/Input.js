import React, { useImperativeHandle, useRef, forwardRef } from "react";
import classes from "./Input.module.css";

const Input = (
  { type, name, id, label, onChange, onBlur, value, placeholder, isValid },
  ref
) => {
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    focus,
  }));

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default forwardRef(Input);
