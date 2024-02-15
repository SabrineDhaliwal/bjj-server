const router = require("express").Router();
const loginController= require("../controllers/loginController");

const authorize = require('../middleware/authorize')



router.route('/').post(loginController.addUser)
router.route('/user').post(loginController.loginUser)
router.route("/:id").get(authorize, loginController.userDetails);

router.route('/').get((req, res)=>{
    res.send("yay made it postman!")
})


module.exports = router;