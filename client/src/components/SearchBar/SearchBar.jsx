import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePage, searchVideogames, getCurrentGames } from '../../redux/actions';

export const SearchBar = () => {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch();
    
    const onChange = (e) =>{
        setSearch(e.target.value)  
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchVideogames(search))
        dispatch(changePage(1))
        dispatch(getCurrentGames())
        setSearch(''); 
    }

    return (
        <form onSubmit={onSubmit}> 
            <input 
                type="text"
                placeholder="¿que estas buscando?" 
                value={search}
                onChange={onChange}
            />
            <button type='submit'>Search</button>
        </form>
    )
}