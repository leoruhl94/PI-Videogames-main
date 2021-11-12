import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { Filters } from "../../components/Filters/Filters";
import "./Favorites.css";
import { CardsFavs } from "../../components/CardsFavs/CardsFavs";
import { Header } from "../../components/Header/Header";
import { useHistory } from "react-router";

export const Favorites = () => {
  const favorites = useSelector((state) => state.filteredFavGames);
  const error = useSelector((state) => state.getError);
  const history = useHistory();

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);
  useEffect(() => {
    error.error && history.push({ pathname:`/${error.status}`, state: error})
  }, [error, history]);


  return (
    <div className="fav_background">
      <Header nav  logo />
      <section className="fav_void">
        <Filters />
        <div className="banner" >
          <h2 >Aun No Has Añadido Ningun Juego A Tu Coleccion</h2>
        </div>
      </section>
      {/* <section className="fav">
        <Filters />
        <CardsFavs items={favorites} />
      </section> */}
    </div>
  );
};
