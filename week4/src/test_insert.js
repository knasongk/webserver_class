import knex from './database'

const addCity = async city => { 
	 const [dest_id] = await knex('destinations')
          .insert(city,'id');
	return { id: dest_id };
};


console.log("kn1");


export const kenAdd = async () => {
	const k_id = await addCity([{ city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
	console.log('kenAdd = ', k_id);
};

kenAdd();


/*
setTimeout(function() {
	console.log('ids = ', ids);
}, 3000);
*/


console.log("done inserting");
