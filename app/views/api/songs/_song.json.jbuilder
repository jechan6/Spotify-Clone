  json.extract! song, :id, :title, :artist_id, :album_id
  json.artist song.artist.name
  json.trackUrl url_for(song.track)
