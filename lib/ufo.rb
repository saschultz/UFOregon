class Ufo < ActiveRecord::Base

  # attr_accessor(:lat, :lng)
  #
  # def initialize(lat, lng) {
  #   @lat = lat;
  #   @lng = lng;
  # }

end

module Info
  @@lat = 0
  @@lng = 0

  def Info.get_lat
    @@lat
  end
  def Info.get_lng
    @@lng
  end
  def Info.save_lat(num)
    @@lat = num
  end
  def Info.save_lng(num)
    @@lng = num
  end
end

module Keys
  def Keys.js_base
    'AIzaSyAw9YqBwAtZgoHPz8qfM-1BIlXB9bgyfSU'
  end
end
