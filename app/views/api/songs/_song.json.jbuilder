json.set! song.id do
  json.extract! song, :id, :title, :artist_id, :album_id
  json.trackUrl url_for(song.track)
end
