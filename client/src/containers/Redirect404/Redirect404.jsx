import { Link } from "react-router-dom";
import "./Redirect404.css";
import { useLocation } from "react-router";

export const Redirect404 = () => {
  const location = useLocation();
  return (
    <div className="page_404">
      {location.state ? (
        <>
          <h2 className="page_404_number_status ">{location.state.status}</h2>
          <h2 className="page_404_msj">{location.state.msj}</h2>
        </>
      ) : (
        <h2 className="page_404_number">404</h2>
      )}
      <Link to="/home" className="page_404_link">
        GO BACK
      </Link>
    </div>
  );
};
