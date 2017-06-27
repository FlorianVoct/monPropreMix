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


const makeSelectNeeds = () => createSelector(
  selectMixHomePageDomain(),
  (substate) => substate.get('needs')
);

export default makeSelectMixHomePage;
export {
  makeSelectNeeds,
  selectMixHomePageDomain,
};
