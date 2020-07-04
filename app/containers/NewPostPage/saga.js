/**
 * Saga to add a new post to the server through API call
 */

import request from 'utils/request';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { addPostSuccess, addPostFail } from 'containers/HomePage/actions';
import { ADD_POST } from 'containers/HomePage/constants';
import { makeSelectInputValue } from './selectors';

export function* addNewPost() {
  const requestURL = `http://localhost:3000/api`;

  try {
    const post = yield select(makeSelectInputValue());
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });
    yield put(addPostSuccess(response.post));
  } catch (err) {
    yield put(addPostFail(err));
  }
}

export default function* addPostSaga() {
  yield takeLatest(ADD_POST, addNewPost);
}
