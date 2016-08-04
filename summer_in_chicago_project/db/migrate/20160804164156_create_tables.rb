class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |table|
      table.string :username
      table.string :password
      table.string :email
    end

    create_table :events do |table|
      table.belongs_to :user, index: true
      table.string :name
      table.string :description
      table.string :image_url
      table.string :location
      table.string :date
      table.string :time
      table.string :category
    end
  end
end
