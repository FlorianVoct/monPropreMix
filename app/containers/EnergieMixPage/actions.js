/*
 *
 * EnergieMixPage actions
 *
 */

 import {
   MODIFIE_MIX_ENERGIE,
 } from './constants';


 export function modifieMixEnergieAction(secteur, array) {
   return {
     type: MODIFIE_MIX_ENERGIE,
     secteur,
     array
   };
 }
