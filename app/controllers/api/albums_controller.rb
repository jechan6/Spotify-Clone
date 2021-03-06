class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all

  end
  def create
    @album.photo.attach(params[:album][:photo])
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 401
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  private
  def album_params
    params.require(:album).permit(:title, :artist_id, :year, :photo)
  end
end
