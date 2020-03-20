import { ReactElement } from 'react';
import { authenticatedRoute } from './authenticated.route';
import { notAuthenticatedRoute } from './notAuthenticated.route';

const useRoutes = (): ReactElement => {
  const isAuthenticated = true;

  return isAuthenticated ? authenticatedRoute() : notAuthenticatedRoute();
};

export default useRoutes;
