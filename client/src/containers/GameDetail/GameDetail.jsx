import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Icon from "../../assets/Icon/Icon";
import { Loading } from "../../components/Loading/Loading";
import { Header } from "../../components/Header/Header";
import "./GameDetail.css";

export const GameDetail = () => {
  const [game, setGame] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/videogame/${id}`)
      .then((res) => res.json())
      .then((game) => {
        setGame(game);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <Header logo nav />
      <div className="videogame_background">
        <div className="videogame_container">
          {game ? (
            <>
              <img
                src={game.image}
                alt={`${game.name}`}
                className="videogame_img"
              />

              <div className="videogame_info">
                <h2 className="videogame_title">{game.name}</h2>
                <div className="videogame_row">
                  <div className="videogame_rating">
                    <span className="videogame_rating-icon">
                      <Icon
                        svg={game.rating > 2.5 ? "starSolid" : "starOutline"}
                        title={game.rating > 2.5 ? "starSolid" : "starOutline"}
                      />
                    </span>
                    <span className="videogame_rating-text">
                      {game.rating} / 5
                    </span>
                  </div>
                  <span className="videogame_released">
                    {game.released.slice(0, 11)}
                  </span>
                </div>

                <div className="videogame_row">
                  <div className="videogame_list">
                    <h3 className="videogame_subtitles">Genres</h3>
                    <div className="videogame_tags">
                      {game.genres.map((item) => {
                        return <span key={item}>{item}</span>;
                      })}
                    </div>
                  </div>
                  <div className="videogame_list">
                    <h3 className="videogame_subtitles">Platforms</h3>
                    <div className="videogame_tags">
                      {game.platforms.map((item) => {
                        return <span key={item}>{item}</span>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="videogame_description">
                  <h3 className="videogame_subtitles">Description</h3>
                  <p
                    className="videogame_description_text"
                    dangerouslySetInnerHTML={{ __html: game.description }}
                  ></p>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};
