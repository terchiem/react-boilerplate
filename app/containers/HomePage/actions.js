import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST_TO_LIST,
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

export function addPostToList(post) {
  return {
    type: ADD_POST_TO_LIST,
    post,
  };
}
