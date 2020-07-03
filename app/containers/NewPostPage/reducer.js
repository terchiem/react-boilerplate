import produce from 'immer';
import {
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  CHANGE_POST_INPUT,
} from './constants';

export const INITIAL_STATE = {
  inputValue: '',
};

function newPostReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST_SUCCESS:
        draft.posts.unshift(action.post);
        break;

      case ADD_POST_FAIL:
        draft.error = action.error;
        break;

      case CHANGE_POST_INPUT:
        draft.inputValue = action.value;
        break;

      default:
        break;
    }
    return draft;
  });
}

export default newPostReducer;
