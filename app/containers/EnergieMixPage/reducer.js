/*
 *
 * EnergieMixPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MODIFIE_MIX_ENERGIE,
} from './constants';

const initialState = fromJS({
  "electricite" : "",
  "chauffage" : "",
  "industrie" : "",
  "transport" : ""
});

function energieMixPageReducer(state = initialState, action) {
  switch (action.type) {
    case MODIFIE_MIX_ENERGIE:
      return state.set(action.secteur, action.array);
    default:
      return state;
  }
}

export default energieMixPageReducer;
