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
  cols,
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
      <label htmlFor={name}>
        {label}{" "}
        {state.error && (
          <span className="text_error">
            {state.value.length >= 1000 ? "Max length 1000" : state.msjError}
          </span>
        )}
      </label>
      <textarea
        id={`id-${name}`}
        rows={rows}
        cols={cols}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={state.error ? "border_error" : "border_ok"}
      ></textarea>
    </div>
  );
};
