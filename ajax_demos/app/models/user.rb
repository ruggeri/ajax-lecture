class User < ApplicationRecord
  validates :username, empty: false, uniqueness: true
end
