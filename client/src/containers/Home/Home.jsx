import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Cards } from "../../components/Cards/Cards";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router";

export const Home = () => {
  const error = useSelector((state) => state.getError);
  const games = useSelector((state) => state.filteredGames);
  const history = useHistory();


  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  useEffect(() => {
    error.error && history.push({ pathname:`/${error.status}`, state: error})
  }, [error, history]);

  return (
    <div className="home_background">
      <Header nav search logo />
      <section className="home">
        <Filters />
        <Cards items={games} />
      </section>
    </div>
  );
};
