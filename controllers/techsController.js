const knex = require('knex')(require("../knexfile"));

//TODO get request to populate tech dropdown menue

//LATER TODO
// post new technique
// delete technique

const getTechs = (req, res) => {
    // console.log(res)
    knex("techs")
    .select("tech_id", "tech_name")
    .then((techresponse)=> {
        res.status(200).send(techresponse)
    })
    .catch((err)=> {
        console.error(err, "error at tech controller");
        res.status(500).send("internal error at tech controller");
    });
};

module.exports = {
    getTechs,
};