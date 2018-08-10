import React from 'react';
import AudioPlayer from './audio_player/audio-player';
const SongIndexItem = ({song}) => {
  return(
    <div className="now-playing-container">
      <div className="audio-controls-container">
        <AudioPlayer audio={song.trackUrl}/>
      </div>
    </div>
  );
};

export default SongIndexItem;
