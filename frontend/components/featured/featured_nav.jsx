
import React from 'react';
import {Link} from 'react-router-dom';
const FeaturedNav = () => (
  <div className="featured-nav">
    <ul className="featured-links">
      <li><Link className="feature-link-item"
        to="/browse/featured">FEATURED</Link></li>

      <li><Link className="feature-link-item"
        to="/browse/featured">GENRES & MOODS</Link></li>

      <li><Link className="feature-link-item"
        to="/browse/newreleases">NEW RELEASES</Link></li>
    </ul>
  </div>

);

export default FeaturedNav;
