
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/Loading/Loading";
import './GameDetail.css'

export const GameDetail = () => {
    const [game, setGame] = useState(null)
    let { id } = useParams();
    useEffect(() => {
        fetch(`http://127.0.0.1:3001/api/videogame/${id}`)
        .then(res => res.json())
        .then(game => {
            setGame(game);
        })
        .catch(err => console.error(err))
    }, [])
    let elemento = document.querySelector("#algo");
    console.log(elemento)
    
    return (
        <div className="videogame-detail">
            {
                game? 
                <>  
                    <img src={game.image} alt={`${game.name}`} />
                    <h2>{game.name}</h2>
                    <div id="algo" className="videogame-description">
                         { game.description}
                    </div>
                    <span>
                        {game.rating}
                    </span>
                    <span>
                        {game.release}
                    </span>
                    
                    <div className="videogame-tags">

                        <div className="videogame-genres">
                            <h3>Genres</h3>
                            {game.genres.map(item => {
                                return <span key={item}>{item}</span>
                            })}
                        </div>
                        <div className="videogame-platforms">
                            <h3>Platforms</h3>
                            {game.platforms.map(item => {
                                return <span key={item}>{item}</span>
                            })}
                        </div>
                    </div>
                </>
                :
                <Loading />
            }
      </div>
            
    )
}