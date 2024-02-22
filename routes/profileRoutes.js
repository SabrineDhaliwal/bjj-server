const router = require('express').Router();
const authorize = require("../middleware/authorize")

const profileController = require('../controllers/profileController')

router.route('/:id').get(profileController.getProfileDetails)
router.route('edit/:id').post(profileController.createProfile);

router.route("/edit/:id").get((req, res)=> {
    res.send("yay, I made it postman")
})

module.exports = router;