import React from 'react';
import BrowseContainer from './browse/browse_container';
import {Route, Switch} from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NewReleaseContainer from './new_releases/new_release_container';
import FeaturedComponent from './featured/featured_container';
import NavSidebar from './featured/nav_sidebar';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
const App = () => (
  <div>
    <Switch>
      // <Route path="/collection" component={NavSidebar}/>
      // <Route path="/search" component={NavSidebar}/>
      <AuthRoute exact path="/" component={BrowseContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
    <ProtectedRoute path="/browse/featured" component={FeaturedComponent}/>
    <ProtectedRoute path="/browse/newreleases" component={FeaturedComponent}/>

  </div>
);

export default App;
