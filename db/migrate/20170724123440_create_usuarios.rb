class CreateUsuarios < ActiveRecord::Migration[5.1]
  def change
    create_table :usuarios do |t|
      t.string :num_identificacion
      t.string :nombre
      t.string :apellido
      t.string :sexo
      t.string :correo_electronico
      t.string :telefono
      t.date :fecha_nacimiento

      t.timestamps
    end
  end
end
