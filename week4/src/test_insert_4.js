import knex from './database'

export const addCity = async city => { 
	 const [dest_id] = await knex('destinations')
          .insert(city,'id');
	return { id: dest_id };
};


console.log("kn1");


export const kenAdd = async () => {
	const k_id = await addCity([{ city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
};

const ids  = kenAdd();

console.log('ids = ', ids);

console.log("kn2");

/*
setTimeout(function() {
	console.log('ids = ', ids);
}, 3000);
*/

console.log("kn3");

console.log("done inserting");
