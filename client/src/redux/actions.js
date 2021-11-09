// const { REACT_APP_API_BASE_URL } = 'process.env';

import { ASC, DESC, MAYOR, MINOR } from "../constantes/filters";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GENRES = "GET_GENRES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const SORT_GAMES = "SORT_GAMES";
export const FILTER_FROM = "FILTER_FROM";
export const FILTER_GENRES = "FILTER_GENRES";
export const REMOVE_FILTER_GENRES = "REMOVE_FILTER_GENRES";

export const getGenres = () => {
  return function (dispatch) {
    // fetch(`${REACT_APP_API_BASE_URL}/videogames`)
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
        dispatch({
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
        console.log(videogames);
        dispatch({
          type: SEARCH_VIDEOGAMES,
          payload: videogames,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const sortGames = (sort) => {
  let by = "";
  if (sort === ASC || sort === DESC) by = "name";
  if (sort === MINOR || sort === MAYOR) by = "rating";
  return {
    type: SORT_GAMES,
    payload: { sort, by },
  };
};

export const filterGenres = (genre) => {
  console.log("genres")
  return {
    type: FILTER_GENRES,
    payload: genre,
  };
};
export const removeFilterGenres = (genre) => {
  return {
    type: REMOVE_FILTER_GENRES,
    payload: genre,
  };
};
export const filterFrom = (from) => {
  console.log("FRom")
  return {
    type: FILTER_FROM,
    payload: from,
  };
};


export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const getCurrentGames = () => {
  return {
    type: GET_CURRENT_PAGE,
    payload: "",
  };
};
