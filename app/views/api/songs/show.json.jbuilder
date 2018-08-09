json.set! @song.id do
  json.partial! 'api/songs/song', song: @song
end
