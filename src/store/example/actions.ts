import { Dispatch } from 'redux'
import { ExampleActionTypes } from './types'

export const incrementCount = () => (dispatch: Dispatch) => {
  dispatch({ type: ExampleActionTypes.INCREMENT_COUNT })
}
