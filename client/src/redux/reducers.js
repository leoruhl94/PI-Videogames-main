import {
  GET_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  FILTER_FROM,
  FILTER_GENRES,
  CHANGE_PAGE,
  GET_CURRENT_PAGE,
  GET_GENRES,
  REMOVE_FILTER_GENRES,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };

    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredGames: action.payload,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
        currentPage: 1,
      };

    case SEARCH_VIDEOGAMES:
      let search = [...action.payload],
        msj = "";
      if (action.payload[0].error) {
        search = [];
        msj = action.payload[0].msj;
      }
      return {
        ...state,
        filteredGames: [...search],
        searchMsj: msj,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
        currentPage: 1,
      };

    case SORT_GAMES:
      let orderedArray2 = sortArrayByNameOrRating(
        [...state.filteredGames],
        action.payload.by,
        action.payload.sort
      );
      console.log("SORT GAMES", action.payload)
      return {
        ...state,
        filteredGames: [...orderedArray2],
        order: action.payload.sort,
      };


    case ALL_FILTERS:
      let { name, value, active } = action.payload;
      let aFiltrar = [...state.videogames];
      let filtros = [...state.filters];
      let from = state.filterFrom;
      if (name === GENRES) {
        aFiltrar = [...state.videogames];
        filtros = active
          ? [...state.filters, value]
          : filtros.filter((x) => x !== value);
      } else if(name === FROM){
        from = value
      }

      filtros.forEach((genero) => {
        aFiltrar = aFiltrar.filter((item) => item.genres.includes(genero));
      });

      if (from !== FROM_ALL) {
        aFiltrar =
          from === FROM_API
            ? aFiltrar?.filter((item) => !item.createdInDb)
            : aFiltrar?.filter((item) => item.createdInDb);
      }

      return {
        ...state,
        filteredGames: [...aFiltrar],
        filterFrom: FROM_ALL,
        filters: [...filtros],
        order: ASC,
      };

    case RESET_FILTERS:
      return {
        ...state,
        filterFrom: FROM_ALL,
        filters: [],
        order: ASC,
        filteredGames: [...state.videogames],
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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
