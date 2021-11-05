import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {  getGenres, getPlatforms, getVideogames } from '../../redux/actions'
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.css'
import { Cards } from "../../components/Cards/Cards";
import { FormInputText } from "../../components/FormInputText/FormInputText";

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
            <FormInputText
              label= "Ingresa tu nombre"
              name= "name"
              placeholder="nombre"
              handler={(value) => console.log(value)}
              msjError= "hola soy el error"
            ></FormInputText>
            <div>
                <Filters/>
                <Cards/>
            </div>
        </section>
    )
}