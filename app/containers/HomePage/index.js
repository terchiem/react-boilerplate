import React from 'react';

import PostList from 'components/PostList';

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

function HomePage() {
  return (
    <section>
      <h2>All Posts</h2>
      <PostList />
    </section>
  );
}

// TODO: map state to props

export default HomePage;
