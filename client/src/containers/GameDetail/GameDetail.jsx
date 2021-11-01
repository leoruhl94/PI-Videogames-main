
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/Loading/Loading";


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

    return (
        <div>
            {
                game? 
                <>
                    <img src={game.image} alt={`${game.name}`} />
                    <p>{game.name}</p>
                    <div className={game.description}></div>
                    <span>
                        {game.rating}
                    </span>
                    <span>
                        {game.release}
                    </span>
                    
                    <div className="details">

                        <div className="genres">
                            <h3>Genres</h3>
                            {game.genres.map(item => {
                                return <span key={item}>{item}</span>
                            })}
                        </div>
                        <div className="platforms">
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