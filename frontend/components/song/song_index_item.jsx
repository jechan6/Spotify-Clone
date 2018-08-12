import React from 'react';
const SongIndexItem = ({song}) => {

  return(
    <div>
      <div className="song-list">
        <li className="song-item">
          {song.title}
        </li>
      </div>

    </div>
  );
};

export default SongIndexItem;
