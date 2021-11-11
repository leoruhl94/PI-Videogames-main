import "./Filters.css";
import { sortGames, allFilters } from "../../redux/actions";
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
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const Filters = () => {
  const [order, from] = useSelector((state) => [state.order, state.filterFrom]);
  let history = useHistory();

  const resetPath = (value) => {
    history.push("/home");
  }

  return (
    <section className="filters">
      <div className="filters_buttons">
        <ButtonDispatch
          icon="refresh"
          name={RESET}
          value={RESET}
          action={allFilters}
          active={false}
          handler={resetPath}
        />

        <ButtonDispatch
          icon="orderAZ"
          name={ASC}
          value={ASC}
          action={sortGames}
          active={order === ASC}
        />
        <ButtonDispatch
          icon="orderZA"
          name={DESC}
          value={DESC}
          action={sortGames}
          active={order === DESC}
        />
        <ButtonDispatch
          icon="order19"
          name={MINOR}
          value={MINOR}
          action={sortGames}
          active={order === MINOR}
        />
        <ButtonDispatch
          icon="order91"
          name={MAYOR}
          value={MAYOR}
          action={sortGames}
          active={order === MAYOR}
        />

        <ButtonDispatch
          text="ALL"
          name={FROM}
          value={FROM_ALL}
          action={allFilters}
          active={from === FROM_ALL}
        />
        <ButtonDispatch
          text="DB"
          name={FROM}
          value={FROM_DB}
          action={allFilters}
          active={from === FROM_DB}
        />
        <ButtonDispatch
          text="API"
          name={FROM}
          value={FROM_API}
          action={allFilters}
          active={from === FROM_API}
        />
      </div>

      <WidgetFilterGenres />
    </section>
  );
};
