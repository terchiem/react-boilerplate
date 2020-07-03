import produce from 'immer';
import { CHANGE_POST_INPUT, RESET_POST_INPUT } from './constants';

export const INITIAL_STATE = {
  inputValue: '',
};

function newPostReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CHANGE_POST_INPUT:
        draft.inputValue = action.value;
        break;

      case RESET_POST_INPUT:
        draft.inputValue = '';
        break;

      default:
        break;
    }
    return draft;
  });
}

export default newPostReducer;
