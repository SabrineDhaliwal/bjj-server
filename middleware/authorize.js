const jwt = require('jsonwebtoken');
const knex = require('knex')(require('../knexfile'));
require('dotenv').config();

async function authorize(req, res, next){
    // Bearer TOKEN
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!authHeader){
        return res.status(401).send({message: 'token not found'});
    } 
    try{
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await knex('users').where({email: payload});
        req.body = user
        next()

    }catch(err){
        console.error(err)
        res.status(403).send("Forbidden")
    }

}

module.exports= authorize
