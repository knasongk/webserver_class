CREATE TABLE IF NOT EXISTS destinations (
	id serial PRIMARY KEY, 
	city varchar(50) UNIQUE NOT NULL, 
	country varchar(50) NOT NULL, 
	language varchar(50) NOT NULL);

CREATE TABLE IF NOT EXISTS users (
	id serial NOT NULL PRIMARY KEY,
	display_name varchar(100) NOT NULL, 
	username varchar(100) UNIQUE NOT NULL, 
	destination_id integer NOT NULL,
	email varchar(100) NOT NULL, 
	created_at timestamp DEFAULT CURRENT_TIMESTAMP, 
	update_at  timestamp DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (destination_id) REFERENCES destinations(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS preferences (
	id serial NOT NULL PRIMARY KEY, 
	mood varchar(100) UNIQUE NOT NULL);

CREATE TABLE IF NOT EXISTS city_preferences (
	city_id integer NOT NULL, 
	preference_id integer NOT NULL,
	FOREIGN KEY (city_id) REFERENCES destinations(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	FOREIGN KEY (preference_id) REFERENCES preferences(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	UNIQUE(city_id, preference_id));

