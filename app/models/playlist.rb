class Playlist < ApplicationRecord
  validates :title, :author_id, presence: true
  has_many :playlist_song
  has_one_attached :photo

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :songs,
    through: :playlist_song,
    source: :song
  has_many :albums,
    through: :songs,
    source: :album
  has_many :playlist_photos,
    through: :albums,
    source: :photo_attachment
end
