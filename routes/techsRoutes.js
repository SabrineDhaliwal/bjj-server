const router = require("express").Router();

const techsController = require("../controllers/techsController");

router.route("/").get(techsController.getTechs);
router.route("/add").post(techsController.addTech);
router.route("/:id").get(techsController.getTechById);


module.exports = router;