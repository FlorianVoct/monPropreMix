/*
 *
 * MixHomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MODIFIE_MIX_ENERGIE,
  MODIFIE_CONSO,
} from './constants';

import {
  conso_initiale,
} from 'components/Calculation';

const initialState = fromJS({
  "conso" : "",
  "electricite" : "",
  "chauffage" : "",
  "industrie" : "",
  "transport" : ""
});

function mixHomePageReducer(state = initialState, action) {
  switch (action.type) {
    case MODIFIE_MIX_ENERGIE:
      return state.set(action.secteur, action.array);
    case MODIFIE_CONSO:
      return state.set("conso", action.array);
    default:
      return state;
  }
}

export default mixHomePageReducer;
