exports.seed = async function (knex) {
    await knex("users").del();
    await knex("users").insert([
        {
            id: 1,
            club: "matcraft",
            city: "Vancouver",
            email: "info@matcraft.com"
        },
        {
            id: 2,
            club: "Lions MMA",
            city: "Vancouver",
            email: "info@lionsmma.com"
        },
    ]);
};