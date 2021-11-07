import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {  getGenres, getVideogames } from '../../redux/actions'
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.css'
import { Cards } from "../../components/Cards/Cards";
import { SearchBar } from "../../components/SearchBar/SearchBar";


export const Home = () =>{

    let dispatch = useDispatch();
    useEffect( () => {
        dispatch(getGenres())
        dispatch(getVideogames())
    }, [dispatch])
    return (
        <section className="home">
            <SearchBar/>
            <div className="home_games grid_container"> 
                <Filters/>
                <Cards/>
            </div>
            <Pagination/>
        </section>
    )
}