import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs & wrappers
import ProtectedRoute from './HOCs/ProtectedRoute';
import GuestWrapper from './HOCs/GuestWrapper';

// pages
import App from './pages/App';
import NotFound from './pages/Errors/404';
import Registration from './pages/Auth/Registration';
import Authentication from './pages/Auth/Authentication';
import Verify from './pages/Auth/Verify';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <GuestWrapper path="/register" exact component={Registration} />
      <GuestWrapper path="/authenticate" exact component={Authentication} />
      <GuestWrapper path="/verify" exact component={Verify} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
