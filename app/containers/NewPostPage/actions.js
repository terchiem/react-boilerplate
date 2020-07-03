import {
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  CHANGE_POST_INPUT,
} from './constants';

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostSuccess(post) {
  return {
    type: ADD_POST_SUCCESS,
    post,
  };
}

export function addPostFail(error) {
  return {
    type: ADD_POST_FAIL,
    error,
  };
}

export function changePostInput(value) {
  return {
    type: CHANGE_POST_INPUT,
    value,
  };
}
