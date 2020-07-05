import produce from 'immer';

import homeReducer from '../reducer';
import {
  getPosts,
  getPostsSuccess,
  getPostsFail,
  addPostSuccess,
  addPostFail,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      posts: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getPosts action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.posts = false;
      draft.error = false;
    });

    expect(homeReducer(state, getPosts())).toEqual(expectedResult);
  });

  it('should handle the getPostsSuccess action correctly', () => {
    const posts = ['Test'];
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.posts = posts;
    });

    expect(homeReducer(state, getPostsSuccess(posts))).toEqual(expectedResult);
  });

  it('should handle the getPostsFail action correctly', () => {
    const error = new Error('Whoops!');
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = error;
    });

    expect(homeReducer(state, getPostsFail(error))).toEqual(expectedResult);
  });

  it('should handle the addPostSuccess action correctly', () => {
    state.posts = ['Test'];
    const post = 'New Post';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.posts = [post, 'Test'];
    });

    expect(homeReducer(state, addPostSuccess(post))).toEqual(expectedResult);
  });

  it('should handle the addPostFail action correctly', () => {
    const error = new Error('Whoops!');
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = error;
    });

    expect(homeReducer(state, addPostFail(error))).toEqual(expectedResult);
  });
});
