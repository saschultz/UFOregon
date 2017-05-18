require "bundler/setup"
# require "../ALLKEYS"
require 'pry'

Bundler.require :default
Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }


get("/") do
  # reset
  Info.save_lat(0)
  Info.save_lng(0)
  Info.save_city("")
  Info.save_total(0)
  Info.save_rep([])
  erb(:index)
end

get('/ruby_data') do
  # data to be passed to javascript
  if (Info.get_lat != 0)
      [{
        cit: Info.get_city,
        lat: Info.get_lat,
        lng: Info.get_lng,
        rep: Info.get_rep,
        tot: Info.get_total
      }].to_json
  else
      [{
        cit: "Bend",
        lat: 44.06,
        lng: -121.32,
        rep: "",
        tot: 0
      }].to_json
  end
end

post('/get_city') do
  Info.save_city(params.fetch('city_name'))
  found_rows_arr = Ufo.find_by_sql("SELECT * FROM ufos WHERE city = '#{Info.get_city}';")
  Info.save_total(found_rows_arr.count)
  # returns a single record for city to display correct map marker
  single_city_record = Ufo.find_by(city: Info.get_city)
  Info.save_lat(single_city_record['latitude'])
  Info.save_lng(single_city_record['longitude'])
  # extract all the sighting reports
  summaries = []
  result = Ufo.where(["city = ?", Info.get_city])
  result.each do |row|
    summaries.push(row['summary'])
  end
  Info.save_rep(summaries)
  erb(:index)
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

# File.open("./public/js/data.json","w") do |file|
#   file.write(coords)
# end

# var javascript_side_json = <%= @rails_side_json.html_safe %>;
# or
# var javascript_side_json = <%=raw @rails_side_json %>;
#
# JSON.generate({:this => "is cool"})

# File.open("./temp.js","w") do |file|
#   file.write(coords.to_json)
# end
