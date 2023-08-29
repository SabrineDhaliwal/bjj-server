exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(
    [
        {
          tech_id: 1,
          tech_name: "Armbar",
          type: "Joint",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 2,
          tech_name: "Omoplata",
          type: "Joint",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 3,
          tech_name: "Kimura",
          type: "Joint",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 4,
          tech_name: "Americana",
          type: "Joint",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 5,
          tech_name: "Triangle",
          type: "Strangle",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 6,
          tech_name: "Guillotine",
          type: "Strangle",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 7,
          tech_name: "Ankle Lock",
          type: "Joint",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 8,
          tech_name: "RNC (Rear Naked Choke)",
          type: "Strangle",
          level: "Beginner",
          description: "",
        },
        {
          tech_id: 9,
          tech_name: "Toe Hold",
          type: "Joint",
          level: "Intermediate",
          description: "",
        },
        {
          tech_id: 10,
          tech_name: "Knee Bar",
          type: "Joint",
          level: "Intermediate",
          description: "",
        },
        {
          tech_id: 11,
          tech_name: "Barataplata",
          type: "Joint",
          level: "Intermediate",
          description: "",
        },
        {
          tech_id: 12,
          tech_name: "Arm Triangle",
          type: "Strangle",
          level: "Intermediate",
          description: "",
        },
        {
          tech_id: 13,
          tech_name: "Darce Choke",
          type: "Strangle",
          level: "Advanced",
          description: "",
        },
        {
          tech_id: 14,
          tech_name: "Anaconda Choke",
          type: "Strangle",
          level: "Advanced",
          description: "",
        },
        {
          tech_id: 15,
          tech_name: "Peruvian Necktie",
          type: "Strangle",
          level: "Advanced",
          description: "",
        },
        {
          tech_id: 16,
          tech_name: "Heel Hook",
          type: "Joint",
          level: "Advanced",
          description: "",
        },
        {
          tech_id: 17,
          tech_name: "Yadviga",
          type: "Joint",
          level: "Advanced",
          description: "",
        },
      ]
      



);
};
