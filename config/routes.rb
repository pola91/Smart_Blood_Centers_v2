SmartBloodCenter::Application.routes.draw do

  resource :account, :controller => "users"
  resources :users
  resource :user_session
  match "user_sessions/destroy" => "user_sessions#destroy", via: [:get]
  root :controller => "user_sessions", :action => "new"
  get "user/new"

  #Home Routes
  get ':controller/:action/:id'
  get 'home', to: 'welcome#index'
  get 'donate', to: 'welcome#donate'
  get 'need', to: 'welcome#need'
  get 'learn_more', to: 'welcome#learn_more'
  get 'contacts', to: 'welcome#contacts'

  #Manager Officer User Routes
  get "managers/view_reports"
  get "managers/report_settings"
  get "managers/sent_requests"
  get "managers/recieved_requests"

  #Registered User Routes
  get "registered_users/profile"
  get "registered_users/donate"
  get "registered_users/need"
  get "registered_users/transfuse"
  get "registered_users/log"
  
  #DataEntry Officer User Routes
  get "data_entries/withdraw"
  get "data_entries/donate"
  
  #Admin Officer User Routes
  get "admins/officers"
  get "admins/blood_centers"
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  #root 'welcome#index'
  
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

