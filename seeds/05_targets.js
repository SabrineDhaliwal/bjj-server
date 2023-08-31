exports.seed = async function (knex) {
  await knex("targets").del();
  await knex("targets").insert([
    { target_id: 1, target_name: "Elbow" },
    { target_id: 2, target_name: "Shoulder" },
    { target_id: 3, target_name: "Neck" },
    { target_id: 4, target_name: "Ankle" },
    { target_id: 5, target_name: "Knee" },
  ]);
};
