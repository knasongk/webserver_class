import express from 'express'
import graphqlHTTP from 'express-graphql'
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'

const app = express();
app.use(express.json());

const staticRoute = express.static('public');
app.use('/static/', staticRoute);
app.use('/', staticRoute);

const env = process.env.NODE_ENV || 'development';

app.use('/api/graphql', graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: env === 'development',
}));

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`listening on port ${port}`)
});
