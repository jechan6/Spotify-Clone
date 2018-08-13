class Album < ApplicationRecord
  validates :title, :artist_id, :year, presence:true
  has_one_attached :photo
  belongs_to :artist
  has_many :songs
  
end
