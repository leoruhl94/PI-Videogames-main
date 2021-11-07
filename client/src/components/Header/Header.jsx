import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom'
import './Header.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';


export const Header = () => {
    const location = useLocation();
    const [path, setPath] = useState('/')
    let dispatch = useDispatch();

    useEffect(() => {
      const currentPath = location.pathname;
      console.log(currentPath)
      setPath(currentPath.split('/')[1])
    }, [location]);
    
    const handleOnClick = (e) =>{
        dispatch(getVideogames())
    }

    return (
            path === 'detail' ?

            <div className="main-header" >   
                <Link to='/' className='logo' onClick={handleOnClick}>LOGO</Link>   
            </div>
            :
            <div className="main-header">   
                <Link to='/' className='logo' onClick={handleOnClick}>LOGO</Link>  
                {/* <SearchBar/> */}
                <Navbar/> 
            </div>
    
            )
}
