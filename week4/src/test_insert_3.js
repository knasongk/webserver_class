import knex from './database'

export const addCity = async city => { 
	 const [dest_id] = await knex('destinations')
          .insert(city,'id');
	return { id: dest_id };
};


console.log("kn1");


export const kenAdd = async () => {
	await addCity([{ 
	   id: 18,
           city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);
};

var ids  = kenAdd();

console.log('ids = ', ids);

console.log("kn2");


setTimeout(function() {
	console.log('wait 3 secs');
}, 3000);

console.log("kn3");
console.log('ids = ', ids);



console.log("done inserting");
