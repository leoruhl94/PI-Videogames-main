import Icon from "../../assets/Icon/Icon";
import "./OptionItem.css";

export const OptionItem = ({ name, value, selected, handler }) => {
  const handleOnClick = (e) => {
    handler({ id: Number(value), name, selected: !selected });
  };
  return (
    <div
      className={`option_item ${
        selected ? "option_selected" : "option_normal"
      }`}
    >
      <span className="option_item_text">{name}</span>
      <button
        type="button"
        name={name}
        value={value}
        onClick={handleOnClick}
        className={`option_item_button`}
      >
        {selected ? (
          <Icon svg="xCircle" title="xCircle" />
        ) : (
          <Icon svg="plusCircle" title="plusCircle" />
        )}
      </button>
    </div>
  );
};
