import express from 'express'
import cors from 'cors'

var app = express();

app.use(cors());
//app.use(express.json()); // for all routes

var port = process.env.PORT || 8080;

app.get('/product/:id', cors(), (req, res, next) => {
	res.json({msg: 'This route (only) is CORS-enabled'});
});

app.listen(port, function() {
	console.log(`CORS-enabled and listening on port ${port}`)
});
