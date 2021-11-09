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
  minValue,
}) => {
  const [state, setState] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    if (validation(Number(value), Number(minValue), Number(maxValue))) {
      setState({ value, error: false, msjError: "" });
      handler({ name, value: Number(value), error: false });
    } else {
      setState({ value, error: true, msjError });
      handler({ name, value: Number(value), error: true });
    }
  };

  return (
    <div className="input-number-component">
      <label htmlFor={name}>
        {label}
        {state.error && <span className="text_error">{state.msjError}</span>}
      </label>
      <input
        id={`id-${name}`}
        type="number"
        name={name}
        placeholder={placeholder}
        step={step}
        onChange={handleOnChange}
        className={state.error ? "border_error" : "border_ok"}
        min={minValue}
        max={maxValue}
      />
    </div>
  );
};
