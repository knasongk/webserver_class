import knex from '../database'

export const updateTheme = async theme => {
	console.log("theme.d = ", theme.description);
	console.log("theme.id = ", theme.id);
	await knex('themes')
          .update({ description: theme.description })
          .where({id: theme.id});
	console.log("updateTheme");
};


