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
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/sendsay-api-console/console">
              <ConsolePage />
            </Route>
            <Route path="/sendsay-api-console">
              <LoginPage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
