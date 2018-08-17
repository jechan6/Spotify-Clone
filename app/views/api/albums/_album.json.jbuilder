json.extract! album, :id, :title, :year
json.artist album.artist.name
json.songIds album.songs.pluck(:id)
json.artist_id album.artist.id
json.photoUrl url_for(album.photo)
