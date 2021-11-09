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
} from "./actions";

import { ASC, FROM_API, MINOR, ITEMS_PER_PAGE, FROM_ALL } from "../constantes/filters";
import { sortArrayByNameOrRating } from "../functions/functions";

const initialState = {
  videogames: [],
  filteredGames: [],
  genres: [],
  platforms: [],
  filterFrom: FROM_ALL,
  filters: [],
  order: "",
  currentPage: 1,
  totalPages: 0,
  gamesPerPage: [],
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
      return {
        ...state,
        filteredGames: action.payload,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
        currentPage: 1,
      };

     case SORT_GAMES:
      let orderedArray2 = sortArrayByNameOrRating([...state.filteredGames], action.payload.by , action.payload.sort)
      return {
        ...state,
        filteredGames: [...orderedArray2],
        order: action.payload.sort,
      };


    case FILTER_GENRES:
      let allGamesFilteredAdd = [...state.videogames];
      let filtersAdd= action.payload?[...state.filters, action.payload]:[...state.filters];
      
      filtersAdd.forEach((x)=>{
        allGamesFilteredAdd = allGamesFilteredAdd.filter(item => item.genres.includes(x))
      })

      return {
        ...state,
        filteredGames: [...allGamesFilteredAdd],
        filters: [...filtersAdd],
      };

    case REMOVE_FILTER_GENRES:
      let allGamesFilteredRm = [...state.videogames];
      let filtersRm = state.filters.filter(item => item !== action.payload);
 
      filtersRm.forEach((x)=>{
        allGamesFilteredRm = allGamesFilteredRm.filter(item => item.genres.includes(x))
      })

      return {
        ...state,
        filteredGames: [...allGamesFilteredRm],
        filters: [...filtersRm],
      };

    case FILTER_FROM:
      let allGamesFiltered = [...state.filteredGames];
      if(action.payload === FROM_ALL)
        allGamesFiltered = [...state.filteredGames]
      else{
        allGamesFiltered = (action.payload === FROM_API 
          ? allGamesFiltered?.filter(item => !item.createdInDb)
          : allGamesFiltered?.filter(item => item.createdInDb)
          )
      }
      return {
        ...state,
        filterFrom: action.payload,
        filteredGames: [...allGamesFiltered]
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
