exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    { target_id: 1, target: "Elbow" },
    { target_id: 2, target: "Shoulder" },
    { target_id: 3, target: "Neck" },
    { target_id: 4, target: "Ankle" },
    { target_id: 5, target: "Knee" },
  ]);
};
