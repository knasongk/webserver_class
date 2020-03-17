import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry } from '../services/retrieve_city.js';
import { updateTheme } from '../services/update_theme.js';
import { deleteCity } from '../services/delete_city.js';
import { createUser } from '../services/users.js';


const convertUserFromDatabase = user => {
	console.log("in convertUserFromDatabase");
	user.displayName = user.display_name;
	delete user.display_name;

	console.log("user.displayName = ", user.displayName);
	console.log("user.username = ", user.username);
	return user;
}

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
   signup: async(user, {session}) => {
	   try {
	   const { displayName, email, password, username } = user;
	   console.log("displayName = ", displayName);
	   console.log("email = ", email);
	   console.log("password = ", password);
	   console.log("username = ", username);

           if(!session.user)
		   console.log("session.user is null");
           else {
	     console.log("ksn1: session.user.displayName = ", session.user.displayName);
	     console.log("ksn1: session.user.username = ", session.user.username);
           }

	   console.log("in signup new2");
	   session.user = convertUserFromDatabase(await createUser(user));
	   console.log("session.user.displayName = ", session.user.displayName);
	   console.log("session.user.username = ", session.user.username);
	   return session.user;
           }
	   catch(err)
	   {
                console.error(err); 
	   }
   },
   

};

export default resolvers;
