import { Dispatch } from 'redux';
import { ExampleActionTypes } from './types';

export const incrementCount = () => (dispatch: Dispatch): void => {
  dispatch({ type: ExampleActionTypes.INCREMENT_COUNT });
};

export default incrementCount;
