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

	   
	   const {city} = await getCityByCountry(country);
	   console.log("in resolvers getCity: city = ", city);

	   return city; 
   },
};

export default resolvers;
