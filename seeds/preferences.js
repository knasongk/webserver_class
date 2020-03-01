
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
	   mood: 'sport'
	}
    ]);
 
    await knex('city_preferences').truncate();
    await knex('city_preferences').insert([
	{ preference_id: 2, city_id: 1},
	{ preference_id: 2, city_id: 3},
	{ preference_id: 3, city_id: 1}
     ]);
};
