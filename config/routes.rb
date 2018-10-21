Rails.application.routes.draw do
  root 'home#home'

  get 'about', action: :about, controller: 'home'
end
