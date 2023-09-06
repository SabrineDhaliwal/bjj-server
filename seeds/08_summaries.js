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
      target_id:2,
      target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
     {
      summary_id: 2,
      user_id: 1,
      tech_id: 7,
      tech_name:"Ankle Lock",
      position_id: 10,
      position_name: "North South",
      target_id:4,
      target_name: "Ankle",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
      {
      summary_id: 3,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      target_id:2,
      target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
      {
      summary_id: 4,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      target_id:2,
      target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
       {
      summary_id: 5,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      target_id:2,
      target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
       {
      summary_id: 6,
      user_id: 1,
      tech_id: 3,
      tech_name:"Kimura",
      position_id: 1,
      position_name: "Side Control",
      target_id:2,
      target_name: "Shoulder",
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "uploads/2023-09-05T17-04-29.099Z-video2.mp4",
      date: "2023-07-10",
    },
  ]);
};
