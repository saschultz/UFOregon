class CreateTable < ActiveRecord::Migration[5.1]
  def change
    create_table(:ufos) do |t|
      t.column(:sight_date, :text)
      t.column(:city, :text)
      t.column(:state, :text)
      t.column(:shape, :text)
      t.column(:duration, :text)
      t.column(:summary, :text)
      t.column(:latitude, :text)
      t.column(:longitude, :text)
    end
  end
end
