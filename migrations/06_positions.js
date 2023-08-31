/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('positions', (table)=> {
        table.increments("position_id").primary();
        table.string("position_name").notNullable();
        table.text("description").notNullable();
    
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
    return knex.schema.dropTable('positon');
};
