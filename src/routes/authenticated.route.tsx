import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export const authenticatedRoute = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default authenticatedRoute;
