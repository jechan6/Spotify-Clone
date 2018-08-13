
@playlists.each do |playlist|
  json.set! playlist.id do
    json.partial! 'api/playlists/playlist', playlist: playlist
    json.songIds []
  end
end
