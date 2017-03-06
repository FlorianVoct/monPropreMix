import { createSelector } from 'reselect';

/**
 * Direct selector to the mixHomePage state domain
 */
const selectMixHomePageDomain = () => (state) => state.get('mixHomePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MixHomePage
 */

const makeSelectMixHomePage = () => createSelector(
  selectMixHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMixHomePage;
export {
  selectMixHomePageDomain,
};
