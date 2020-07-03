import { CHANGE_POST_INPUT } from './constants';

export function changePostInput(value) {
  return {
    type: CHANGE_POST_INPUT,
    value,
  };
}
