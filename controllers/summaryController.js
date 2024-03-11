const knex = require("knex")(require("../knexfile"));

const addNewSummary = (req, res) => {
  //initial backend validation
  if (
    !req.body.date ||
    !req.body.id ||
    !req.body.position ||
    // !req.body.target ||
    !req.body.tech ||
    !req.body.title
  ) {
    return res.status(400).json({ message: "Please fill in required field" });
  } else {

    let video;

    if (req.file) {
      video = req.file.path;
    } else if (!req.file) {
      video = req.body.video;
    }
    const positionsOptionsValue = req.body.position;
    const [position_id, position_name] = positionsOptionsValue.split(",");
    const techOptionsValue = req.body.tech;
    const [tech_id, tech_name] = techOptionsValue.split(",");

    knex("summaries")
      .insert({
        date: req.body.date,
        user_id: req.body.id,
        position_id: Number(position_id),
        position_name: position_name,
        
        tech_id: Number(tech_id),
        tech_name: tech_name,
        title: req.body.title,
        summary: req.body.summary,
        video: video,
      })
      .then(() => {
        res.status(201).json({ message: "new record added successfully" });
      })
      .catch((err) => {
        console.error(
          err,
          "If you can read this, something went wrong at summary controller"
        );
        res
          .status(500)
          .json({ message: "internal server error at summary controller" });
      });
  }
};

const getSummaries = (req, res) => {
  knex("summaries")
    .select("*")
    .orderBy("date","desc")
    .where({ user_id: Number(req.params.id) })
    .then((summary) => {
      res
        .status(200)
        .send(summary);
    })
    .catch((err) => {
      console.error(
        err,
        "if you can see this, something went wrong at getSummaries call at summary controller"
      );
      res
        .status(500)
        .json({
          message:
            "internal server error at getSummary query- summary controller",
        });
    });
};

const deleteSummary = (req, res) => {
  knex("summaries")
    .where("summary_id", req.params.summaryid)
    .select("summary_id")
    .del()
    .then((data) => {
      res.status(204).send("successfully deleted");
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send("Could not delete entry, its on the internet forever");
    });
};

//editSummary logic
const getSummary = (req, res) => {
  knex("summaries")
    .where("summary_id", req.params.summaryid)
    .select("*")
    .then((getSummariesResponse) => {
      if (getSummariesResponse.length === 0){
        return res.status(404).send("Summary not found")
      }
      const getSummary ={ 
        date: getSummariesResponse[0].date,
        tech_name: getSummariesResponse[0].tech_name,
        position_name: getSummariesResponse[0].position_name,
        summary:getSummariesResponse[0].summary,
        title: getSummariesResponse[0].title,
        user_id:getSummariesResponse[0].user_id,
        video:getSummariesResponse[0].video,
      }
      res.status(202).send(getSummary);
    })

    .catch((err) => {
      console.error(
        err,
        "something went wrong at editSummary summaryController"
      );
      res
        .status(500)
        .send(
          "Internal error could not edit summary- check summary controller"
        );
    });
};


const updateSummary=(req, res)=> {
console.log('update summary', req.body)
//to do upload file change  
// let video;
//   if (req.file) {
//     video = req.file.path;
//   } else if (!req.file) {
//     video = req.body.video;
//   }

    const positionInputs = req.body.position_name;
    const positionValues = positionInputs.split(",")

    const techInputs = req.body.tech_name;
    const techValues = techInputs.split(',')
   
  console.log("update summary", req.body)

  if(positionValues.length == 2 && techValues.length == 2){
    const [tech_id, tech_name] = techValues;
    const [position_id, position_name] = positionValues;
    
    knex("summaries")
    .where('summary_id', req.params.summaryid)
    .select('*')
    .update({
      date: req.body.date,
      user_id: req.body.id,
      position_id: Number(position_id),
      position_name: position_name,
      tech_id: Number(tech_id),
      tech_name: tech_name,
      title: req.body.title,
      summary: req.body.summary,
   
    })
    .then((response)=> {
      res.sendStatus(202, response)
    })
    .catch((err)=>{
      console.error(err)
    })
  } else if (positionValues == 2){
    const [position_id, position_name] = positionValues;
    knex("summaries")
    .where('summary_id', req.params.summaryid)
    .select('*')
    .update({
      date: req.body.date,
      user_id: req.body.id,
      position_id: Number(position_id),
      position_name: position_name,
      tech_name: tech_name,
      title: req.body.title,
      summary: req.body.summary,
      // video: video
    })
    .then((response)=> {
      res.sendStatus(202, response)
    })
    .catch((err)=>{
      console.error(err)
    })
  } else if (techInputs ==2){
    const [tech_id, tech_name] = techValues;
    knex("summaries")
    .where('summary_id', req.params.summaryid)
    .select('*')
    .update({
      date: req.body.date,
      user_id: req.body.id,
      // position_id: Number(position_id),
      position_name: position_name,
      tech_id: Number(tech_id),
      tech_name: tech_name,
      title: req.body.title,
      summary: req.body.summary,
      // video: video
    })
    .then((response)=> {
      res.sendStatus(202, response)
    })
    .catch((err)=>{
      console.error(err)
    })
  } 
  else{
    knex("summaries")
    .where('summary_id', req.params.summaryid)
    .select('*')
    .update({
      date: req.body.date,
      user_id: req.body.id,
      position_name: req.body.position_name,
      tech_name: req.body.tech_name,
      title: req.body.title,
      summary: req.body.summary,
    
    })
    .then((response)=> {
      res.sendStatus(202, response)
    })
    .catch((err)=>{
      console.error(err)
    })
  }
}
  


module.exports = {
  addNewSummary,
  getSummaries,
  deleteSummary,
  getSummary,
  updateSummary,
};
