
exports.up = async knex => {
   await knex.schema.dropTableIfExists('city_preferences');
   await knex.schema.dropTableIfExists('users');
   await knex.schema.dropTableIfExists('destinations');
   await knex.schema.dropTableIfExists('preferences');

// create destinations table
   await knex.schema.createTable('destinations', table => {
     table.increments();
     table.string('city', 50)
	   .unique().notNullable();
     table.string('country', 50)
	   .notNullable();
     table.string('language', 50)
	   .notNullable();
     });

// create users table
   await knex.schema.createTable('users', table => {
     table.increments();
     table.string('display_name', 100)
	   .unique().notNullable();
     table.string('username', 100)
	   .unique().notNullable();
     ['created_on', 'last_login'].forEach(column =>
	     table.timestamp(column).defaultTo(knex.fn.now())
	     .notNullable());
     });

// create preferences table
   await knex.schema.createTable('preferences', table => {
     table.increments();
     table.string('mood', 100)
	   .unique().notNullable();
     });

// create city_preferences table
   await knex.schema.createTable('city_preferences', table => {
     table.integer('city_id')
	   .notNullable();
     table.integer('preference_id')
	   .notNullable();
     table.foreign('city_id').references('destinations.id')
	   .onDelete('cascade');
     table.foreign('preference_id').references('preferences.id')
	   .onDelete('cascade');
     table.primary(['city_id', 'preference_id']);
     });

// create themes table
   await knex.schema.createTable('themes', table => {
     table.increments();
     table.string('activity', 200)
	   .unique().notNullable();
     table.text('description');
     table.integer('preference_id')
	   .notNullable();
     table.foreign('preference_id').references('preferences.id')
	   .onDelete('cascade');
     });
};

exports.down = async knex => {
   await knex.schema.dropTableIfExists('city_preferences');
   await knex.schema.dropTableIfExists('users');
   await knex.schema.dropTableIfExists('destinations');
   await knex.schema.dropTableIfExists('preferences');

// create destinations table
   await knex.schema.createTable('destinations', table => {
     table.increments();
     table.string('city', 50);
     table.string('country', 50);
     table.string('language', 50);
     });

// create users table
   await knex.schema.createTable('users', table => {
     table.increments();
     table.string('display_name', 100);
     table.string('username', 100);
     table.integer('destination_id');
     table.string('email', 100);
     ['created_on', 'last_login'].forEach(column =>
	     table.timestamp(column).defaultTo(knex.fn.now()));
     });

// create preferences table
   await knex.schema.createTable('preferences', table => {
     table.increments();
     table.string('mood', 100);
     });

// create city_preferences table
   await knex.schema.createTable('city_preferences', table => {
     table.integer('city_id');
     table.integer('preference_id');
     });
	
// create themes table
   await knex.schema.createTable('themes', table => {
     table.increments();
     table.string('activity', 200);
     table.text('description');
     table.integer('preference_id');
     });
};

