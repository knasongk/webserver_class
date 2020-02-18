import knex from './database'

const updateCity = async city =>
	await knex('destinations')
          .update({ city: 'Turkey1'})
          .where({city: 'Turkey'});

updateCity('Turkey');

console.log("done updating");
