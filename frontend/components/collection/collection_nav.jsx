import React from 'react';
import {Link} from 'react-router-dom';
const CollectionNav = (props) => (
  <div className="featured-nav">
    <ul className="featured-links">
      <li><Link className="feature-link-item"
        to="/collection/playlists">PLAYLISTS</Link></li>

      <li><Link className="feature-link-item"
        to="/collection/playlists">FAVORITE SONGS</Link></li>

      <li><Link className="feature-link-item"
        to="/collection/playlists">ALBUMS</Link></li>
      <li> <div className="playlist-create">
          {props.otherForm}
        </div>
      </li>
    </ul>

  </div>

);

export default CollectionNav;
