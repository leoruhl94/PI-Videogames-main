import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentGames } from "../../redux/actions";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import { SearchNotFound } from "../SearchNotFound/SearchNotFound";
import "./Cards.css";

export const Cards = () => {
  const games = useSelector((state) => state.gamesPerPage);
  const searchMsj = useSelector((state) => state.searchMsj);
  const all = useSelector((state) => state.filteredGames);
  const videogames = useSelector((state) => state.allVideogames);
  const currentPage = useSelector((state) => state.currentPage);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentGames()); 
  }, [all, currentPage, dispatch, searchMsj]);

  return (
    <div className="cards">
      {searchMsj ? (
        <SearchNotFound name={searchMsj} />  
      ) : (
        <>
          {games.length ? (
            games?.map((item) => {
              return (
                <GameCard
                  id={item.id}
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  rating={item.rating}
                  genres={item.genres}
                />
              );
            })
          ) : (
            <>
            {
              all  ? <Loading />   
              :<Loading /> 
            }
            </>
      
          )}
       </>
      )}
    </div>
  );
};
