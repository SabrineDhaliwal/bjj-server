/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 
exports.up = function(knex){
    return knex.schema.createTable('belt_ranks', (table)=> {
        table.increments("belt_rank_id").primary();
        table.string("belt_rank").notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    
    });

};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
    return knex.schema.dropTable('belt_ranks');
}