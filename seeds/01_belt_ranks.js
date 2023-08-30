exports.seed = async function (knex) {
  await knex("belt_ranks").del();
  await knex("belt_ranks").insert([
    {
      belt_rank_id: 1,
      belt_rank: "no-gi",
    },
    {
      belt_rank_id: 2,
      belt_rank: "white belt - no stripe",
    },
    {
      belt_rank_id: 3,
      belt_rank: "white belt - 1 stripe",
    },
    {
      belt_rank_id: 4,
      belt_rank: "white belt - 2 stripe",
    },
    {
      belt_rank_id: 5,
      belt_rank: "white belt - 3 stripe",
    },
    {
      belt_rank_id: 6,
      belt_rank: "white belt - 4 stripe",
    },
    {
      belt_rank_id: 7,
      belt_rank: "blue belt - no stripe",
    },
    {
      belt_rank_id: 8,
      belt_rank: "blue belt - 1 stripe",
    },
    {
      belt_rank_id: 9,
      belt_rank: "blue belt - 2 stripe",
    },
    {
      belt_rank_id: 10,
      belt_rank: "blue belt - 3 stripe",
    },
    {
      belt_rank_id: 11,
      belt_rank: "blue belt - 4 stripe",
    },
    {
      belt_rank_id: 12,
      belt_rank: "purple belt - no stripe",
    },
    {
      belt_rank_id: 13,
      belt_rank: "purple belt - 1 stripe",
    },
    {
      belt_rank_id: 14,
      belt_rank: "purple belt - 2 stripe",
    },
    {
      belt_rank_id: 15,
      belt_rank: "purple belt - 3 stripe",
    },
    {
      belt_rank_id: 16,
      belt_rank: "purple belt - 4 stripe",
    },
    {
      belt_rank_id: 17,
      belt_rank: "brown belt - no stripe",
    },
    {
      belt_rank_id: 18,
      belt_rank: "brown belt - 1 stripe",
    },
    {
      belt_rank_id: 19,
      belt_rank: "brown belt - 2 stripe",
    },
    {
      belt_rank_id: 20,
      belt_rank: "brown belt - 3 stripe",
    },
    {
      belt_rank_id: 21,
      belt_rank: "brown belt - 4 stripe",
    },
    {
      belt_rank_id: 22,
      belt_rank: "black belt - no stripe",
    },
    {
      belt_rank_id: 23,
      belt_rank: "black belt - 1 stripe",
    },
    {
      belt_rank_id: 24,
      belt_rank: "black belt - 2 stripe",
    },
    {
      belt_rank_id: 25,
      belt_rank: "black belt - 3 stripe",
    },
  ]);
};
