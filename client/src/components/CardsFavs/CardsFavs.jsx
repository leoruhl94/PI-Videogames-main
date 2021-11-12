import { useState } from "react";
import { useSelector } from "react-redux";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import { Pagination } from "../Pagination copy/Pagination";
import { SearchNotFound } from "../SearchNotFound/SearchNotFound";
import "./Cards.css";

export const Cards = ({ items }) => {
  const [searchMsj, filterNoMatch] = useSelector((state) => [
    state.searchMsj,
    state.filterNoMatch,
  ]);
//===========================
// const error = useSelector((state) => state.getError);
// const games = useSelector((state) => state.filteredGames);
const [currentPage, setCurrentPage] = useState([]);
// const history = useHistory();
// const getPage = (items) => {
//   setCurrentPage(items);
// };

// let dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getVideogames());
// }, [dispatch]);
// useEffect(() => {
//   error.error && history.push({ pathname:`/${error.status}`, state: error})
// }, [error, history]);




  return (
    <>
    <div className="cards">
      {searchMsj ? (
        <SearchNotFound name={searchMsj} />
      ) : (
        <>
          {currentPage.length ? (
            currentPage?.map((item) => {
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
              {filterNoMatch ? (
                <SearchNotFound name={"No Results"} />
              ) : (
                <Loading />
              )}
            </>
          )}
        </>
      )}
    </div>
    <Pagination arrayItems={items} handler={setCurrentPage} />
    </>
  );
};
