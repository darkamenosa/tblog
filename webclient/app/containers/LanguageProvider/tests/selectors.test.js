import { fromJS } from 'immutable';

import {
  selectLanguage,
} from '../selectors';

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: {
        language: globalState,
      },
    });
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });
});
