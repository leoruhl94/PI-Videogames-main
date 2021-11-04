import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectedFilterItem } from "../SelectedFilterItem/SelectedFilterItem";
import './SelectedFilters.css'


export const SelectedFilter= () => {
    const filters = useSelector( (state) => state.filters );
    const order = useSelector( (state) => state.order );
    const from = useSelector( (state) => state.filterFrom );

    useEffect(()=>{
    },[order, filters, from])

    return(
        <section>
            <h2>Filters Applied</h2>
            <div>
               { order? <SelectedFilterItem value={order} key={order}/> : ""}
               { from? <SelectedFilterItem value={from} key={from}/> : ""}
                { filters?.map(item =><SelectedFilterItem key={item} value={item}/>) }
            </div>
        </section>
    )
}