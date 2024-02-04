/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    // table.string("first_name").notNullable();
    // table.string("last_name").notNullable();
    // table.string("username").notNullable();
    table.string("email").notNullable();
    // table.integer("belt_rank_id").unsigned().notNullable();
    // table.string("belt_rank").notNullable();
    // table.integer("club_id").unsigned().notNullable();
    // table.string("club_name").notNullable();
    table.string("password").notNullable();
    table.string("confirmPassword").notNullable();

    // table.foreign("belt_rank_id").references("belt_ranks.belt_rank_id");
    // table.foreign("club_id").references("clubs.club_id");

    // table.text("bio").nullable();
    // table.string("image").nullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");


}
