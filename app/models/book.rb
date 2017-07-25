class Book < ApplicationRecord
    validates_presence_of :title, :author, :fecha_publicacion, :editorial
    has_many :prestamo
    belongs_to :estado
end
