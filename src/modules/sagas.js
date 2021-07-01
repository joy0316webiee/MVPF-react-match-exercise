import { fork, all } from 'redux-saga/effects';

import {
  handleSearchMovies,
  handleDiscoverMovies,
  handleGetMovieDetails,
  handleRetrieveFavorites,
  handleFavoriteMovie,
  handleUnFavoriteMovie
} from './movie/saga';

export default function* rootSaga() {
  yield all([
    fork(handleSearchMovies),
    fork(handleDiscoverMovies),
    fork(handleGetMovieDetails),
    fork(handleRetrieveFavorites),
    fork(handleFavoriteMovie),
    fork(handleUnFavoriteMovie)
  ]);
}
