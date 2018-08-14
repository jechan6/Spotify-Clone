class Api::PlaylistSongsController < ApplicationController

  def deletesong
    @playlistsongs = PlaylistSong.find_by(
      playlist_id: params[:playlist_song][:playlist_id],
      song_id: params[:playlist_song][:song_id]
    )

    @playlistsongs.destroy
    render json: {playlist_id:@playlistsongs.playlist_id, song_id: @playlistsongs.song_id}
  end
end
