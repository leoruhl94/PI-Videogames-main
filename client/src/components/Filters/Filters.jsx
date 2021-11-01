import { useDispatch } from "react-redux";
import { ASC, DESC } from "../../constantes/filters";
import { sort } from "../../redux/actions";

export const Filters = () => {
  let dispatch = useDispatch();
  const onChangeOrder = (e) => {
      if(e.target.value !== 'select')
          dispatch(sort(e.target.value))
  }

  return (
    <div>
      <div>
        <h3>genres</h3>
        <select name="genres" id="genres">
          <option value="1"></option>
          <option value="2"></option>
        </select>
      </div>
      <div>
        <h3>order</h3>
        <select name="order" id="order" onChange={onChangeOrder}>
          <option value='select'>Selecciona..</option>
          <option value={ASC} >{ASC}</option>
          <option value={DESC}>{DESC}</option>
        </select>
      </div>

      <button>reset</button>
    </div>
  );
};
