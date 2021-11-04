import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres, removeFilterGenres } from "../../redux/actions";

export const WidgetFilterGenres = () => {
  const genres = useSelector((state) => state.genres);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()
    useEffect(()=>{    console.log('WF - filters', filters)},[filters])

  const handleOnChange = (e) => {
    const value = e.target.value;
    const check = e.target.checked;
    dispatch(check? filterGenres(value): removeFilterGenres(value))
    console.log(e.target.checked, 'Tc')

    
  };

  return (
    <section>
      <h2>Filter Genres</h2>
      <div>
        {genres.map((item) => {
          return (
            <label htmlFor={item.name} key={item.id}>
              <input
                type="checkbox"
                value={item.name}
                name={item.name}
                onChange={handleOnChange}
                />
              {item.name}
            </label>
          );
        })}
      </div>
    </section>
  );
};
