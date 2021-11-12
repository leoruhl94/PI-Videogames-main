import { ASC, DESC, MAYOR, MINOR, RESET } from "../constantes/constantes";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GENRES = "GET_GENRES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const SORT_GAMES = "SORT_GAMES";
export const ALL_FILTERS = "ALL_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";
export const GET_ERROR = "GET_ERROR";

export const getGenres = () => {
  return function (dispatch) {
    fetch(`http://127.0.0.1:3001/api/genres`)
      .then((res) => res.json())
      .then((genres) => {
        dispatch({
          type: GET_GENRES,
          payload: genres,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getPlatforms = () => {
  return function (dispatch) {
    fetch(`http://127.0.0.1:3001/api/platforms`)
      .then((res) => res.json())
      .then((platforms) => {
        dispatch({
          type: GET_PLATFORMS,
          payload: platforms,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getVideogames = () => {
  return function (dispatch) {
    fetch(`http://127.0.0.1:3001/api/videogames`)
      .then((res) => res.json())
      .then((videogames) => {
        videogames[0].error
        ? dispatch({
          type: GET_ERROR,
          payload: videogames[0],
        })
        : dispatch({
          type: GET_VIDEOGAMES,
          payload: videogames,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const searchVideogames = (search) => {
  return function (dispatch) {
    fetch(`http://127.0.0.1:3001/api/videogames?name=${search}`)
      .then((res) => res.json())
      .then((videogames) => {
        dispatch({
          type: SEARCH_VIDEOGAMES,
          payload: videogames,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const sortGames = (data) => {
  let sort = data.value;
  let by = "";
  if (sort === ASC || sort === DESC) by = "name";
  if (sort === MINOR || sort === MAYOR) by = "rating";
  return {
    type: SORT_GAMES,
    payload: { sort, by },
  };
};

export const allFilters = (data) => {
  if (data.name === RESET) return { type: RESET_FILTERS, payload: data };
  return {
    type: ALL_FILTERS,
    payload: data,
  };
};
