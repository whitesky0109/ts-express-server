import React, { PureComponent, ReactNode } from 'react';
import { Route, Router } from 'react-router';
import { createHashHistory } from 'history';

// Components
import Login from './Login';

const history = createHashHistory();

export default class PageRouter extends PureComponent {
  render(): ReactNode {
    return <Router history={history}>
      <Route path="/" component={Login} />
    </Router>;
  }
}
