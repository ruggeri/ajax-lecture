class Like < ApplicationRecord
  validates :cat_id, empty: false
  validates :user_id, empty: false
end
