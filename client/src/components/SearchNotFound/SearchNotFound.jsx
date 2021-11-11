import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../../assets/Icon/Icon";
import { RESET } from "../../constantes/constantes";
import { allFilters } from "../../redux/actions";
import "./SearchNotFound.css";
export const SearchNotFound = ({ name }) => {
  let dispatch = useDispatch();
  let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBe2AEp6DwUxLQ0CbEfeVdhceMqea6ZQ2eZKpmWQKFHAKIQQ8xGODoNt92PQ1l0SXt4Y&usqp=CAU",
    "https://thumbs.dreamstime.com/z/s%C3%ADmbolo-del-vector-oops-sobre-blanco-29840798.jpg",
  ];

  const handleOnClick = (e) => {
    dispatch(allFilters({ name: RESET }));
  };
  const randomImage = () => {
    let index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  return (
    <div className="game-card search_not_found">
      <Link to="/home" onClick={handleOnClick}>
        <img
          className="game-card_img search_not_found"
          src={randomImage()}
          alt={name}
        />
        <div className="game-card_details">
          <p className="game-card_details__title_search">{name}</p>
          <span className="game-card_details__title_search ">
            <Icon svg="undo" title="undo2" />
            {"  Go Back"}{" "}
          </span>
        </div>
      </Link>
    </div>
  );
};
