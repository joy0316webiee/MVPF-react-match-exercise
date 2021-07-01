import { createRequestTypes } from '../common';

export const SEARCH_MOVIES = createRequestTypes('SEARCH_MOVIES');
export const DISCOVER_MOVIES = createRequestTypes('DISCOVER_MOVIES');
export const GET_MOVIE_DETAILS = createRequestTypes('GET_MOVIE_DETAILS');
export const RETRIEVE_FAVORITES = createRequestTypes('RETRIEVE_FAVORITES');
export const FAVORITE_MOVIE = createRequestTypes('FAVORITE_MOVIE');
export const UNFAVORITE_MOVIE = createRequestTypes('UNFAVORITE_MOVIE');

export const movieActions = {
  searchMovies: {
    request: data => ({ type: SEARCH_MOVIES.REQUEST, payload: data }),
    success: response => ({ type: SEARCH_MOVIES.SUCCESS, payload: response }),
    failure: error => ({ type: SEARCH_MOVIES.FAILURE, payload: error })
  },
  discoverMovies: {
    request: data => ({ type: DISCOVER_MOVIES.REQUEST, payload: data }),
    success: response => ({ type: DISCOVER_MOVIES.SUCCESS, payload: response }),
    failure: error => ({ type: DISCOVER_MOVIES.FAILURE, payload: error })
  },
  getMovieDetails: {
    request: data => ({ type: GET_MOVIE_DETAILS.REQUEST, payload: data }),
    success: response => ({ type: GET_MOVIE_DETAILS.SUCCESS, payload: response }),
    failure: error => ({ type: GET_MOVIE_DETAILS.FAILURE, payload: error })
  },
  retrieveFavorites: {
    request: () => ({ type: RETRIEVE_FAVORITES.REQUEST }),
    success: response => ({ type: RETRIEVE_FAVORITES.SUCCESS, payload: response }),
    failure: error => ({ type: RETRIEVE_FAVORITES.FAILURE, payload: error })
  },
  favoriteMovie: {
    request: data => ({ type: FAVORITE_MOVIE.REQUEST, payload: data }),
    success: response => ({ type: FAVORITE_MOVIE.SUCCESS, payload: response }),
    failure: error => ({ type: FAVORITE_MOVIE.FAILURE, payload: error })
  },
  unfavoriteMovie: {
    request: data => ({ type: UNFAVORITE_MOVIE.REQUEST, payload: data }),
    success: response => ({ type: UNFAVORITE_MOVIE.SUCCESS, payload: response }),
    failure: error => ({ type: UNFAVORITE_MOVIE.FAILURE, payload: error })
  },
};
