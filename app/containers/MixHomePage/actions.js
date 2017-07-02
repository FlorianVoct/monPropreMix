/*
 *
 * MixHomePage actions
 *
 */

import {
  MODIFIE_MIX_ENERGIE,
  MODIFIE_CONSO,
} from './constants';


export function modifieMixEnergieAction(secteur, array) {
  return {
    type: MODIFIE_MIX_ENERGIE,
    secteur,
    array
  };
}

export function modifieConso(array) {
  console.log(array);
  return {
    type: MODIFIE_CONSO,
    array
  };
}
