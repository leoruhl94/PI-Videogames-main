
import Icon from "../../assets/Icon/Icon";
import "./OptionItem.css";

export const OptionItem = ({
  name,
  value,
  selected,
  handler,
}) => {

  const handleOnClick = (e) => {
        console.log(value, name)
        handler({id: Number(value), name , selected:!selected});
  };
  // console.log(value, name)
  return (
    <div className="option_item">
        <span className="option_item_text">{name}</span>
        <button
        type="button"
        name={name}
        value={value}
        onClick={handleOnClick}
        className={`option_item_button ${  selected ? "option_selected" : "option_normal"}`}
      >{ 
      selected ?  <Icon svg="xCircle" title="xCircle" />
       : <Icon svg="plusCircle" title="plusCircle" />
      }
       </button>
    </div>
  );
};
