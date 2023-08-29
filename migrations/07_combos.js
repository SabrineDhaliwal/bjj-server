/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex){
    return knex.schema.createTable('combos', (table) =>{
        table.increments('combo_id').primary();
        table.integer('tech_id').unsigned();
        table.integer('target_id').unsigned();
        table.integer('position_id').unsigned();

        table.foreign('tech_id').references('techs.tech_id');
        table.foreign('target_id').references('targets.target_id');
        table.foreign('position_id').references('positions.position_id');

    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex){
    return knex.schema.dropTable('positions')
    .dropTable("targets")
    .dropTable("techs")
    .dropTable("combos");
};
