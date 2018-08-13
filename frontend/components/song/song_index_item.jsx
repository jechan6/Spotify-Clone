import React from 'react';

const SongIndexItem = ({song, handleClick}) => {

  let audio = <audio src={song.trackUrl}/>;

  return(
    <div>
      {audio}
      <div className="song-info">
        <div className="song-title-button">
          <button
            onClick={() => handleClick(song)}
            className="song-play-button">
            <i className={
                "fa fa-play"}>
              </i>
            </button>
            <div className="song-title">
              {song.title}
            </div>
        </div>
        <div className="song-options">
          <div className="ellipsis-option">•••</div>
        </div>
      </div>

    </div>
  );
};

export default SongIndexItem;
