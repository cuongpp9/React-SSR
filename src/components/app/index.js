import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Page from '../page';
import NoMatch from '../nomatch';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/page' component={Page} />
    <Route component={NoMatch} />
  </Switch>
);