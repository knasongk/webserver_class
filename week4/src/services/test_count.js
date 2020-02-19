import knex from './database'

const getDestinationsCount = async() => parseFloat((await knex('destinations').count())[0].count);

export const getCount = async () => {
   const count = await getDestinationsCount();

   console.log('count = ', count);
}


console.log("kn10");

getCount();

console.log("done getDestinationsCount");
