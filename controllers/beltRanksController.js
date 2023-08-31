const knex = require("knex")(require("../knexfile"));

//TODO make a get request to populate belt dropdown

// get belt ranks to populate drop down
const getBelts = (req, res) => {
  knex("belt_ranks")
    .select("belt_rank", "belt_rank_id")
    .then((belt_rank) => {
      res.status(200).send(belt_rank);
    })
    .catch((err) => {
      console.error(
        err, "I'm the catch error, if you see you, something went wrong getting belt ranks"
      );
      res.status(500).send("Internal error on belt ranks controller");
    });
};

module.exports = {
  getBelts,
};
