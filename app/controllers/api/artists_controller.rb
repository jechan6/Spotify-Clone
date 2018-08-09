class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.new(artist_param)
    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 401
    end
  end

  private
  def artist_param
    params.require(:artist).permit(:name)
  end
end
