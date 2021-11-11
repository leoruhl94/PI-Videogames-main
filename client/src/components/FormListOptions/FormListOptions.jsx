import { useEffect, useState } from "react";
import Icon from "../../assets/Icon/Icon";
import { OptionItem } from "../OptionItem/OptionItem";
import "./FormListOptions.css";

export const FormListOptions = ({
  options,
  handler,
  title,
  dropdown,
  validation,
  name,
  msjError,
}) => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [error, setError] = useState({ error: false, msjError });

  useEffect(() => {
    setItems(options);
    setSelectedItems([]);
  }, [options]);

  const handleOnChange = (value) => {
    let newItems = value.selected
      ? items.filter((e) => e.id !== value.id)
      : [...items, { name: value.name, id: value.id }];

    let newSelectedItems = !value.selected
      ? selectedItems.filter((x) => x.id !== value.id)
      : [...selectedItems, { name: value.name, id: value.id }];
    validation(newSelectedItems)
      ? setError({ error: false, msjError: "" })
      : setError({ error: true, msjError });
    setItems(newItems);
    setSelectedItems(newSelectedItems);
    handler({
      value: newSelectedItems.map((x) => x.id),
      error: !validation(newSelectedItems),
      name,
    });
  };

  return (
    <div className="form-list-options">
      <h3>{title}</h3>

      <div className="dropdown">
        <button type="button" className="dropbtn">
          <span className="dropbtn_text">{dropdown}</span>
          <span className="dropbtn_icon">
            <Icon svg="arrowDown" title="arrowDown" />
          </span>
        </button>
        {error.error && <span className="text_error">{error.msjError}</span>}
        <div className="dropdown-content">
          {items?.map((item) => {
            return (
              <div key={`id${item.id}-${item.name}`} className="dropdown-item">
                <OptionItem
                  name={item.name}
                  value={item.id}
                  handler={handleOnChange}
                  selected={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`selected_options ${
          error.error ? "border_error" : "border_ok"
        }`}
      >
        {selectedItems?.map((item) => {
          return (
            <OptionItem
              key={`id${item.id}-${item.name}`}
              name={item.name}
              value={item.id}
              handler={handleOnChange}
              selected={true}
            />
          );
        })}
      </div>
    </div>
  );
};
