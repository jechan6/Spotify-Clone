import React from 'react';
const SongIndexItem = ({song}) => {

  return(
    <div>
      <div className="song-item">
        {song.title}
      </div>

    </div>
  );
};

export default SongIndexItem;
