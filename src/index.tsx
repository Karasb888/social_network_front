import 'normalize.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { App } from './App'
import configureStore from './configureStore'

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('app'),
)
