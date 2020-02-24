import express from 'express'
import cors from 'cors'
import { getTourById } from './tours.js';
import { addCity } from './services/insert_city.js';
import { getCityByCountry } from './services/retrieve_city.js';
import { updateTheme } from './services/update_theme.js';
import { deleteCity } from './services/delete_city.js';

const app = express();

// thanks Jeremy.  Wow missing this one line of code causes
// me a lot of headache with get the req.body!
app.use(express.json());

const staticRoute = express.static('public');
app.use('/', staticRoute);

var port = process.env.PORT || 8080;

const tourPackage = (req, res) => {
	const { id } = req.params || {};

	const tour = getTourById(parseFloat(id));

	console.log("tour = ", tour);
	res.json(tour);
};


const addCityRoute = async (req, res) => {
	//console.log("req.body = ", req.body);
	const city = req.body;

	const ret_city = await addCity(city);
	//console.log("ret_city = ", ret_city);

	res.json(ret_city);
};

const retrieveCityRoute = async (req, res) => {
//	console.log("req.body = ", req.body);
	
	const requestItem = req.body;

	const ret_city = await getCityByCountry(requestItem.country);
	console.log("ret_city = ", ret_city);

	res.json(ret_city);
};

const updateThemeRoute = async (req, res) => {
	console.log("req.body = ", req.body);

	const theme = req.body;

	console.log("updatethemeRoute: theme.id = ", theme.id);
	console.log("updatethemeRoute: theme.desc = ", theme.description);
	await updateTheme(theme);

	res.json({success: true});
};

const deleteCityRoute = async (req, res) => {
	console.log("req.body = ", req.body);
	
	const city = req.body;

	await deleteCity(city.id);

	res.json({success: true});
};

app.get('/api/tour/:id', tourPackage); 
app.post('/api/addCity', addCityRoute);
app.post('/api/retrieveCity', retrieveCityRoute);
app.post('/api/updateTheme', updateThemeRoute);
app.post('/api/deleteCity', deleteCityRoute);


app.listen(port, function() {
	console.log(`listening on port ${port}`)
});
