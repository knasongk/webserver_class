import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry } from '../services/retrieve_city.js';
import { updateTheme } from '../services/update_theme.js';
import { deleteCity } from '../services/delete_city.js';

const resolvers = {
   cityByCountry: async (args, request) => {
	   console.log("in cityByCountry of the resolvers");

	   const { country } = args;
           console.log("country = ", country);

	   
	   const {city} = await getCityByCountry(country);
	   console.log("in resolvers cityByCountry: city = ", city);

	   return city; 
   },
};

export default resolvers;
