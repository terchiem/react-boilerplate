/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_POSTS } from '../constants';
import { getPostsSuccess, getPostsFail } from '../actions';

import getPostsSaga, { getPostList } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPosts Saga', () => {
  let getPostListGenerator;

  beforeEach(() => {
    getPostListGenerator = getPostList();

    const callDescriptor = getPostListGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getPostsSuccess action if it requests the data successfully', () => {
    const response = {
      posts: ['Post 1', 'Post 2'],
    };
    const putDescriptor = getPostListGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPostsSuccess(response.posts)));
  });

  it('should call the getPostsFail action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPostListGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getPostsFail(response)));
  });
});

describe('getPostsSaga Saga', () => {
  const saga = getPostsSaga();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_POSTS, getPostList));
  });
});
