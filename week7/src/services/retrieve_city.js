import knex from '../database'
export const getCityByCountry = async country => {
	//console.log("getCitybyCountry for country = ", country);
	var city = await knex('destinations')
	.where({country})
	.select('city');

	//console.log("services getCityByCountry() city = ", city);
	return {city};
};
