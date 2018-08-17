Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :index, :show]
    resources :artists, only: [:create, :show, :index]
    resources :albums, only: [:create, :show, :index]
    resources :playlists, only: [:create,:show, :index, :destroy, :update]
    delete "playlist_songs/deletesong", :to => 'playlist_songs#deletesong'
    delete "followers/deleteplaylist", :to => 'followers#deleteplaylist'
  end
  root "static_pages#root"
end
