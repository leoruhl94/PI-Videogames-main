import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentGames } from "../../redux/actions";
import { GameCard } from "../GameCard/GameCard";
import { Loading } from "../Loading/Loading";
import './Cards.css';

export const Cards = () => {
    const games = useSelector( (state) => state.gamesPerPage );
    const all = useSelector( (state) => state.filteredGames );
    const currentPage = useSelector((state) => state.currentPage);
    let dispatch = useDispatch();
    useEffect( () => {
        dispatch(getCurrentGames())
    }, [all, currentPage ,dispatch])
    // console.log(games)
    // console.log(all)
    return (
        <div className='cards'>
            {
                all.length ?
                games?.map( item => {
                    return (
                        
                        <GameCard
                            id={item.id}
                            key={item.id}
                            img={item.image}
                            name={item.name}
                            rating={item.rating}
                            genres={item.genres}
                        />
                    )
                })
                : 
                <Loading />

            }
        </div>
    )
}