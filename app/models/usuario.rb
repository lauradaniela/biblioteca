class Usuario < ApplicationRecord
    belongs_to :tipo_identificacion
    belongs_to :estado
    belongs_to :rol
    has_many :prestamo
    has_many :book throught :prestamo
end
