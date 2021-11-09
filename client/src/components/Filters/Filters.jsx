import "./Filters.css";
// import { useDispatch } from "react-redux";
import { filterFrom, filterGenres, getVideogames, sortGames } from "../../redux/actions";
import { WidgetFilterFrom } from "../WidgetFilterFrom/WidgetFilterFrom";
import { SelectedFilter } from "../SelectedFilters/SelectedFilters";
import { WidgetFilterGenres } from "../WidgetFilterGenres/WidgetFilterGenres";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import { ASC, DESC, FROM_ALL, FROM_API, FROM_DB, MAYOR, MINOR } from "../../constantes/filters";
import { useDispatch } from "react-redux";

export const Filters = () => {
  let dispatch = useDispatch();

  const handlerFrom = (value) => {
    // dispatch(filterGenres())
    // dispatch(filterFrom(value))
  }

  return (
    <section className="filters">
      <ButtonDispatch
        icon="refresh"
        name={"reset"}
        value={"reset"}
        action={getVideogames}
      />

      <ButtonDispatch
        icon="orderZA"
        name={DESC}
        value={DESC}
        action={sortGames}
      />
      <ButtonDispatch
        icon="orderAZ"
        name={ASC}
        value={ASC}
        action={sortGames}
      />
      <ButtonDispatch
        icon="order91"
        name={MAYOR}
        value={MAYOR}
        action={sortGames}
      />
      <ButtonDispatch
        icon="order19"
        name={MINOR}
        value={MINOR}
        action={sortGames}
      />

      <ButtonDispatch
        text="ALL"
        name={FROM_ALL}
        value={FROM_ALL}
        action={handlerFrom}
        active
        />
      <ButtonDispatch
        text="DB"
        name={FROM_DB}
        value={FROM_DB}
        handler={handlerFrom}
        />
      <ButtonDispatch
        text="API"
        name={FROM_API}
        value={FROM_API}
        handler={handlerFrom}
      />
   

      <WidgetFilterFrom />
      <WidgetFilterGenres />

    </section>
  );
};
