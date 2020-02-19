CREATE TABLE IF NOT EXISTS users (id serial, display_name varchar(100), username varchar(100), email varchar(100), created_on timestamp, last_login timestamp);
CREATE TABLE IF NOT EXISTS destinations (id serial, city varchar(50), country varchar(50), language varchar(50));
CREATE TABLE IF NOT EXISTS preferences (id serial, mood varchar(100));
CREATE TABLE IF NOT EXISTS city_preferences (id serial, city_id integer, preference_id integer);
CREATE TABLE IF NOT EXISTS age_groups (id serial, category varchar(100), min_age integer, max_age integer);
CREATE TABLE IF NOT EXISTS age_preferences(id serial, age_id integer, preference_id integer, theme_id integer);
CREATE TABLE IF NOT EXISTS budgets (id serial, category varchar(100), min_cost money, max_cost money);
CREATE TABLE IF NOT EXISTS themes (id serial, activity varchar(100), description text, budget_id integer, preference_id integer);

