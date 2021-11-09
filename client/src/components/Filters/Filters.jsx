import "./Filters.css";
// import { useDispatch } from "react-redux";
import { getVideogames, sortGames } from "../../redux/actions";
import { WidgetFilterFrom } from "../WidgetFilterFrom/WidgetFilterFrom";
import { SelectedFilter } from "../SelectedFilters/SelectedFilters";
import { WidgetFilterGenres } from "../WidgetFilterGenres/WidgetFilterGenres";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import { ASC, DESC, MAYOR, MINOR } from "../../constantes/filters";

export const Filters = () => {

  return (
    <aside className="filters">
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
        active
      />

      {/* <SelectedFilter /> */}

      <WidgetFilterFrom />
      <WidgetFilterGenres />

    </aside>
  );
};
