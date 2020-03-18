import * as React from 'react'
import { History } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { ApplicationState } from './store'
import { useRoutes } from './routes'

interface Props {
    readonly store: Store<ApplicationState>;
    readonly history: History;
}

export const App: React.FC<Props> = ({ store, history }) => {
  const routes = useRoutes()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  )
}
