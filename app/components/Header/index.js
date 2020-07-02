import React from 'react';

import H1 from './H1';
import HeaderLink from './HeaderLink';
import Wrapper from './Wrapper';

/**
 *
 * Header
 *
 * Component that displays the app header and a navigation bar
 *
 */

function Header() {
  return (
    <Wrapper>
      <H1>Post List</H1>
      <div>
        {/* TODO: add active location */}
        <HeaderLink to="/">All Posts</HeaderLink>
        <HeaderLink to="/new">New Post</HeaderLink>
      </div>
    </Wrapper>
  );
}

export default Header;
