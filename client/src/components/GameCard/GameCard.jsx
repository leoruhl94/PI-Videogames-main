import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/Icon/Icon";
import "./GameCard.css";

export const GameCard = (props) => {
  const { id, img, name, rating, genres } = props;
  let key = 0;
  return (
    <div className="game-card">
      <Link to={`/detail/${id}`}>
        <img className="game-card_img" src={img} alt={name} />
        <div className="game-card_details">
          <p className="game-card_details__title">{name}</p>
          <div className="game-card_details__rating">
            <span className="game-card_details__rating-icon2">
              <Icon
                svg={rating > 2.5 ? "starSolid" : "starOutline"}
                title={rating > 2.5 ? "starSolid" : "starOutline"}
              />
            </span>
            <span className="game-card_details__rating-text">{rating} / 5</span>
          </div>
          <div className="game-card_details__genres">
            {genres?.map((item) => {
              return (
                <span className="game-card_details__genres-item" key={key++}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
