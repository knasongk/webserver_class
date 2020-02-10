CREATE TABLE IF NOT EXISTS users (id serial, display_name varchar(100), username varchar(100), email varchar(100), created_on timestamp, last_login timestamp);
CREATE TABLE IF NOT EXISTS destinations (id serial, city varchar(100), country varchar(100), language char(100));
CREATE TABLE IF NOT EXISTS preferences (id serial, mood char(100), age_group char(100));
CREATE TABLE IF NOT EXISTS themes (id serial, activity varchar(100), description text);
CREATE TABLE IF NOT EXISTS tour_types (id serial, type char(100), budget integer, tour_description text);
CREATE TABLE IF NOT EXISTS city_preferences (id serial, city_id integer, preference_id integer);

