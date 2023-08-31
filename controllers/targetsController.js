const knex = require('knex')(require("../knexfile"));

//TODO get request to populate target dropdown menue

//LATER TODO
// post new target
// delete target

const getTarget = (req, res) => {
    knex("targets")
    .select("target_id", "target_name")
    .then((targetresponse)=> {
        console.log(targetresponse)
        res.status(200).send(targetresponse)
    })
    .catch((err)=> {
        console.error(err, "error at target controller");
        res.status(500).send("internal error at target controller");
    });
};

module.exports = {
    getTarget,
};