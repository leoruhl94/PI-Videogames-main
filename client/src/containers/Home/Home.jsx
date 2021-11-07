import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Home.css";
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getVideogames());
  }, [dispatch]);
  return (
    <div className="home_background">
      <section className="home">
        <SearchBar />
        <Filters />
        <div className="home_games">
          {/* <Filters/> */}
          <Cards />
        </div>
        <Pagination />
      </section>
    </div>
  );
};
