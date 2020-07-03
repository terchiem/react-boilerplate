import produce from 'immer';
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  ADD_POST_TO_LIST,
} from './constants';

export const INITIAL_STATE = {
  loading: false,
  posts: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
function postListReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS:
        draft.loading = true;
        draft.posts = false;
        break;

      case GET_POSTS_SUCCESS:
        draft.loading = false;
        draft.posts = action.posts;
        break;

      case GET_POSTS_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;

      case ADD_POST_TO_LIST:
        draft.posts.unshift(action.post);
        break;

      default:
        break;
    }
    return draft;
  });
}

export default postListReducer;
