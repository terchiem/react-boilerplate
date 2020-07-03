import React from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { addPost } from 'containers/HomePage/actions';
import { makeSelectInputValue } from './selectors';
import { changePostInput, resetPostInput } from './actions';
import reducer from './reducer';
import saga from './saga';

import Button from './Button';

/*
 * NewPostPage
 *
 * Displays a form for a user to create a new post, at the '/new' route
 *
 * Redux state:
 *  newPost: {
 *    inputValue -> current value of the text input field for newPost
 *  }
 *
 */

function NewPostPage({ inputValue, handleChange, handleSubmit }) {
  return (
    <section>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="newPost"
          value={inputValue}
          onChange={handleChange}
          aria-label="newPost"
          placeholder="Say something..."
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

NewPostPage.propTypes = {
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  inputValue: makeSelectInputValue(),
});

const mapDispatchToProps = dispatch => ({
  handleChange: evt => dispatch(changePostInput(evt.target.value)),
  handleSubmit: evt => {
    evt.preventDefault();
    dispatch(addPost(evt.target.value));
    dispatch(resetPostInput());
    history.push('/');
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'newPost', reducer });
const withSaga = injectSaga({ key: 'newPost', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(NewPostPage);
