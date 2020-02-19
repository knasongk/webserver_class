import knex from '../database'
const getCityByCountry = async country => {
	const results = await knex('destinations')
	.where({country})
	.select('city');
	return results;
};

export const getGermanyId = async() => {
	const country='Germany';
	const id=await getCityByCountry(country);
	let kstr = JSON.stringify(id);
	console.log("kstr = ", kstr);
	return;
};

getGermanyId();
console.log("this is the end");
