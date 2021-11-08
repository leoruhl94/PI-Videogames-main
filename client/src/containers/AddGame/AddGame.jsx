import axios from 'axios'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FormCheckboxs } from '../../components/FormCheckboxs/FormCheckboxs';
import { Navbar } from '../../components/Navbar/Navbar';
import { FormInputText } from "../../components/FormInputText/FormInputText";
import { validateText, validateRating, validateUrl, getActualDate, validateOptions } from "../../functions/functions";
import './AddGame.css'
import { getGenres, getPlatforms } from '../../redux/actions';
import { FormInputNumber } from '../../components/FormInputNumber/FormInputNumber';
import { FormInputTextArea } from '../../components/FormInputTextArea/FormInputTextArea';
import { FormInputDate } from '../../components/FormInputDate/FormInputDate';
import { FormListOptions } from '../../components/FormListOptions/FormListOptions';



export const AddGame = () =>{
    const platforms = useSelector( state => state.platforms)
    const genres = useSelector( state => state.genres)
    let history = useHistory()
 
    var dispatch = useDispatch();

        useEffect(()=>{
            genres.length || dispatch(getGenres())
            platforms.length || dispatch(getPlatforms())
        },[dispatch])

   
    const [allInputsOk, setAllInputsOk] = useState(false)
    const [game, setGame] = useState({
        // name: "",
        // description: "",
        // rating: "",
        // release: "",
        // image: "",
        // platforms:[],
        // genres:[],
    })
    const [error, setError] = useState({
        name: true,
        description: true,
        rating: true,
        released: true,
        image: true,
        platforms:true,
        genres: true,
    })

    //__________________Submit___________________
    const onSubmit = (e) => {
        e.preventDefault();
        let hayError = false;
        for (const key in error) {
            console.log(error[key], "onSubmit")
            if (error[key]) {
                hayError = true;
            }
        }
        if(hayError){
            console.log("uno o mas inputs son invalidos")
        } else {
            axios.post('http://127.0.0.1:3001/api/videogame', game)
            .then(()=>{
                history.push('/home')
            })
            .catch( err => console.error(err))
        }
    }

    //__________________Input control___________________
    
    const handleOnChange = ({value, error, name}) => {
        
        console.log(value,'__', error,'__', name)
        setGame((state)=>{          
            return {
                ...state,
                [name]: value 
            }
        })
        setError((state)=>{
            return {
                ...state,
                [name]:  error 
            }
        })
    }
    const handleErrors = (errors) => {
        let handled = true;
        for (const key in errors) {
            // console.log(errors[key], "handleErrors")
            if (errors[key]) {
                handled = false;
            }
        }
        // console.log("handled------>", handled)
        return handled
    }

    // console.log('game state', game)
    // console.log('Errors', error);
    
    return (
        <div className="create-game">
            <Navbar/> 
            <form onSubmit={onSubmit} className="addGame-form">
                <h2 title="addGame_title">Vamos a Crear Nuestro Propio Juego!!</h2>
                <fieldset className="addGame-block1">
                    <FormInputText
                        label= "Name: "
                        name= "name"
                        placeholder="Assassin's Creed"
                        handler={handleOnChange}
                        msjError= "Debe ingresar un Nombre"
                        validation={validateText}
                    />
            
                    <FormInputNumber
                        label= "Rating: "
                        name= "rating"
                        placeholder="4.65"
                        handler={handleOnChange}
                        msjError= "Debes ingresar un numero entre 0 y 5"
                        validation={validateRating}
                        step="0.01"
                        minValue= "0"
                        maxValue= "5" 
                    />
                    <FormInputDate
                        label= "Date: "
                        name= "released"
                        handler={handleOnChange}
                        msjError= "Debes seleccionar una Fecha"
                        validation={validateText}
                        max={getActualDate()}
                    />

                    <FormInputTextArea
                        label= "Description: "
                        name= "description"
                        placeholder="Añande una descripcion aqui..."
                        handler={handleOnChange}
                        msjError= "Debes ingresar una descripcion"
                        validation={validateText}
                        rows="4"
                        cols="50"
                    />
              
    
               
                </fieldset>

                <fieldset className="addGame-block2">
                    <div className="addGame-preview-image"><img src={game.image?game.image:""} alt="" /></div>
                    <FormInputText
                        label= "Image URL: "
                        name= "image"
                        placeholder="http://www.image...."
                        handler={handleOnChange}
                        msjError= "URL no valida"
                        validation={validateUrl}
                    />
                </fieldset>

                <fieldset className="addGame-row">
                    <FormListOptions
                        title="Este es el titulo de Genres"
                        group="Genres:"
                        name="genres"
                        options={genres}
                        msjError="selecciona al menos una opcion"
                        handler={handleOnChange}
                        validation={validateOptions}
                    />
                    <FormListOptions
                        title="Este es el titulo de Platforms"
                        group="Platforms:"
                        name="platforms"
                        options={platforms}
                        msjError="selecciona al menos una opcion"
                        handler={handleOnChange}
                        validation={validateOptions}
                    />
                </fieldset>

                <fieldset className="addGame-block4">
                    <button type="submit" value="Send"
                    disabled={!handleErrors(error)}
                    >
                        Add Game
                    </button>
                    <button type="button" value="cancel">
                        Cancel
                    </button>
                </fieldset>
            </form>
        </div>
    )
}
//  !/[^A-Za-z\s\,]/ .test(value) (mayus minus y espacios)