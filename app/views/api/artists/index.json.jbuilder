
@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist: artist
    json.songIds []
  end
end
