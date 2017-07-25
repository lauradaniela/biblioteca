class CreateTipoIdentificacions < ActiveRecord::Migration[5.1]
  def change
    create_table :tipo_identificacions do |t|
      t.string :abreviatura
      t.string :descripcion

      t.timestamps
    end
  end
end
