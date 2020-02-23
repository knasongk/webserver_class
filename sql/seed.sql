INSERT INTO users (id, display_name, username, email, created_on, last_login) VALUES 
   (1, 'knasongk', 'Ken Nasongkhla', 'knasongk@yahoo.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   (2, 'madnat', 'Natalie Shannon', 'madnatj1@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   (3, 'tnguyen', 'Tam Nguyen', 'tytntam@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 

INSERT INTO destinations (id, city, country, language) VALUES
   (1, 'Melbourne', 'Australia', 'English'),
   (2, 'Sydney', 'Australia', 'English'),
   (3, 'Brussels', 'Belgium', 'English'),
   (4, 'Hong Kong', 'China', 'Chineese'),
   (5, 'Prague', 'Czech Republic', 'Czech'),
   (6, 'Paris', 'France', 'French'),
   (7, 'Berlin', 'Germany', 'German'),
   (8, 'Hamburg', 'Germany', 'German'),
   (9, 'Budapest', 'Hungary', 'Hungarian'),
   (10, 'Dublin', 'Ireland', 'English'),
   (11, 'Rome', 'Italy', 'Italian'),
   (12, 'Venice', 'Italy', 'Italian'),
   (13, 'Tokyo', 'Japan', 'Japanese'),
   (14, 'Cape Town', 'South Africa', 'English'),
   (15, 'New York', 'USA', 'English'),
   (16, 'London', 'United Kingdom', 'English'),
   (17, 'Turkey', 'Istanbul', 'Turkish');

INSERT INTO preferences (id, mood) VALUES
   (1, 'slow pace'),
   (2, 'adventure'),
   (3, 'family fun'),
   (4, 'shopping'),
   (5, 'beach'),
   (6, 'sport'),
   (7, 'food & drink'),
   (8, 'city highlights'),
   (9, 'day trip'),
   (10, 'half day trip'),
   (11, 'introduction to city'),
   (12, 'nightlife'),
   (13, 'outdoors'),
   (14, 'cultural'),
   (15, 'tourist spots'),
   (16, 'off tourist trail');

INSERT INTO age_groups (id, category, min_age, max_age) VALUES
   (1, 'children', 0, 18),
   (2, 'teens', 12, 18),
   (3, 'young adults', 19, 26),
   (4, 'mature adults', 27, 45),
   (5, 'middle ages', 46, 56),
   (6, 'older adults', 57, 66),
   (7, 'retirees', 67, 100);


INSERT INTO age_preferences (age_id, preference_id, theme_id) VALUES 
   (1, 2, 1),
   (1, 2, 4),
   (2, 3, 4),
   (7, 7, 3),
   (1, 2, 4);

INSERT INTO budgets (id, category, min_cost, max_cost) VALUES
   (1, 'low', 20.0, 99.0),
   (2, 'medium', 100.0, 399.0),
   (3, 'high', 400.0, 999.0),
   (4, 'expensive', 1000.0, 10000.0);

INSERT INTO themes (id, activity, description, budget_id, preference_id) VALUES
   (1, 'big bus tour', 'get on and off big city bus', 1, 1),
   (2, 'galaria shopping', 'go shopping all malls', 3, 2),
   (3, 'night clubs', 'go clubbing', 3, 3),
   (4, 'soccer match', 'go to local club team match', 2, 4);

INSERT INTO city_preferences (preference_id, city_id) VALUES
   (2,1), (3,2), (3,3), (3,4), (4,5), (6,7), (8,8),
   (14,12), (11,10), (9,8), (12,15), (13,3), (14,13);
