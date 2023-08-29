/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex){
    return knex.schema.createTable('techs', (table)=>{
        table.increments('tech_id').primary();
        table.string("tech_name").notNullable();
        table.string("type").notNullable();
        table.string("level").notNullable();
        table.string('description').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("techs");
};