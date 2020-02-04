import express from 'express'
import cors from 'cors'
import { getTourById } from './tours.js';

const app = express();

const staticRoute = express.static(__dirname + '/public');
app.use('/', staticRoute);

var port = process.env.PORT || 8080;

const tourPackage = (req, res) => {
	const { id } = req.params || {};
//	console.log("id = ", id);

	const tour = getTourById(parseFloat(id));
	res.json(tour);
};

app.get('/api/tour/:id', tourPackage); 


app.listen(port, function() {
	console.log(`listening on port ${port}`)
});
