/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("username").notNullable();
    table.integer("belt_ranks_id").unsigned().notNullable();
    table.integer("clubs_id").unsigned().notNullable();
    table.foreign("belt_ranks_id").references("id").inTable("belt_ranks");
    table.foreign("clubs_id").references("id").inTable("clubs");
    table.string("bio").nullable();
    table.string("string").nullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("clubs")
    .dropTable("belt_ranks");

}
