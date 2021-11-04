import './WidgetFilterFrom.css'
import { useDispatch } from "react-redux";
import { FROM_ALL, FROM_API, FROM_DB } from "../../constantes/filters";
import { filterGenres, filterFrom } from "../../redux/actions";

export const WidgetFilterFrom = () => {
    let dispatch = useDispatch();

    const handleOnClick = (e) => {
        let target = e.target.value;
        console.log("target", target)
        dispatch(filterGenres())
        dispatch(filterFrom(e.target.value))
    }

    return (
        <section>
          
                <h2>Order From</h2>
                <div>
                    <input type="radio" name="from" id="all" value={FROM_ALL} onChange={handleOnClick} />
                    <label htmlFor="all">All</label>
                    <input type="radio" name="from" id="db" value={FROM_DB} onChange={handleOnClick} />
                    <label htmlFor="db">DB</label>
                    <input type="radio" name="from" id="api" value={FROM_API} onChange={handleOnClick} />
                    <label htmlFor="api">API</label>
         
                {/* <button type='button'value={FROM_DB} onClick={handleOnClick}>Created</button>
                <button type='button'value={FROM_DB} onClick={handleOnClick}>Created</button>
                <button type='button'value={FROM_API} onClick={handleOnClick}>Originals</button> */}
            </div>
        </section>
    )
}