class Follower < ApplicationRecord
  validates :playlist_id, :user_id, presence: true
  belongs_to :playlist
  belongs_to :user
end
