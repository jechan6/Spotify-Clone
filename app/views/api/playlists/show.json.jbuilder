json.set! :playlist do
  json.set! @playlist.id do
    json.partial! 'api/playlists/playlist', playlist: @playlist
    json.songIds @playlist.songs.pluck(:id)
  end
end

json.set! :songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end
