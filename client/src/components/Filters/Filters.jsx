import "./Filters.css";
import {
  sortGames,
  allFilters,
} from "../../redux/actions";
import { WidgetFilterGenres } from "../WidgetFilterGenres/WidgetFilterGenres";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import {
  ASC,
  DESC,
  FROM_ALL,
  FROM_API,
  FROM_DB,
  MAYOR,
  MINOR,
  RESET,
  FROM,
} from "../../constantes/constantes";

export const Filters = () => {
  return (
    <section className="filters">
      <div className="filters_buttons">
        <ButtonDispatch
          icon="refresh"
          name={RESET}
          value={RESET}
          action={allFilters}
        />

        <ButtonDispatch
          icon="orderAZ"
          name={ASC}
          value={ASC}
          action={sortGames}
        />
        <ButtonDispatch
          icon="orderZA"
          name={DESC}
          value={DESC}
          action={sortGames}
        />
        <ButtonDispatch
          icon="order19"
          name={MINOR}
          value={MINOR}
          action={sortGames}
        />
        <ButtonDispatch
          icon="order91"
          name={MAYOR}
          value={MAYOR}
          action={sortGames}
        />

        <ButtonDispatch
          text="ALL"
          name={FROM}
          value={FROM_ALL}
          action={allFilters}
          active
        />
        <ButtonDispatch
          text="DB"
          name={FROM}
          value={FROM_DB}
          action={allFilters}
        />
        <ButtonDispatch
          text="API"
          name={FROM}
          value={FROM_API}
          action={allFilters}
        />
      </div>

      <WidgetFilterGenres />
    </section>
  );
};
