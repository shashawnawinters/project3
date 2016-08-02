class CreateUsers < ActiveRecord::Migration
  def change
  	create_table :users do |table|
      table.string :username
      table.string :password
      table.string :email
    end

    create_table :events do |table|
      table.belongs_to :user, index: true
      table.string :location
      table.string :category
      table.string :date
      table.string :time
    end
  end
end
