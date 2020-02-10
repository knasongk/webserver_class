INSERT INTO users (display_name, username, email, created_on, last_login) VALUES 
   ('knasongk', 'Ken Nasongkhla', 'knasongk@yahoo.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   ('madnat', 'Natalie Shannon', 'madnatj1@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   ('tnguyen', 'Tam Nguyen', 'tytntam@gmail.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 

INSERT INTO destinations (city, country, language) VALUES
   ('Melbourne', 'Australia', 'English'),
   ('Sydney', 'Australia', 'English'),
   ('Brussels', 'Belgium', 'English'),
   ('Hong Kong', 'China', 'Chineese'),
   ('Prague', 'Czech Republic', 'Czech'),
   ('Paris', 'France', 'French'),
   ('Berlin', 'Germany', 'German'),
   ('Hamburg', 'Germany', 'German'),
   ('Budapest', 'Hungary', 'Hungarian'),
   ('Dublin', 'Ireland', 'English'),
   ('Rome', 'Italy', 'Italian'),
   ('Venice', 'Italy', 'Italian'),
   ('Tokyo', 'Japan', 'Japanese'),
   ('Cape Town', 'South Africa', 'English'),
   ('New York', 'USA', 'English'),
   ('London', 'United Kingdom', 'English'),
   ('Turkey', 'Istanbul', 'Turkish');

INSERT INTO preferences (mood) VALUES
   ('slow pace'),
   ('adventure'),
   ('family fun'),
   ('shopping'),
   ('beach'),
   ('sport'),
   ('food & drink'),
   ('city highlights'),
   ('day trip'),
   ('half day trip'),
   ('introduction to city'),
   ('nightlife'),
   ('outdoors'),
   ('cultural'),
   ('tourist spots'),
   ('off tourist trail');

INSERT INTO age_groups (category, min_age, max_age) VALUES
   ('children', 0, 18),
   ('teens', 12, 18),
   ('young adults', 19, 26),
   ('mature adults', 27, 45),
   ('middle ages', 46, 56),
   ('older adults', 57, 66),
   ('retirees', 67, 100);


INSERT INTO age_preferences (age_id, preference_id, theme_id) VALUES 
   (1, 2, 1),
   (1, 2, 4),
   (2, 3, 4),
   (7, 7, 3),
   (1, 2, 4);

INSERT INTO budgets (category, min_cost, max_cost) VALUES
   ('low', 20.0, 99.0),
   ('medium', 100.0, 399.0),
   ('high', 400.0, 999.0),
   ('expensive', 1000.0, 10000.0);

INSERT INTO themes (activity, description, budget_id, preference_id) VALUES
   ('big bus tour', 'get on and off big city bus', 1, 1),
   ('galaria shopping', 'go shopping all malls', 3, 2),
   ('night clubs', 'go clubbing', 3, 3),
   ('soccer match', 'go to local club team match', 2, 4);

INSERT INTO city_preferences (preference_id, city_id) VALUES
   (2,1), (3,2), (3,3), (3,4), (4,5), (6,7), (8,8),
   (14,12), (11,10), (9,8), (12,15), (13,3), (14,13);
