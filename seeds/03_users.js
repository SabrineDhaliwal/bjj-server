exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      user_id: 1,
      password: "P@ssword!",
      confirmPassword: "P@ssword!",
      email: "sabrine@example.com",
    },
    {
      user_id: 2,
      password: "P@ssword!",
      confirmPassword: "P@ssword!",
      email: "john@example.com",
    },
 
   
  ]);
};
