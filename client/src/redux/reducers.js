import {
  GET_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  SORT_BY_NAME,
  SORT_BY_RATING,
  FILTER_FROM,
  RESET_FROM,
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
      let allGames2Filtered = [...state.videogames];
      let filters2= action.payload?[...state.filters, action.payload]:[...state.filters];
      console.log(filters2, "<-AF", action.payload)
      filters2.forEach((e)=>{
        allGames2Filtered = allGames2Filtered.filter(item => item.genres.includes(e))
      })

      return {
        ...state,
        filteredGames: [...allGames2Filtered],
        filters: [...filters2],
      };

    case REMOVE_FILTER_GENRES:
      let allGames3Filtered = [...state.videogames];
      let filters3 = state.filters.filter(item => item !== action.payload);
      console.log(filters3, "<-RF", action.payload)
      filters3.forEach((e)=>{
        allGames3Filtered = allGames3Filtered.filter(item => item.genres.includes(e))
      })

      return {
        ...state,
        filteredGames: [...allGames3Filtered],
        filters: [...filters3],
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
      console.log('PL>', action.payload, allGamesFiltered)
      return {
        ...state,
        filterFrom: action.payload,
        filteredGames: [...allGamesFiltered]
      };
    // case RESET_FROM:
    //   return {
    //     ...state,
    //     filteredGames: state.preFilter,
    //   };

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
