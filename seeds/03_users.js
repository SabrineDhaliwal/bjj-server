const bcrypt = require('bcrypt')

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      user_id: 1,
      password: bcrypt.hashSync("password", 10),
      confirmPassword: bcrypt.hashSync("password", 10),
      email: "sabrine@example.com",
    },
    {
      user_id: 2,
      password: bcrypt.hashSync("password", 10),
      confirmPassword: bcrypt.hashSync("password", 10),
      email: "john@example.com",
    },
 

  ]);
};
