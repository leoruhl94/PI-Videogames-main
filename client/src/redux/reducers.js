import {
  GET_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  CHANGE_PAGE,
  GET_CURRENT_PAGE,
  GET_GENRES,
  GET_PLATFORMS,
  SORT_GAMES,
  RESET_FILTERS,
  ALL_FILTERS,
} from "./actions";

import {
  FROM_API,
  ITEMS_PER_PAGE,
  FROM_ALL,
  ASC,
  GENRES,
  FROM,
} from "../constantes/constantes";
import { sortArrayByNameOrRating } from "../functions/functions";

const initialState = {
  videogames: [],
  allVideogames: [],
  filteredGames: [],
  genres: [],
  platforms: [],
  filterFrom: FROM_ALL,
  filters: [],
  order: ASC,
  currentPage: 1,
  totalPages: 0,
  gamesPerPage: [],
  searchMsj: "",
};

const reducer = (state = initialState, {type, payload}) => {
 
  switch (type) {
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: payload,
      };

    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: payload,
        videogames: payload,
        filteredGames: payload,
        totalPages: Math.ceil(payload.length / ITEMS_PER_PAGE),
        currentPage: 1,
        filterFrom: FROM_ALL,
        order: ASC,
      };

    case SEARCH_VIDEOGAMES:
      let search = [...payload],
        msj = "";
      if (payload[0].error) {
        search = [];
        msj = payload[0].msj;
      }
      return {
        ...state,
        filteredGames: [...search],
        videogames: [...search],
        searchMsj: msj,
        totalPages: Math.ceil(payload.length / ITEMS_PER_PAGE),
        currentPage: 1,
      };

    case SORT_GAMES:
      let orderedArray = sortArrayByNameOrRating(
        [...state.filteredGames],
        payload.by,
        payload.sort
      );
      return {
        ...state,
        filteredGames: [...orderedArray],
        order: payload.sort,
      };


    case ALL_FILTERS:
      let { name, value, active } = payload;
      let filteredArray = [...state.videogames];
      let filters = [...state.filters];
      let from = state.filterFrom;
      if (name === GENRES) {
        filteredArray = [...state.videogames];
        filters = active
          ? [...state.filters, value]
          : filters.filter((x) => x !== value);
      } else if(name === FROM){
        from = value
      }

      filters.forEach((genero) => {
        filteredArray = filteredArray.filter((item) => item.genres.includes(genero));
      });

      if (from !== FROM_ALL) {
        filteredArray =
          from === FROM_API
            ? filteredArray?.filter((item) => !item.createdInDb)
            : filteredArray?.filter((item) => item.createdInDb);
      }
      return {
        ...state,
        filteredGames: [...filteredArray],
        filterFrom: from,
        filters: [...filters],
        order: ASC,
      };

    case RESET_FILTERS:
      return {
        ...state,
        filterFrom: FROM_ALL,
        filters: [],
        order: ASC,
        filteredGames: [...state.allVideogames],
        searchMsj: "",
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case GET_CURRENT_PAGE:
      let lastIndex = state.currentPage * ITEMS_PER_PAGE;
      let firstIndex = lastIndex - ITEMS_PER_PAGE;
      let items = state.filteredGames.slice(firstIndex, lastIndex);
      return {
        ...state,
        gamesPerPage: items,
        totalPages: Math.ceil(state.filteredGames.length / ITEMS_PER_PAGE),
      };

    default:
      return state;
  }
};

export default reducer;
