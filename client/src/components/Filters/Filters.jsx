import "./Filters.css";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { WidgetOrderByName } from "../WidgetOrderByName/WidgetOrderByName";
import { WidgetOrderByRating } from "../WidgetOrderByRating/WidgetOrderByRating";
import { WidgetFilterFrom } from "../WidgetFilterFrom/WidgetFilterFrom";
import { SelectedFilter } from "../SelectedFilters/SelectedFilters";
import { WidgetFilterGenres } from "../WidgetFilterGenres/WidgetFilterGenres";
import Icon from "../../assets/Icon/Icon";

export const Filters = () => {
  let dispatch = useDispatch();

  const handleOnClick = (e) => {
    let target = e.target.value;
    console.log(target);
    if (target === "reset") dispatch(getVideogames());
  };

  return (
    <aside className="filters">
      <SelectedFilter />
      <WidgetOrderByName />
    
      <WidgetOrderByRating />
      <WidgetFilterFrom />
      <WidgetFilterGenres />
      <button className="filters_reset" type="button" onClick={handleOnClick} value="reset">
      <span className="filters_reset_icon">
        <Icon svg="refresh" title="refresh" />
      </span>
      </button>
    </aside>
  );
};
