const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

const beltRanksController = require("../controllers/beltRanksController");
const clubsController = require("../controllers/clubsController");



router.route("/belts").get(beltRanksController.getBelts);
router.route("/clubs").get(clubsController.getClubs);

module.exports = router;