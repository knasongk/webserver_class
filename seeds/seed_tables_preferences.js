
exports.seed = async knex => {
    await knex('preferences').del();
    await knex('preferences').insert([
	{
	   id: 1,
	   mood: 'slow pace'
	},
	{
	   id: 2,
	   mood: 'adventure'
	},
	{
	   id: 3,
	   mood: 'family fun'
	},
	{
	   id: 4,
	   mood: 'shopping'
	},
	{
	   id: 5,
	   mood: 'beach'
	},
	{
	   id: 6,
	   mood: 'sport'
	},
	{
	   id: 7,
	   mood: 'food & drink'
	},
	{
	   id: 8,
	   mood: 'city highlights'
	},
	{
	   id: 9,
	   mood: 'day trip'
	},
	{
	   id: 10,
	   mood: 'half day trip'
	},
	{
	   id: 11,
	   mood: 'city excursion'
	},
	{
	   id: 12,
	   mood: 'nightlife'
	},
	{
	   id: 13,
	   mood: 'outdoors'
	},
	{
	   id: 14,
	   mood: 'cultural'
	},
	{
	   id: 15,
	   mood: 'tourist spots'
	},
	{
	   id: 16,
	   mood: 'off tourist trail'
	}
    ]);
 
    await knex('city_preferences').truncate();
    await knex('city_preferences').insert([
	{ preference_id: 1, city_id: 1},
	{ preference_id: 1, city_id: 2},
	{ preference_id: 1, city_id: 3},
	{ preference_id: 1, city_id: 5},
	{ preference_id: 1, city_id: 7},
	{ preference_id: 1, city_id: 8},
	{ preference_id: 1, city_id: 10},
	{ preference_id: 2, city_id: 4},
	{ preference_id: 2, city_id: 6},
	{ preference_id: 2, city_id: 12},
	{ preference_id: 2, city_id: 17},
	{ preference_id: 2, city_id: 16},
	{ preference_id: 2, city_id: 11},
	{ preference_id: 2, city_id: 15},
	{ preference_id: 2, city_id: 9},
	{ preference_id: 3, city_id: 1},
	{ preference_id: 3, city_id: 9},
	{ preference_id: 3, city_id: 7},
	{ preference_id: 3, city_id: 11},
	{ preference_id: 3, city_id: 12},
	{ preference_id: 3, city_id: 16},
	{ preference_id: 3, city_id: 17},
	{ preference_id: 4, city_id: 1},
	{ preference_id: 4, city_id: 10},
	{ preference_id: 4, city_id: 12},
	{ preference_id: 4, city_id: 16},
	{ preference_id: 4, city_id: 6},
	{ preference_id: 5, city_id: 2},
	{ preference_id: 5, city_id: 4},
	{ preference_id: 5, city_id: 8},
	{ preference_id: 5, city_id: 7},
	{ preference_id: 5, city_id: 11},
	{ preference_id: 5, city_id: 13},
	{ preference_id: 5, city_id: 16},
	{ preference_id: 6, city_id: 3},
	{ preference_id: 6, city_id: 5},
	{ preference_id: 6, city_id: 7},
	{ preference_id: 6, city_id: 9},
	{ preference_id: 6, city_id: 17},
	{ preference_id: 6, city_id: 10},
	{ preference_id: 7, city_id: 12},
	{ preference_id: 7, city_id: 11},
	{ preference_id: 7, city_id: 6},
	{ preference_id: 7, city_id: 1},
	{ preference_id: 7, city_id: 2},
	{ preference_id: 7, city_id: 3},
	{ preference_id: 7, city_id: 8},
	{ preference_id: 8, city_id: 5},
	{ preference_id: 8, city_id: 7},
	{ preference_id: 8, city_id: 8},
	{ preference_id: 8, city_id: 9},
	{ preference_id: 8, city_id: 10},
	{ preference_id: 8, city_id: 11},
	{ preference_id: 8, city_id: 12},
	{ preference_id: 9, city_id: 13},
	{ preference_id: 9, city_id: 14},
	{ preference_id: 9, city_id: 15},
	{ preference_id: 9, city_id: 16},
	{ preference_id: 9, city_id: 3},
	{ preference_id: 9, city_id: 2},
	{ preference_id: 9, city_id: 7},
	{ preference_id: 10, city_id: 9},
	{ preference_id: 10, city_id: 8},
	{ preference_id: 10, city_id: 7},
	{ preference_id: 10, city_id: 6},
	{ preference_id: 10, city_id: 5},
	{ preference_id: 11, city_id: 4},
	{ preference_id: 11, city_id: 3},
	{ preference_id: 11, city_id: 2},
	{ preference_id: 11, city_id: 1},
	{ preference_id: 12, city_id: 2},
	{ preference_id: 12, city_id: 6},
	{ preference_id: 12, city_id: 16},
	{ preference_id: 12, city_id: 14},
	{ preference_id: 13, city_id: 16},
	{ preference_id: 13, city_id: 17},
	{ preference_id: 14, city_id: 6},
	{ preference_id: 14, city_id: 7},
	{ preference_id: 14, city_id: 9},
	{ preference_id: 14, city_id: 10},
	{ preference_id: 15, city_id: 11},
	{ preference_id: 15, city_id: 12},
	{ preference_id: 15, city_id: 13},
	{ preference_id: 15, city_id: 14},
	{ preference_id: 16, city_id: 1},
	{ preference_id: 16, city_id: 6},
	{ preference_id: 16, city_id: 7},
	{ preference_id: 16, city_id: 9},
	{ preference_id: 16, city_id: 10},
	{ preference_id: 16, city_id: 2}
     ]);

    await knex('themes').truncate();
    await knex('themes').insert([
        { 
	   id: 1,
	   activity: 'big bus tour',
	   description: 'get on and off big city bus',
	   preference_id: 8
	},
        { 
	   id: 2,
	   activity: 'galaria shopping',
	   description: 'go shopping to all malls',
	   preference_id: 4 
	},
        { 
	   id: 3,
	   activity: 'night clubs',
	   description: 'go dancing and drinking',
	   preference_id: 8
	},
        { 
	   id: 4,
	   activity: 'soccer match',
	   description: 'go to local club team match',
	   preference_id: 6 
	}
      ]);
};
