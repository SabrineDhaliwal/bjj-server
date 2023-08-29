exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "Sabrine",
      last_name: "Dhaliwal",
      username: "SabrineD",
      email: "sabrine@example.com",
      belt_rank: "White",
      club: "matcraft",
      bio: "Just starting out and this is tough!",
      image: "",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      email: "john@example.com",
      belt_rank: "Black",
      club: "matcraft",
      bio: "I have been practicing martial arts for 10 years and love competing in tournaments.",
      image: "",
    },
    {
      id: 3,
      first_name: "Jane",
      last_name: "Smith",
      username: "JaneDoeBJJnewbie",
      email: "jane@example.com",
      belt_rank: "Brown",
      club: "Lions MMA",
      bio: "I started training in karate at a young age and have a passion for teaching self-defense.",
      image: "",
    },
    {
      id: 4,
      first_name: "Mike",
      last_name: "Johnson",
      username: "MickyJ",
      email: "mike@example.com",
      belt_rank: "Blue",
      club: "Lions MMA",
      bio: "I'm a Brazilian Jiu-Jitsu enthusiast and have won several championships in my weight class.",
      image: "",
    },
  ]);
};
