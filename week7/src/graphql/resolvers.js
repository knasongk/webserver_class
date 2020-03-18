import { getTourById } from '../tours.js';
import { addCity } from '../services/insert_city.js';
import { getCityByCountry } from '../services/retrieve_city.js';
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
   signup: async({user}, {session}) => {
	   try {
		   /*
	   const { displayName, email, password, username } = user;
	   console.log("displayName = ", displayName);
	   console.log("email = ", email);
	   console.log("password = ", password);
	   console.log("username = ", username);
	   */

           if(!session.user)
		   console.log("session.user is null");
           else {
	     console.log("signup: session.user.displayName = ", session.user.displayName);
	     console.log("signup: session.user.username = ", session.user.username);
           }

	   console.log("in signup");
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
   login: async({loginInput: { username, password }}, {session}) => {
	   try {
	   console.log("username = ", username);
	   console.log("password = ", password);

           if(!session.user)
		   console.log("session.user is null");
           else {
	     console.log("login: session.user.displayName = ", session.user.displayName);
	     console.log("login: session.user.username = ", session.user.username);
           }

	   console.log("in login");

           const user = await getUserByUsername(username);

	   if(!user){
               console.log("username " + username + " is not in the database");
	       session.user = null;
	       return session.user;
           }

           console.log("user.password = ", user.password);

           const matches = await compareHashed(password, user.password);

	   console.log("matches = ", matches);

           session.user = matches ? convertUserFromDatabase(user) : null;

	   if(!session.user) {
              console.log("password " + password + " does not match for user " + username);
           }
           else {
	     console.log("session.user.displayName = ", session.user.displayName);
	     console.log("session.user.username = ", session.user.username);
	   }
	   return session.user;
           }
	   catch(err)
	   {
                console.error(err); 
	   }
   },
   logout: async(args, { session }) => {
	   console.log("in logout");
	   delete session.user;
	   if(!session.user) {
		   console.log("session.user is now null");
	   }
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

	  console.log("key = ", key);
	  console.log("storedKey = ", storedKey);
	   
	  if(key !== storedKey) throw new Error('Invalid password reset key');

	  await changePassword(user.id, password);
	  await deleteResets(user);
	  session.user = convertUserFromDatabase(user);
	  return session.user;
   },

};

export default resolvers;
