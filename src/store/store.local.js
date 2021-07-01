import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../modules/sagas';
import rootReducer from '../modules/reducer';
import logger from './middleware/logger';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const store = createStore(
  rootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);
store.history = history;

export default store;
