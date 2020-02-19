import knex from './database'

const addCity = async city => 
	 await knex('destinations')
          .insert(city)
          .returning('id');


const ids = addCity([{ city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);

setTimeout(function() {
	console.log('ids = ', ids);
}, 3000);


console.log("done inserting");
