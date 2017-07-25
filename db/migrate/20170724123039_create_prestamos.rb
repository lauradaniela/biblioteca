class CreatePrestamos < ActiveRecord::Migration[5.1]
  def change
    create_table :prestamos do |t|
      t.date :fecha_prestamo
      t.date :fecha_devolucion

      t.timestamps
    end
  end
end
