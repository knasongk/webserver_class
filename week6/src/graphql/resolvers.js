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
	   const getCity = await getCityByCountry(country);

	   console.log("getCity = ", getCity);

	   // not sure if need to add data field
	   const dataCity = {data:{getCity}};
	   console.log("dataCity = ", dataCity);
           
	   // not sure if we need to stringify before returning the response
	   const resJason = JSON.stringify(dataCity);
	   console.log("resJason = ", resJason); // log the returning string
	   
	   return resJason; 

	   // somehow the client makeRequest_2() shows responseJson.data = {getCity:null}
	   // so I am unable to read the response data returning from this getCity resolvers.
   },
};

export default resolvers;
