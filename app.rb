require "bundler/setup"
require 'pry'

Bundler.require :default
Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }


get("/") do
  # when page first loads, return an empty city to plot on the map
  # tmp_city = City.new()
  # tmp_city.save_lat(0)
  # tmp_city.save_lng(0)
  # tmp_city.save_name("")
  # tmp_city.save_total(0)
  # tmp_city.save_rep([])
  # City.save_current_city(nil)
  @selected_city = nil
  erb(:index)
end

get('/ruby_data') do
  # data to be passed to javascript
  if (City.get_current_city.get_lat != 0)
      [{
        nam: City.get_current_city.get_name,
        lat: City.get_current_city.get_lat,
        lng: City.get_current_city.get_lng,
        rep: City.get_current_city.get_rep,
        tot: City.get_current_city.get_total
      }].to_json
  else
      [{
        nam: "Bend",
        lat: 44.06,
        lng: -121.32,
        rep: "",
        tot: 0
      }].to_json
  end
end

post('/get_city_name') do
  city_name = params.fetch('city_name')
# binding.pry
  if City.validate_name?(city_name)
    new_city = City.new()
    new_city.save_name(city_name)
    found_rows_arr = Ufo.find_by_sql("SELECT * FROM ufos WHERE city = '#{new_city.get_name}';")
    new_city.save_total(found_rows_arr.count)
    # returns a single record for city to display correct map marker
    single_city_record = Ufo.find_by(city: new_city.get_name)
    new_city.save_lat(single_city_record['latitude'])
    new_city.save_lng(single_city_record['longitude'])
    # extract all the sighting reports
    summaries = []
    result = Ufo.where(["city = ?", new_city.get_name])
    result.each do |row|
      summaries.push(row['summary'])
    end
    new_city.save_rep(summaries)
    City.save_current_city(new_city)
    @selected_city = City.get_current_city
    erb(:index)
  else
    @selected_city = nil
    erb(:errors)
  end
end

post('/get_all_cities') do

end

get '/end' do
  erb :end
end


# AJAX NOTES

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
