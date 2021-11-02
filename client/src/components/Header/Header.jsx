import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css';
import { useEffect, useState } from 'react';


export const Header = () => {
    const location = useLocation();
    const [path, setPath] = useState('/')

    useEffect(() => {
      const currentPath = location.pathname;
      console.log(currentPath)
      setPath(currentPath.split('/')[1])
    }, [location]);


    return (
            path === 'detail' ?

            <div className="main-header">   
                <NavLink to='/home' className='logo'>LOGO</NavLink>   
            </div>
            :
            <div className="main-header">   
                <NavLink to='/home' className='logo'>LOGO</NavLink>  
                <SearchBar/>
                <Navbar/> 
            </div>
    
            )
}
