import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions'
import { GameCard } from '../../components/GameCard/GameCard'
import { Loading } from "../../components/Loading/Loading";
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.css'
import { Cards } from "../../components/Cards/Cards";

export const Home = () =>{
    const videogames = useSelector( (state) => state.filteredGames )
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);
    

    let dispatch = useDispatch();
    useEffect( () => {
        dispatch(getVideogames())

    }, [])
    useEffect( () => {
        const indexLastGame = currentPage * gamesPerPage;
        const indexFirstGame = indexLastGame - gamesPerPage;
        setGames(videogames.slice( indexFirstGame, indexLastGame )); 
    }, [videogames])
    console.log(games)



    return (
    <>
        <Pagination itemsPerPage={gamesPerPage} totalItems={videogames.length} />
        <Cards items={games}></Cards>
      
    </>
    )
}