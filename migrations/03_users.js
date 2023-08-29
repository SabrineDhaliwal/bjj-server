/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("username").notNullable();
    table.integer("belt_rank_id").unsigned().notNullable();
    table.integer("clubs_id").unsigned().notNullable();

    table.foreign("belt_rank_id").references("belt_ranks.belt_rank_id");
    table.foreign("clubs_id").references("clubs.club_id");

    table.string("bio").nullable();
    table.string("string").nullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("clubs")
    .dropTable("belt_ranks");

}
