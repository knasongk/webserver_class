
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
	  },
	  {
	     id: 4, 
             city: 'Hong Kong',
	     country: 'China',
	     language: 'Chinese'
	  },
	  {
	     id: 5,
             city: 'Prague',
	     country: 'Czech Republic',
	     language: 'Czech'
	  },
	  {
	     id: 6,
             city: 'Paris',
	     country: 'France',
	     language: 'French'
	  },
	  {
	     id: 7,
             city: 'Berlin',
	     country: 'Germany',
	     language: 'German'
	  },
	  {
	     id: 8,
             city: 'Hamburg',
	     country: 'Germany',
	     language: 'German'
	  },
	  {
	     id: 9,
             city: 'Budapest',
	     country: 'Hungary',
	     language: 'Hugarian'
	  },
	  {
	     id: 10,
             city: 'Dublin',
	     country: 'Ireland',
	     language: 'English'
	  },
	  {
	     id: 11,
             city: 'Rome',
	     country: 'Italy',
	     language: 'Italian'
	  },
	  {
	     id: 12,
             city: 'Venice',
	     country: 'Italy',
	     language: 'Italian'
	  },
	  {
	     id: 13,
             city: 'Tokyo',
	     country: 'Japan',
	     language: 'Japanese'
	  },
	  {
	     id: 14,
             city: 'Cape Town',
	     country: 'South Africa',
	     language: 'English'
	  },
	  {
	     id: 15,
             city: 'New York',
	     country: 'USA',
	     language: 'English'
	  },
	  {
	     id: 16,
             city: 'London',
	     country: 'England',
	     language: 'English'
	  },
	  {
	     id: 17,
             city: 'Turkey',
	     country: 'Istanbul',
	     language: 'Turkish'
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
