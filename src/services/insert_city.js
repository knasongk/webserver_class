import knex from '../database'

export const addCity = async newcity => { 
    try {	 
	const [city] = await knex('destinations')
          .insert(newcity)
	  .returning('city');
	//console.log('addCity =', city);
	
	return {city};
	} catch(e) {
		console.error(e);
		return({city: ''});
	}
};
