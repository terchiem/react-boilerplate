import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from './constants';

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
