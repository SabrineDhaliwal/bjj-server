exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      belt_rank: "no-gi",
    },
    {
      id: 2,
      belt_rank: "white belt - no stripe",
    },
    {
      id: 3,
      belt_rank: "white belt - 1 stripe",
    },
    {
      id: 4,
      belt_rank: "white belt - 2 stripe",
    },
    {
      id: 5,
      belt_rank: "white belt - 3 stripe",
    },
    {
      id: 6,
      belt_rank: "white belt - 4 stripe",
    },
    {
      id: 7,
      belt_rank: "blue belt - no stripe",
    },
    {
      id: 8,
      belt_rank: "blue belt - 1 stripe",
    },
    {
      id: 9,
      belt_rank: "blue belt - 2 stripe",
    },
    {
      id: 10,
      belt_rank: "blue belt - 3 stripe",
    },
    {
      id: 11,
      belt_rank: "blue belt - 4 stripe",
    },
    {
      id: 12,
      belt_rank: "purple belt - no stripe",
    },
    {
      id: 13,
      belt_rank: "purple belt - 1 stripe",
    },
    {
      id: 14,
      belt_rank: "purple belt - 2 stripe",
    },
    {
      id: 15,
      belt_rank: "purple belt - 3 stripe",
    },
    {
      id: 16,
      belt_rank: "purple belt - 4 stripe",
    },
    {
      id: 17,
      belt_rank: "brown belt - no stripe",
    },
    {
      id: 18,
      belt_rank: "brown belt - 1 stripe",
    },
    {
      id: 19,
      belt_rank: "brown belt - 2 stripe",
    },
    {
      id: 20,
      belt_rank: "brown belt - 3 stripe",
    },
    {
      id: 21,
      belt_rank: "brown belt - 4 stripe",
    },
    {
      id: 22,
      belt_rank: "black belt - no stripe",
    },
    {
      id: 23,
      belt_rank: "black belt - 1 stripe",
    },
    {
      id: 24,
      belt_rank: "black belt - 2 stripe",
    },
    {
      id: 25,
      belt_rank: "black belt - 3 stripe",
    },
  ]);
};
