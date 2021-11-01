import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return(
        <div className='nav'> 
            <NavLink to='/home' className='nav-links'>Home</NavLink>
            <NavLink to='/create' className='nav-links'>New-Game</NavLink>
        </div>
    )
}