const knex = require("knex")(require("../knexfile"));

//get profile data from database

const getProfileDetails = (req, res) => {
  knex("profiles")
    .select("*")
    .where({ user_id: req.params.id })
    .then((profiledetails) => {
      res.status(200).json(profiledetails);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .send({ message: "err at getProfileDetails, profile controller" });
    });
};

const createProfile = (req, res) => {
  let image;

  if (req.file) {
    image = req.file.path;
  } else if (!req.file) {
    image = req.body.image;
  }
  const beltValues = req.body.belt_rank;
  const clubValues = req.body.club_name;

  const [belt_rank_id, belt_rank] = beltValues.split(",");
  const [club_id, club_name] = clubValues.split(",");

  knex("profiles")
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      belt_rank: belt_rank,
      belt_rank_id: Number(belt_rank_id),
      club_id: Number(club_id),
      club_name: club_name,
      bio: req.body.bio,
      image: image,
      user_id: req.params.id,
    })
    .where({ user_id: req.params.id })
    .then((response) => {
      res.status(204).send("created profile content");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error creating new profile");
    });
};

const updateProfile = (req, res) => {
  let image;

  if (req.file) {
    image = req.file.path;
  } else if (!req.file) {
    image = req.body.image;
  }
  const beltInput = req.body.belt_rank;
  const clubInput = req.body.club_name;

  const beltValues =beltInput.split(',')
  const clubValues = clubInput.split(',')

// BOTH BELT & CLUB
    if (beltValues == 2 && clubValues ==2) {
      //both change
      const [belt_rank_id, belt_rank] = beltValues;
      const [club_id, club_name] = clubValues;
      knex("profiles")
        .update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          belt_rank: belt_rank,
          belt_rank_id: Number(belt_rank_id),
          club_id: Number(club_id),
          club_name: club_name,
          bio: req.body.bio,
          image: image,
        })
        .where({ user_id: req.params.id })
        .then((response) => {
          res.status(204).send("updated with new belt & club");
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error at belt && club");
        });
    }
  // BELT CHANGE ONLY
  else if (beltValues.length == 2 ) {
      const [belt_rank_id, belt_rank] = beltValues;
      knex("profiles")
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        belt_rank: belt_rank,
        belt_rank_id: belt_rank_id,
        bio: req.body.bio,
        image: image,
      })
      .where({ user_id: req.params.id })
      .then((response) => {
        res.status(204).send("update profile successfully");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error at update Profile");
      });   
      //CLUB CHANGE ONLY

  } else if (clubValues.length == 2){       
        const [club_id, club_name] = clubValues;
      
          knex("profiles")
            .update({
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              club_id: club_id,
              club_name: club_name,
              bio: req.body.bio,
              image: image,
            })
            .where({ user_id: req.params.id })
            .then((response) => {
              res.status(204).send("updated with new club");
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("error at !belt && club");
            });
  } else {
  //NO BELT OR CLUB CHANGE
  knex("profiles")
    .update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      bio: req.body.bio,
      image: image,
    })
    .where({ user_id: req.params.id })
    .then((response) => {
      res.status(204).send("update profile successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error at update Profile");
    });
    } 
};

module.exports = {
  getProfileDetails,
  createProfile,
  updateProfile,
};
