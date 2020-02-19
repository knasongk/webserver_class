import knex from '../database'

const addCity = async city => { 
	 const [dest_id] = await knex('destinations')
          .insert(city,'id');
	console.log('addCity =', dest_id);
	return { id: dest_id };
};


console.log("kn1");


export const addNewCity = async () => {
	const k_id = await addCity([{ city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
	console.log('addNewCity = ', k_id);
};

addNewCity();
console.log("done inserting");
