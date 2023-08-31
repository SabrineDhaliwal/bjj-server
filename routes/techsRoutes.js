const router = require("express").Router();

const techsController = require("../controllers/techsController");

router.route("/").get(techsController.getTechs);


module.exports = router;