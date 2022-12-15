const Input = (props) => {
  return (
    <div className={`form-control ${props.isInvalid ? "invalid" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type ? props.type : "text"}
        id={props.id}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.isInvalid && props.errorText && (
        <p className="error-text">{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
