import { CHANGE_POST_INPUT, RESET_POST_INPUT } from '../constants';

import { changePostInput, resetPostInput } from '../actions';

describe('NewPostPage Actions', () => {
  describe('changePostInput', () => {
    it('should return the correct type and passed value', () => {
      const value = 'test';
      const expectedResult = {
        type: CHANGE_POST_INPUT,
        value,
      };

      expect(changePostInput(value)).toEqual(expectedResult);
    });
  });

  describe('resetPostInput', () => {
    it('should return the correct type and the passed post list', () => {
      const expectedResult = {
        type: RESET_POST_INPUT,
      };

      expect(resetPostInput()).toEqual(expectedResult);
    });
  });
});
