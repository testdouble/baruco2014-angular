class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description, null: false, default: ""
      t.boolean :complete, null: false, default: false
    end
  end
end
