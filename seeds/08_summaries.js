exports.seed = async function (knex) {
  await knex("summaries").del();
  await knex("summaries").insert([
    {
      summary_id: 1,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      // target_id:2,
      // target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "I focused on making sure I was shifting my weight across my partners chest and using my near head sid leg to control them.",
      video: "uploads/2023-09-16T21-50-00.541Z-video2.mp4",
      date: "2023-07-10",
    },
     {
      summary_id: 2,
      user_id: 1,
      tech_id: 7,
      tech_name:"Ankle Lock",
      position_id: 10,
      position_name: "North South",
      // target_id:4,
      // target_name: "Ankle",
      title: "Ankel locks from North South?",
      summary:
        "Not totally impossible but you gotta be quick to pull yourself from noth south to underthem and grab oneof their ankles and trap it in your armpit ",
      video: 'uploads/2023-09-16T21-50-00.541Z-video2.mp4',
      date: "2023-07-10",
    },
      {
      summary_id: 3,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      // target_id:2,
      // target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        " transtioning from side control to pulling them upwards and almost riding them like in a saddle to finish the kimura",
      video: 'uploads/2023-09-16T21-50-00.541Z-video2.mp4',
      date: "2023-07-10",
    },
      {
      summary_id: 4,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      // target_id:2,
      // target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: 'uploads/2023-09-16T21-50-00.541Z-video2.mp4',
      date: "2023-07-10",
    },
       {
      summary_id: 5,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      // target_id:2,
      // target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: 'uploads/2023-09-16T21-50-00.541Z-video2.mp4',
      date: "2023-07-10",
    },
    
  ]);
};
