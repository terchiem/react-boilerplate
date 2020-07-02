import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NewPostPage from 'containers/NewPostPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Wrapper from './Wrapper';

import GlobalStyle from '../../global-styles';

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

function App() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewPostPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
