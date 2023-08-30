exports.seed = async function (knex) {
  await knex("summaries").del();
  await knex("summaries").insert([
    {
      summary_id: 1,
      user_id: 1,
      combo_id: 1,
      title: "Nailed that Armbar from side control",
      summary:
        "Today we worked on landing armbars from different sidecontrol situations. How to transition from kimura to armbar",
      video: "",
      date: "2023-07-10",
    },
    {
      summary_id: 2,
      user_id: 1,
      combo_id: 3,
      title: "Omawhata? Omaplatas are hard!",
      summary:
        "worked on transition from bottom closed guard to getting and omaplata.",
      video: "",
      date: "2023-05-15",
    },
    {
      summary_id: 3,
      user_id: 1,
      combo_id: 3,
      title: "Keep those elbows tucked",
      summary:
        "we learnt an attack from top half guard today, if your being forced in to half guard, better have a defence to make them move. try to capture your partner's arm & wrist and get your kimura lock, i fyou can pin them even better to start the rotation to get them respond by either trying to escape or tap",
      video: "",
      date: "2023-08-27",
    },
    {
        summary_id: 4,
        user_id: 2,
        combo_id: 3, // Refers to the third combo
        title: "Kimura from Half-Guard Top",
        summary: "This summary covers how to apply the Kimura lock from the Half-Guard Top position. Emphasize controlling your opponent's arm and leveraging your weight.",
        video: "",
        date: "2023-08-03",
      },
      {
        summary_id: 5,
        user_id: 3,
        combo_id: 4, // Refers to the fourth combo
        title: "Americana from Half-Guard Bottom",
        summary: "In this breakdown, we explore the Americana submission from the Half-Guard Bottom position. Proper leverage is key to success.",
        video: "",
        date: "2023-08-04",
      },
      {
        summary_id: 6,
        user_id: 4,
        combo_id: 5, // Refers to the fifth combo
        title: "Triangle Choke from Mount",
        summary: "Learn the Triangle Choke technique from the Mount position. Secure the opponent's neck and create the right angle for maximum effectiveness.",
        video: "",
        date: "2023-08-05",
      },
  ]);
};
