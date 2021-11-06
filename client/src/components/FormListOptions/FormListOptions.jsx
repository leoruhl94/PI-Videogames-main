import './FormListOptions.css'

export const FormListOptions = ({ options, handle, title, group, validation=""}) => {
  return (
    <div className="form-checkboxs">
        <h3>{title}</h3>
        <div className={`selected_options ${validation}`}>
            supongamos que aca los seleccionamos
        </div>

      {options?.map((item) => {
        return (

        
        <label htmlFor={item.id}  key={`${group}-${item.id}`}>
            <input
                type="checkbox"
                value={item.name}
                name= {group}
                onChange={handle}
                id={item.id}
              /> 
            {item.name}
          </label>

        );
      })}
    </div>
  );
};
