const router = require("express").Router();


const userAccountController= require("../controllers/userAccountController");


router.route("/").post(userAccountController.addNewAccount);
router.route("/:id").get(userAccountController.userDetails);


module.exports = router;