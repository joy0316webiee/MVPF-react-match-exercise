import { defaultVisualState, setVisualState } from '../common';
import {
  SEARCH_MOVIES,
  DISCOVER_MOVIES,
  GET_MOVIE_DETAILS,
  RETRIEVE_FAVORITES,
  FAVORITE_MOVIE,
  UNFAVORITE_MOVIE
} from './actions';

const initialState = {
  [SEARCH_MOVIES]: defaultVisualState,
  [DISCOVER_MOVIES]: defaultVisualState,
  [GET_MOVIE_DETAILS]: defaultVisualState,
  [RETRIEVE_FAVORITES]: defaultVisualState,
  [FAVORITE_MOVIE]: defaultVisualState,
  [UNFAVORITE_MOVIE]: defaultVisualState,
  movies: [],
  favorites: [],
  movieDetails: {},
  totalResults: 0
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIES.REQUEST:
      return {
        ...state,
        ...setVisualState(state, SEARCH_MOVIES, true)
      };
    case SEARCH_MOVIES.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, SEARCH_MOVIES, false),
        movies: payload.results,
        totalResults: payload.total_results
      };
    case SEARCH_MOVIES.FAILURE:
      return {
        ...state,
        ...setVisualState(state, SEARCH_MOVIES, false, payload),
        movies: [],
        totalResults: 0
      };
    case DISCOVER_MOVIES.REQUEST:
      return {
        ...state,
        ...setVisualState(state, DISCOVER_MOVIES, true)
      };
    case DISCOVER_MOVIES.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, DISCOVER_MOVIES, false),
        movies: payload.results,
        totalResults: payload.total_results
      };
    case DISCOVER_MOVIES.FAILURE:
      return {
        ...state,
        ...setVisualState(state, DISCOVER_MOVIES, false, payload),
        movies: [],
        totalResults: 0
      };
    case GET_MOVIE_DETAILS.REQUEST:
      return {
        ...state,
        ...setVisualState(state, GET_MOVIE_DETAILS, true)
      };
    case GET_MOVIE_DETAILS.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, GET_MOVIE_DETAILS, false),
        movieDetails: payload,
      };
    case GET_MOVIE_DETAILS.FAILURE:
      return {
        ...state,
        ...setVisualState(state, GET_MOVIE_DETAILS, false, payload),
        movieDetails: {},
      };
    case RETRIEVE_FAVORITES.REQUEST:
      return {
        ...state,
        ...setVisualState(state, RETRIEVE_FAVORITES, true)
      };
    case RETRIEVE_FAVORITES.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, RETRIEVE_FAVORITES, false),
        favorites: payload || [],
      };
    case RETRIEVE_FAVORITES.FAILURE:
      return {
        ...state,
        ...setVisualState(state, RETRIEVE_FAVORITES, false, payload),
        favorites: [],
      };
    case FAVORITE_MOVIE.REQUEST:
      return {
        ...state,
        ...setVisualState(state, FAVORITE_MOVIE, true)
      };
    case FAVORITE_MOVIE.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, FAVORITE_MOVIE, false),
        favorites: payload,
      };
    case FAVORITE_MOVIE.FAILURE:
      return {
        ...state,
        ...setVisualState(state, FAVORITE_MOVIE, false, payload)
      };
    case UNFAVORITE_MOVIE.REQUEST:
      return {
        ...state,
        ...setVisualState(state, UNFAVORITE_MOVIE, true)
      };
    case UNFAVORITE_MOVIE.SUCCESS:
      return {
        ...state,
        ...setVisualState(state, UNFAVORITE_MOVIE, false),
        favorites: payload,
      };
    case UNFAVORITE_MOVIE.FAILURE:
      return {
        ...state,
        ...setVisualState(state, UNFAVORITE_MOVIE, false, payload)
      };
    default:
      return state;
  }
};

export default movieReducer;
