import React from 'react';
import {Link} from 'react-router-dom';
const CollectionNav = (props) => (
  <div className="featured-nav">
    <ul className="featured-links">
      <li><Link className="feature-link-item"
        to="/collection/playlists">PLAYLISTS</Link></li>

      <li>
          <button
          className="modal-button"
          onClick={props.openModal}>
            NEW PLAYLIST
          </button>
      </li>
    </ul>

  </div>

);

export default CollectionNav;
