import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

export const notAuthenticatedRoute = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegistrationPage />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};

export default notAuthenticatedRoute;
