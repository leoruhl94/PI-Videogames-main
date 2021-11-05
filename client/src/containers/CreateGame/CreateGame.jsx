import axios from 'axios'
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FormCheckboxs } from '../../components/FormCheckboxs/FormCheckboxs';
import { Navbar } from '../../components/Navbar/Navbar';
import './CreateGame.css'

// este array es para hardcodear el form


export const CreateGame = () =>{

    const platforms = useSelector( state => state.platforms)
    const genres = useSelector( state => state.genres)
    let history = useHistory()

    // useEffect(()=>{
    //     console.log('genres', genres)
    //     console.log('Platforms', platforms)
    // },[platforms, genres])
    
    console.log('genres', genres.length)
    console.log( 'Platforms', platforms.length)
    
    const [game, setGame] = useState({
        name: "",
        description: "",
        rating: "",
        release: "",
        image: "",
        platforms:[],
        genres:[],
    })
    const [error, setError] = useState({
        name: true,
        description: true,
        rating: true,
        release: true,
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
    const onChange = (e) => {
        e.preventDefault()
        let t =e.target
        console.log(e.target.value,'=>name', e.target.name)
        if(!t.value){
            t.className='bad_input'
            setError((e)=>{
                return {
                    ...e,
                    [t.name]: true 
                }
     
            })
        } else {
            t.className='good_input'
            setError((e)=>{
                return {
                    ...e,
                    [t.name]: false 
                }
            })
        }
        
            setGame((data)=>{
                const state = {...data,
                [e.target.name]: e.target.value}
                return state
            })
        
        
        console.log(error)
    }
    console.log(error)
  
    const handleOnCheck = (e) => {
        let t = e.target; 
        if(t.checked){
            setGame((data)=>{
                const state = {
                    ...data,
                    [t.name]: [...data[t.name], t.value]
                }
                return state;
            })
        } else {
            setGame((data)=>{
                const state = {
                    ...data,
                    [t.name]: data[t.name].filter( item => item !== t.value)
                }
                return state;
            })
        }
        
        console.log('game state', game)
        console.log('checkboxs-N', e.target.name)
        console.log('checkboxs-V', e.target.value)
        console.log('checkboxs-C', e.target.checked)
    }
    console.log('game state', game)

    return (
        <div className="create-game">
            <Navbar/> 
            <form onSubmit={onSubmit} className="addGame-form">
                <h2 title="addGame_title">Vamos a Crear Nuestro Propio Juego!!</h2>
                <fieldset className="addGame-block1">
                    <div className="addGame-input-text">
                        <label htmlFor="name" > Name: </label>
                        <input type="text" name='name' id="name" onChange={onChange} value={game.name}/>
                    </div>

                    <div className="addGame-input-text">
                        <label htmlFor="description"> Description: </label>
                        <input type="text" name='description' id="description" onChange={onChange} value={game.description}/>
                    </div>

                    <div className="addGame-input-date">
                        <label htmlFor="release"> Release: </label>
                        <input type="date" name='release' id="release" onChange={onChange} value={game.release}/>
                    </div>

                    <div className="addGame-input-number">
                        <label htmlFor="rating"> Rating: </label>
                        <input type="number" name='rating' id='rating'  onChange={onChange} value={game.rating}/>
                    </div>
                </fieldset>

                <fieldset className="addGame-block2">
                    <div className="addGame-preview-image"><img src={game.image?game.image:""} alt="" /></div>
                    <label htmlFor="image" > Image: </label>
                    <input type="text" name='image' onChange={onChange} value={game.image}/>
                </fieldset>

                <fieldset className="addGame-block3">
                    <FormCheckboxs
                        options={genres}
                        handle={handleOnCheck}
                        title='Genres:'
                        group='genres'
                    />
                    <FormCheckboxs
                        options={platforms}
                        handle={handleOnCheck}
                        title='Platforms:'
                        group='platforms'
                    />
                </fieldset>

                <fieldset className="addGame-block4">
                    <button type="submit" value="Send">
                        Send
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