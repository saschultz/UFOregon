class Ufo < ActiveRecord::Base

end


module Keys
  def Keys.js_base
    'AIzaSyAw9YqBwAtZgoHPz8qfM-1BIlXB9bgyfSU'
  end
end


module Info
  @@lat = 0
  @@lng = 0
  @@reports = []

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

  def Info.save_rep(arr)
    @@reports = arr
  end
  def Info.get_rep(arr)
    @@reports = arr
  end

end
