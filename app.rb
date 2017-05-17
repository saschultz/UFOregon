require "bundler/setup"
require "../ALLKEYS"
require 'pry'

Bundler.require :default
Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }

get("/") do
  @key_main = Keys.js_base
  @ruby_hash = {"a" => 123}
  erb(:index)
end

get('/ruby_data') do
  [
    {lat: 44.67, lng: -123.22},
    {lat: 43.74, lng: -117.07},
    {lat: 44.63, lng: -123.10},
    {lat: 45.50, lng: -122.87},
    {lat: 44.38, lng: -123.60},
    {lat: 44.13, lng: -123.26},
    {lat: 42.54, lng: -118.46},
    {lat: 45.12, lng: -123.21},
    {lat: 45.49, lng: -122.80},
    {lat: 44.06, lng: -121.32},
    {lat: 44.05, lng: -123.08},
    {lat: 45.52, lng: -122.99},
    {lat: 45.52, lng: -122.68},
    {lat: 43.45, lng: -119.14},
    {lat: 44.08, lng: -121.01}
    {lat: 44.08, lng: -121.01}
  ].to_json
  # File.open("./public/js/data.json","w") do |file|
  #   file.write(coords)
  # end
end


# AJAX EXAMPLE

# get '/' do
#   erb :index
# end

# get('/play')do
#   if request.xhr?
#     %q{<h1 class="blue">Hello! <a href="/">back</a></h1>}
#   else
#     "<h1>Not an Ajax request!</h1>"
#   end
# end


# JSON NOTES

# var javascript_side_json = <%= @rails_side_json.html_safe %>;
# or
# var javascript_side_json = <%=raw @rails_side_json %>;
#
# JSON.generate({:this => "is cool"})

# File.open("./temp.js","w") do |file|
#   file.write(coords.to_json)
# end
