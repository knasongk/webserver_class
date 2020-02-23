import knex from '../database'
const getCityByCountry = async country => {
	const results = await knex('destinations')
	.where({country})
	.select('city');
	return results;
};

export const retrieveCity = async Item => {
	console.log("Item = ", Item);
	console.log("Item.country = ", Item.country);
	const retrieveItem=await getCityByCountry(Item.country);

	let kstr = JSON.stringify(retrieveItem);
	console.log("kstr = ", kstr);
	
	return {retrieveItem};
};

