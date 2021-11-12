import { useState } from "react";
import { useSelector } from "react-redux";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import { Pagination } from "../Pagination/Pagination";
import { SearchNotFound } from "../SearchNotFound/SearchNotFound";
import "./CardsFavs.css";

export const CardsFavs = ({ items }) => {
  const [searchMsj, filterNoMatch] = useSelector((state) => [
    state.searchMsj,
    state.filterNoMatch,
  ]);

const [currentPage, setCurrentPage] = useState([]);

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
