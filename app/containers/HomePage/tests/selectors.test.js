import {
  selectHome,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      loading: false,
      error: false,
      posts: [],
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectPosts', () => {
  const postsSelector = makeSelectPosts();
  it('should select the username', () => {
    const posts = ['Test'];
    const mockedState = {
      home: {
        posts,
      },
    };
    expect(postsSelector(mockedState)).toEqual(posts);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the username', () => {
    const loading = true;
    const mockedState = {
      home: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the username', () => {
    const error = false;
    const mockedState = {
      home: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
