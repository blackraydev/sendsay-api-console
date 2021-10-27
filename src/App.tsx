import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import createStore from './store';
import LoginPage from './pages/LoginPage';
import ConsolePage from './pages/ConsolePage';

const { store, persistor } = createStore();

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/console`}>
              <ConsolePage />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <LoginPage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
