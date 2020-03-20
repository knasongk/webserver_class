import knex from 'knex'
import config from '../knexfile.js'
import pg from 'pg'

pg.types.setTypeParser(20, 'text', parseInt);
export default knex(
	config[process.env.NODE_ENV ||'development']
);
