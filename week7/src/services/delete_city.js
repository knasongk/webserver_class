import knex from '../database'

export const deleteCity = async cityId => {
	try {
	var retStat = await knex('destinations')
          .where({id: cityId})
	  .del();
	return retStat;
	} catch(e) {
		console.error(e);
		return false;
	}
};

