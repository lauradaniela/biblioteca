class CreateRols < ActiveRecord::Migration[5.1]
  def change
    create_table :rols do |t|
      t.string :abreviatura
      t.string :descripcion

      t.timestamps
    end
  end
end
