const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// get call to populate user detail portion
const userDetails = (req, res) => {
  knex("profiles")
    .select("*")
    .where({ user_id: req.params.id })
    .then((usersdetails) => {
      res.status(200).json(usersdetails);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .send({
          message:
            "something went wrong at userDetails user account controller",
        });
    });
};
//adding a new user
const addUser = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
  const hashedConfirmPassword = await bcrypt.hashSync(req.body.confirmPassword, 10);
  const newUser = {
    email: email,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
  };

  if (!email || !password || !confirmPassword) {
    return res.send({ message: "please fill in missing fields" });
  }
  try {
    const emailExists = await knex("users").where("email", email).first();

    if (emailExists) {
      return res.status(400).json({
        message: "Email has already been used, try another email",
      });
    }
  } catch (err) {
    console.log(err);
  }

  // insert into database
  try {
    await knex("users")
    .insert(newUser)
    .then((response)=> {
      console.log("response user_id", response)
     const user_id = response
     res.status(201).send({message:"success, new user created", user_id: user_id});
    })
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "error at addUser, loginController" });
  }
};
//Logging in a user

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await knex("users").where("email", email).first();
        // console.log("user OBJECT!", user );
        const user_id = user.user_id;
      
        if (!email || !password) {
          return res.status(400).send("Missing required fields");
        }
      
        if (user == null) {
          return res.status(400).send("no user found");
        }
      
      // validate Password
       const passwordMatch = await bcrypt.compare(password, user.password) 
       if (!passwordMatch){
         return res.status(401).send("Invalid Password");
        } 
      
        const accessToken = jwt.sign({email: user.email}, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken, user_id: user_id });
    }catch (err){
        console.error("loggin Error", err);
        res.status(500).send('Internal Server Error');
    }

};
// TO DO 
// refresh tokens for more security 

// function generateAccessToken(user){
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"30m"})

// }

module.exports = {
  userDetails,
  addUser,
  loginUser,
};
