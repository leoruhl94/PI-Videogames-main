import { useState } from "react";
import "./FormInputDate.css";

export const FormInputDate = ({
  label,
  name,
  validation,
  handler,
  msjError,
  min,
  max
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
    <div className="input-date-component">
      <label htmlFor={name}> {label} </label>
      <input
        id={`id-${name}`}
        type="date"
        name={name}
        onChange={handleOnChange}
        className={state.error ? "border-error" : ""}
        min={min}
        max={max}
      />
      {state.error ? <p>{state.msjError}</p> : ""}
    </div>
  );
};
