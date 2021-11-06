import { useState } from "react";
import "./FormInputText.css";

export const FormInputText = ({
  label,
  name,
  placeholder,
  validation,
  handler,
  msjError,
}) => {
  const [state, setState] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    if (validation(value)) {
      setState({ value, error: false, msjError: "" });
      handler({ name, value, error: false });
    } else {
      setState({ value, error: true, msjError });
      handler({ name, value, error: true });
    }
  };

  return (
    <div className="input-text-component" > 
      <label htmlFor={name}> {label} </label>
      <input
        id={`id-${name}`}
        type="text"
        name={name}
        placeholder={placeholder}
     //   value={state.value}
        onChange={handleOnChange}
        className={state.error ? "border-error" : ""}
      />
      {state.error ? <p>{state.msjError}</p> : ""}
    </div>
  );
};
