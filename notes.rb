COPY ufos(sight_date, city, state, country, shape, degree, duration, summary, post_date, latitude, longitude) FROM '/Users/Guest/Desktop/ufo.csv' CSV;
COPY ufos(sight_date, city, state, shape, duration, summary, post_date) FROM '/Users/Guest/Desktop/sightings.csv' DELIMITER ',' CSV HEADER;
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
        t.column(:junk2, :text)
      end
    end
  end


COPY ufos(sight_date, report_date, city_state, duration, summary, latitude, longitude) FROM '/Users/Guest/Desktop/sightings.tsv' DELIMITER '/' TSV;
COPY contacts(sight_date, report_date, city_state, duration, summary, latitude, longitude) FROM '/Users/Guest/Desktop/sightings.tsv' WITH (FORMAT 'text') DELIMITER E'\t';


##DOM USE THIS LINE FOR TESTING, but move the WORLD_sightings.csv file to the desktop
COPY world_ufos(sight_date, post_date, city_state, duration, summary, latitude, longitude) FROM '/Users/Guest/Downloads/WORLD_sightings.csv' DELIMITER ',' CSV;
