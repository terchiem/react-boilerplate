import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { addPost } from 'containers/HomePage/actions';
import NewPostPage, { mapDispatchToProps } from '../index';
import { changePostInput } from '../actions';
import configureStore from '../../../configureStore';

describe('<NewPostPage />', () => {
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
          <NewPostPage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('handleChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleChange).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const value = 'Test';
        result.handleChange({ target: { value } });
        expect(dispatch).toHaveBeenCalledWith(changePostInput(value));
      });
    });

    describe('handleSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleSubmit).toBeDefined();
      });

      it('should dispatch addPost when called', () => {
        const dispatch = jest.fn();
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const evt = { preventDefault };
        result.handleSubmit(evt);
        expect(dispatch).toHaveBeenCalledWith(addPost());
      });
    });
  });
});
