import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentGames } from "../../redux/actions";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import { SearchNotFound } from "../SearchNotFound/SearchNotFound";
import "./Cards2.css";

export const Cards2 = () => {
  const [games, currentPage] = useSelector((state) => [state.gamesPerPage, state.currentPage]);
  const [searchMsj, filterNoMatch]= useSelector((state) => [state.searchMsj, state.filterNoMatch]);
  const all = useSelector((state) => state.filteredGames);
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
              filterNoMatch  ? <SearchNotFound name={"No Results"} />    
              :<Loading /> 
            }
            </>
      
          )}
       </>
      )}
    </div>
  );
};
