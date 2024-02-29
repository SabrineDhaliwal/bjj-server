const knex = require("knex")(require("../knexfile"));

//get profile data from database

const getProfileDetails = (req, res) => {
  knex("profiles")
    .select("*")
    .where({ user_id: req.params.id })
    .then((profiledetails) => {
      res.status(200).json(profiledetails);
      console.log(profiledetails);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .send({ message: "err at getProfileDetails, profile controller" });
    });
};

const createProfile = (req, res) => {
  knex("profiles")
    .update(req.body)
    .where({ user_id: req.params.id })
    .then((response) => {
      console.log(response);
      res.status(204).send("created profile content");
    })
    .catch((err)=> {
        console.error(err)
        res.status(500).send("error creating new profile")
    });
};

const updateProfile = (req, res) => {
  const beltValues = req.body.belt_rank;
  const clubValues = req.body.club_name;

  let image;

  if(req.file){
    image =req.file.path
  } else if (!req.file){
    image =req.body.image;
  }

  // no belt or club update
  if (!beltValues && !clubValues) {
    knex("profiles")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        bio: req.body.bio, 
        image: image
    })
      .where({ user_id: req.params.id })
      .then((response) => {
        res.status(204).send("updated without belt or club change");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error at BE update w/out belt or club change");
      });
  }
  // belt update no club
  else if (beltValues && !clubValues) {
    const [belt_rank_id, belt_rank] = beltValues.split(",");
    knex("profiles")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        belt_rank: belt_rank,
        belt_rank_id: belt_rank_id,
        bio: req.body.bio,
        image: image
      
      })
      .where({ user_id: req.params.id })
      .then((response) => {
        res.status(204).send("update profile successfully");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error at update Profile");
      });
  } else if 
  // no belt change but club change
  (!beltValues && clubValues) {
    const [club_id, club_name] = clubValues.split(",");

    knex("profiles")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        club_id: club_id,
        club_name: club_name,
        bio: req.body.bio,
        image: image
     
      })
      .where({ user_id: req.params.id })
      .then((response) => {
        res.status(204).send("updated with new club");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error at !belt && club");
      });
  } else if 
  //both change
  (beltValues && clubValues) {
    const [belt_rank_id, belt_rank] = beltValues.split(",");
    const [club_id, club_name] = clubValues.split(",");
    knex("profiles")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        belt_rank: belt_rank,
        belt_rank_id: Number(belt_rank_id),
        club_id: Number(club_id),
        club_name: club_name,
        bio: req.body.bio,
        image: image
        
      })
      .where({ user_id: req.params.id })
      .then((response) => {
        res.status(204).send("updated with new belt & club");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error at belt && club");
      });
};
}

module.exports = {
  getProfileDetails,
  createProfile,
  updateProfile,
};
