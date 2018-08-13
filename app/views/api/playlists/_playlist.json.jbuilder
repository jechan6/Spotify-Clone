json.extract! playlist, :id, :title, :author_id
json.author playlist.author.name
json.photoUrl url_for(playlist.photo)
