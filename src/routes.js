import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import App from './components/App';
import Home from './containers/HomeContainer';
import ArtView from './containers/ArtViewContainer';

const store = configureStore();

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="view/:artId" component={ArtView} />
      </Route>
    </Router>
  </Provider>
);
