class CreateFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :followers do |t|
      t.integer :playlist_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
