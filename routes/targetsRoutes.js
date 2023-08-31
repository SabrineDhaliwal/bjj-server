const router = require("express").Router();

const targetsController = require("../controllers/targetsController");

router.route("/").get(targetsController.getTarget);


module.exports = router;