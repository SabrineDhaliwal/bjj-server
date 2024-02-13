const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// get call to populate user detail portion
const userDetails = (req, res) => {
    knex("users")
    .select("*")
    .where({user_id: Number(req.params.id)})
    .then((usersdetails)=> {
        res.status(200).json(usersdetails);
    })
    .catch((err)=> {
        console.error(err)
        res.status(400).send({message:"something went wrong at userDetails user account controller"})
    })

}
 //adding a new user
const addUser = async (req, res)=> {
    const {email, password, confirmPassword} = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword, 10)
    console.log({ hashedPassword, hashedConfirmPassword, email})
    const newUser = { 
        email: email, 
        password: hashedPassword, 
        confirmPassword: hashedConfirmPassword
    }

    if (!email || 
        !password ||
        !confirmPassword){
        return res.send({message: "please fill in missing fields"});
        } 
        try{
            const emailExists = await knex("users").where("email", email).first();

            if(emailExists){
                return res.status(400).json({
                    message: "Email has already been used, try logging in"
                });
            }
        }catch (err){
            console.log(err);
        }
        
        // insert into database
    try{
    await knex('users').insert(newUser);
    res.status(201).send({message:"registered new user"})
    }catch (err){
       
            console.error(err);
            res
            .status(500)
            .send({message:"error at addUser, loginController"})
        
    }
}
//Logging in a user

const loginUser = async (req, res)=> {

    const {email, password} = req.body
    const user = await knex('users').where('email', email).first()
    console.log(user, "user OBJECT!")

    if (user == null) {
        return res.status(400).send('no user found')
    }
    try{
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send('success');
        }else {
            res.send("Not Allowed")
        }
    } catch(err){
        console.error(err, "error at loginUser")
        res.status(500).send()
    }
//    const accessToken = generateAccessToken(user);
//    res.json({message: "user logged in"})


}

// function generateAccessToken(user){
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"30m"})

// }


module.exports = {
    userDetails,
    addUser,
    loginUser,
}