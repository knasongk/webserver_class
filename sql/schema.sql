CREATE TABLE IF NOT EXISTS users (
	id integer PRIMARY KEY,
	display_name varchar(100), 
	username varchar(100), 
	email varchar(100), 
	created_on timestamp, 
	last_login timestamp);

CREATE TABLE IF NOT EXISTS destinations (
	id integer PRIMARY KEY, 
	city varchar(50), 
	country varchar(50), 
	language varchar(50));

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

