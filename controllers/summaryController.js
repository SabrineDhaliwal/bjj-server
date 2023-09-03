const knex = require('knex')(require("../knexfile"));

const addNewSummary = (req, res)=> {

    //initial backend validation
    console.log('file', req.file);
    // console.log(req.body);
    if (!req.body.date ||
        !req.body.id ||
        !req.body.position ||
        !req.body.target ||
        !req.body.tech ||
        !req.body.title
        ){
            return res.status(400).json({message: "Please fill in required field"})
        }else {
            const positionsOptionsValue = req.body.position;
            const [position_id, position_name] = positionsOptionsValue.split(",");
            const targetOptionsValue = req.body.target;
            const [target_id, target_name] = targetOptionsValue.split(",");
            const techOptionsValue = req.body.tech;
            const [tech_id, tech_name] = techOptionsValue.split(",");

            knex('summaries')
            .insert({
                date: req.body.date,
                user_id: req.body.id,
                position_id: Number(position_id),
                position_name: position_name,
                target_id: Number(target_id),
                target_name: target_name,
                tech_id: Number(tech_id),
                tech_name: tech_name,
                title: req.body.title,
                summary:req.body.summary,
                video: req.file.path

            }) .then(()=>{
                res.status(201).json({message:"new record added successfully"})
            
            })
            .catch((err)=> {
                console.error(err, "If you can read this, something went wrong at summary controller")
                res.status(500).json({message:"internal server error at summary controller"})
            })
        } 
}

const getSummary =(req, res)=> {
    knex("summaries")
    .select("*")
    .where({user_id: Number(req.params.id)})
    .then((summary)=> {
        res.status(200).json({summary, message:"successful get query, CONGRATS!"});
    })
    .catch((err)=> {
        console.error(err, "if you can see this, something went wrong at getSummary call at summary controller")
        res.status(500).json({message:"internal server error at getSummary query- summary controller"})
    })
}

const deleteSummary =(req, res)=> {
    console.log(req.params)
    knex("summaries")
    .where("summary_id", req.params.summary_id)
    .select("summary_id")
    .del()
    .then((data)=> {
        res.status(204).send("successfully deleted")
    })
    .catch((err)=> {
        console.log(err)
        res.status(500).send("Could not delete entry, its on the internet forever")
    })
}

const editSummary = (req, res) => {
    console.log(req.params)
    knex('summaries')
    .where("summary_id", req.params.summary_id)
    .select('summary_id')
    .update()
    .then((data)=> {
        console.log(data)
        res.status(202).send("successfully edited summary")
    })
    .catch((err)=> {
        console.error(err, "something went wrong at ediySummary summaryController")
        res.status(500).send("Internal error could not edit summary- check summary controller")
    })
}
module.exports= {
    addNewSummary,
    getSummary,
    deleteSummary,
    editSummary,
}