class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User
  before_save { self.email = email.downcase if email.present? }

  validates :email, length: { minimum: 4, maximum: 100 }, presence: true

  has_many :lists, dependent: :destroy

end
