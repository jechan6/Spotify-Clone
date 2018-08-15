require "open-uri"
class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    file = File.open("app/assets/images/music_note.png")
    @playlist.photo.attach(io: file, filename: "music_note.png")
    if @playlist.save!
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show

  end

  def update
    @playlist = Playlist.find(params[:id])
    song = Song.find(params[:songId])
    file = song.album.photo.download

    @playlist.songs << song
    @playlist.attach(io: file)
    @playlist.save
    render :show
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :author_id, :photo)
  end
end
