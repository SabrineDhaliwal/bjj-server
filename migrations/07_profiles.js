/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex){
    return knex.schema.createTable('profiles', (table) =>{
        table.increments('profile_id').primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.integer("belt_rank_id").unsigned().notNullable();
        table.string("belt_rank").notNullable();
        table.integer("club_id").unsigned().notNullable();
        table.string("club_name").notNullable();
        table.text("bio").nullable();
        table.string("image").nullable();
        table.integer("user_id").unsigned().notNullable();


        table.foreign("belt_rank_id").references("belt_ranks.belt_rank_id");
        table.foreign("club_id").references("clubs.club_id");
        table.foreign('user_id').references('users.user_id')
    
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex){
    return knex.schema.dropTable('profiles')
   
};
