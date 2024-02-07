exports.seed = async function (knex) {
  await knex("profiles").del();
  await knex("profiles").insert([
    {
        profile_id: 6,
      first_name: "tesing",
      last_name: "testing",
      belt_rank: "white belt - 1 stripe",
      belt_rank_id: 3,
      club_name: "matcraft",
      club_id: 1,
      bio: "Just starting out and this is tough!",
      image: "",
      user_id: 1,
    },

    // {
    //   combo_id: 1,
    //   tech_id: 1, // Armbar
    //   target_id: 1, // Elbow
    //   position_id: 1, // Side Control
    // },
    // {
    //   combo_id: 2,
    //   tech_id: 2, // Omoplata
    //   target_id: 2, // Shoulder
    //   position_id: 2, // Closed Guard
    // },
    // {
    //   combo_id: 3,
    //   tech_id: 3, // Kimura
    //   target_id: 2, // Shoulder
    //   position_id: 3, // Half-Guard Top
    // },
    // {
    //   combo_id: 4,
    //   tech_id: 4, // Americana
    //   target_id: 2, // Shoulder
    //   position_id: 4, // Half-Guard Bottom
    // },
    // {
    //   combo_id: 5,
    //   tech_id: 5, // Triangle
    //   target_id: 3, // Neck
    //   position_id: 5, // Mount
    // },
  ]);
};
