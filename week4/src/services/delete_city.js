import knex from '../database'

export const deleteCity = async cityId => {
	try {
	console.log("cityId = ", cityId);
	await knex('destinations')
          .where({id: cityId})
	  .del();
	return true;
	} catch(e) {
		console.error(e);
		return false;
	}
};

