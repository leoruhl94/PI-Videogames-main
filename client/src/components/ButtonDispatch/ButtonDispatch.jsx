import "./ButtonDispatch.css";
import { useDispatch } from "react-redux";
import Icon from "../../assets/Icon/Icon";

export const ButtonDispatch = ({
  active,
  icon,
  text,
  name,
  value,
  action,
  handler,
  classIcon,
}) => {
  let dispatch = useDispatch();
  const handleOnClick = (e) => {
    handler && handler(value);
    action && dispatch(action(value));
  };

  return (
    <button
      key={value}
      className={`button_distpach ${active && "active"}`}
      type="button"
      value={value}
      name={name}
      onClick={handleOnClick}
    >
      {icon ? (
        <span className={classIcon || "button_distpach_icon"}>
          <Icon svg={icon} title={icon} />
        </span>
      ) : (
        <span className="button_distpach_text">{text}</span>
      )}
    </button>
  );
};
