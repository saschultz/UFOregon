require "bundler/setup"
require "../ALLKEYS"
# require 'google_maps_service'
require 'pry'

Bundler.require :default
Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }

get "/" do

  @key_main = Keys.js_base
  @key_geoloc = Keys.js_geocoding_svc

  erb :index
end
