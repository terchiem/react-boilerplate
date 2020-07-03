import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import PostList from 'containers/PostList';
import { getPosts } from './actions';
import {
  makeSelectLoading,
  makeSelectPosts,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

function HomePage({ loading, posts, error, dispatchGetPosts }) {
  const postListProps = {
    loading,
    posts,
    error,
    dispatchGetPosts,
  };

  return (
    <section>
      <h2>All Posts</h2>
      <PostList {...postListProps} />
    </section>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  dispatchGetPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  posts: makeSelectPosts(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPosts: () => dispatch(getPosts()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(HomePage);
