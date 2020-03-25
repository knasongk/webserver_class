import knex from '../database'

export const deleteCity = async cityName => {
	try {
	var retStat = await knex('destinations')
          .where({city: cityName})
	  .del();
	return retStat;
	} catch(e) {
		console.error(e);
		return false;
	}
};

