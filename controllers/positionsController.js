const knex = require('knex')(require("../knexfile"));

//TODO get request to populate position dropdown menu

//LATER TODO
// post new postion
// delete position

const getPosition = (req, res) => {
    knex("positions")
    .select("position_id", "position_name")
    .then((positionresponse)=> {
        res.status(200).send(positionresponse)
    })
    .catch((err)=> {
        console.error(err, "error at position controller");
        res.status(500).send("internal error at position controller");
    });
};

const getPositionById = (req, res)=> {
    knex('positions')
    .select('*')
    .where('position_id', req.params.id)
    .then((getPositionByIdRes)=>{
        res.status(201).send(getPositionByIdRes)
    })
    .catch((err)=> {
        console.error(err, "error at getPositionById")
        res.status(500).send('internal error at getPositionById')
    })
}
module.exports = {
    getPosition,
    getPositionById
};