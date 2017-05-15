class Tables < ActiveRecord::Migration[5.1]
  def change
    create_table(:ufos) do |t|
      t.column(:sight_date, :text)
      t.column(:city, :text)
      t.column(:state, :text)
      t.column(:shape, :text)
      t.column(:duration, :text)
      t.column(:summary, :text)
      t.column(:post_date, :text)
      t.column(:junk, :text)
      t.column(:junk1, :text)
    end
  end
end
