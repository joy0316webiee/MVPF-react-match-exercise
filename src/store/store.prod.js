import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';

import rootSaga from '../modules/sagas';
import rootReducer from '../modules/reducer';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const store = createStore(
  rootReducer(history),
  initialState,
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);
store.history = history;

export default store;
