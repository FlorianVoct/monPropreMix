/*
 *
 * MixHomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  MODIFIE_NEEDS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function modifieNeeds(value) {
  return {
    type: MODIFIE_NEEDS,
    value
  };
}
