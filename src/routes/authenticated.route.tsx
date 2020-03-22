import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import Layout from '../components/Layout';
import ChatsPage from '../pages/ChatsPage';

export const authenticatedRoute = (): ReactElement => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/chats" exact>
          <ChatsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default authenticatedRoute;
