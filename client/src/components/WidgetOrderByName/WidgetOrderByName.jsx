import './WidgetOrderByName.css'
import { useDispatch } from "react-redux";
import { ASC, DESC } from "../../constantes/filters";
import { sortByName } from "../../redux/actions";

export const WidgetOrderByName = () => {
    let dispatch = useDispatch();

    const handleOnClick = (e) => {
        let target = e.target.value;
        console.log(target)
        dispatch(sortByName(e.target.value))
        e.target.style="border-radius: 10px"
    }

    return (
        <section>
            <div>

            </div>
            <div>
                <h2>Order By Name</h2>
                <button type='button'value={ASC} onClick={handleOnClick}>Ascendente</button>
                <button type='button'value={DESC} onClick={handleOnClick}>Descendente</button>
            </div>
        </section>
    )
}