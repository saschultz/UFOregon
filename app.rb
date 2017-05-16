require "bundler/setup"
require "../ALLKEYS"
require 'pry'

Bundler.require :default
Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }

get "/" do

  @key_main = Keys.js_base
  @key_geoloc = Keys.js_geocoding_svc

  @ruby_hash = {"a" => 123}

  erb :index
end


# var javascript_side_json = <%= @rails_side_json.html_safe %>;
# or
# var javascript_side_json = <%=raw @rails_side_json %>;
#
# JSON.generate({:this => "is cool"})
