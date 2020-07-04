/**
 * Saga to get all posts from the server through API call
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostsSuccess, getPostsFail } from './actions';

import { GET_POSTS } from './constants';

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
