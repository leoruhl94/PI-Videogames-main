import "./SearchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogames } from "../../redux/actions";
import Icon from "../../assets/Icon/Icon";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search) dispatch(searchVideogames(search));
    setSearch("");
  };

  return (
    <form onSubmit={onSubmit} className="searchbar">
      <input
        type="text"
        placeholder="¿que estas buscando?"
        value={search}
        onChange={onChange}
        className="searchbar_input"
      />
      <button type="submit" className="searchbar_button">
        <span className="searchbar_icon">
          <Icon svg="magnifier" title="magnifier" />
        </span>
      </button>
    </form>
  );
};
