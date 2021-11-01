import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css'


export const GameCard = (props) =>{
    const { id, img, name, rating, genres } = props;
    let key = 0
    return (
        <Link to={`/detail/${id}`}>
            <div className="game-card">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <span> {rating} </span>
                <ul> 
                    {
                    genres?.map(item => {
                        return (
                            <li key={key++}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    )
}