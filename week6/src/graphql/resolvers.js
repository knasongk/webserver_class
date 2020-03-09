import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry } from '../services/retrieve_city.js';
import { updateTheme } from '../services/update_theme.js';
import { deleteCity } from '../services/delete_city.js';

const resolvers = {
   getCity: async (args, request) => {
	   console.log("in getCity of the resolvers");

	   const { country } = args;
           console.log("country = ", country);

	   const cities = await getCityByCountry(country);
	   console.log("return list of cities = ", cities);

	   // just logging what I assume the resolvers will return to
	   // the calling client
	   const resJason = JSON.stringify(cities);
	   console.log("resJason = ", resJason);
	   
	   // based on your comment, I do not need to stringify the response here
	   return cities; 
   },
};

export default resolvers;
