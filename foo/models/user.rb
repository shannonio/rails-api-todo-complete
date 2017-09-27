class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  
  before_save { self.email = email.downcase if email.present? }

  validates :email, length: { minimum: 4, maximum: 100 }, presence: true

  has_many :lists, dependent: :destroy

end
