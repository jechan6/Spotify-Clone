class Song < ApplicationRecord
  validates :title, :artist_id, null: false
  has_one_attached :track
  belongs_to :artist
  belongs_to :album
  has_many :playlist_song
  has_many :playlists, through: :playlist_song, source: :playlist
end
