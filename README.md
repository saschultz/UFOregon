# UFOregon
<p style="text-align: center;">![](https://media.giphy.com/media/VbmYpyiGXt2AU/giphy.gif)</p>

This website will allow footwear distributors to track which brands they offer and what stores carry them. Additionally, it will allow store owners to see which brands are available and add them to their own inventory.

## Screenshot

![screenshot](/Users/dw/Desktop/UFOregon/public/img/screen_shot.png)

## Built With

* ActiveRecord
* Bootstrap
* CSS
* HTML
* Postgres
* Rake
* Ruby
* Sinatra
* Javascript
* JSON
* Google Maps API

### User Stories

As a user, I want to see a map of Oregon.
As a user, I want to see a symbol to show the location of a UFO sighting in Oregon.
As a user, I want to be able to sort how the data is displayed by year, location, and shape.

## Specifications

| Behavior | Input | Output |
|----------|:-----:|:------:|
|  |  |  |


## Setup/Installation Requirements
- [ ] ⌘Command T to open a new tab in the terminal and start postgres (leave it running in the background)
```
$ postgres
```
- [ ] Clone this repository in the terminal
```
$ git clone https://github.com/saschultz/UFOregon.git
```
- [ ] Make sure you have rake installed
```
$ gem install rake
```
- [ ] Navigate to the project directory
```
$ cd Desktop/UFOregon
```
- [ ] In the terminal
```
$ rake db:schema:load
```
- [ ] Open the project in a text editor of your choice
```
$ atom .
```
- [ ] Prepare the database
```
$ rake db:create
$ rake db:migrate
$ rake db:test:prepare
```
- [ ] In psql navigate to the oregon_sightings_development database and copy in the database file
```
$ psql

\c oregon_sightings_development

COPY ufos(sight_date, city, state, shape, duration, summary, latitude, longitude) FROM '/Users/Guest/desktop/UFOregon/raw_data/oregon_sightings_latlong.csv' DELIMITER ',' CSV;
```
- [ ] ⌘Command T to open another new tab in the terminal and start sinatra (leave it running in background)
```
$ ruby app.rb
```
- [ ] Navigate to localhost:4567 in a web browser of your choice

## Known Bugs
*

## Authors

Jin Camou, Dominic Brown, Sara Schultz, Dana Weiss

## License

*open source GPL & MIT*

```
Copyright (c) 2017 **Jin Camou, Dominic Brown, Sara Schultz, Dana Weiss**
```
