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

const makeSelectEnergieMixPage = () => createSelector(
  selectEnergieMixPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEnergieMixPage;
export {
  selectEnergieMixPageDomain,
};
