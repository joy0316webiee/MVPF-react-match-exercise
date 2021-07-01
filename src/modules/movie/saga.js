import { call, take, put, select } from 'redux-saga/effects';

// service
import { movieService } from '../../services';

// actions
import {
  movieActions,
  SEARCH_MOVIES,
  DISCOVER_MOVIES,
  GET_MOVIE_DETAILS,
  RETRIEVE_FAVORITES,
  FAVORITE_MOVIE,
  UNFAVORITE_MOVIE
} from './actions';

export function* handleSearchMovies() {
  while (true) {
    try {
      const { payload } = yield take(SEARCH_MOVIES.REQUEST);
      const data = yield call(movieService.searchMovies, payload);
      yield put(movieActions.searchMovies.success(data));
    } catch (error) {
      yield put(movieActions.searchMovies.failure(error));
    }
  }
}

export function* handleDiscoverMovies() {
  while (true) {
    try {
      const { payload } = yield take(DISCOVER_MOVIES.REQUEST);
      const data = yield call(movieService.discoverMovies, payload);
      yield put(movieActions.discoverMovies.success(data));
    } catch (error) {
      yield put(movieActions.discoverMovies.failure(error));
    }
  }
}

export function* handleGetMovieDetails() {
  while (true) {
    try {
      const { payload } = yield take(GET_MOVIE_DETAILS.REQUEST);
      const data = yield call(movieService.getMovieDetails, payload);
      yield put(movieActions.getMovieDetails.success(data));
    } catch (error) {
      yield put(movieActions.getMovieDetails.failure(error));
    }
  }
}

export function* handleRetrieveFavorites() {
  while (true) {
    try {
      yield take(RETRIEVE_FAVORITES.REQUEST);

      // retrieve favorites from local storage
      const favorites = JSON.parse(window.localStorage.getItem('movie_favorites'));
      yield put(movieActions.retrieveFavorites.success(favorites));
    } catch (error) {
      yield put(movieActions.retrieveFavorites.failure(error));
    }
  }
}

export function* handleFavoriteMovie() {
  while (true) {
    try {
      const { payload: newFavorite } = yield take(FAVORITE_MOVIE.REQUEST);
      const { favorites } = yield select(state => state.movie);

      // see if already exists
      const idx = favorites.findIndex(({ id }) => parseInt(id) === newFavorite.id);
      if (idx < 0) {
        const newFavorites = favorites.concat(newFavorite);
        window.localStorage.setItem('movie_favorites', JSON.stringify(newFavorites));
        yield put(movieActions.favoriteMovie.success(newFavorites));
      } else {
        yield put(movieActions.favoriteMovie.failure([{ msg: 'already exists!' }]));
      }
    } catch (error) {
      yield put(movieActions.favoriteMovie.failure(error));
    }
  }
}

export function* handleUnFavoriteMovie() {
  while (true) {
    try {
      const { payload: removeId } = yield take(UNFAVORITE_MOVIE.REQUEST);
      const { favorites } = yield select(state => state.movie);

      // see if already exists
      const idx = favorites.findIndex(({ id }) => parseInt(id) === removeId);
      if (idx < 0) {
        yield put(movieActions.unfavoriteMovie.failure([{ msg: 'not exists!' }]));
      } else {
        const newFavorites = favorites.filter(({ id }) => parseInt(id) !== removeId);
        window.localStorage.setItem('movie_favorites', JSON.stringify(newFavorites));
        yield put(movieActions.unfavoriteMovie.success(newFavorites));
      }
    } catch (error) {
      yield put(movieActions.unfavoriteMovie.failure(error));
    }
  }
}
