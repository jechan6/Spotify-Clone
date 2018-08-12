json.extract! album, :id, :title, :year
json.artist album.artist.name
json.photoUrl url_for(album.photo)
