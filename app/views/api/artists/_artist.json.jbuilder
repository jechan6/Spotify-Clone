json.extract! artist, :id, :name
json.songIds artist.songs.pluck(:id)
json.photoUrl url_for(artist.photo)
