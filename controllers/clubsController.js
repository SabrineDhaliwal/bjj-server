const knex = require("knex")(require("../knexfile"));

//TODO get request to get clubs data for dropdown menu

const getClubs = (req, res) => {
    knex("clubs")
    .select("club_id", "club_name")
    .then((clubs)=> {
        res.status(200).send(clubs);
    })
.catch((err)=> {
    console.error(err)
    res.status(500).send("Internal server error at clubs controller")
});
}
module.exports = {
    getClubs
};