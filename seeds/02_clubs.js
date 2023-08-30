exports.seed = async function (knex) {
    await knex("clubs").del();
    await knex("clubs").insert([
        {
            club_id: 1,
            club_name: "matcraft",
            city: "Vancouver",
            email: "info@matcraft.com"
        },
        {
            club_id: 2,
            club_name: "Lions MMA",
            city: "Vancouver",
            email: "info@lionsmma.com"
        },
    ]);
};