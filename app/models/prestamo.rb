class Prestamo < ApplicationRecord
    belongs_to :estado
    belongs_to :usuario
    belongs_to :book
end
