import produce from 'immer';

import newPostReducer from '../reducer';
import { changePostInput, resetPostInput } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('newPostReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      inputValue: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(newPostReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changePostInput action correctly', () => {
    const value = 'Test';
    const expectedResult = produce(state, draft => {
      draft.inputValue = value;
    });

    expect(newPostReducer(state, changePostInput(value))).toEqual(
      expectedResult,
    );
  });

  it('should handle the resetPostInput action correctly', () => {
    state.inputValue = 'Test';
    const expectedResult = produce(state, draft => {
      draft.inputValue = '';
    });

    expect(newPostReducer(state, resetPostInput())).toEqual(expectedResult);
  });
});
