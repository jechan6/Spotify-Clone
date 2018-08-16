class Api::FollowersController < ApplicationController
  def deleteplaylist

    @follower = Follower.find_by(
      playlist_id: params[:follower][:playlist_id],
      user_id: params[:follower][:user_id]
    )

    @follower.destroy
    render json: {playlist_id:@follower.playlist_id, user_id: @follower.user_id}
  end
end
