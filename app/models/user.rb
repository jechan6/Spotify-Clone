class User < ApplicationRecord
  validates :username, :session_token, :password_digest, :name, :birthday, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token
  has_many :playlists,
    foreign_key: :author_id,
    class_name: :Playlist

  has_many :follow,
    foreign_key: :user_id,
    class_name: :Follower

  has_many :followed_playlist,
    through: :follow,
    source: :playlist
    
  has_one_attached :photo

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
