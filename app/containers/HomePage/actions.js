import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from './constants';

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    posts,
  };
}

export function getPostsFail(error) {
  return {
    type: GET_POSTS_FAIL,
    error,
  };
}

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
