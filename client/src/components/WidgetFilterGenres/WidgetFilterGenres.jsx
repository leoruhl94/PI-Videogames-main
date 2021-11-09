import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../assets/Icon/Icon";
import { filterGenres, removeFilterGenres } from "../../redux/actions";
import { OptionItem } from "../OptionItem/OptionItem";

export const WidgetFilterGenres = () => {
  const genres = useSelector((state) => state.genres);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()
    useEffect(()=>{    console.log('WF - filters', filters)},[filters])
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
console.log(genres, filters)
    useEffect(() => {
      setItems(genres);
      setSelectedItems(filters);
    }, [filters]);

  // const handleOnChange = (e) => {
  //   const value = e.target.value;
  //   const check = e.target.checked;
  //   dispatch(check? filterGenres(value): removeFilterGenres(value))
  //   console.log(e.target.checked, 'Tc')

    
  // };

  // const handleOnChange = (value) => {
  //   let newItems = value.selected
  //     ? items.filter((e) => e.id !== value.id)
  //     : [...items, { name: value.name, id: value.id }];

  //   let newSelectedItems = !value.selected
  //     ? selectedItems.filter((x) => x.id !== value.id)
  //     : [...selectedItems, { name: value.name, id: value.id }];
  //   validation(newSelectedItems)
  //     ? setError({ error: false, msjError: "" })
  //     : setError({ error: true, msjError });
  //   setItems(newItems);
  //   setSelectedItems(newSelectedItems);
  //   handler({
  //     value: newSelectedItems.map((x) => x.id),
  //     error: !validation(newSelectedItems),
  //     name,
  //   });
  // };

  const handleOnChange = (data) => {
    const {id, name, selected} = data;
    dispatch(selected? filterGenres(name): removeFilterGenres(name))
    console.log(id, name, selected, '___Probando____')
    }
 return (
  
    
   <section>

    <div className="dropdown">
      <button type="button" className="dropbtn">
        <span className="dropbtn_text">Generos</span>
        <span className="dropbtn_icon">
          <Icon svg="arrowDown" title="arrowDown" />
        </span>
      </button>
      {/* {error.error && <span className="text_error">{error.msjError}</span> } */}
      <div className="dropdown-content">
        {genres?.map((item) => {
          return (
            <div key={`id${item.id}-${item.name}`} className="dropdown-item">
              <OptionItem
                name={item.name}
                value={item.id}
                handler={handleOnChange}
                selected={false}
              />
            </div>
          );
        })}
      </div>
    </div>

    <div className={`selected_options`}>
        {selectedItems?.map((item) => {
          return (
            <OptionItem
              key={`id${item.id}-${item}`}
              name={item}
              value={item.name}
              handler={handleOnChange}
              selected={true}
            />
          );
        })}
      </div>


      {/* <h2>Filter Genres</h2>
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
      </div> */}
    </section> 
  );
};
