
import { fromJS } from 'immutable';
import mixHomePageReducer from '../reducer';

describe('mixHomePageReducer', () => {
  it('returns the initial state', () => {
    expect(mixHomePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
