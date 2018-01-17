class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :cat_id, null: false
      t.integer :user_id, null: false
    end
  end
end
