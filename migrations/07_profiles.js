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
    
        

        // table.increments('combo_id').primary();
        // table.integer('tech_id').unsigned();
        // table.integer('target_id').unsigned();
        // table.integer('position_id').unsigned();

        // table.foreign('tech_id').references('techs.tech_id');
        // table.foreign('target_id').references('targets.target_id');
        // table.foreign('position_id').references('positions.position_id');


    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex){
    return knex.schema.dropTable('profiles')
    // .dropTable('belt_ranks')
    // .dropTable('clubs')
    // .dropTable('users')
    // .dropTable("targets")
    // .dropTable("techs")
    // .dropTable("combos");
};
