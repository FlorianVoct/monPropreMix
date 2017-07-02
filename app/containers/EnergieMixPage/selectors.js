import { createSelector } from 'reselect';

/**
 * Direct selector to the energieMixPage state domain
 */
const selectEnergieMixPageDomain = () => (state) => state.get('energieMixPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EnergieMixPage
 */

const makeSelectEnergieMix = () => createSelector(
  selectEnergieMixPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEnergieMix;
export {
  makeSelectEnergieMix,
};
