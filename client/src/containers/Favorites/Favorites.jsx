import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Favorites.css";
import { Cards } from "../../components/Cards/Cards";
import { Header } from "../../components/Header/Header";

export const Favorites = () => {
  const favorites = useSelector((state) => state.filteredFavGames);
  const [currentPage, setCurrentPage] = useState([]);

  const getPage = (items) => {
    setCurrentPage(items);
  };

  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div className="fav_background">
      <Header nav search logo />
      <section className="fav">
        <Filters />
        <Cards items={currentPage} />
        <Pagination arrayItems={favorites} handler={getPage} />
      </section>
    </div>
  );
};
