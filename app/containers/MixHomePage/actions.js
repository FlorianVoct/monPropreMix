/*
 *
 * MixHomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  MODIFIE_CONSO,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function modifieConso(array) {
  return {
    type: MODIFIE_CONSO,
    array
  };
}
