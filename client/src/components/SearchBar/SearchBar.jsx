import "./SearchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideogames } from "../../redux/actions";
import Icon from "../../assets/Icon/Icon";
import { useHistory } from "react-router";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let history = useHistory();

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search) dispatch(searchVideogames(search));
    setSearch("");
    history.push({search:`?name=${search}`})
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
