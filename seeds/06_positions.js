exports.seed = async function (knex) {
  await knex("positions").del();
  await knex("positions").insert([
    {
      position_id: 1,
      position_name: "Side Control",
      description:
        "side control (often also called side mount, cross mount, 100 kilos) is a dominant ground grappling position where the top combatant is lying perpendicularly over the face-up bottom combatant in such a way that the legs are free and he or she exerts no control over the combatant on the bottom",
    },
    {
      position_id: 2,
      position_name: "Closed Guard",
      description:
        "A guard is considered closed once both legs of the guard player are wrapped around his opponent’s waist and the feet are crossed (locked), holding the adversary’s hips close to those of the bottom player.",
    },
    {
      position_id: 3,
      position_name: "Half-Guard Top",
      description:
        "The half guard is the position that is in between a full guard and side control or full mount. The combatant on top will try to untangle the leg and pass to obtain side control or mount, while the bottom combatant will try to transition into a full guard or alternatively attempt a sweep or submission.",
    },
    {
      position_id: 4,
      position_name:"Half-Guard Bottom",
      description:
        "The half guard is the position that is in between a full guard and side control or full mount. The combatant on top will try to untangle the leg and pass to obtain side control or mount, while the bottom combatant will try to transition into a full guard or alternatively attempt a sweep or submission.",
    },
    {
      position_id: 5,
      position_name:"Mount",
      description:
        "The mount, or mounted position, is a dominant ground grappling position, where one combatant sits on the other combatants torso with the face pointing towards the opponent's head",
    },
    {
      position_id: 6,
      position_name: "Back",
      description:
        "Back mount, or rear mount (often confused with back control), is a dominant grappling position where the practitioner is on their opponent's back in such a way that they have control of their opponent (in back control, the practitioner controls their opponent from the back in any position that is not atop)",
    },
    {
      position_id: 7,
      position_name: "Open Guard",
      description:
        "Open Guard, where your legs are NOT locked around your opponent’s torso There are many positional variations, sweeps and submission setups for the Open Guard, making it the bread and butter for many Jiu-jitsu competitors.",
    },
    {
      position_id: 8,
      position_name: "Top Turtle",
      description: "I'll come back to this one",
    },
    {
      position_id: 9,
      position_name: "Bottom Turtle",
      description:
        "The turtle is a popular defensive position in Brazilian Jiu-Jitsu. It is characterized by exposing your back and curling up to a defensive stance with your neck and limbs kept close. The turtle guard is a surprisingly versatile position! Adopted from Judo, it’s perhaps the mother of all defensive maneuvers.",
    },
    {
      position_id: 10,
      position_name: "North-South",
      description:
        "the north–south position is a ground grappling position where one combatant is supine, with the other combatant invertedly lying prone on top, normally with their head over the bottom combatant's chest. The north–south position is a dominant position, where the top combatant can apply effective strikes such as knee strikes to the head, or easily transition into various grappling holds or more dominant positions.",
    },
  ]);
};
