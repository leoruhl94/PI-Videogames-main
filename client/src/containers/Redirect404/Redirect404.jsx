import { Link } from "react-router-dom";
import "./Redirect404.css";

export const Redirect404 = () => {
  return (
    <div className="page_404">
      <h2 className="page_404_number">404</h2>
      <Link to="/home" className="page_404_link">
        {" "}
        GO BACK
      </Link>
    </div>
  );
};
