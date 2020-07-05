import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { getPosts } from '../actions';

import HomePage, { mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  // TODO: look into why mocked function is not being called
  xit('should fetch posts on mount if not present', () => {
    const dispatchSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage posts={false} dispatchGetPosts={dispatchSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should not fetch posts on mount if there are posts present', () => {
    const dispatchSpy = jest.fn();
    const posts = ['test1', 'test2'];
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage posts={posts} dispatchGetPosts={dispatchSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('getPosts', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.dispatchGetPosts).toBeDefined();
      });

      it('should dispatch getPosts when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.dispatchGetPosts();
        expect(dispatch).toHaveBeenCalledWith(getPosts());
      });
    });
  });
});
