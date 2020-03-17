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

INSERT INTO users (id, display_name, username, email, destination_id, created_at, update_at) VALUES 
   (1, 'knasongk', 'Ken Nasongkhla', 'knasongk@yahoo.com', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   (2, 'madnat', 'Natalie Shannon', 'madnatj1@gmail.com', 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
   (3, 'tnguyen', 'Tam Nguyen', 'tytntam@gmail.com', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 


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

INSERT INTO city_preferences (preference_id, city_id) VALUES
   (2,1), (3,2), (3,3), (3,4), (4,5), (6,7), (8,8),
   (14,12), (11,10), (9,8), (12,15), (13,3), (14,13);
