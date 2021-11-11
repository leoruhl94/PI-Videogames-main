import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Home.css";
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  const games = useSelector((state) => state.filteredGames);
  const [currentPage, setCurrentPage] = useState([]);

  const getPage = (items) => {
    setCurrentPage(items);
  };

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  return (
    <div className="home_background">
      <Header nav logo />
      <section className="home">
        <SearchBar />
        <Filters />
        <Cards items={currentPage} />
        <Pagination arrayItems={games} handler={getPage} />
      </section>
    </div>
  );
};
