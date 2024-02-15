const express = require('express');
const app = express();
const cors =require('cors');
require("dotenv").config();
const path = require('path');



const loginRoutes = require("./routes/loginRoutes");
const beltRanksRoutes = require("./routes/utilsRoutes");
const utilsRoutes = require("./routes/utilsRoutes");
const techsRoutes = require("./routes/techsRoutes");
const targetsRoutes = require("./routes/targetsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const profileRoutes = require("./routes/profileRoutes");

const PORT = process.env.PORT || 5050;
// console.log("testing", PORT)


//middleware//
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/login", loginRoutes);
app.use("/beltranks", beltRanksRoutes);
app.use("/utils", utilsRoutes);
app.use("/techs", techsRoutes);
app.use("/targets", targetsRoutes);
app.use("/positions", positionsRoutes);
app.use("/summary", summaryRoutes);
app.use("/profile", profileRoutes);


app.get("/", (req,res)=> {
    res.send("can you see me on postman?")
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})