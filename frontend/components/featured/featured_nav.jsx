
import React from 'react';
import {Link} from 'react-router-dom';
const FeaturedNav = () => (
  <div className="featured-nav">
    <ul className="featured-links" >
      <li><Link className="feature-link-item"
        to="/browse/featured">FEATURED</Link></li>

    </ul>
  </div>

);

export default FeaturedNav;

{/* <li><Link className="feature-link-item"
  to="/browse/newreleases">NEW RELEASES</Link></li> */}