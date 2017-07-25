json.extract! book, :id, :title, :author, :fecha_publicacion, :editorial, :created_at, :updated_at
json.url book_url(book, format: :json)
