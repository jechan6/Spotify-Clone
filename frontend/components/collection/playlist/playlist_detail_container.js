import {connect} from 'react-redux';
import {fetchPlaylist, deletePlaylist} from '../../../actions/playlist_actions';
import {fetchSongs} from '../../../actions/song_action';
import {selectSongsFromPayload} from "../../../reducers/selectors";
import {openModal} from "../../../actions/modal_actions";
import PlaylistDetail from "./playlist_detail";
import {setPlaylistId} from "../../../actions/audio_action";
import React from 'react';
const mapStateToProps = (state,ownProps) => {
  const playlist = state.entities.playlist[ownProps.playlistId];

  let songs = null;
  if(playlist) {
    songs = selectSongsFromPayload(state, playlist);
  }

  return {
    playlist,
    songs,
    setPlaylistId: ownProps.setPlaylistId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchSongs: () => dispatch(fetchSongs()),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  setPlaylistId: id => dispatch(setPlaylistId(id)),
  otherForm: (
    <button
    className="menu-item"
    onClick={() => dispatch(openModal('playlist_delete'))}>
      Delete
    </button>
  )
});

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistDetail);
