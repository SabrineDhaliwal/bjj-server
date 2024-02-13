const jwt = require('jsonwebtoken');
const knex = require('knex')(require('../knexfile'));

async function authorize(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token ==null) return res.status(401).send({message: 'token not found'});
}

