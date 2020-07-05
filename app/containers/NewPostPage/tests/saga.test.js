/**
 * Tests for NewPostPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ADD_POST } from 'containers/HomePage/constants';
import { addPostSuccess, addPostFail } from 'containers/HomePage/actions';
import { resetPostInput } from '../actions';
import addPostSaga, { addNewPost } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('addNewPost Saga', () => {
  let addPostGenerator;

  beforeEach(() => {
    addPostGenerator = addNewPost();

    const selectDescriptor = addPostGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addPostGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the addPostSuccess action if it requests the data successfully', () => {
    const response = {
      post: 'Test',
    };
    const putDescriptor = addPostGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(addPostSuccess(response.post)));
    expect(addPostGenerator.next().value).toEqual(put(resetPostInput()));
    expect(addPostGenerator.next().value).toEqual(put(push('/')));
  });

  it('should call the getPostsFail action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addPostGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(addPostFail(response)));
  });
});

describe('addPostSaga Saga', () => {
  const saga = addPostSaga();

  it('should start task to watch for ADD_POST action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(ADD_POST, addNewPost));
  });
});
