const router = require("express").Router();

const positionController = require("../controllers/positionsController");

router.route("/").get(positionController.getPosition);


module.exports = router;