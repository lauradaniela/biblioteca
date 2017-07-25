Rails.application.routes.draw do
  root :to => 'books#index'
  resources :books, :except => [:new, :edit]

  resources :books
  resources :estados
  resources :prestamos
  resources :rols
  resources :tipo_identificacions
  resources :usuarios
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
