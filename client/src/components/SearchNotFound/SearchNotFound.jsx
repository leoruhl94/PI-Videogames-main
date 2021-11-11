import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../../assets/Icon/Icon";
import { RESET } from "../../constantes/constantes";
import { allFilters } from "../../redux/actions";
import "./SearchNotFound.css";
export const SearchNotFound = ({ name }) => {
  let dispatch = useDispatch();
  let images = [
    "https://i.pinimg.com/474x/d3/f2/3c/d3f23ccf9c6ea78e86ad7d0f5583fffa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10j6WhFROS8h-KIKtRoh-MyDD_c-FHe78X7epSmsu9kLUAt9OB1rlesvvcfgKpWNjrC0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M632xfUvq98Av52YAbhnjNikzrXOkftCM4N1KqFZeNdH3COqEyAUWCSf52TeE3c7X3E&usqp=CAU",
    "https://i.pinimg.com/474x/a1/c6/b6/a1c6b6c715761768424ee754457975fa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHT-LdnmK8PkQiitZhRzwcDUoTZPb44W1_oiTP5dd1IEeefoR1nQzuByKkAbcYhb-rCw&usqp=CAU",
    "https://i.pinimg.com/564x/72/a8/91/72a8910613b3df0b066ad2fabf1284a2.jpg",
    "https://i.pinimg.com/564x/76/03/d8/7603d8e3498be0329d3a0eb33ecf58af.jpg",
    "https://i.pinimg.com/564x/7c/0c/1c/7c0c1c57f6a8f8b691bde14a36b556d7.jpg",
    "https://i.pinimg.com/564x/1c/a2/18/1ca218a5b9e4daf0612edaafe0fbacd3.jpg",
    "https://i.pinimg.com/564x/f4/b7/f7/f4b7f707d9750650763e42ad4a5156b9.jpg",
    "https://i.pinimg.com/564x/8c/5e/6c/8c5e6c803a7ebc05f95d76e1ee8ea5b5.jpg",
    "https://i.pinimg.com/564x/65/0d/2b/650d2b4370e7ed97904a0e2d329427df.jpg",
    "https://i.pinimg.com/564x/c0/67/0d/c0670dfe39d9ab98352098e1c38dc3c8.jpg",
    "https://i.pinimg.com/564x/b7/4d/7b/b74d7b0662c9bdf2fbb9260169673f9e.jpg",
    "https://i.pinimg.com/564x/1f/5a/1c/1f5a1ce2389cdb75701648ec80812617.jpg",
    "https://i.pinimg.com/564x/27/70/32/2770324a3eb96924be6d23907f8a3d81.jpg",
    "https://i.pinimg.com/564x/c7/2a/46/c72a4647079638d0e0881ee5b6f7b9d5.jpg",
    "https://i.pinimg.com/564x/c5/39/60/c539606d9ce43adddaae487537ee354f.jpg",
    "https://i.pinimg.com/564x/d3/89/2f/d3892fb608c5d4569bf44ce5f1622a6e.jpg",
    "https://as1.ftcdn.net/v2/jpg/01/51/57/66/500_F_151576654_IuN8FA80e6scZOf9MSmnjC65l99K2hyA.jpg",
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
