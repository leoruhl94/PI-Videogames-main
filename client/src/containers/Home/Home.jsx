import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {  getGenres, getPlatforms, getVideogames } from '../../redux/actions'
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.css'
import { Cards } from "../../components/Cards/Cards";


export const Home = () =>{

    let dispatch = useDispatch();
    useEffect( () => {
        // dispatch(getPlatforms())
        // dispatch(getGenres())
        dispatch(getVideogames())
    }, [dispatch])

    return (
        <section className="home">
            <Pagination/>
            <div>
                <Filters/>
                <Cards/>
            </div>
        </section>
    )
}