class Ufo < ActiveRecord::Base

end


module Keys
  def Keys.js_base
    'AIzaSyAw9YqBwAtZgoHPz8qfM-1BIlXB9bgyfSU'
  end
end

# class String
#   def title_case
#     split(/(\W)/).map(&:capitalize).join
#   end
# end

class City
  @@all = []
  @@current_city = nil


  def initialize()
    @name = ""
    @lat = 0
    @lng = 0
    @reports = []
    @total = 0
  end

  def City.save_to_all(arr)
    @@all = arr
  end
  def City.get_all
    @@all
  end

  def City.save_current_city(city_obj)
    @@current_city = city_obj
  end
  def City.get_current_city
    @@current_city
  end

  def save_name(name)
    @name = name
  end
  def get_name
    @name
  end

  def save_lat(num)
    @lat = num
  end
  def get_lat
    @lat
  end
  def save_lng(num)
    @lng = num
  end
  def get_lng
    @lng
  end

  def save_rep(arr)
    @reports = arr
  end
  def get_rep
    @reports
  end

  def save_total(num)
    @total = num
  end
  def get_total
    @total
  end

end
