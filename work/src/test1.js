import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

var app = express();
app.use(cors());
app.use(express.json()); // for all routes

var port = process.env.PORT || 8080;

app.get('/api/foo', (request, response) => {
	const { method, body } = request;
	
	console.log(method); // 'get'
	console.log(body);

	response.send(`I received your ${method}`);
});

app.listen(port, function() {
	console.log(`Node.js listening on port ${port}`)
});
