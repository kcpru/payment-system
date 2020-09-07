import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Pay } from '../views';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/pay/:id">
        <Pay />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
