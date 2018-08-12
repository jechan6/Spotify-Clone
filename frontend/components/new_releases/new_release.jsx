import React from 'react';
import AlbumsContainer from '../albums/albums_container';
import FeaturedContainer from '../featured/featured_container';
class NewReleases extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    return(
      <div className="newrelease-container">
        
        <div className="newrelease-header"><h1>New albums</h1></div>
        <div className="albums-container">
          <AlbumsContainer/>
        </div>
      </div>
    );
  }
}

export default NewReleases;
