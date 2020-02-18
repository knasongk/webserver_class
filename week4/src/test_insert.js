import knex from './database'

const addCity = async city =>
	await knex('destinations')
          .insert(city, 'id');
        console.log("done addCity");

const ids = addCity([{ city: 'Bangkok',  
	   country: 'Thailand',
	   language: 'Thai' }]);

console.log("ids = ", ids);


console.log("done inserting");
