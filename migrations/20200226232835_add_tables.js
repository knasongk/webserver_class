
exports.up = async knex => {
   await knex.schema.dropTableIfExists('city_preferences');

   await knex.schema.dropTableIfExists('users');

   await knex.schema.dropTableIfExists('destinations');


   await knex.schema.dropTableIfExists('preferences');

};

exports.down = function(knex) {
  
};
