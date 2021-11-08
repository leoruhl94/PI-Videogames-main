import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

export const Header = ({ logo, search, nav }) => {
  const location = useLocation();
  const [path, setPath] = useState("/");
  let dispatch = useDispatch();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath);
    setPath(currentPath.split("/")[1]);
  }, [location]);

  const handleOnClick = (e) => {
    dispatch(getVideogames());
  };

  return (
    <div className="main-header">
      {logo && (
        <Link to="/" className="logo" onClick={handleOnClick}>
          LOGO
        </Link>
      )}
      {search && <SearchBar />}
      {nav && <Navbar />}
    </div>
  );
};
