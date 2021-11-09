import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FormInputText } from "../../components/FormInputText/FormInputText";
import {
  validateText,
  validateRating,
  validateUrl,
  getActualDate,
  validateOptions,
} from "../../functions/functions";
import "./AddGame.css";
import { getGenres, getPlatforms } from "../../redux/actions";
import { FormInputNumber } from "../../components/FormInputNumber/FormInputNumber";
import { FormInputTextArea } from "../../components/FormInputTextArea/FormInputTextArea";
import { FormInputDate } from "../../components/FormInputDate/FormInputDate";
import { FormListOptions } from "../../components/FormListOptions/FormListOptions";
import { Header } from "../../components/Header/Header";

export const AddGame = () => {
  const platforms = useSelector((state) => state.platforms);
  const genres = useSelector((state) => state.genres);
  let history = useHistory();

  var dispatch = useDispatch();

  useEffect(() => {
    genres.length || dispatch(getGenres());
    platforms.length || dispatch(getPlatforms());
  }, [dispatch]);

  const [allInputsOk, setAllInputsOk] = useState(false);
  const [game, setGame] = useState({
    // name: "",
    // description: "",
    // rating: "",
    // release: "",
    // image: "",
    // platforms:[],
    // genres:[],
  });
  const [error, setError] = useState({
    name: true,
    description: true,
    rating: true,
    released: true,
    image: true,
    platforms: true,
    genres: true,
  });

  //__________________Submit___________________
  const onSubmit = (e) => {
    e.preventDefault();
    let hayError = false;
    for (const key in error) {
      console.log(error[key], "onSubmit");
      if (error[key]) {
        hayError = true;
      }
    }
    if (hayError) {
      console.log("uno o mas inputs son invalidos");
    } else {
      axios
        .post("http://127.0.0.1:3001/api/videogame", game)
        .then(() => {
          history.push("/home");
        })
        .catch((err) => console.error(err));
    }
  };

  //__________________Input control___________________

  const handleOnChange = ({ value, error, name }) => {
    console.log(value, "__", error, "__", name);
    setGame((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
    setError((state) => {
      return {
        ...state,
        [name]: error,
      };
    });
  };
  const handleErrors = (errors) => {
    let handled = true;
    for (const key in errors) {
      if (errors[key]) {
        handled = false;
      }
    }
    return handled;
  };

  return (
    <div className="addGame_background">
      <div className="addGame">
        <form onSubmit={onSubmit} className="addGame_form">
          <h2 className="addGame_title">Add a New Game!!</h2>
          <div className="flex_row">
            <div className="flex_column addGame_inputs">
              <FormInputText
                label="Name: "
                name="name"
                placeholder="Assassin's Creed"
                handler={handleOnChange}
                msjError="Debes ingresar un Nombre"
                validation={validateText}
              />
              <div className="flex_row">
                <FormInputNumber
                  label="Rating: "
                  name="rating"
                  placeholder="4.65"
                  handler={handleOnChange}
                  msjError="Debes ingresar un numero entre 0 y 5"
                  validation={validateRating}
                  step="0.01"
                  minValue="0"
                  maxValue="5"
                />
                <FormInputDate
                  label="Date: "
                  name="released"
                  handler={handleOnChange}
                  msjError="Debes seleccionar una Fecha"
                  validation={validateText}
                  max={getActualDate()}
                />
              </div>
              <FormInputText
                label="Image URL: "
                name="image"
                placeholder="http://www.image...."
                handler={handleOnChange}
                msjError="URL no valida"
                validation={validateUrl}
              />
              <FormInputTextArea
                label="Description: "
                name="description"
                placeholder="Añande una descripcion aqui..."
                handler={handleOnChange}
                msjError="Debes ingresar una descripcion"
                validation={validateText}
                rows="4"
                cols="30"
              />
            </div>

            <div className="addGame_preview_image">
              {game.image && <img src={game.image} alt="" />}
            </div>
          </div>

          <div className="flex_row addGame_filters">
            <FormListOptions
              dropdown="Genres"
              name="genres"
              options={genres}
              msjError="selecciona al menos una opcion"
              handler={handleOnChange}
              validation={validateOptions}
            />
            <FormListOptions
              dropdown="Platforms"
              name="platforms"
              options={platforms}
              msjError="selecciona al menos una opcion"
              handler={handleOnChange}
              validation={validateOptions}
            />
          </div>

          <fieldset className="addGame-block4">
            <button type="submit" value="Send" disabled={!handleErrors(error)}>
              Add Game
            </button>
            <button type="button" value="cancel">
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
