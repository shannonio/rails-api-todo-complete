class User < ActiveRecord::Base
  devise :database_authenticatable, :recoverable,
        :trackable, :validatable, :registerable,
        :omniauthable

  include DeviseTokenAuth::Concerns::User
  has_many :lists, dependent: :destroy

  validates :email, length: { minimum: 4, maximum: 100 }, presence: true
  before_save { self.email = email.downcase if email.present? }
end
