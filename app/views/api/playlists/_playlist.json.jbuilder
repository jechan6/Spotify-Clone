json.extract! playlist, :id, :title, :author_id
json.author playlist.author.name
json.followers do
  playlist.users_followed.each do |follower|
    json.follower_id follower.id
  end
end
json.photos do
  json.array! playlist.playlist_photos.uniq do |photo|
    json.photoUrl url_for(photo)
  end
end

json.photoUrl url_for(playlist.photo)
