import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';

const useRoutes = (): ReactElement => (
  <Switch>
    <Route path="/" exact>
      <LoginPage />
    </Route>
    <Route path="/register">
      <RegistrationPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default useRoutes;
