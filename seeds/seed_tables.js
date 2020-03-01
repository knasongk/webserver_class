
exports.seed = async knex => {
	await knex('destinations').del();
	await knex('destinations').insert([
	  {
             id: 1,
             city: 'Melbourne',
	     country: 'Australia',
	     language: 'English'
	  },
	  {
	     id: 2,
             city: 'Sydney',
	     country: 'Australia',
	     language: 'English'
	  },
	  {
	     id: 3,
             city: 'Brussels',
	     country: 'Belgium',
	     language: 'English'
	  }
	]);

	await knex('users').truncate();
	await knex('users').insert([
	  {
             display_name: 'knasongk',
	     username: 'Ken Nasongkhla',
	     email: 'knasongk@yahoo.com',
	     destination_id: 2
	  },
	  {
             display_name: 'madnat',
	     username: 'Natalie Nasongkhla',
	     email: 'matnat@yahoo.com',
	     destination_id: 2
	  },
	  {
             display_name: 'tnt',
	     username: 'Tam Nguyen',
	     email: 'tnt@gmail.com',
	     destination_id: 1 
	  }
	]);
};
