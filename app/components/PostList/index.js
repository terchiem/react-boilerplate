import React from 'react';
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

function PostList({ loading, posts, error }) {
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
  posts: PropTypes.any,
  error: PropTypes.any,
};

export default PostList;
