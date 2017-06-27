/*
 *
 * MixHomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  MODIFIE_NEEDS,
} from './constants';

const initialState = fromJS({
  "needs" : 100
});

function mixHomePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MODIFIE_NEEDS:
      return state.set("needs", action.value);
    default:
      return state;
  }
}

export default mixHomePageReducer;
