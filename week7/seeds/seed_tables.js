import { hashPassword } from '../src/auth'

exports.seed = async knex => {
	await knex('destinations').del();
	await knex('destinations').insert([
	  {
             city: 'Melbourne',
	     country: 'Australia',
	     language: 'English'
	  },
	  {
             city: 'Sydney',
	     country: 'Australia',
	     language: 'English'
	  },
	  {
             city: 'Brussels',
	     country: 'Belgium',
	     language: 'English'
	  },
	  {
             city: 'Hong Kong',
	     country: 'China',
	     language: 'Chinese'
	  },
	  {
             city: 'Prague',
	     country: 'Czech Republic',
	     language: 'Czech'
	  },
	  {
             city: 'Paris',
	     country: 'France',
	     language: 'French'
	  },
	  {
             city: 'Berlin',
	     country: 'Germany',
	     language: 'German'
	  },
	  {
             city: 'Hamburg',
	     country: 'Germany',
	     language: 'German'
	  },
	  {
             city: 'Budapest',
	     country: 'Hungary',
	     language: 'Hugarian'
	  },
	  {
             city: 'Dublin',
	     country: 'Ireland',
	     language: 'English'
	  },
	  {
             city: 'Rome',
	     country: 'Italy',
	     language: 'Italian'
	  },
	  {
             city: 'Venice',
	     country: 'Italy',
	     language: 'Italian'
	  },
	  {
             city: 'Tokyo',
	     country: 'Japan',
	     language: 'Japanese'
	  },
	  {
             city: 'Cape Town',
	     country: 'South Africa',
	     language: 'English'
	  },
	  {
             city: 'New York',
	     country: 'United States',
	     language: 'English'
	  },
	  {
             city: 'London',
	     country: 'England',
	     language: 'English'
	  },
	  {
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
	     password: await hashPassword('please12')
	  },
	  {
             display_name: 'madnat',
	     username: 'Natalie Nasongkhla',
	     email: 'madnat@yahoo.com',
	     password: await hashPassword('madnatJ')
	  },
	  {
             display_name: 'tnt',
	     username: 'Tam Nguyen',
	     email: 'tntam@yahoo.com',
	     password: await hashPassword('tntTam')
	  }
	]);
};
