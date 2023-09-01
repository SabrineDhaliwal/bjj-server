const router = require("express").Router();


const userAccountController= require("../controllers/userAccountController");


router.route("/").post(userAccountController.addNewAccount);
router.get("/", (req, res) => {
    res.send("hello, world")
});
// add get call on usersAccount controller

module.exports = router;