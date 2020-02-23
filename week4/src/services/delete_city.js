import knex from '../database'

export const deleteCity = async cityId => {
	try {
	await knex('destinations')
          .where({id: cityId})
	  .del();
	} catch(e) {
		console.error(e);
	}
};

