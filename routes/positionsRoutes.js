const router = require("express").Router();

const positionController = require("../controllers/positionsController");

router.route("/").get(positionController.getPosition);
router.route("/:id").get(positionController.getPositionById)


module.exports = router;