import React from 'react';
import AudioPlayer from './audio_player/audio-player';
const SongIndexItem = ({song}) => {
  return(
    <div>

      <div className="now-playing-container">

      </div>
      <div className="audio-controls-container">
        <AudioPlayer audio={song.trackUrl}/>
      </div>
    </div>
  );
};

export default SongIndexItem;
