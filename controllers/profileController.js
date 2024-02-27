const knex = require('knex')(require('../knexfile'));

//get profile data from database

const getProfileDetails = (req, res)=> {
    knex('profiles')
    .select('*')
    .where({user_id: req.params.id})
    .then((profiledetails)=> {
        res.status(200).json(profiledetails);
    })
    .catch((err)=> {
        console.error(err);
        res.status(400).send({message: 'err at getProfileDetails, profile controller'})
    })
}

const createProfile = (req, res ) => {
    knex('profiles')
    .update(req.body)
    .where({user_id:req.params.id})
    .then((response)=> {
        console.log(response)
        res.status(204).send("created profile content")
    })
}

const updateProfile = (req, res)=> {
    knex('profiles')
    .update(req.body)
    .where({user_id: req.params.id})
    .then((response)=> {
        res.status(204).send("update profile successfully")
    })
    .catch((err)=> {
        console.error(err);
        res.status(500).send("error at update Profile")
    })
}
module.exports = {
    getProfileDetails,
    createProfile,
    updateProfile
}