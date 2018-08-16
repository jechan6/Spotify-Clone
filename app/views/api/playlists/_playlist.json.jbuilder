json.extract! playlist, :id, :title, :author_id
json.author playlist.author.name
json.photos do
  json.array! playlist.playlist_photos.uniq do |photo|
    json.photoUrl url_for(photo)
  end
end

json.photoUrl url_for(playlist.photo)
