
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
	{ preference_id: 2, city_id: 1},
	{ preference_id: 2, city_id: 3},
	{ preference_id: 4, city_id: 5},
	{ preference_id: 9, city_id: 7},
	{ preference_id: 5, city_id: 9},
	{ preference_id: 7, city_id: 7},
	{ preference_id: 15, city_id: 10},
	{ preference_id: 14, city_id: 12},
	{ preference_id: 16, city_id: 16},
	{ preference_id: 8, city_id: 11}
     ]);
};
