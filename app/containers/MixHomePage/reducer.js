/*
 *
 * MixHomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  MODIFIE_CONSO,
} from './constants';

import {
  conso_initiale,
} from 'components/Calculation';

const initialState = fromJS({
  "conso" : ""
});

function mixHomePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MODIFIE_CONSO:
      return state.set("conso", action.array);
    default:
      return state;
  }
}

export default mixHomePageReducer;
