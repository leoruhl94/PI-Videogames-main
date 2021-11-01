import { GameCard } from "../GameCard/GameCard"
import { Loading } from "../Loading/Loading"

export const Cards = ({items, loading}) => {

    return (
        <div className='cards-container'>
            {
                items.length?
                items?.map( item => {
                    return (
                        
                        <GameCard
                            id={item.id}
                            key={item.id}
                            img={item.image}
                            name={item.name}
                            rating={item.rating}
                            genres={item.genres}
                        />
                    )
                })
                : 
                <Loading />

            }
        </div>
    )
}