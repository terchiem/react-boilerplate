/**
 * NewPostPage selectors
 */

import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

export const selectNewPost = state => state.newPost || INITIAL_STATE;

export const makeSelectInputValue = () =>
  createSelector(
    selectNewPost,
    state => state.inputValue,
  );
