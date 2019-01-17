import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Page from '../page';
import NoMatch from '../Nomatch';
import Dashboard from '../Dashboard/Dashboard';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/page' component={Page} />
    <Route path='/Dashboard' component={Dashboard} />
    <Route component={NoMatch} />
  </Switch>
);
