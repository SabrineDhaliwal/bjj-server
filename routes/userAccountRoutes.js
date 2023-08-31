const router = require("express").Router();
const knex = require("knex")(require('../knexfile'));

const userAccountController= require("../controllers/userAccountController");


router.route("/").post(userAccountController.addNewAccount);
router.get("/", (req, res) => {
    res.send("hello World")
});

module.exports = router;