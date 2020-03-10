import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry } from '../services/retrieve_city.js';
import { updateTheme } from '../services/update_theme.js';
import { deleteCity } from '../services/delete_city.js';

const resolvers = {
   cityByCountry: async (args, request) => {
	   const { country } = args;
           //console.log("cityByCountry country = ", country);

	   const {city} = await getCityByCountry(country);
	   //console.log("resolvers cityByCountry returns: ", city);

	   return city; 
   },
   deleteCity: async({ id }) => {
	   try {
	      //console.log(" deleteCity id = ", id);

	      const retStat = await deleteCity(parseFloat(id));

	      if(retStat == true) 
                 return { wasSuccessful: true };
	      else 
                 return { wasSuccessful: false };

	   }
	   catch(err) {
		   return { wasSuccessful: false };
           }
   },
   updateTheme: async(args, request) => {
	   try {
	      //console.log("in updateTheme");
	      const retStat = await updateTheme(args);

	      if(retStat == true) 
                 return { wasSuccessful: true };
	      else 
                 return { wasSuccessful: false };

	   }
	   catch(err) {
		   return { wasSuccessful: false };
           }
    },


};

export default resolvers;
