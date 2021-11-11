import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ logo, search, nav }) => {
  return (
    <div className="main-header">
      {logo && (
        <Link to="/" className="logo">
          LOGO
        </Link>
      )}
      {search && <SearchBar />}
      {nav && <Navbar />}
    </div>
  );
};
