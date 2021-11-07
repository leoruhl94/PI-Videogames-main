import './Filters.css';
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { WidgetOrderByName } from "../WidgetOrderByName/WidgetOrderByName";
import { WidgetOrderByRating } from '../WidgetOrderByRating/WidgetOrderByRating';
import { WidgetFilterFrom } from '../WidgetFilterFrom/WidgetFilterFrom';
import { SelectedFilter } from '../SelectedFilters/SelectedFilters';
import { WidgetFilterGenres } from '../WidgetFilterGenres/WidgetFilterGenres';

export const Filters = () => {
  let dispatch = useDispatch();

  const handleOnClick = (e) => {
    let target = e.target.value;
    console.log(target)
    if(target==='reset') dispatch(getVideogames())
  }

  return (
    <aside className="filters">
      <SelectedFilter/>
      <WidgetOrderByName/>
      <WidgetOrderByRating/>
      <WidgetFilterFrom/>
      <WidgetFilterGenres/>
      <button type='button' onClick={handleOnClick} value='reset'>reset</button>
    </aside>
  );
};
