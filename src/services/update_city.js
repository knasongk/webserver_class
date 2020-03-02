import knex from '../database'

export const updateCity = async destination => {
	try {
	//console.log("destination.city = ", destination.city);
	//console.log("destination.id = ", destination.id);
	await knex('destinations')
          .update({ city: destination.city })
          .where({id: destination.id});
	return true;
	} catch(e) {
	//	console.error(e);
		return false;
	}
};


