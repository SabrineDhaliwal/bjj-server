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

module.exports = {
    getProfileDetails
}