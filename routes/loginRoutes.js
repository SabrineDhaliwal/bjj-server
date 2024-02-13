const router = require("express").Router();


const loginController= require("../controllers/loginController");



// router.route("/:id").get(newUserController.userDetails);
router.route('/').post(loginController.addUser)
router.route('/user').post(loginController.loginUser)

router.route('/').get((req, res)=>{
    res.send("yay made it postman!")
})


module.exports = router;