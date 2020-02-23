import express from 'express'
import cors from 'cors'
import { getTourById } from './tours.js';
import { addNewCity } from './services/insert_city.js';

const app = express();

//const staticRoute = express.static(__dirname + '/public');
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
	//
	// hard code the city insert for now
	//
	
	const city = [{id: 20, city:'Bangkok', country:'Thailand', language:'Thai'}];

	const ret_city = await addNewCity(city);
	console.log("ret_city = ", ret_city);

	console.log("addedCity = ", ret_city.addedCity);

	var myJSON = JSON.stringify(ret_city);
	console.log("myJSON = ", myJSON);

	res.json({myJSON});
};

app.get('/api/tour/:id', tourPackage); 

app.post('/api/addCity', addCityRoute);


app.listen(port, function() {
	console.log(`ksn: listening on port ${port}`)
});
