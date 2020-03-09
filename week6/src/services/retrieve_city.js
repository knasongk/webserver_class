import knex from '../database'
export const getCityByCountry = async country => {
	console.log("getCitybyCountry for country = ", country);
	var cities = await knex('destinations')
	.where({country})
	.select('city');

	console.log("cities = ", cities);
//	return results;
	return {cities};
};

export const retrieveCity = async Item => {
	//console.log("Item = ", Item);
	//console.log("Item.country = ", Item.country);
	const retrieveItem=await getCityByCountry(Item.country);
	
	return {retrieveItem};
};

