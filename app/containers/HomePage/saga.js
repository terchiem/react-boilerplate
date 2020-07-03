/**
 * Gets a list of posts from the server
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostsSuccess, getPostsFail } from './actions';

import { GET_POSTS } from './constants';

/**
 * Post API request/response handler
 */

export function* getPostList() {
  const requestURL = `http://localhost:3000/api`;

  try {
    const response = yield call(request, requestURL);
    yield put(getPostsSuccess(response.posts));
  } catch (err) {
    yield put(getPostsFail(err));
  }
}

export default function* getPostsSaga() {
  yield takeLatest(GET_POSTS, getPostList);
}
