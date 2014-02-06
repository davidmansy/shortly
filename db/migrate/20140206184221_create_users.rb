class CreateUsers < ActiveRecord::Migration
    def self.up
        create_table :users do |u|
            u.string :name
            u.string :password
            u.timestamps
        end
    end

    def self.down
        drop_table :users
    end
end