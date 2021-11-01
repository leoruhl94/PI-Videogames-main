import axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router';
import { Navbar } from '../../components/Navbar/Navbar';

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
        <>
            <Navbar/>   
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' onChange={onChange} value={game.name}/>
                <label htmlFor="description">Description: </label>
                <input type="text" name='description' onChange={onChange} value={game.description}/>
                <label htmlFor="release"> Release: </label>
                <input type="date" name='release' onChange={onChange} value={game.release}/>
                <label htmlFor="rating"> Rating: </label>
                <input type="number" name='rating'  onChange={onChange} value={game.rating}/>
                <label htmlFor="image" > Image:  </label>
                <input type="text" name='image' onChange={onChange} value={game.image}/>
                <label htmlFor="genres"> Generos  </label>
                <select name="genres" id="" onChange={onChange} value={game.genres}>
                    <option value="2">blabla</option>
                    <option value="5">blabla</option>
                </select>
                <label htmlFor="platforms">  platforms </label>
                <select name="platforms" value={game.platforms} onChange={onChange} id="" defaultValue={platforms}>
                    <option value="2">blabla</option>
                    <option value="5">blabla</option>
                </select>
                <input type="submit" value="Send"/>
            </form>
        </>
    )
}