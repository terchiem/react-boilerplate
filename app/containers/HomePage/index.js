import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import PostList from 'components/PostList';
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
 * Redux state:
 *  home: {
 *    loading -> bool indicating loading state,
 *    error -> error messages,
 *    posts -> an array of posts from the server
 *  }
 *
 */

function HomePage({ loading, posts, error, dispatchGetPosts }) {
  // Dispatch GET_POSTS on component mount
  useEffect(() => {
    // Fetch posts only if not present in store
    if (posts === false) {
      dispatchGetPosts();
    }
  }, []);

  return (
    <section>
      <h2>All Posts</h2>
      <PostList loading={loading} posts={posts} error={error} />
    </section>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  dispatchGetPosts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  posts: makeSelectPosts(),
  error: makeSelectError(),
});

export const mapDispatchToProps = dispatch => ({
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
