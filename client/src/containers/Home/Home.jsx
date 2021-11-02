import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { changePage, getVideogames, getCurrentGames } from '../../redux/actions'
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.css'
import { Cards } from "../../components/Cards/Cards";

export const Home = () =>{

    let dispatch = useDispatch();
    useEffect( () => {
        dispatch(getVideogames())
        // dispatch(getCurrentGames())
    }, [])

    return (
        <section className="home">
            <Pagination/>
            <Cards/>
        </section>
    )
}