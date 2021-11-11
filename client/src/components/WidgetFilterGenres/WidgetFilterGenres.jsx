import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFilters, getGenres } from "../../redux/actions";
import { OptionItem } from "../OptionItem/OptionItem";
import Icon from "../../assets/Icon/Icon";
import "./WidgetFilterGenres.css";
import { GENRES } from "../../constantes/constantes";

export const WidgetFilterGenres = () => {
  const [genres, filters] = useSelector((state) => [
    state.genres,
    state.filters,
  ]);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    !genres.length && dispatch(getGenres());
    !filters.length && setItems(genres);
    !filters.length && setSelectedItems([]);
  }, [genres, filters, dispatch]);

  const handleOnChange = (data) => {
    const { id, name, selected } = data;
    dispatch(allFilters({ name: GENRES, value: name, active: selected }));

    let newItems = selected
      ? items.filter((x) => x.id !== id)
      : [...items, { name: name, id: id }];

    let newSelectedItems = !selected
      ? selectedItems.filter((x) => x.id !== id)
      : [...selectedItems, { name: name, id: id }];

    setItems(newItems);
    setSelectedItems(newSelectedItems);
  };
  return (
    <section className="filter_bar_genres">
      <div className="dropdown">
        <button type="button" className="dropbtn">
          <span className="dropbtn_text">Generos</span>
          <span className="dropbtn_icon">
            <Icon svg="arrowDown" title="arrowDown" />
          </span>
        </button>
        <div className="dropdown-content">
          {items?.map((item) => {
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

      <div className="filter_genres_selected">
        {selectedItems?.map((item) => {
          return (
            <OptionItem
              key={`id${item.id}-${item}`}
              name={item.name}
              value={item.id}
              handler={handleOnChange}
              selected={true}
            />
          );
        })}
      </div>
    </section>
  );
};
