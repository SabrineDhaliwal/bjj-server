const knex = require('knex')(require('../knexfile'));

// adding a new user to database
const addNewAccount = (req, res)=> {
//intital validation if all required fields are complete

if (
    !req.body.belt_rank ||
    !req.body.club_name ||
    !req.body.email ||
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.username ||
    !req.body.password ||
    !req.body.confirmPassword
    ) {
    return res.status(400).json({message: "Please fill in missing fields"});
}else {
    const beltOptionValue = req.body.belt_rank;
    const [belt_rank_id, belt_rank] = beltOptionValue.split(",")
    const clubOptionValue = req.body.club_name;
    const [club_id, club_name] = clubOptionValue.split(",")
    knex("users")
    .insert({
        belt_rank:belt_rank,
        belt_rank_id:Number(belt_rank_id),
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        club_id: Number(club_id),
        club_name: club_name,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    })
    .then((newUser)=>{
        return res.status(201).json({newUser, message:"successfully created new account"})
    })
.catch((err)=> {
    console.error(err,"if you see you, something went wrong at userAccountController");
})

}
}
module.exports = {
    addNewAccount,
}