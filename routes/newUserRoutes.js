const router = require("express").Router();


const newUserController= require("../controllers/newUserController");


router.route("/").post(newUserController.addNewAccount);
router.route("/:id").get(newUserController.userDetails);


module.exports = router;