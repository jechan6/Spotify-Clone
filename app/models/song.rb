class Song < ApplicationRecord
  validates :title, :artist_id, null: false
  has_one_attached :track
  belongs_to :artist
end
