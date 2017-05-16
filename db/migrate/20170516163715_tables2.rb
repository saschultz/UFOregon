class Tables2 < ActiveRecord::Migration[5.1]
  def change
    create_table(:world_ufos) do |t|
      t.column(:sight_date, :text)
      t.column(:post_date, :text)
      t.column(:city_state, :text)
      t.column(:duration, :text)
      t.column(:summary, :text)
      t.column(:latitude, :text)
      t.column(:longitude, :text)
      # t.column(:junk, :text)
      # t.column(:junk1, :text)
    end
  end
end
