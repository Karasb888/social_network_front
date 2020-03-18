import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { exampleReducer, ExampleState } from './example'

export interface ApplicationState {
    example: ExampleState;
    router: RouterState;
}

export const createRootReducer = (history: History) => combineReducers({
  example: exampleReducer,
  router: connectRouter(history),
})
