import { Reducer } from 'redux'
import { ExampleState, ExampleActionTypes } from './types'

export const initialState: ExampleState = {
  count: 0,
}

const reducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case ExampleActionTypes.INCREMENT_COUNT: {
      return { ...state, count: state.count++ }
    }
    default: {
      return state
    }
  }
}

export { reducer as exampleReducer }
