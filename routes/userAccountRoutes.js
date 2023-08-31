const router = require("express").Router();


const userAccountController= require("../controllers/userAccountController");


router.route("/").post(userAccountController.addNewAccount);
router.get("/", (req, res) => {
    res.send("hello World")
});

module.exports = router;