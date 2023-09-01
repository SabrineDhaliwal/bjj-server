const knex = require('knex')(require("../knexfile"));

const addNewSummary = (req, res)=> {
    //initial backend validation
    // console.log('file', req.file);
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
            
            })
           
            
            .catch((err)=> {
                console.error(err, "If you can read this, something went wrong at summary controller")
                res.status(500).json({message:"internal server error at summary controller"})
            })
        }
        
       
}

module.exports= {
    addNewSummary
}