import express from 'express'
import graphqlHTTP from 'express-graphql'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'
import session from 'express-session'
import ConnectSessionKnex from 'connect-session-knex'
import knex from './database'

import { getTourById } from './tours.js';

const app = express();
app.use(express.json());

const staticRoute = express.static('public');
app.use('/static/', staticRoute);
app.use('/', staticRoute);

const env = process.env.NODE_ENV || 'development';


const ONE_MONTH = 7 * 24 * 60 *60 * 1000;
const KnexSessionStore = ConnectSessionKnex(session);

app.use(session({
	store: new KnexSessionStore({ knex }),
	secret: 'secretetextgiblet',
	cookie: { maxAge: ONE_MONTH }
}));

app.use('/api/graphql', graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: env === 'development',
}));

const tourPackage = (req, res) => {
        const { id } = req.params || {};
        //console.log("id = ", id);

        const tour = getTourById(parseFloat(id));

        //console.log("tour = ", tour);
        res.json(tour);
};

app.get('/api/tour/:id', tourPackage);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`listening on port ${port}`)
});
