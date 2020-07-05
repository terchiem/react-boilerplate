import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from '../constants';

import {
  getPosts,
  getPostsSuccess,
  getPostsFail,
  addPost,
  addPostSuccess,
  addPostFail,
} from '../actions';

describe('HomePage Actions', () => {
  describe('getPosts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_POSTS,
      };

      expect(getPosts()).toEqual(expectedResult);
    });
  });

  describe('getPostsSuccess', () => {
    it('should return the correct type and the passed post list', () => {
      const posts = ['Test'];
      const expectedResult = {
        type: GET_POSTS_SUCCESS,
        posts,
      };

      expect(getPostsSuccess(posts)).toEqual(expectedResult);
    });
  });

  describe('getPostsFail', () => {
    it('should return the correct type and the passed error', () => {
      const error = { message: 'Test' };
      const expectedResult = {
        type: GET_POSTS_FAIL,
        error,
      };

      expect(getPostsFail(error)).toEqual(expectedResult);
    });
  });

  describe('addPost', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: ADD_POST,
      };

      expect(addPost()).toEqual(expectedResult);
    });
  });

  describe('addPostSuccess', () => {
    it('should return the correct type and the passed post', () => {
      const post = 'Test';
      const expectedResult = {
        type: ADD_POST_SUCCESS,
        post,
      };

      expect(addPostSuccess(post)).toEqual(expectedResult);
    });
  });

  describe('addPostFail', () => {
    it('should return the correct type and the passed error', () => {
      const error = { message: 'Test' };
      const expectedResult = {
        type: ADD_POST_FAIL,
        error,
      };

      expect(addPostFail(error)).toEqual(expectedResult);
    });
  });
});
