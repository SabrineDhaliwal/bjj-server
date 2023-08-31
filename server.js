const express = require('express');
const app = express();
const cors =require('cors');
require("dotenv").config();

const userAccountRoutes = require("./routes/userAccountRoutes");
const beltRanksRoutes = require("./routes/utilsRoutes");
const utilsRoutes = require("./routes/utilsRoutes");

const PORT = process.env.PORT || 5050;


//middleware//
app.use(express.json());
app.use(cors());
app.use("/useraccount", userAccountRoutes)
app.use("/beltranks", beltRanksRoutes)
app.use("/utils", utilsRoutes)


//can see response on postman and req body in console
// app.post('/createaccount', (req,res)=> {
//     // console.log("post request from create account", req.body)
//     const newAccount = req.body
//     res.status(201).send("Successfully created account");
// });


//basic routes all work on postman
app.get('/', (req,res)=> {
    res.send("connected to Roll & Reflect- .get on server.js");
});


app.post('/', (req,res)=> {
    res.send("connected to Roll & Reflect .post on server js");
});

app.put('/', (req, res)=> {
    res.send("Roll& Reflect .put on server js")
})

app.delete('/', (req, res)=> {
    res.send("roll & Reflect . delete on server.js")
})


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})