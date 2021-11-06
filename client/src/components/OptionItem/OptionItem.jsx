
import "./OptionItem.css";

export const OptionItem = ({
  name,
  selected,
  handler,
}) => {

  const handleOnClick = (e) => {
        const { value } = e.target;
        handler(value, !selected);
  };

  return (
    <div className="option-item-list">
        <span>{name}</span>
        <button
        name={name}
        value={name}
        onClick={handleOnClick}
        className={ selected ? "option-selected" : "option-normal"}
      >{ selected ? "X" : "+" }</button>
    </div>
  );
};
