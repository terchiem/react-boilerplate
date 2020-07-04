import React from 'react';

import Wrapper from './Wrapper';
import Spinner from './Spinner';

/*
 * LoadingSpinner
 *
 * Loading indicator component to be used when data is being loaded or
 * fetched from an API
 *
 */

function LoadingSpinner() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}

export default LoadingSpinner;
