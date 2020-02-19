import knex from '../database'

export const updateCity = async cityname => {
	await knex('destinations')
          .update({ city: cityname})
          .where({city: 'Turkeymeat'});
	console.log("updateCity");
}

updateCity('Turkey');

console.log("done updating");
