import knex from '../database'

export const updateTheme = async theme => {
	try {
	//console.log("theme.d = ", theme.description);
	//console.log("theme.id = ", theme.id);
	var retStat = await knex('themes')
          .update({ description: theme.description })
          .where({id: theme.id});
	return retStat;
	} catch(e) {
		console.error(e);
		return false;
	}
};


