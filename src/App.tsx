import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ConsolePage from './pages/ConsolePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/console">
          <ConsolePage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
