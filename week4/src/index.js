import express from 'express'
import cors from 'cors'
import { getTourById } from './tours.js';
import { addNewCity } from './services/insert_city.js';
import { retrieveCity } from './services/retrieve_city.js';
import { updateTheme } from './services/update_theme.js';
import { deleteCity } from './services/delete_city.js';

const app = express();

const staticRoute = express.static('../public');
app.use('/', staticRoute);

var port = process.env.PORT || 8080;

const tourPackage = (req, res) => {
	const { id } = req.params || {};
//	console.log("id = ", id);

	const tour = getTourById(parseFloat(id));

	console.log("tour = ", tour);
	res.json(tour);
};


const addCityRoute = async (req, res) => {
//	console.log("req.body = ", req.body);
	//
	// not sure why the body parser does not work
	// <need help> to figure out how to correctly read the 
	// req.body that was pass in from the addCity() from public/main.js
	// hard code the city insert for now
	//
	
	const city = [{id: 20, city:'Bangkok', country:'Thailand', language:'Thai'}];

	const ret_city = await addNewCity(city);
	console.log("ret_city = ", ret_city);

	var myJSON = JSON.stringify(ret_city);
	console.log("myJSON = ", myJSON);

	res.json({myJSON});
};

const retrieveCityRoute = async (req, res) => {
//	console.log("req.body = ", req.body);
	//
	// not sure why the body parser does not work
	// <need help> to figure out how to correctly read the 
	// req.body that was pass in from the retrieveCity() from public/main.js
	// hard code the country insert for now
	//
	
	const country = {country:'Italy'};

	const ret_city = await retrieveCity(country);
	console.log("ret_city = ", ret_city);

	console.log("addedCity = ", ret_city.addedCity);

	var myJSON = JSON.stringify(ret_city);
	console.log("myJSON = ", myJSON);

	res.json({myJSON});
};

const updateThemeRoute = async (req, res) => {
//	console.log("req.body = ", req.body);
	//
	// not sure why the body parser does not work
	// <need help> to figure out how to correctly read the 
	// req.body that was pass in from the updateTheme() from public/main.js
	// hard code the theme id and description update for now
	//
	console.log("in updateThemeRoute");
	const theme = {id: 3, description: 'listen to live music'};

	 console.log("updatethemeRoute: theme.id = ", theme.id);
	 console.log("updatethemeRoute: theme.desc = ", theme.description);
	await updateTheme(theme);

	res.json({success: true});
};

const deleteCityRoute = async (req, res) => {
//	console.log("req.body = ", req.body);
	//
	// not sure why the body parser does not work
	// <need help> to figure out how to correctly read the 
	// req.body that was pass in from the deleteCity() from public/main.js
	// hard code the city insert for now
	//
	
	console.log("in deleteCityRoute");
	const cityId = {id: 7};
	console.log("cityId.id = ", cityId.id);

	await deleteCity(cityId.id);

	res.json({success: true});
};

app.get('/api/tour/:id', tourPackage); 
app.post('/api/addCity', addCityRoute);
app.post('/api/retrieveCity', retrieveCityRoute);
app.post('/api/updateTheme', updateThemeRoute);
app.post('/api/deleteCity', deleteCityRoute);


app.listen(port, function() {
	console.log(`ksn: listening on port ${port}`)
});
