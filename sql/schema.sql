CREATE TABLE IF NOT EXISTS destinations (
	id integer PRIMARY KEY, 
	city varchar(50), 
	country varchar(50), 
	language varchar(50));

CREATE TABLE IF NOT EXISTS users (
	id serial NOT NULL PRIMARY KEY,
	display_name varchar(100) NOT NULL, 
	username varchar(100) NOT NULL, 
	destination_id integer NOT NULL,
	email varchar(100) NOT NULL, 
	created_at timestamp DEFAULT CURRENT_TIMESTAMP, 
	update_at  timestamp DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (destination_id) REFERENCES destinations(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS preferences (
	id integer PRIMARY KEY, 
	mood varchar(100));

CREATE TABLE IF NOT EXISTS city_preferences (
	city_id integer, 
	preference_id integer);

CREATE TABLE IF NOT EXISTS age_groups (
	id integer PRIMARY KEY, 
	category varchar(100), 
	min_age integer, 
	max_age integer);

CREATE TABLE IF NOT EXISTS age_preferences(
	age_id integer, 
	preference_id integer, 
	theme_id integer);

CREATE TABLE IF NOT EXISTS budgets (
	id integer PRIMARY KEY, 
	category varchar(100), 
	min_cost money, 
	max_cost money);

CREATE TABLE IF NOT EXISTS themes (
	id integer PRIMARY KEY, 
	activity varchar(100), 
	description text, 
	budget_id integer, 
	preference_id integer);

