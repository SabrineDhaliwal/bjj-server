const knex = require("knex")(require("../knexfile"));

//TODO get request to populate tech dropdown menue

//LATER TODO
// post new technique
// delete technique

const getTechs = (req, res) => {
  knex("techs")
    .select("tech_id", "tech_name")
    .then((techresponse) => {
      res.status(200).send(techresponse);
    })
    .catch((err) => {
      console.error(err, "error at tech controller");
      res.status(500).send("internal error at tech controller");
    });
};

const addTech = (req, res) => {
  if (
    !req.body.tech_name ||
    !req.body.type ||
    !req.body.level ||
    !req.body.description
  ) {
    return res.status(400).send("please fill in missing fields");
  } else {
    knex("techs")
      .insert(req.body)
      .then((addtechsresponse) => {
        res.status(201).send(addtechsresponse);
      })
      .catch((err) => {
        console.error(
          err,
          "something went wrong at addTech in Tech Controller"
        );
        res.status(500).send("internal error at addTech,tech controller");
      });
  };
};

const getTechById = (req, res) => {
  knex("techs")
    .select("*")
    .where("tech_id", req.params.id)
    .then((getTechByIdResponse) => {
      res.status(201).send(getTechByIdResponse);
    })
    .catch((err) => {
      console.error(err, "something went wrong at getting tech byid");
      res.status(500).send("internal error at gettingtech byid");
    });
};
module.exports = {
  getTechs,
  addTech,
  getTechById,
};
