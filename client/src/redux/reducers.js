import {
  GET_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  SORT,
  CHANGE_PAGE,
  GET_CURRENT_PAGE,
} from "./actions";

import { ASC } from "../constantes/filters";
import { ITEMS_PER_PAGE } from "../constantes/paginations";

const initialState = {
  videogames: [],
  filteredGames: [],
  currentPage: 1,
  totalPages: 0,
  gamesPerPage: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredGames: action.payload,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
      };

    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        filteredGames: action.payload,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
      };

    case SORT:
      let orderedGames = [...state.filteredGames];
      orderedGames = orderedGames.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase())
          return action.payload === ASC ? 1 : -1;
        if (a.name.toLowerCase() < b.name.toLowerCase())
          return action.payload === ASC ? -1 : 1;
        return 0;
      });
      return {
        ...state,
        filteredGames: orderedGames,
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
      console.log("page "+state.currentPage,'items=', items)
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
