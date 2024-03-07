const knex = require("knex")(require("../knexfile"));

//get profile data from database

const getProfileDetails = (req, res) => {
  knex("profiles")
    .select("*")
    .where({ user_id: req.params.id })
    .then((profiledetails) => {
      res.status(200).json(profiledetails);
      //   console.log('profile details', profiledetails);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .send({ message: "err at getProfileDetails, profile controller" });
    });
};

const createProfile = (req, res) => {
  console.log("req body", req.body);
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
      console.log(response);
      res.status(204).send("created profile content");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error creating new profile");
    });
};

const updateProfile = (req, res) => {
  console.log("req body from FE", req.body);
  console.log('file', req.file)
  let image;

  if (req.file) {
    image = req.file.path;
  } else if (!req.file) {
    image = req.body.image;
  }
  //   const clubValues = req.body.club_name;


  // BELT CHANGE ONLY
  const beltInput = req.body.belt_rank;
  const beltValues =beltInput.split(',')
  if (beltValues.length == 2) {
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
  } else {
        console.log("do next step of logic")
  }
   

  //   console.log("club value line 65", clubValues);

  //   if (beltValues && clubValues) {
  //     //both change
  //     const [club_id, club_name] = clubValues.split(",");
  //     knex("profiles")
  //       .update({
  //         first_name: req.body.first_name,
  //         last_name: req.body.last_name,
  //         belt_rank: belt_rank,
  //         belt_rank_id: Number(belt_rank_id),
  //         club_id: Number(club_id),
  //         club_name: club_name,
  //         bio: req.body.bio,
  //         image: image,
  //       })
  //       .where({ user_id: req.params.id })
  //       .then((response) => {
  //         res.status(204).send("updated with new belt & club");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         res.status(500).send("error at belt && club");
  //       });
  //   }
  //   else
  //   if (beltValues && !clubValues) {
  //     // belt update no club
  //     const [belt_rank_id, belt_rank] = beltValues.split(",");
  // knex("profiles")
  //   .update({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     belt_rank: belt_rank,
  //     belt_rank_id: belt_rank_id,
  //     bio: req.body.bio,
  //     image: image,
  //   })
  //   .where({ user_id: req.params.id })
  //   .then((response) => {
  //     res.status(204).send("update profile successfully");
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500).send("error at update Profile");
  //   });
  //   } else if (
  //     // no belt change but club change
  //     !beltValues &&clubValues
  //   ) {
  //     const [club_id, club_name] = clubValues.split(",");

  //     knex("profiles")
  //       .update({
  //         first_name: req.body.first_name,
  //         last_name: req.body.last_name,
  //         club_id: club_id,
  //         club_name: club_name,
  //         bio: req.body.bio,
  //         image: image,
  //       })
  //       .where({ user_id: req.params.id })
  //       .then((response) => {
  //         res.status(204).send("updated with new club");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         res.status(500).send("error at !belt && club");
  //       });
  //   } else if (!beltValues && !clubValues) {
  //     //   // no belt or club update
  //     knex("profiles")
  //       .update({
  //         first_name: req.body.first_name,
  //         last_name: req.body.last_name,
  //         bio: req.body.bio,
  //         image: image,
  //       })
  //       .where({ user_id: req.params.id })
  //       .then((response) => {
  //         res.status(204).send("updated without belt or club change");
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         res.status(500).send("error at BE update w/out belt or club change");
  //       });
  //   }
};

module.exports = {
  getProfileDetails,
  createProfile,
  updateProfile,
};
