import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry,
		 getAllCities,
		getCityByPreference } from '../services/retrieve_city.js';
import { updateTheme } from '../services/update_theme.js';
import { deleteCity } from '../services/delete_city.js';
import { compareHashed } from '../auth';
import { sendResetEmail } from '../email';
import { createUser,
         getUserByUsername,
         getPasswordResetKey,
         changePassword,
         deleteResets,
         savePasswordResetKey } from '../services/users.js';


const convertUserFromDatabase = user => {
	//console.log("in convertUserFromDatabase");
	user.displayName = user.display_name;
	delete user.display_name;

	//console.log("user.displayName = ", user.displayName);
	//console.log("user.username = ", user.username);
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
   cityByPreference: async (args, request) => {
	const { preference } = args;
    //console.log("cityByPreference preference = ", preference);

	const {city} = await getCityByPreference(preference);
	//console.log("resolvers cityByPreference returns: ", city);

	return city; 
   },   
   deleteCity: async({ deleteCityInput }, {session}) => {
	   try {

		  const { city } = deleteCityInput;

	      const retStat = await deleteCity(city);

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
  addCity: async({addCityInput}, {session}) => {
	try {
		const {city, country, language } = addCityInput;

	   const retcity = await addCity(addCityInput);
	   //console.log("return retcity = ", retcity);
		   return retcity;
	}
	catch(err) {
		return city; // city will be blank
		}
   },

   signup: async({user}, {session}) => {
	   try {

	   session.user = convertUserFromDatabase(await createUser(user));
	   //console.log("session.user.displayName = ", session.user.displayName);
	   //console.log("session.user.username = ", session.user.username);
	   return session.user;
           }
	   catch(err)
	   {
                console.error(err); 
	   }
   },
   login: async({loginInput: { username, password }}, {session}) => {
	   try {
           const user = await getUserByUsername(username);

	   if(!user){
               //console.log("username " + username + " is not in the database");
	       session.user = null;
	       return session.user;
           }
           const matches = await compareHashed(password, user.password);

           session.user = matches ? convertUserFromDatabase(user) : null;

	   return session.user;
           }
	   catch(err)
	   {
                console.error(err); 
	   }
   },
   logout: async(args, { session }) => {
	   delete session.user;

	   return { wasSuccessful: true };
   },
   requestPasswordReset: async({ username }) => {
          try {
             const key = await sendResetEmail(await getUserByUsername(username));
             await savePasswordResetKey(username, key);
          } catch (err) {
             console.log(err);
             return { wasSuccessful: false };
          }
          return { wasSuccessful: true };
   },
   resetPassword: async({ resetInput: {username, password, key } }, { session }) => {
          const user = await getUserByUsername(username);
	  const storedKey = await getPasswordResetKey(user);

	  //console.log("key = ", key);
	  //console.log("storedKey = ", storedKey);
	   
	  if(key !== storedKey) throw new Error('Invalid password reset key');

	  await changePassword(user.id, password);
	  await deleteResets(user);
	  session.user = convertUserFromDatabase(user);
	  return session.user;
   },
   currentUser: (args, { session }) => session.user,

   availCity: async (args, request) => {
		//console.log("in availCity");

	    const {city} = await getAllCities();
	    //console.log("resolvers availCity returns: ", city);

	    return city; 
	},
};

export default resolvers;
