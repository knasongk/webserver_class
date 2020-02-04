import express from 'express'
import cors from 'cors'

const app = express();
//const staticRoute = express.static('public');
const staticRoute = express.static(__dirname + '/public');
app.use('/', staticRoute);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`listening on port ${port}`)
});
