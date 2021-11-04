import './WidgetOrderByRating.css'
import { useDispatch } from "react-redux";
import { MINOR, MAYOR } from "../../constantes/filters";
import { sortByRating } from "../../redux/actions";

export const WidgetOrderByRating = () => {
    let dispatch = useDispatch();

    const handleOnClick = (e) => {
        let target = e.target.value;
        console.log(target)
        dispatch(sortByRating(e.target.value))
    }

    return (
        <section>
            <div>

            </div>
            <div>
                <h2>Order By Rating</h2>
                <button type='button'value={MINOR} onClick={handleOnClick}>Mayor</button>
                <button type='button'value={MAYOR} onClick={handleOnClick}>Menor</button>
             </div>
        </section>
    )
}