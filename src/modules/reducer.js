import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reduceReducers from 'reduce-reducers';

import movieReducer from './movie/reducer';

const rootReducer = history => reduceReducers(combineReducers({
  movie: movieReducer,
  router: connectRouter(history)
}));

export default rootReducer;
