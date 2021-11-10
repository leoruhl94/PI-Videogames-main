import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import { Pagination2 } from "../../components/Pagination2/Pagination2";
import "./Home2.css";
import { Cards2 } from "../../components/Cards2/Cards2";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Header } from "../../components/Header/Header";

export const Home2 = () => {
  const games = useSelector((state) => state.filteredGames);
  const [currentPage, setCurrentPage] = useState([])

  const getPage = (items)=>{
      setCurrentPage(items)
  }

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getVideogames());
   }, [dispatch]);
  return (
    <div className="home_background">
      <Header nav logo />
      <section className="home">
        <SearchBar isnavbar />
        <Filters />
        <Cards2 items={currentPage}/>
        <Pagination2 
          arrayItems={games}
          handler={getPage}
        />
      </section>
    </div>
  );
};
