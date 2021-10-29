Rails.application.routes.draw do
  resources :websites
  post "/scrape", to: "websites#scrape"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
