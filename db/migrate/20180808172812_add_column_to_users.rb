class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :birthday, :date, null: false
  end
end
