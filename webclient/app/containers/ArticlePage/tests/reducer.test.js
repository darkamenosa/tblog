
import { fromJS } from 'immutable';
import articlePageReducer from '../reducer';

describe('articlePageReducer', () => {
  it('returns the initial state', () => {
    expect(articlePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
