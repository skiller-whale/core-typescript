export function getWhales() {
  return {
    Charles: {
      species: "Skiller Whale",
      weightInKg: 4712,
      likesToEat: "binary fish",
      trainingSessionsAttended: 7,
    },
    Mary: {
      species: "Narwhal",
      weightInKg: 900,
      likesToEat: "little and often",
      tuskLengthInCm: 280,
    },
    Sophie: {
      species: "Narwhal",
      weightInKg: 923,
      tuskLengthInCm: 302,
    },
    James: {
      species: "Humpback Whale",
      weightInKg: 29965,
      likesToEat: "krill",
      finLengthInCm: 600,
    },
    Ada: {
      species: "Skiller Whale",
      weightInKg: 3240,
      likesToEat: "knowledge",
      trainingSessionsAttended: 12,
    },
  };
}

export function getWhaleSightings() {
  return {
    James: [
      "off the coast of Wales, every Thursday in spring",
      "the Bahamas, 28th August 2014",
    ],
    Sophie: ["North Atlantic, 2nd March 2012"],
    Ada: ["at home in bed, throughout 2020", "Loch Ness, last Tuesday"],
  };
}
