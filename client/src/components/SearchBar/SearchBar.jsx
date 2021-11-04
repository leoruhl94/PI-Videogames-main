import './SearchBar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogames } from '../../redux/actions';

export const SearchBar = () => {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch();
    
    const onChange = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)  
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchVideogames(search))
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