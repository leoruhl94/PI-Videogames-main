import { useState } from "react";
import "./FormInputNumber.css";

export const FormInputNumber = ({
  label,
  name,
  placeholder,
  validation,
  handler,
  msjError,
  step,
  maxValue,
  minValue
}) => {
  const [state, setState] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    if (validation(value, minValue, maxValue)) {
      setState({ value, error: false, msjError: "" });
      handler({ name, value, error: false });
    } else {
      setState({ value, error: true, msjError });
      handler({ name, value, error: true });
    }
  };

  return (
    <div className="input-number-component">
      <label htmlFor={name}> {label} </label>
      <input
        id={`id-${name}`}
        type="number"
        name={name}
        placeholder={placeholder}
        step={step}
        onChange={handleOnChange}
        className={state.error ? "border-error" : ""}
        min={minValue}
        max={maxValue}
      />
      {state.error ? <p>{state.msjError}</p> : ""}
    </div>
  );
};
