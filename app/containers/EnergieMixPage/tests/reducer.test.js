
import { fromJS } from 'immutable';
import energieMixPageReducer from '../reducer';

describe('energieMixPageReducer', () => {
  it('returns the initial state', () => {
    expect(energieMixPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
