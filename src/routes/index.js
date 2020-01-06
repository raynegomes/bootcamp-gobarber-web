import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/Signin';
import SinUp from '../pages/Signup';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/register" exact component={SinUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
