const express = require('express');
const app = express();
const cors =require('cors');

const PORT = process.env.PORT || 5050;


//middleware//
app.use(express.json());
app.use(cors());

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