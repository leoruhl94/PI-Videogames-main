import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css'


export const GameCard = (props) =>{
    const { id, img, name, rating, genres } = props;
    let key = 0
    return (
  
            <div className="game-card">
                <div className="image-card">
                    <img src={img} alt={name} />
                </div>
                <div className="details-card">
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
                    <Link to={`/detail/${id}`}> See More... </Link>
                </div>
            </div>
    )
}