import { useSelector } from "react-redux";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import { SearchNotFound } from "../SearchNotFound/SearchNotFound";
import "./Cards2.css";

export const Cards2 = ({ items }) => {
  const [searchMsj, filterNoMatch] = useSelector((state) => [
    state.searchMsj,
    state.filterNoMatch,
  ]);

  return (
    <div className="cards">
      {searchMsj ? (
        <SearchNotFound name={searchMsj} />
      ) : (
        <>
          {items.length ? (
            items?.map((item) => {
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
  );
};
