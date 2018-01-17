class Cat < ApplicationRecord
  validates :name, empty: false, uniqueness: true
  validates :personal_legend, empty: false
end
