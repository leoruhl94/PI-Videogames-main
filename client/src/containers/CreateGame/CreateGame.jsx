import axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router';
import { Navbar } from '../../components/Navbar/Navbar';
import './CreateGame.css'

// este array es para hardcodear el form
let platforms = [
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox 360",
    "PC",
    "Xbox One",
    "Xbox Series S/X"
]

export const CreateGame = () =>{
    const [game, setGame] = useState({})
    let history = useHistory()
    const onChange = (e) => {
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(game)
        axios.post('http://127.0.0.1:3001/api/videogame', game)
        .then(()=>{
            history.push('/home')
        })
        .catch( err => console.error(err))
    }

    return (
        <div className="create-game">
            <Navbar/> 
            <form onSubmit={onSubmit} className="game-form">
                <h1>Vamos a Crear Nuestro Propio Juego!!</h1>

                <fieldset>
                    <label htmlFor="name" > Name: </label>
                    <input type="text" name='name' onChange={onChange} value={game.name}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="description"> Description: </label>
                    <input type="text" name='description' onChange={onChange} value={game.description}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="release"> Release: </label>
                    <input type="date" name='release' onChange={onChange} value={game.release}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="rating"> Rating: </label>
                    <input type="number" name='rating'  onChange={onChange} value={game.rating}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="image" > Image: </label>
                    <input type="text" name='image' onChange={onChange} value={game.image}/>
                </fieldset>

                <fieldset>
                    <label htmlFor="genres"> Generos: </label>
                    <select name="genres" id="" onChange={onChange} value={game.genres}>
                        <option value="2">blabla</option>
                        <option value="5">blabla</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="platforms"> Platforms: </label>
                    <select name="platforms" value={game.platforms} onChange={onChange} id="" defaultValue={platforms}>
                        <option value="2">blabla</option>
                        <option value="5">blabla</option>
                    </select>
                </fieldset>

                <fieldset>
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