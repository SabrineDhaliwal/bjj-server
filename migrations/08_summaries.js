/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex){
    return knex.schema.createTable('summaries', (table)=>{
        table.increments("summary_id").primary();
        table.integer("user_id").unsigned();
        table.integer("tech_id").unsigned();
        table.string("tech_name").notNullable();
        // table.integer("target_id").unsigned();
        // table.string("target_name").notNullable();
        table.integer("position_id").unsigned();
        table.string("position_name").notNullable

        // from user input- form
        table.string("title").notNullable();
        table.text("summary").nullable();
        table.string("video").nullable();
        table.string("date").notNullable();

        table.foreign("user_id").references("users.user_id");
        table.foreign("tech_id").references("techs.tech_id");
        // table.foreign("target_id").references("targets.target_id");
        table.foreign("position_id").references("positions.position_id");
        

    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema
    // .dropTable('users')
    // .dropTable("techs")
    // .dropTable("targets")
    .dropTable("summaries")
}