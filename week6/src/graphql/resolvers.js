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
   addCity: async(args, request) => {
	   try {
	      const city = await addCity(args);
	      //console.log("return city = ", city);
              return city;
	   }
	   catch(err) {
		   return city; // city will be blank
           }
    },


};

export default resolvers;
