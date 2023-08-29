exports.seed = async function (knex) {
    await knex("users").del();
    await knex("users").insert(
        [
            { position_id: 1, name: "Side Control", description: "" },
            { position_id: 2, name: "Closed Guard", description: "" },
            { position_id: 3, name: "Half-Guard Top", description: "" },
            { position_id: 4, name: "Half-Guard Bottom", description: "" },
            { position_id: 5, name: "Mount", description: "" },
            { position_id: 6, name: "Back", description: "" },
            { position_id: 7, name: "Open Guard", description: "" },
            { position_id: 8, name: "Top Turtle", description: "" },
            { position_id: 9, name: "Bottom Turtle", description: "" }
          ]
    )};
