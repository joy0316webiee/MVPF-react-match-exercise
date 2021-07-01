import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// layout
import { BaseLayout } from './layouts';

// pages
import AllMovies from './pages/AllMovies';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';

// actions
import { movieActions } from './modules/movie/actions';

// store
import store from './store';

// styles
import './styles/index.less';

// get history
const { history } = store;

// retrieve favorites
store.dispatch(movieActions.retrieveFavorites.request());

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <BaseLayout>
            <Route
              exact
              path="/"
              component={AllMovies}
            />
            <Route
              exact
              path="/favorites"
              component={Favorites}
            />
            <Route
              exact
              path="/view/:id"
              component={MovieDetails}
            />
          </BaseLayout>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
