import React from 'react';
import BrowseContainer from './browse/browse_container';
import {Route, Switch} from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FeaturedComponent from './featured/featured_container';
import NavSidebar from './featured/nav_sidebar';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
const App = () => (
  <div>
    <Switch>
      <Route path="/collection" component={NavSidebar}/>
      <Route path="/search" component={NavSidebar}/>
    </Switch>
    <AuthRoute exact path="/" component={BrowseContainer}/>
    <ProtectedRoute path="/browse/featured" component={FeaturedComponent}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
