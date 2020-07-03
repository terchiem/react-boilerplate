import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingSpinner from 'components/LoadingSpinner';

/**
 *
 * PostList
 *
 * Presentational component to display a list of posts
 *
 */

function PostList({ loading, posts, error, dispatchGetPosts }) {
  /** Dispatch GET_POSTS on component mount */
  useEffect(() => {
    dispatchGetPosts();
  }, []);

  if (loading) {
    return <List component={LoadingSpinner} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (posts !== false) {
    return <List items={posts} component={ListItem} />;
  }

  return null;
}

PostList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  dispatchGetPosts: PropTypes.func,
};

export default PostList;
