import knex from './database'

const delCity = async city =>
	await knex('destinations')
          .where({city: 'Bangkok'})
	  .del();

delCity('Bangkok');

console.log("done deleting");
