const express = require('express');
const app = express();
const cors =require('cors');
require("dotenv").config();
const path = require('path');

const userAccountRoutes = require("./routes/userAccountRoutes");
const beltRanksRoutes = require("./routes/utilsRoutes");
const utilsRoutes = require("./routes/utilsRoutes");
const techsRoutes = require("./routes/techsRoutes");
const targetsRoutes = require("./routes/targetsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const summaryRoutes = require("./routes/summaryRoutes")

const PORT = process.env.PORT || 5050;


//middleware//
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/useraccount", userAccountRoutes);
app.use("/beltranks", beltRanksRoutes);
app.use("/utils", utilsRoutes);
app.use("/techs", techsRoutes);
app.use("/targets", targetsRoutes);
app.use("/positions", positionsRoutes);
app.use("/summary", summaryRoutes);


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