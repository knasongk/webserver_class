import knex from '../database'

const addCity = async city => { 
    try {	 
	const [dest_city] = await knex('destinations')
          .insert(city)
	  .returning('city');
	console.log('addCity =', dest_city);
	
	return { dest_city };
	} catch(e) {
		console.error(e);
	}
};

//export const addNewCity = async () => {

  export const addNewCity = async newItem => {
	try {

	console.log("newItem = ", newItem);
	
	const addedCity = await addCity(newItem); 

/*
	const addedCity = await addCity([{ 
	   id: 31,
           city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
*/

	console.log('addNewCity = ', addedCity);
	console.log('dest_city = ', addedCity.dest_city);
	
	return {addedCity};
	} catch(e) {
		console.error(e);
		return({"status":"fail"}); 
	}
};
