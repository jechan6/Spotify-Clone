json.set! :album do
  json.set! @album.id do
    json.partial! 'api/albums/album', album: @album
    json.songIds @album.songs.pluck(:id)
  end
end

json.set! :songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end
