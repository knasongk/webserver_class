import knex from '../database'

const addCity = async city => { 
	 const [dest_city] = await knex('destinations')
          .insert(city)
	  .returning('city');
	console.log('addCity =', dest_city);
	return { dest_city };
};

console.log("kn1");

export const addNewCity = async () => {
	const addedCity = await addCity([{ 
	   id: 30,
           city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
	console.log('addNewCity = ', addedCity);
	console.log('ksn dest_city = ', addedCity.dest_city);
	return {addedCity};
};

//addNewCity();
console.log("done inserting");
