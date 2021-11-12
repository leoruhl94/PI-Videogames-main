import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Home.css";
import { Cards } from "../../components/Cards/Cards";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router";

export const Home = () => {
  const error = useSelector((state) => state.getError);
  const games = useSelector((state) => state.filteredGames);
  const [currentPage, setCurrentPage] = useState([]);
  const history = useHistory();
  const getPage = (items) => {
    setCurrentPage(items);
  };

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
        <Cards items={currentPage} />
        <Pagination arrayItems={games} handler={getPage} />
      </section>
    </div>
  );
};
