import { useState } from "react";
import "./FormInputText.css";

export const FormInputText = ({
  label,
  name,
  placeholder,
  valitation,
  handler,
  msjError,
}) => {
    const [state, setState] = useState({
        value: "",
        error: true,
        msjError: msjError
    })
    const validateString = (value) => {
        return !/[^A-Za-z\s\,]/.test(value);
    }

    const handleOnChange = (e) => {
        const {value} = e.target
        console.log(validateString(value))
        setState((state) => {
            return {
                ...state,
                value: value,
                error: !validateString(value)
            }
        })
      
    }
    handler(state)

  return (
    <div className="input-text-component">
      <label htmlFor={name}> {label} </label>
      <input
        id={`id-${name}`}
        type="text"
        name={name}
        placeholder={placeholder}
        value={state.name}
        onChange={handleOnChange}
        className={state.error?"border-error":"border-ok"}
        onBlur={handleOnChange}
      />
      {
          state.error ? <p>{state.msjError}</p> : ("")
      }
    </div>
  );
};
