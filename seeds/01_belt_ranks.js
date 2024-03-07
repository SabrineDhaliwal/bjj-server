exports.seed = async function (knex) {
  await knex("belt_ranks").del();
  await knex("belt_ranks").insert([
    {
      belt_rank_id: 1,
      belt_rank: "no-gi",
    },
    {
      belt_rank_id: 2,
      belt_rank: "white belt",
    },
    {
      belt_rank_id: 3,
      belt_rank: "blue belt",
    },
    {
      belt_rank_id: 4,
      belt_rank: "purple belt",
    },
    
    {
      belt_rank_id: 5,
      belt_rank: "brown belt",
    },
    {
      belt_rank_id: 6,
      belt_rank: "black belt",
    },
  ]);
};
