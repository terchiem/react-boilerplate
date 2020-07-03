/**
 * HomePage selectors
 */

import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

export const selectHome = state => state.home || INITIAL_STATE;

export const makeSelectPosts = () =>
  createSelector(
    selectHome,
    state => state.posts,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectHome,
    state => state.loading,
  );

export const makeSelectError = () =>
  createSelector(
    selectHome,
    state => state.error,
  );
