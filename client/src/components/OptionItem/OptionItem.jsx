
import "./OptionItem.css";

export const OptionItem = ({
  name,
  value,
  selected,
  handler,
}) => {

  const handleOnClick = (e) => {
        const { value , name } = e.target;
        handler({id: Number(value), name , selected:!selected});
  };

  return (
    <div className="option-item-list">
        <span>{name}</span>
        <button
        type="button"
        name={name}
        value={value}
        onClick={handleOnClick}
        className={ selected ? "option-selected" : "option-normal"}
      >{ selected ? "X" : "+" }</button>
    </div>
  );
};
