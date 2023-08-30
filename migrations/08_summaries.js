/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex){
    return knex.schema.createTable('summaries', (table)=>{
        table.increments("summary_id").primary;
        table.integer("user_id").unsigned();
        table.integer("combo_id").unsigned();
        // from user input- form
        table.string("title").notNullable();
        table.text("summary").notNullable();
        table.string("video").notNullable();
        table.string("date").notNullable

        table.foreign("user_id").references("users.user_id");
        table.foreign("combo_id").references("combos.combo_id");

    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('combos')
    .dropTable('users')
    .dropTable("summaries")
}