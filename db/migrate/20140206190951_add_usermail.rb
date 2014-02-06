class AddUsermail < ActiveRecord::Migration
  def up
    remove_column :users, :name
    add_column :users, :usermail, :string
  end

  def down
    remove_column :users, :usermail
    add_column :users, :name, :string
  end
end