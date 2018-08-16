json.set! :artist do
  json.set! @artist.id do
    json.extract! @artist, :id, :name
    json.songIds @artist.songs.pluck(:id)
    json.photoUrl url_for(@artist.photo)

  end
end


json.set! :songs do
  @artist.songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end
