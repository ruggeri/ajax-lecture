class User < ApplicationRecord
  validates :username, empty: false, uniqueness: true

  def likes?(cat)
    Like.exists?(user_id: self.id, cat_id: cat.id)
  end
end
