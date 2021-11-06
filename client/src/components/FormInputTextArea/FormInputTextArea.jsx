import { useState } from "react";
import "./FormInputTextArea.css";

export const FormInputTextArea = ({
  label,
  name,
  placeholder,
  validation,
  handler,
  msjError,
  rows,
  cols
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
    <div className="input-textarea-component">
      <label htmlFor={name}> {label} </label>
      <textarea
        id={`id-${name}`}
        rows={rows}
        cols={cols}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={state.error ? "border-error" : ""}
      ></textarea>
      {state.error ? <p>{state.msjError}</p> : ""}
    </div>
  );
};
