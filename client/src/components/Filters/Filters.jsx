import "./Filters.css";
import { useDispatch } from "react-redux";
import { getVideogames, sortGames } from "../../redux/actions";
import { WidgetFilterFrom } from "../WidgetFilterFrom/WidgetFilterFrom";
import { SelectedFilter } from "../SelectedFilters/SelectedFilters";
import { WidgetFilterGenres } from "../WidgetFilterGenres/WidgetFilterGenres";
import Icon from "../../assets/Icon/Icon";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import { ASC, DESC, MAYOR, MINOR } from "../../constantes/filters";


export const Filters = () => {
  let dispatch = useDispatch();

  const handleOnClick = (e) => {
    let target = e.target.value;
    console.log(target);
    if (target === "reset") dispatch(getVideogames());
  };
 
  return (
    <aside className="filters">
      <ButtonDispatch 
          icon="orderZA"
          name={DESC}
          value={DESC}
          action={sortGames}
          handler
     
       />
      <ButtonDispatch 
          icon="orderAZ"
          name={ASC}
          value={ASC}
          action={sortGames}
          handler
       
       />
      <ButtonDispatch 
          icon="order91"
          name={MAYOR}
          value={MAYOR}
          action={sortGames}
          handler
    
       />
      <ButtonDispatch 
          icon="order19"
          name={MINOR}
          value={MINOR}
          action={sortGames}
          handler
          active
       />

      <SelectedFilter />
     
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
