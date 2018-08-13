class Api::SongsController < ApplicationController
  def index
    @songs = Song.all

    render :index
  end
  def show
    @song = Song.find(params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  private
  def song_params
    params.require(:song).permit(:title,:artist_id,:album_id, :track);
  end
end
