import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingSpinner from 'components/LoadingSpinner';
import ListItem from 'components/ListItem';

/**
 *
 * PostList
 *
 * Presentational component to display a list of posts
 *
 */

function PostList({ loading, posts }) {
  if (loading) {
    return <List component={LoadingSpinner} />;
  }

  // TODO: add error handling

  if (posts !== false) {
    return <List items={posts} component={ListItem} />;
  }

  return null;
}

PostList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.any,
};

export default PostList;
