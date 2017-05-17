class Ufo < ActiveRecord::Base

end


module Keys
  def Keys.js_base
    'AIzaSyAw9YqBwAtZgoHPz8qfM-1BIlXB9bgyfSU'
  end
end


module Info
  @@city = ""
  @@lat = 0
  @@lng = 0
  @@reports = []
  @@total = 0

  def Info.save_city(city)
    @@city = city
  end
  def Info.get_city
    @@city
  end

  def Info.save_lat(num)
    @@lat = num
  end
  def Info.get_lat
    @@lat
  end
  def Info.save_lng(num)
    @@lng = num
  end
  def Info.get_lng
    @@lng
  end

  def Info.save_rep(arr)
    @@reports = arr
  end
  def Info.get_rep
    @@reports
  end

  def Info.save_total(num)
    @@total = num
  end
  def Info.get_total
    @@total
  end

end
