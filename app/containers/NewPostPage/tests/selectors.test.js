import { selectNewPost, makeSelectInputValue } from '../selectors';

describe('selectNewPost', () => {
  it('should select the newPost state', () => {
    const newPostState = {
      inputValue: '',
    };
    const mockedState = {
      newPost: newPostState,
    };
    expect(selectNewPost(mockedState)).toEqual(newPostState);
  });
});

describe('makeSelectInputValue', () => {
  const inputValueSelector = makeSelectInputValue();
  it('should select the input value', () => {
    const inputValue = 'Test';
    const mockedState = {
      newPost: {
        inputValue,
      },
    };
    expect(inputValueSelector(mockedState)).toEqual(inputValue);
  });
});
