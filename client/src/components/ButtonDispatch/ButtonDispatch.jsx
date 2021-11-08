import "./ButtonDispatch.css";
import { useDispatch } from "react-redux";
import Icon from "../../assets/Icon/Icon";


export const ButtonDispatch = ({icon, text, name, value, action, handler, classIcon }) => {

  let dispatch = useDispatch();
    // console.log("icon",icon, "name", name, "value", value)


  const handleOnClick = (e) => {
    dispatch(action(value));
  };

  return (
    <button className="button_distpach" type="button" value={value} name={name} onClick={handleOnClick}>
      {icon ? (
        <span className={classIcon || "button_distpach_icon"}>
          <Icon svg={icon} title={icon} />
        </span>
      ) : (
        { text }
      )}
    </button>
  );
};
