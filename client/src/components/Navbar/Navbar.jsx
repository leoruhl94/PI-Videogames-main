import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePage, getVideogames } from '../../redux/actions';

export const Navbar = () => {
    let dispatch = useDispatch();

    const handleOnClick = (e) =>{
        dispatch(getVideogames())
        dispatch(changePage(1))
    }

    return(
        <nav className='nav'> 
            <NavLink to='/home' className='nav-links' onClick={handleOnClick}>Home</NavLink>
            <NavLink to='/create' className='nav-links'>New-Game</NavLink>
        </nav>
    )
}