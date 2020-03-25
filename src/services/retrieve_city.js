import knex from '../database'
export const getCityByCountry = async country => {
	//console.log("getCitybyCountry for country = ", country);
	var city = await knex('destinations')
	.where({country})
	.select('city');

	//console.log("services getCityByCountry() city = ", city);
	return {city};
};

export const getAllCities = async () => {
	var city = await knex('destinations')
	.select('city');

	//console.log("services getAllCities() city = ", city);
	return {city};
};

export const getCityByPreference = async mood => {
	//console.log("getCitybyPreference for preference = ", mood);

	// first get the id from the preference table
    var prefId = await knex('preferences')
       .where({mood})
	   .select('id');

	const preference_id = prefId[0].id;
	//console.log("preference_id = ", preference_id);

	// second get the city based on the joint table of destinations and city_preferences
	var city = await knex('destinations')
	.join('city_preferences',
		'destinations.id',
		'city_preferences.city_id')
	.where({preference_id})
	.select('city');

	//console.log("services getCityByPreference() city = ", city);
	return {city};
};
