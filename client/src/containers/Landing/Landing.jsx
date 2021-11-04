import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { animationStart } from '../../assets/animations/animarions';
import { getGenres, getPlatforms } from '../../redux/actions';
import './Landing.css'

export const Landing = () =>{

    let dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPlatforms())
        dispatch(getGenres())
        animationStart()
    },[dispatch])
    
    return (
        <div className="landing">
            <Link to='/home'>
                <x-sign>
                    START
                </x-sign> 
            </Link>
        </div>
    )
}