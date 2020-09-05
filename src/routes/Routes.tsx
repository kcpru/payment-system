import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import { Home, Pay } from '../views';

const Routes: React.FC = () => {
  let { id } = useParams();
  console.log(id);

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
